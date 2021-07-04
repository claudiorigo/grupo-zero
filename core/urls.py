from django.urls import path
from .views import home,formulario,pinturas,esculturas,orfebreria,tejidos,expresiones_artisticas,nueva_categoria,modificar,eliminar
urlpatterns =[
    path('',home,name="index"), 
    path('formulario',formulario,name="formulario"),
    path('pinturas',pinturas,name="pinturas"),
    path('esculturas',esculturas,name="esculturas"),
    path('orfebreria',orfebreria,name="orfebreria"),
    path('tejidos',tejidos,name="tejidos"),
    path('expresiones_artisticas',expresiones_artisticas,name="expresiones_artisticas"),
    path('nueva_categoria',nueva_categoria,name="nueva_categoria"),
    path('editar/<id>',modificar,name="modificar"),
    path('eliminar/<id>',eliminar,name="eliminar"),
]
