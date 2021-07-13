from django.urls import path
from rest_contacto.views import lista_contactos,detalle_contacto
from rest_contacto.viewslogin import login

urlpatterns = [
    path('lista_contactos', lista_contactos, name='lista_contactos'),
    path('detalle_contacto/<id>', detalle_contacto, name='detalle_contacto'),
    path('login', login, name='login'),
]