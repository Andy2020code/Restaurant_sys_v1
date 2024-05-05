from django.shortcuts import render
from .models import Menu

# Create your views here.

def index(request):

    Menu_database = Menu.objects.all()
    context = {
        'menu_items': Menu_database
    }
    return render(request, 'index.html', context)