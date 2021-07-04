from core.forms import ContactoForm
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from rest_framework import viewsets
#from core.serializers import UserSerializer
from  .models import Contacto

#class UserViewSet(viewsets.ModelViewSet):
#    queryset = User.objects.all().order_by("-date_joined")
#    serializer_class = UserSerializer

def formulario(request):
    contactos = Contacto.objects.all()
    
    data = {
        'contactos' : contactos,
        "alert": "Guardado correctamente"
    }
    
    return render(request,'core/formulario.html',data)


def home(request):   
    datos = {
        'form' : ContactoForm
    }
    if request.method == 'POST':        
        formulario=ContactoForm(request.POST)        
        if formulario.is_valid():
            formulario.save()            
            
            return redirect('formulario')
    return render(request,'core/index.html',datos)
