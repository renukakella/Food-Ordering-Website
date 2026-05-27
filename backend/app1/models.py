from django.db import models

class UserSignup(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username


class Food(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()

    image = models.ImageField(
        upload_to="food_images/",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.name


class Reservation(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    people = models.IntegerField()
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name


class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    food_name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    total_price = models.IntegerField()

    def __str__(self):
        return self.customer_name