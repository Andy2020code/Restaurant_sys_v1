from django.db import models

# Create your models here.
class Menu(models.Model):
    item_name = models.CharField(max_length=200)
    item_weekdays_price = models.CharField(max_length=200)
    item_weekend_price = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class AppetizerMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()


class SandwichesMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()


class SalgadosMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()


class TapiocasMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()


class DesertsMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()


class LunchMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()


class JuicesMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()


class SodasMenu(models.Model):
    option_name = models.CharField(max_length=200)
    option_price = models.CharField(max_length=100)
    option_price_weekend = models.CharField(max_length=100)
    option_description = models.TextField()