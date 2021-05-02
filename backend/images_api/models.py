from django.db import models

# Create your models here.
def nameFile(instance, filename):
    return '/'.join(['images', str(instance.id), filename])

class Image(models.Model):
    # title = models.CharField(max_length=100 , default='SOME STRING')
    # description = models.CharField(max_length=500 , default='SOME STRING')
    # image = models.ImageField(upload_to='images')
    image = models.ImageField(upload_to=nameFile, blank=True, null=True)

