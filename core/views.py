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
        'contactos' : contactos
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

def modificar(request,id):
    contactos = Contacto.objects.get(nombre=id)
    datos = {
        'form' : ContactoForm(instance=contactos)
    }
    if request.method == 'POST':
        formulario=ContactoForm(data=request.POST, instance=contactos)
        if formulario.is_valid:
            formulario.save()
            datos['alert']="Modificado Correctamente"
    
    return render(request,'core/editar.html',datos)

def eliminar(request,id):
    contactos = Contacto.objects.get(nombre=id)
    contactos.delete()
    return redirect(to="formulario")

def nueva_categoria(request):   
    
    return render(request,'core/nueva-categoria.html')

def pinturas(request):   
    
    return render(request,'core/pinturas.html')
    
def esculturas(request):   
    
    return render(request,'core/esculturas.html')

def orfebreria(request):   
    
    return render(request,'core/orfebreria.html')

def tejidos(request):   
    
    return render(request,'core/tejidos.html')

def expresiones_artisticas(request):   
    
    return render(request,'core/expresiones-artisticas.html')