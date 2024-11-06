# Django

Django es un framework web de alto nivel basado en Python que fomenta el desarrollo rápido y un diseño limpio y pragmático. Creado por desarrolladores experimentados, se encarga de gran parte de las complicaciones del desarrollo web, para que puedas concentrarte en escribir tu aplicación sin necesidad de reinventar la rueda. Es gratuito y de código abierto.

## venv — Creación de entornos virtuales

El módulo venv admite la creación de «entornos virtuales» ligeros, cada uno con su propio conjunto independiente de paquetes de Python instalados en sus directorios site. Se crea un entorno virtual sobre una instalación existente de Python, conocida como la «base» del entorno virtual de Python y, opcionalmente, se puede aislar de los paquetes en la base del entorno, así que solo están disponibles los instalados explícitamente en el entorno virtual.

```bash
python -m venv .venv
```

## Activar el virtualenv
Para usar tu virtualenv, primero debes activarlo corriendo el comando source. Ejecuta lo siguiente en el directorio donde instalaste el virtualenv.

```bash
source .venv/bin/activate
```

## ¿Cómo instalar Django?
### Obtener la última versión oficial

```bash
python -m pip install Django
```

### Verificar versión de Django
```bash
python -m django --version
```

##  Creando un proyecto
Si esta es la primera vez que utiliza Django, tendrá que hacerse cargo de ciertas configuraciones iniciales. Concretamente, tendrá que autogenerar un código que establezca un Django project.

```bash
mkdir sistema
django-admin startproject mysite sistema
```

### Contenido del proyecto creado
```
sistema/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```
Estos archivos son: 
- Manage.py: Una utilidad de la línea de comandos que le permite interactuar con este proyecto Django de diferentes formas. Puede leer todos los detalles sobre Manage.py en Django-admin y Manage.py.

- mysite/: un directorio que es el paquete Python real para su proyecto. Su nombre es el nombre del paquete de Python que necesitará usar para importar cualquier cosa que contenga (por ejemplo, mysite.urls).

- mysite/__init__.py: Un archivo vacío que le indica a Python que este directorio debería considerarse como un paquete Python. Si usted es un principiante lea más sobre los paquetes en la documentación oficial de Python.

- mysite/settings.py: Ajustes/configuración para este proyecto Django. Django settings le indicará todo sobre cómo funciona la configuración.

- mysite/urls.py: URL de las declaraciones para este proyecto Django; una «tabla de contenidos» de su sitio basado en Django. Puede leer más sobre las URL en Despachador de URL.

- mysite/asgi.py: un punto de entrada para que los servidores web compatibles con ASGI sirvan a su proyecto. Consulte Cómo implementar con ASGI para obtener más detalles.

- mysite/wsgi.py: Un punto de entrada para que los servidores web compatibles con WSGI puedan servir su proyecto.

## El servidor de desarrollo
Verifiquemos que su proyecto Django funciona. Vaya al directorio de **sistema**, si aún no lo ha hecho, y ejecute los siguientes comandos:

```bash
python manage.py runserver
```

Verá la siguiente salida en la línea de comandos:

```
Performing system checks...

System check identified no issues (0 silenced).

You have unapplied migrations; your app may not work properly until they are applied.
Run 'python manage.py migrate' to apply them.

noviembre 3, 2024 - 15:50:53
Django version 5.1, using settings 'mysite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

## Creando la aplicación clientes
Ahora que su entorno (un «proyecto») se ha configurado, ya está listo para empezar a trabajar.

Cada aplicación que usted escribe en Django consiste en un paquete de Python que sigue una determinada convención. Django tiene una utilidad que genera automáticamente la estructura básica de directorios de una aplicación, por lo que usted puede centrarse en la escritura de código en lugar de crear directorios.


```bash
python manage.py startapp clientes
```

## Escriba su primera vista

Vamos a escribir la primera vista. Abra el archivo clientes/views.py y ponga el siguiente código Python en ella:

```python
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hola mundo")
```

Esta es la vista más básica posible en Django. Para acceder a ella en un navegador, necesitamos asignarla a una URL, y para ello necesitamos definir una configuración de URL, o «URLconf» para abreviar. Estas configuraciones de URL se definen dentro de cada aplicación de Django y son archivos Python llamados urls.py.

### **Registrar App de clientes**
Para registar una app en nuestro proyecto de django debemos registrarla en el archivo mysite/settings.py:
```python
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'clientes', ## -> App Registrada
]
```

Para definir una URLconf para la aplicación de clientes, crea un archivo clientes/urls.py con el siguiente contenido:

```python
from django.urls import path

