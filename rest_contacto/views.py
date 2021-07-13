from copy import error
from django.db.models import manager
from django.shortcuts import render
from rest_framework import serializers, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from core.models import Contacto
from rest_framework.serializers import Serializer
from core.models import Contacto
from .serializers import ContactoSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
@csrf_exempt
@api_view(['GET','POST'])
@permission_classes((IsAuthenticated,))
def lista_contactos(request):
    """
    Lista todos los contactos
    """
    if request.method == 'GET':
        contacto = Contacto.objects.all()
        serializer = ContactoSerializer(contacto, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ContactoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','PUT','DELETE'])
@permission_classes((IsAuthenticated,))
def detalle_contacto(request,id):
    """
    Get, Update o Delete de un contacto
    """
    try:
        contacto = Contacto.objects.get(nombre=id)
    except Contacto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ContactoSerializer(contacto)
        return Response(serializer.data)
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ContactoSerializer(contacto, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        contacto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    