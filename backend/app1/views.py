from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserSignup, Food, Reservation, Order


@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    UserSignup.objects.create(
        username=username,
        email=email,
        password=password
    )

    return Response({"message": "Signup successful"})


@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = UserSignup.objects.filter(
        username=username,
        password=password
    ).first()

    if user:
        return Response({
            "message": "Login successful",
            "username": user.username
        })

    return Response({
        "message": "Invalid username or password"
    })


@api_view(['GET'])
def food_list(request):
    foods = Food.objects.all()

    data = []

    for food in foods:
        image_url = None

        if food.image:
            image_url = request.build_absolute_uri(food.image.url)

        data.append({
            "id": food.id,
            "name": food.name,
            "price": food.price,
            "image": image_url,
        })

    return Response(data)


@api_view(['POST'])
def reserve_table(request):
    Reservation.objects.create(
        name=request.data.get('name'),
        date=request.data.get('date'),
        time=request.data.get('time'),
        people=request.data.get('people'),
        phone=request.data.get('phone')
    )

    return Response({
        "message": "Table reserved successfully"
    })


@api_view(['POST'])
def place_order(request):
    customer_name = request.data.get('customer_name')
    food_name = request.data.get('food_name')
    quantity = int(request.data.get('quantity'))
    price = int(request.data.get('price'))

    total = quantity * price

    Order.objects.create(
        customer_name=customer_name,
        food_name=food_name,
        quantity=quantity,
        total_price=total
    )

    return Response({
        "message": "Order placed successfully",
        "total": total
    })