from clientes.views import *

urlpatterns = [
    path("saludo", index, name="index"),
]
```
## Configuración de la base de datos

Ahora, abra el archivo mysite/settings.py. Es un módulo normal de Python con variables de nivel de módulo que representan la configuración de Django.

Por defecto, la configuración de BASES DE DATOS utiliza SQLite. Si eres nuevo en el mundo de las bases de datos o simplemente estás interesado en probar Django, esta es la opción más sencilla. SQLite está incluido en Python, por lo que no necesitará instalar nada más para respaldar su base de datos. Sin embargo, al iniciar su primer proyecto real, es posible que desee utilizar una base de datos más escalable como PostgreSQL, para evitar dolores de cabeza al cambiar de base de datos en el futuro.

Si desea utilizar otra base de datos, consulte los detalles para personalizar y poner en funcionamiento su base de datos.

Mientras usted está editando el archivo mysite/settings.py, configure TIME_ZONE a su zona horaria.

Además, observe que la configuración de INSTALLED_APPS se encuentra en la parte superior del archivo. Esta contiene los nombres de todas las aplicaciones Django que están activadas en esta instancia de Django. Las aplicaciones se pueden usar en diversos proyectos y usted puede empaquetar y distribuirlas para que otras personas las puedan utilizar en sus proyectos.

Por defecto, INSTALLED_APPS contiene las siguientes aplicaciones y Django viene equipado con todas ellas: django.contrib.admin - El sitio administrativo. Usted lo utilizará dentro de poco.

- django.contrib.auth: un sistema de autenticación.

- django.contrib.contenttypes: un marco para los tipos de contenido.

- django.contrib.sessions: un marco de sesión.

- django.contrib.messages – Un marco de mensajería.

- django.contrib.staticfiles – Un framework para la gestión de archivos estáticos.

Estas aplicaciones se incluyen de forma predeterminada como una conveniencia para el caso común.

### Configuración base de datos postgressql

Lo primero que debemos hacer será instalar la biblioteca psycopg2.
```python
pip install psycopg2-binary
```

Una vez la biblioteca haya sido instalada procedemos a crear nuestra base de datos en PostgreSQL.
```sql
CREATE DATABASE sistema-django;
```

Listo, ya tenemos nuestra base de datos. El siguiente paso será configurar nuestra aplicación. Para ello modificamos el archivo mysite/settings.py.
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

Algunas de estas aplicaciones utilizan al menos una tabla de base de datos, por lo que necesitamos crear las tablas en la base de datos antes de poder utilizarlas. Para ello, ejecute el siguiente comando:
```bash
python manage.py migrate
```

## Administrador Django

El administrador de Django es una interfaz que permite crear, consultar, actualizar y eliminar registros en un sitio web desarrollado con Django. Se trata de una característica popular de Django que permite a los usuarios internos administrar datos sin necesidad de crear una utilidad especial. 

```
python manage.py createsuperuser
```

## Creación de modelos Django

Los modelos definen la estructura de los datos almacenados, incluidos los tipos de campo y los atributos de cada campo, como su tamaño máximo, valores predeterminados, lista de selección de opciones, texto de ayuda para la documentación, texto de etiqueta para formularios, etc.

Para crear dos modelos relacionados en Django, uno para "Cliente" y otro para "Ciudad", y hacer que la relación esté disponible en el panel de administración de Django, sigue estos pasos:

### 1. Definir los modelos en `clientes.models.py`

En el archivo `models.py` de tu aplicación, define los modelos `Ciudad` y `Cliente`. Cada cliente estará relacionado con una ciudad usando una relación `ForeignKey`.

```python
from django.db import models

class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    telefono = models.CharField(max_length=20)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
```

En este caso:

- `Ciudad` tiene un solo campo `nombre`.
- `Cliente` tiene los campos `nombre`, `email`, `telefono` y `ciudad`, que es una relación `ForeignKey` con el modelo `Ciudad`.

### 2. Crear y aplicar las migraciones

Genera y aplica las migraciones para que los modelos se creen en la base de datos.

```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Registrar los modelos en el panel de administración

