# Django II

## Parametros en django

Para crear enlaces en Django que redireccionen a diferentes rutas en tu aplicación, puedes utilizar el helper `url` de Django en las plantillas HTML. Aquí tienes un ejemplo paso a paso:

1. **Define la URL en el archivo `urls.py`:**

   Primero, define la URL a la que quieres redireccionar. Por ejemplo, en `urls.py`:

   ```python
   from django.urls import path
   from web.views import *

   urlpatterns = [
       path('mi-vista/', mi_vista, name='mi_vista'),
   ]
   ```

   En este caso, la URL `mi-vista/` apunta a la vista `mi_vista` y está nombrada como `mi_vista`.

2. **Crear la vista en `views.py`:**

   En el archivo `views.py`, define la vista `mi_vista`:

   ```python
   from django.shortcuts import render

   def mi_vista(request):
       return render(request, 'mi_plantilla.html')
   ```

3. **Usar el helper `url` en el template HTML:**

   Ahora, en la plantilla HTML, usa el helper `url` para crear un enlace que redirecciona a la URL definida:

   ```html
   <a href="{% url 'mi_vista' %}">Ir a Mi Vista</a>
   ```

   Al hacer clic en este enlace, el usuario será redirigido a la URL `mi-vista/` según la configuración en `urls.py`.

4. **Pasar parámetros en la URL (opcional):**

   Si la URL necesita parámetros, puedes pasarlos de esta manera:

   ```python
   # urls.py
   path('mi-vista/<int:id>/', views.mi_vista, name='mi_vista_con_id')
   ```

   Y en la plantilla HTML:

   ```html
   <a href="{% url 'mi_vista_con_id' id=42 %}">Ir a Mi Vista con ID</a>
   ```

   Aquí, el enlace redireccionará a `mi-vista/42/` (donde `id=42`).# Django II

Para crear enlaces en Django que redireccionen a diferentes rutas en tu aplicación, puedes utilizar el helper `url` de Django en las plantillas HTML. Aquí tienes un ejemplo paso a paso:

1. **Define la URL en el archivo `urls.py`:**

   Primero, define la URL a la que quieres redireccionar. Por ejemplo, en `urls.py`:

   ```python
   from django.urls import path
   from web.views import *

   urlpatterns = [
       path('mi-vista/', mi_vista, name='mi_vista'),
   ]
   ```

   En este caso, la URL `mi-vista/` apunta a la vista `mi_vista` y está nombrada como `mi_vista`.

2. **Crear la vista en `views.py`:**

   En el archivo `views.py`, define la vista `mi_vista`:

   ```python
   from django.shortcuts import render

   def mi_vista(request):
       return render(request, 'mi_plantilla.html')
   ```

3. **Usar el helper `url` en el template HTML:**

   Ahora, en la plantilla HTML, usa el helper `url` para crear un enlace que redirecciona a la URL definida:

   ```html
   <a href="{% url 'mi_vista' %}">Ir a Mi Vista</a>
   ```

   Al hacer clic en este enlace, el usuario será redirigido a la URL `mi-vista/` según la configuración en `urls.py`.

4. **Pasar parámetros en la URL (opcional):**

   Si la URL necesita parámetros, puedes pasarlos de esta manera:

   ```python
   # urls.py
   path('mi-vista/<int:id>/', views.mi_vista, name='mi_vista_con_id')
   ```

   Y en la plantilla HTML:

   ```html
   <a href="{% url 'mi_vista_con_id' id=42 %}">Ir a Mi Vista con ID</a>
   ```

   Aquí, el enlace redireccionará a `mi-vista/42/` (donde `id=42`).


## Manejo de plantillas y código en python

Aquí tienes un ejemplo completo que cubre el uso de variables, condicionales, bucles, subplantillas y cómo pasar y recibir argumentos desde la vista.

### 1. **Enviar argumentos desde la vista a la plantilla**

En Django, envías datos a la plantilla mediante el contexto de la vista.

