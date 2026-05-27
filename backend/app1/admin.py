from django.contrib import admin
from .models import UserSignup, Food, Reservation, Order

admin.site.register(UserSignup)
admin.site.register(Food)
admin.site.register(Reservation)
admin.site.register(Order)