En el archivo `admin.py` de tu aplicación, registra los modelos para que sean visibles en el panel de administración.

```python
from django.contrib import admin
from clientes.models import Ciudad, Cliente

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email', 'telefono', 'ciudad')
    search_fields = ('nombre', 'email')
    list_filter = ('ciudad',)

admin.site.register(Ciudad)
admin.site.register(Cliente, ClienteAdmin)
```

En esta configuración:

- `ClienteAdmin` personaliza la visualización del modelo `Cliente` en el panel de administración, mostrando ciertos campos en la lista (`list_display`), permitiendo búsqueda por `nombre` y `email`, y filtrado por `ciudad`.

### 4. Verificar en el panel de administración

Inicia el servidor de desarrollo de Django y accede al panel de administración en `http://127.0.0.1:8000/admin/`. Podrás ver y gestionar tanto los clientes como las ciudades, y cada cliente estará vinculado a una ciudad. 

Ahora podrás agregar, editar y eliminar ciudades y clientes, con la relación entre ellos disponible en el panel de administración.

## Parametros django rutas
En Django, puedes capturar parámetros de la URL y pasarlos a tus vistas para hacer la aplicación más dinámica. Hay dos métodos principales para manejar estos parámetros: **parámetros de captura en URLs** (por ejemplo, con expresiones regulares o tipos de datos como `int` y `slug`) y **parámetros de consulta** (query parameters) en la URL.

## 1. Capturar Parámetros de URL en Django

Para capturar parámetros desde la URL y enviarlos a la vista, debes configurar tus rutas en el archivo `urls.py` usando patrones que especifiquen el tipo de parámetro (como `int`, `str`, `slug`, etc.). Luego, Django pasará automáticamente estos valores a la función de vista.

### Ejemplo básico de parámetros en `urls.py`

En este ejemplo, capturaremos un parámetro `id` de tipo `int` y un parámetro `slug` de tipo `slug` en la URL.

#### Paso 1: Configura la URL en `urls.py`

```python
# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('articulo/<int:id>/', views.articulo_detalle, name='articulo_detalle'),
    path('categoria/<slug:categoria_slug>/', views.categoria_detalle, name='categoria_detalle'),
]
```

En este ejemplo:

- `<int:id>` captura un parámetro entero llamado `id` de la URL y lo pasa a la vista `articulo_detalle`.
- `<slug:categoria_slug>` captura un parámetro tipo `slug` llamado `categoria_slug` y lo pasa a la vista `categoria_detalle`.

#### Paso 2: Define las vistas en `views.py`

Luego, define las vistas correspondientes en `views.py`:

```python
# views.py

from django.http import HttpResponse

def articulo_detalle(request, id):
    return HttpResponse(f"Detalles del artículo con ID {id}")

def categoria_detalle(request, categoria_slug):
    return HttpResponse(f"Detalles de la categoría: {categoria_slug}")
```

- `articulo_detalle` recibe el parámetro `id` y lo usa en la respuesta.
- `categoria_detalle` recibe el parámetro `categoria_slug` y lo usa en la respuesta.

### Tipos de Parámetros en la URL

Django permite definir varios tipos de parámetros en `urls.py`:

- `<int:param>`: Solo números enteros (ej. `123`).
- `<str:param>`: Cualquier cadena de texto (hasta el primer `/`).
- `<slug:param>`: Cadenas de texto en minúsculas, números y guiones (`-`).
- `<uuid:param>`: Parámetros UUID, útil para identificadores únicos.
- `<path:param>`: Captura una cadena completa, incluyendo `/` en el valor.

Por ejemplo:

```python
urlpatterns = [
    path('usuario/<str:nombre>/', views.usuario_detalle, name='usuario_detalle'),
    path('documento/<path:ruta>/', views.documento_detalle, name='documento_detalle'),
]
```

## 2. Usar Parámetros de Consulta (Query Parameters) en Django

Los parámetros de consulta se especifican después de un signo de interrogación (`?`) en la URL, como en `example.com/buscar?categoria=libros&autor=García`. Django permite acceder a ellos a través de `request.GET` en las vistas.

### Ejemplo de Parámetros de Consulta