#### En `views.py`

Define los datos que deseas enviar a la plantilla en el contexto:

```python
from django.shortcuts import render

def mi_vista(request):
    # Creamos datos para pasar a la plantilla
    datos = {
        'nombre': 'Juan',
        'edad': 30,
        'lista_frutas': ['Manzana', 'Banana', 'Cereza'],
        'es_mayor_de_edad': True,
    }
    return render(request, 'mi_plantilla.html', datos)
```

Aquí estamos enviando `nombre`, `edad`, `lista_frutas`, y `es_mayor_de_edad` al contexto.

### 2. **Recibir y usar los argumentos en la plantilla**

En la plantilla `mi_plantilla.html`, accedemos a estos datos usando la sintaxis de Django (`{{ variable }}` para valores y `{% %}` para etiquetas de control).

#### En `mi_plantilla.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Plantilla</title>
</head>
<body>

    <h1>Bienvenido, {{ nombre }}!</h1>
    <p>Tienes {{ edad }} años.</p>

    {% if es_mayor_de_edad %}
        <p>Eres mayor de edad.</p>
    {% else %}
        <p>Eres menor de edad.</p>
    {% endif %}

    <h2>Lista de Frutas:</h2>
    <ul>
        {% for fruta in lista_frutas %}
            <li>{{ fruta }}</li>
        {% endfor %}
    </ul>

    <!-- Incluir subplantilla -->
    {% include 'subplantilla.html' with mensaje="Este es un mensaje desde la plantilla principal." %}

</body>
</html>
```

#### Explicación del código en la plantilla:

- `{{ nombre }}`, `{{ edad }}`, y `{{ fruta }}`: Muestran valores enviados desde la vista.
- `{% if es_mayor_de_edad %}`: Utiliza una condición para mostrar contenido según el valor de `es_mayor_de_edad`.
- `{% for fruta in lista_frutas %}`: Itera sobre `lista_frutas` para mostrar cada fruta en una lista.
- `{% include 'subplantilla.html' with mensaje="Este es un mensaje desde la plantilla principal." %}`: Incluye otra plantilla (subplantilla) y le pasa una variable `mensaje` para personalizar su contenido.

### 3. **Crear la subplantilla**

Las subplantillas son útiles para secciones reutilizables, como cabeceras, pie de página o mensajes. Aquí tienes un ejemplo de una subplantilla.

#### En `subplantilla.html`

```html
<div>
    <p>{{ mensaje }}</p>
</div>
```

Este código recibe la variable `mensaje` pasada desde la plantilla principal.

### 4. **Validar la inclusión de plantillas**

Django incluye la etiqueta `{% include %}` para cargar subplantillas y el operador `default` para manejar valores por defecto. Puedes usarlo para asegurarte de que la subplantilla siempre tenga un valor para las variables que necesita.

En la plantilla principal, si no estás seguro de que la variable `mensaje` está definida, puedes pasar un valor por defecto:

```html
{% include 'subplantilla.html' with mensaje=mensaje|default:"Mensaje por defecto" %}
```

En este caso, si `mensaje` no está definido, se mostrará `"Mensaje por defecto"`.

### 5. **Pasar argumentos en la URL y capturarlos en la vista**

Para hacer que la URL acepte argumentos y luego enviarlos a la plantilla, puedes definir parámetros en la URL y capturarlos en la vista.

#### En `urls.py`

Define la URL con parámetros:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('usuario/<str:nombre>/<int:edad>/', views.perfil_usuario, name='perfil_usuario'),
]
```

#### En `views.py`

Recibe los argumentos en la función de vista:

```python
def perfil_usuario(request, nombre, edad):
    datos = {
        'nombre': nombre,
        'edad': edad,
        'es_mayor_de_edad': edad >= 18,
    }
    return render(request, 'perfil_usuario.html', datos)
```

#### En `perfil_usuario.html`

