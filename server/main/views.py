from django.shortcuts import render
from .models import Menu, AppetizerMenu, SandwichesMenu, SalgadosMenu, TapiocasMenu, DesertsMenu,JuicesMenu, LunchMenu, SodasMenu
from django.http import JsonResponse

# Create your views here.

def index(request):

    Menu_database = Menu.objects.all()
    AppetizerMenu_database = AppetizerMenu.objects.all()
    SandwichesMenu_database = SandwichesMenu.objects.all()
    SalgadosMenu_database = SalgadosMenu.objects.all()
    TapiocasMenu_database = TapiocasMenu.objects.all()
    DesertsMenu_database = DesertsMenu.objects.all()
    LunchMenu_database = LunchMenu.objects.all()
    JuicesMenu_database = JuicesMenu.objects.all()
    SodasMenu_database = SodasMenu.objects.all()

    context = {
        'menu_items': Menu_database,
        'appetizers_menu': AppetizerMenu_database,
        'sandwiches_menu': SandwichesMenu_database,
        'salgados_menu': SalgadosMenu_database,
        'tapiocas_menu': TapiocasMenu_database,
        'deserts_menu': DesertsMenu_database,
        'lunch_menu': LunchMenu_database,
        'juices_menu': JuicesMenu_database,
        'sodas_menu': SodasMenu_database,
    }
    return render(request, 'index.html', context)


def get_item_info(request):
    # Retrieve input value from the request
    input_value = request.GET.get('input_value')

    try:
        # Search for the item in the database by exact match
        item = Menu.objects.get(item_name=input_value)  # Adjust this to match your database field for item name

        # Return the desired values as a JSON response
        return JsonResponse({
            'item_name': item.item_name,
            'weekday_price': item.item_weekdays_price,
            'weekend_price': item.item_weekend_price
        })
    except Menu.DoesNotExist:
        # If the item is not found, return an error response
        return JsonResponse({'error': 'Item not found'}, status=404)