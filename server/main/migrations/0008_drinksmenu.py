# Generated by Django 5.0.2 on 2024-05-13 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_lunchmenu'),
    ]

    operations = [
        migrations.CreateModel(
            name='DrinksMenu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option_name', models.CharField(max_length=200)),
                ('option_price', models.CharField(max_length=100)),
                ('option_price_weekend', models.CharField(max_length=100)),
                ('option_description', models.TextField()),
            ],
        ),
    ]
