from django.urls.resolvers import URLPattern
from django.urls import path
from rest_contacto.views import lista_contactos

urlpatterns = [
    path('lista_contactos', lista_contactos, name='lista_contactos'),
]