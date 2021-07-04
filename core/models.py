from django.db import models

class Contacto(models.Model):
    nombre = models.CharField(primary_key=True,max_length=50,verbose_name='Nombre')
    correo = models.CharField(max_length=100,verbose_name='Correo')
    asunto = models.CharField(max_length=100,verbose_name='Asunto')
    mensaje = models.CharField(max_length=250,verbose_name='Mensaje')

    def __str__(self):
        return self.nombre

# Create your models here.
