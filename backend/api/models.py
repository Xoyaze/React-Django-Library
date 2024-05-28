from django.db import models

# Create your models here.

class Library(models.Model):
    name = models.CharField(max_length=120)
    age_restricted = models.BooleanField(default=False)
    number_of_pages = models.IntegerField()
    author_name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)


