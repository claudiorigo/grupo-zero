from django.urls import path
from .views import home,formulario
urlpatterns =[
    path('',home,name="index"), 
    path('formulario',formulario,name="formulario")   
]
