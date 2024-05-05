from django.db import models

# Create your models here.
class Menu(models.Model):
    item_name = models.CharField(max_length=200)
    item_weekdays_price = models.CharField(max_length=200)
    item_weekend_price = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
