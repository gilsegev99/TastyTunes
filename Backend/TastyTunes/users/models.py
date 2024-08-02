from typing import Any
from django.db import models
from datetime import time

class User(models.Model):

    username = models.CharField(max_length=15)
    firstName = models.CharField(max_length=15)
    lastName = models.CharField(max_length=15)
    email = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=15)
    dateOfBirth = models.DateField()
    dateJoined = models.DateTimeField(auto_now_add=True)
    profilePicture = models.ImageField()
    bio = models.CharField(max_length=200)
    address = models.CharField(max_length=200, blank=True)
    status = models.CharField(max_length=10, default='active')
    totalPosts = models.IntegerField(blank=False)
    
    def __str__(self):
        return self.username