Puedes mostrar los argumentos en la plantilla como cualquier otra variable del contexto:

```html
<h1>Perfil de Usuario</h1>
<p>Nombre: {{ nombre }}</p>
<p>Edad: {{ edad }}</p>
{% if es_mayor_de_edad %}
    <p>Eres mayor de edad.</p>
{% else %}
    <p>Eres menor de edad.</p>
{% endif %}
```

### Resumen de lo cubierto:

1. **Enviar datos desde la vista**: Define datos en el contexto de la vista y envíalos a la plantilla.
2. **Recibir y usar datos en la plantilla**: Usa `{{ }}` para mostrar variables y `{% %}` para condicionales y bucles.
3. **Incluir subplantillas**: Usa `{% include %}` para incluir otras plantillas y `{% with %}` para enviarles variables.
4. **Validar la inclusión de plantillas**: Usa filtros como `default` para proporcionar valores por defecto y evitar errores.
5. **Pasar parámetros en la URL**: Define parámetros en `urls.py` y recíbelos en la vista para usarlos o enviarlos a la plantilla.

Con estas técnicas, puedes hacer que tus plantillas de Django sean más dinámicas, reutilizables y organizadas.

## Formularios Django
Si prefieres crear un formulario HTML básico en lugar de usar `forms.Form` de Django, puedes hacerlo directamente en el archivo HTML y luego manejar los datos recibidos en una vista. A continuación te muestro cómo hacerlo:

---

### 1. Crear el formulario en HTML

Crea una plantilla HTML con un formulario simple donde los usuarios puedan ingresar datos. 

#### En `templates/formulario.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Formulario HTML Básico</title>
</head>
<body>

    <h1>Formulario de Contacto</h1>
    <form action="{% url 'procesar_formulario' %}" method="post">
        {% csrf_token %}
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>

        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad"><br><br>

        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea><br><br>

        <button type="submit">Enviar</button>
    </form>

</body>
</html>
```

Explicación:
- **`action="{% url 'procesar_formulario' %}"`**: Aquí especificamos la URL a la que se enviará el formulario. Esta URL debe estar configurada en el archivo `urls.py`.
- **`{% csrf_token %}`**: Este token es necesario para proteger el formulario contra ataques CSRF (Cross-Site Request Forgery).
- **`name` atributos**: Cada campo tiene un atributo `name` (`nombre`, `edad`, `mensaje`) que usaremos para acceder a los datos en la vista.

---

### 2. Configurar la URL para la vista

En `urls.py`, configura la URL para que apunte a la vista que procesará el formulario.

#### En `urls.py`

```python
from django.urls import path
from . import views

urlpatterns = [
    path('formulario/', views.formulario_html, name='formulario_html'),
    path('procesar_formulario/', views.procesar_formulario, name='procesar_formulario'),
]
```

Aquí hemos definido dos rutas:
- `formulario/`: Para mostrar el formulario.
- `procesar_formulario/`: Para procesar los datos ingresados y redirigir a la vista que los imprimirá.

---

### 3. Crear la vista para procesar el formulario

En `views.py`, define dos vistas:
- **`formulario_html`**: Para mostrar el formulario.
- **`procesar_formulario`**: Para recibir los datos del formulario y mostrar los resultados.

#### En `views.py`

```python
from django.shortcuts import render

def formulario_html(request):
    # Renderiza el formulario HTML
    return render(request, 'formulario.html')

def procesar_formulario(request):
    if request.method == 'POST':
        # Obtén los datos del formulario usando `request.POST`
        nombre = request.POST.get('nombre')
        edad = request.POST.get('edad')
        mensaje = request.POST.get('mensaje')
        
        # Envía los datos a la plantilla resultado para imprimirlos
        return render(request, 'resultado.html', {
            'nombre': nombre,
            'edad': edad,
            'mensaje': mensaje
        })
    else:
        # Si el usuario intenta acceder a esta vista sin enviar el formulario, redirigir al formulario
        return redirect('formulario_html')