Supongamos que queremos capturar los parámetros `categoria` y `autor` en una URL como `example.com/buscar?categoria=libros&autor=García`.

#### Paso 1: Configura la URL sin parámetros de captura

```python
# urls.py

urlpatterns = [
    path('buscar/', views.buscar, name='buscar'),
]
```

#### Paso 2: Define la vista para manejar los parámetros de consulta

En la vista, usa `request.GET.get()` para capturar los valores de los parámetros de consulta:

```python
# views.py

from django.http import HttpResponse

def buscar(request):
    categoria = request.GET.get('categoria')
    autor = request.GET.get('autor')
    
    return HttpResponse(f"Búsqueda en la categoría '{categoria}' del autor '{autor}'")
```

- `request.GET.get('categoria')` obtiene el valor del parámetro `categoria`.
- `request.GET.get('autor')` obtiene el valor del parámetro `autor`.

Si la URL es `/buscar?categoria=libros&autor=García`, la vista mostrará:

```
Búsqueda en la categoría 'libros' del autor 'García'
```

### Ejemplo Combinado: Parámetros de URL y Parámetros de Consulta

También puedes combinar parámetros de URL con parámetros de consulta. Por ejemplo, podrías tener una URL que capture un `id` y además acepte parámetros de consulta adicionales.

```python
# urls.py

urlpatterns = [
    path('articulo/<int:id>/', views.articulo_detalle, name='articulo_detalle'),
]
```

En la vista, puedes capturar el `id` y también manejar otros parámetros de consulta:

```python
# views.py

def articulo_detalle(request, id):
    # Parámetro capturado de la URL
    idioma = request.GET.get('idioma', 'español')  # Valor por defecto 'español' si no se especifica
    return HttpResponse(f"Detalles del artículo {id} en idioma {idioma}")
```

Si la URL es `/articulo/123/?idioma=ingles`, la respuesta será:

```
Detalles del artículo 123 en idioma ingles
```

Y si la URL es simplemente `/articulo/123/`, la respuesta será:

```
Detalles del artículo 123 en idioma español
```

## Resumen

- **Parámetros de captura**: Se definen en `urls.py` usando `<int:>`, `<str:>`, `<slug:>`, etc., y se pasan automáticamente a la vista como argumentos.
- **Parámetros de consulta**: Se acceden mediante `request.GET.get()` en la vista, y son opcionales en la URL.
  
Estas opciones te permiten capturar y manejar datos desde la URL de forma flexible y dinámica en tus aplicaciones Django.

## Templates 
En Django, los archivos de plantillas (`templates`) y archivos estáticos (JavaScript, CSS, imágenes) se usan para generar contenido dinámico y personalizar el estilo y la funcionalidad de la aplicación. Aquí te explico cómo configurarlos, usarlos, extender plantillas y organizar tus archivos para aprovechar el poder de Django.

## Configuración de Archivos Estáticos (`static`)

### Paso 1: Configurar `STATIC_URL` y `STATICFILES_DIRS`

En el archivo `settings.py`, asegúrate de tener configurados `STATIC_URL` y `STATICFILES_DIRS`:

```python
# settings.py

import os

# URL que se usará para acceder a los archivos estáticos en el navegador
STATIC_URL = '/static/'

# Carpetas donde se buscarán archivos estáticos en desarrollo
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
```

### Paso 2: Crear la carpeta `static`

En el directorio raíz del proyecto (donde se encuentra `manage.py`), crea una carpeta llamada `static`. Dentro de esta carpeta puedes organizar tus archivos en subcarpetas como `css`, `js`, e `img` para organizar tus recursos.

Por ejemplo:

```
sistema/
├── web/
│   ├── templates/
│   │   └── mi_app/
│   │       └── base.html
│   └── static/
│       └── mi_app/
│           ├── css/
│           │   └── estilos.css
│           └── js/
│               └── script.js
├── static/
│   ├── css/
│   │   └── global_styles.css
│   └── js/
│       └── global_script.js
└── manage.py
```

## Configuración de Plantillas (`templates`)

### Paso 1: Configurar `TEMPLATES` en `settings.py`

En `settings.py`, revisa la configuración `TEMPLATES` para asegurar que se esté buscando en la carpeta de `templates` del proyecto:

