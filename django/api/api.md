# Django Api Rest

Una API REST (Representational State Transfer) en Django permite crear aplicaciones que se comunican entre el cliente y el servidor mediante el intercambio de datos en formatos como JSON o XML. La forma más común de implementar una API REST en Django es usando **Django REST Framework (DRF)**, una biblioteca poderosa y flexible para construir APIs web.

### Pasos para crear una API REST en Django:

#### 1. **Instalar Django y Django REST Framework**
Asegúrate de tener Django y DRF instalados en tu entorno:

```bash
pip install django djangorestframework psycopg2-binary
```

#### 2. **Configurar el proyecto**
Crea un proyecto y una aplicación Django si no lo has hecho:

```bash
django-admin startproject project
cd api
django-admin startapp api
```

#### 3. **Agregar DRF a las aplicaciones instaladas**
En el archivo `settings.py` del proyecto, añade `rest_framework` a la lista de aplicaciones instaladas:

```python
INSTALLED_APPS = [
    ...,
    'rest_framework',
    'api',
]
```

#### 4. **Crear un modelo**
Define un modelo para la aplicación en `api/models.py`. Por ejemplo:

```python
from django.db import models

# Create your models here.
class Usuario(models.Model):    
    nombre = models.CharField(max_length=100)
    apellidoPaterno = models.CharField(max_length=100)
    apellidoMaterno = models.CharField(max_length=100)
    cp = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.nombre} {self.apellidoPaterno} {self.apellidoMaterno}"

```

El siguiente paso será configurar nuestra aplicación. Para ello modificamos el archivo project/settings.py.
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'sistema-django',
        'USER': 'najimi',
        'PASSWORD': 'pass',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

Ejecuta las migraciones para crear las tablas en la base de datos:

```bash
python manage.py makemigrations
python manage.py migrate
```

#### 5. **Crear un serializer**
En `api/serializers.py`, crea un serializer para el modelo:

```python
from rest_framework import serializers
from api.models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'cp', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        validated_data['password'] = self.make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.password = self.make_password(password)
        return super().update(instance, validated_data)

    def make_password(self, raw_password):
        from django.contrib.auth.hashers import make_password
        return make_password(raw_password)
```

#### 6. **Crear vistas (Views)**
En `api/views.py`, crea vistas para manejar las solicitudes de la API:

```python
from rest_framework import viewsets
from api.models import Usuario
from api.serializers import UsuarioSerializer

class UsuarioSerializerViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
```

#### 7. **Configurar rutas**
En `project/urls.py`, incluye las rutas de `api`:

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import UsuarioSerializerViewSet

router = DefaultRouter()
router.register(r'usuarios',UsuarioSerializerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

#### 8. **Probar la API**
Ejecuta el servidor:

```bash
python manage.py runserver
```

Prueba los endpoints en `http://127.0.0.1:8000/usuarios/` usando herramientas como **Insomnia**, **cURL** o el navegador.

### API Endpoints
- GET /usuarios/:         Lista todos los usuarios.
- POST /usuarios/:        Crea un usuario.
- GET /usuarios/{id}/:    Retorna los datos del usuario por ID.
- PUT /usuarios/{id}/:    Actualiza un usuario (actualiza todos los datos).
- PATCH /usuarios/{id}/:  Actualiza un usuario (solo campos especificos).
- DELETE /usuarios/{id}/: Elimina usuario por medio del ID.