```

Explicación:
- En la vista `procesar_formulario`, se verifica si el método es `POST`.
- Usamos `request.POST.get('campo')` para obtener los valores de `nombre`, `edad`, y `mensaje` que el usuario ingresó en el formulario HTML.
- Luego, renderizamos la plantilla `resultado.html` y enviamos los datos capturados como contexto.

---

### 4. Crear la plantilla para mostrar los datos ingresados

Crea una plantilla para mostrar los datos capturados del formulario.

#### En `templates/resultado.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Resultado del Formulario</title>
</head>
<body>

    <h1>Datos del Formulario</h1>
    <p><strong>Nombre:</strong> {{ nombre }}</p>
    <p><strong>Edad:</strong> {{ edad }}</p>
    <p><strong>Mensaje:</strong> {{ mensaje }}</p>

</body>
</html>
```

Explicación:
- Aquí mostramos las variables `nombre`, `edad`, y `mensaje` recibidas desde la vista `procesar_formulario`.
  
---

### Resumen del flujo

1. El usuario visita la URL `/formulario/` y ve el formulario HTML.
2. El usuario completa el formulario y hace clic en "Enviar".
3. Django envía la solicitud a la URL `/procesar_formulario/`.
4. La vista `procesar_formulario` recibe los datos, los procesa y los envía a `resultado.html`.
5. En `resultado.html`, los datos del formulario se muestran al usuario.

Este flujo permite procesar los datos sin guardarlos en una base de datos y simplemente mostrarlos en otra página de Django.

## Crud manual Django

Para crear un CRUD básico en Django sin usar el sitio de administración y con formularios en HTML, vamos a seguir estos pasos:

1. Crear un modelo `Persona` para representar los datos de las personas.
2. Definir las vistas necesarias para cada operación del CRUD (crear, leer, actualizar y eliminar).
3. Configurar las URLs correspondientes a cada vista.
4. Crear plantillas HTML para los formularios y la lista de personas.

Este ejemplo asumirá que tienes una aplicación de Django ya configurada.

---

### Paso 1: Crear el modelo `Persona`

En tu aplicación, define un modelo básico para almacenar los datos de las personas.

#### En `models.py`

```python
from django.db import models

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    edad = models.IntegerField()
    email = models.EmailField()

    def __str__(self):
        return self.nombre
```

Este modelo tiene tres campos:
- `nombre`: un campo de texto para el nombre de la persona.
- `edad`: un campo entero para la edad.
- `email`: un campo de correo electrónico.

Después de definir el modelo, ejecuta las migraciones:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

### Paso 2: Crear las vistas para el CRUD

En `views.py`, define las vistas para manejar cada operación (crear, leer, actualizar y eliminar).

#### En `views.py`

```python
from django.shortcuts import render, redirect, get_object_or_404
from .models import Persona

# Vista para listar personas
def lista_personas(request):
    personas = Persona.objects.all()
    return render(request, 'personas/lista_personas.html', {'personas': personas})

