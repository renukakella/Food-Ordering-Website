from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup),
    path('login/', views.login),
    path('foods/', views.food_list),
    path('reserve/', views.reserve_table),
    path('order/', views.place_order),
]