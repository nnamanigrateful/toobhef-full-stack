from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('donate/', views.donate, name='donate'),
    path('about founder/', views.about_founder, name='about founder'),
]