# Vista para crear una nueva persona
def crear_persona(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        edad = request.POST.get('edad')
        email = request.POST.get('email')
        
        Persona.objects.create(nombre=nombre, edad=edad, email=email)
        return redirect('lista_personas')
    else:
        return render(request, 'personas/crear_persona.html')

# Vista para actualizar una persona
def actualizar_persona(request, id):
    persona = get_object_or_404(Persona, id=id)
    if request.method == 'POST':
        persona.nombre = request.POST.get('nombre')
        persona.edad = request.POST.get('edad')
        persona.email = request.POST.get('email')
        persona.save()
        return redirect('lista_personas')
    else:
      context = {'persona':persona}
      return render(request, 'personas/actualizar_persona.html', context)

# Vista para eliminar una persona
def eliminar_persona(request, id):
    persona = get_object_or_404(Persona, id=id)
    if request.method == 'POST':
        persona.delete()
        return redirect('lista_personas')
    else:
      context = {'persona':persona}
      return render(request, 'personas/eliminar_persona.html', context)
```

Explicación:
- **`lista_personas`**: Recupera todas las personas y las muestra en una plantilla.
- **`crear_persona`**: Muestra un formulario para crear una nueva persona y guarda los datos cuando se envía.
- **`actualizar_persona`**: Muestra un formulario con los datos de una persona específica y permite actualizarlos.
- **`eliminar_persona`**: Confirma y elimina una persona específica.

---

### Paso 3: Configurar las URLs para las vistas del CRUD

Define las rutas de cada vista en el archivo `urls.py`.

#### En `urls.py`

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_personas, name='lista_personas'),
    path('crear/', views.crear_persona, name='crear_persona'),
    path('actualizar/<int:id>/', views.actualizar_persona, name='actualizar_persona'),
    path('eliminar/<int:id>/', views.eliminar_persona, name='eliminar_persona'),
]
```

---

### Paso 4: Crear las plantillas HTML

Crea las plantillas para listar, crear, actualizar y eliminar personas.

#### `templates/personas/lista_personas.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Personas</title>
</head>
<body>
    <h1>Lista de Personas</h1>
    <a href="{% url 'crear_persona' %}">Crear Nueva Persona</a>
    <ul>
        {% for persona in personas %}
            <li>
                {{ persona.nombre }} - {{ persona.edad }} años - {{ persona.email }}
                <a href="{% url 'actualizar_persona' persona.id %}">Editar</a>
                <a href="{% url 'eliminar_persona' persona.id %}">Eliminar</a>
            </li>
        {% endfor %}
    </ul>
</body>
</html>
```

#### `templates/personas/crear_persona.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Crear Persona</title>
</head>
<body>
    <h1>Crear Nueva Persona</h1>
    <form method="post">
        {% csrf_token %}
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required><br>

        <label for="edad">Edad:</label>
        <input type="number" name="edad" required><br>

        <label for="email">Email:</label>
        <input type="email" name="email" required><br>

        <button type="submit">Guardar</button>
    </form>
    <a href="{% url 'lista_personas' %}">Volver a la lista</a>
</body>
</html>
```

#### `templates/personas/actualizar_persona.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Actualizar Persona</title>
</head>
<body>
    <h1>Actualizar Persona</h1>
    <form method="post">
        {% csrf_token %}
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value="{{ persona.nombre }}" required><br>

        <label for="edad">Edad:</label>
        <input type="number" name="edad" value="{{ persona.edad }}" required><br>

        <label for="email">Email:</label>
        <input type="email" name="email" value="{{ persona.email }}" required><br>

        <button type="submit">Actualizar</button>
    </form>
    <a href="{% url 'lista_personas' %}">Volver a la lista</a>
</body>
</html>
```

#### `templates/personas/eliminar_persona.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Eliminar Persona</title>
</head>
<body>
    <h1>Eliminar Persona</h1>
    <p>¿Estás seguro de que quieres eliminar a {{ persona.nombre }}?</p>
    <form method="post">
        {% csrf_token %}
        <button type="submit">Eliminar</button>
    </form>
    <a href="{% url 'lista_personas' %}">Cancelar</a>
</body>
</html>
```

---

### Resumen del flujo CRUD

1. **Listar personas**: La vista `lista_personas` muestra una lista de todas las personas y permite acceder a las opciones de editar o eliminar.
2. **Crear una persona**: La vista `crear_persona` muestra un formulario HTML para crear una nueva persona.
3. **Actualizar una persona**: La vista `actualizar_persona` muestra un formulario HTML con los datos actuales de la persona, permitiendo modificarlos.
4. **Eliminar una persona**: La vista `eliminar_persona` muestra un mensaje de confirmación antes de eliminar la persona.

Este ejemplo te permite crear un CRUD completo sin necesidad de usar el sitio de administración de Django y con formularios en HTML personalizados.
