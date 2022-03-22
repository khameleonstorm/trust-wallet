from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from . models import Phrase


def home(request):
    return render(request, 'pages/home.html')


def claim(request):
    if request.method == 'POST':
         phrase = request.POST['phrase']

         phrase = Phrase(phrase=phrase)
         phrase.save()
         messages.info(request, 'Your request has been submitted')

    return render(request, 'pages/claim.html')