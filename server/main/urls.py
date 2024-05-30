from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get_item_info/', views.get_item_info, name='index'),
]