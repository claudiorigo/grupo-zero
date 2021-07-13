from rest_framework import fields, serializers
from core.models import Contacto

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = ['nombre','correo','asunto','mensaje']