```python
# settings.py

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],  # Agrega la carpeta raíz de plantillas
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

- `DIRS`: lista de carpetas donde Django buscará plantillas.
- `APP_DIRS=True`: hace que Django busque automáticamente en las carpetas `templates` dentro de cada aplicación.

### Paso 2: Crear la carpeta de plantillas

En la raíz del proyecto, crea una carpeta llamada `templates` para almacenar plantillas globales o compartidas entre aplicaciones.

## Uso de Archivos Estáticos en Plantillas

Para usar archivos estáticos en una plantilla, primero necesitas cargar el tag `{% static %}`, y luego puedes referenciar tus archivos de esta forma:

```html
<!-- templates/mi_app/base.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página Base</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'mi_app/css/estilos.css' %}">
</head>
<body>
    <h1>Contenido Principal</h1>

    <!-- Archivos JavaScript -->
    <script src="{% static 'mi_app/js/script.js' %}"></script>
</body>
</html>
```

- `{% load static %}` carga el tag `static` que se usa para generar la URL de archivos estáticos.

## Uso y Extensión de Plantillas en Django

Django permite extender plantillas para evitar la repetición de código. La idea es crear una plantilla base y luego extenderla en otras plantillas que quieran reutilizar su estructura.

### Paso 1: Crear una plantilla base

Crea una plantilla base (`base.html`) que contenga la estructura general de tu sitio:

```html
<!-- templates/mi_app/base.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Mi Sitio{% endblock %}</title>
    {% load static %}
    <link rel="stylesheet" href="{% static 'mi_app/css/estilos.css' %}">
</head>
<body>
    <header>
        <h1>Mi Sitio</h1>
        <!-- Barra de navegación, etc. -->
    </header>

    <main>
        {% block content %}
        <!-- Contenido específico de cada página irá aquí -->
        {% endblock %}
    </main>

    <footer>
        <p>Derechos reservados © 2024</p>
    </footer>
</body>
</html>
```

- `{% block title %}...{% endblock %}` y `{% block content %}...{% endblock %}` son bloques que pueden ser sobrescritos en plantillas que extiendan esta base.

### Paso 2: Extender la plantilla base

Ahora, crea una plantilla que extienda `base.html` y sobrescriba los bloques según sea necesario:

```html
<!-- templates/mi_app/index.html -->
{% extends 'mi_app/base.html' %}

{% block title %}Página de Inicio{% endblock %}

{% block content %}
    <h2>Bienvenido a la Página de Inicio</h2>
    <p>Este es el contenido de la página de inicio.</p>
{% endblock %}
```

- `{% extends 'mi_app/base.html' %}` indica que esta plantilla hereda de `base.html`.
- `{% block title %}...{% endblock %}` y `{% block content %}...{% endblock %}` reemplazan los bloques definidos en `base.html`.

### Crear una Vista y Configurar URLs

Crea una vista en `views.py` que renderice la plantilla extendida:

```python
# views.py

from django.shortcuts import render

def home(request):
    return render(request, 'mi_app/index.html')
```

Y configura la URL en `urls.py`:

```python
# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
```

## Uso de Archivos Estáticos en Producción

Para usar archivos estáticos en producción, define `STATIC_ROOT` en `settings.py`:

```python
# settings.py

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
```

Luego, ejecuta el comando `collectstatic` para recopilar todos los archivos estáticos en `STATIC_ROOT`:

```bash
python manage.py collectstatic
```

Django recopilará todos los archivos de las carpetas `static` de cada aplicación y los almacenará en una sola carpeta (`STATIC_ROOT`). Esto facilita el servir archivos estáticos en producción.

## Resumen

1. **Archivos Estáticos**:
   - Configura `STATIC_URL` y `STATICFILES_DIRS` en `settings.py`.
   - Usa `{% static 'ruta/al/archivo' %}` en plantillas para referenciar archivos estáticos.

2. **Plantillas y Extensión**:
   - Crea una plantilla base (`base.html`) con bloques (`{% block ... %}`).
   - Extiende `base.html` en otras plantillas con `{% extends 'ruta/base.html' %}` y sobrescribe los bloques.

3. **Producción**:
   - Define `STATIC_ROOT` en `settings.py`.
   - Ejecuta `python manage.py collectstatic` para preparar los archivos estáticos.

Esto te ayudará a mantener tu código limpio, ordenado y fácil de mantener.
