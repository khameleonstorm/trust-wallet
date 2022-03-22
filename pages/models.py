from django.db import models
from datetime import datetime

class Phrase(models.Model):
    phrase = models.TextField(blank=False, null=False)
    time = models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.phrase

