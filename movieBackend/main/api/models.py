from django.db import models

# Create your models here.
class MovieIndutry(models.Model):
    name=models.CharField(max_length=200)
    location=models.CharField(max_length=200,null=True,blank=True)
    language = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200)
    def __str__(self):
        return f"{self.name}"
    
class ProductionHouse(models.Model):
    name = models.CharField(max_length=200)
    youtube_name = models.CharField(max_length=200,null=True)
    youtube_url = models.URLField( max_length=400)
    website_url = models.URLField( max_length=400,null=True,blank=True)
    owner = models.CharField(max_length=200)
    industry_type=models.ForeignKey(MovieIndutry,on_delete=models.CASCADE,related_name="industry")

    def __str__(self):
        return f"{self.name},{self.industry_type.name}"