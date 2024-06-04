from django.db import models
from users.models import User

class Post(models.Model):
    title = models.CharField(max_length=50)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    postContent = models.CharField(max_length=5000)
    datePosted = models.DateTimeField(auto_now_add=True)
    musicLink = models.URLField(blank=True)
    recipeLink = models.URLField(blank=True)

    def __str__(self):
        return self.title

class PostImage(models.Model):
    userID = models.ForeignKey(Post, on_delete=models.CASCADE)
    image = models.ImageField()

    

