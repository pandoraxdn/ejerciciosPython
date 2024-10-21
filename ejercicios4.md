# XX Ejercios python

## 1.- Alfabeto rangoli

El rangoli es una forma de arte popular en la India y en otras partes de Asia, que consiste en crear diseños coloridos y intrincados en el suelo utilizando materiales como polvo de colores, arroz o arena. Estos diseños suelen ser geométricos o florales y a menudo tienen un significado religioso o cultural.

### Ejercicio 1:
Se le asigna un número entero, N. Su tarea es imprimir un alfabético rangoli de tamaño N.
- Nota: Los valores a iterar serán cada uno de los elemento del abecedario A-Z.

A continuación se muestran diferentes tamaños de rangoli alfabético:

```python
#Valor ingresado 3

# Resultado:
----c----
--c-b-c--
c-b-a-b-c
--c-b-c--
----c----
```

```python
#Valor ingresado 5

# Resultado:
--------e--------
------e-d-e------
----e-d-c-d-e----
--e-d-c-b-c-d-e--
e-d-c-b-a-b-c-d-e
--e-d-c-b-c-d-e--
----e-d-c-d-e----
------e-d-e------
--------e--------
```

```python
#Valor ingresado 10

# Resultado
------------------j------------------
----------------j-i-j----------------
--------------j-i-h-i-j--------------
------------j-i-h-g-h-i-j------------
----------j-i-h-g-f-g-h-i-j----------
--------j-i-h-g-f-e-f-g-h-i-j--------
------j-i-h-g-f-e-d-e-f-g-h-i-j------
----j-i-h-g-f-e-d-c-d-e-f-g-h-i-j----
--j-i-h-g-f-e-d-c-b-c-d-e-f-g-h-i-j--
j-i-h-g-f-e-d-c-b-a-b-c-d-e-f-g-h-i-j
--j-i-h-g-f-e-d-c-b-c-d-e-f-g-h-i-j--
----j-i-h-g-f-e-d-c-d-e-f-g-h-i-j----
------j-i-h-g-f-e-d-e-f-g-h-i-j------
--------j-i-h-g-f-e-f-g-h-i-j--------
----------j-i-h-g-f-g-h-i-j----------
------------j-i-h-g-h-i-j------------
--------------j-i-h-i-j--------------
----------------j-i-j----------------
------------------j------------------
```

El centro del rangoli tiene la primera letra del alfabeto a, y al rededor (en orden alfabético).

**Descripción:**

Complete la función rangoli.

rangoli tiene los siguientes parámetros:

• int size: el tamaño del rangoli

**Devoluciones (output):**

• string: una cadena única formada por cada una de las líneas del rangoli separadas por un carácter de nueva línea (\n) (salto de línea)

**Formato de entrada (input):**

Sólo una línea de entrada que contiene el tamaño del rangoli.

**Restricciones:**

0 < tamaño < 28

## 2.- Contador de colecciones
Un contador es un colecciones que almacena elementos como claves de diccionario y sus recuentos se almacenan como valores de diccionario.

### Código de ejemplo
```bash
>>> from collections import Counter
>>> 
>>> myList = [1,1,2,3,4,5,3,2,3,4,2,1,2,3]
>>> print(Counter(myList))
Counter({2: 4, 3: 4, 1: 3, 4: 2, 5: 1})
>>>
>>> print(Counter(myList).items())
[(1, 3), (2, 4), (3, 4), (4, 2), (5, 1)]
>>> 
>>> print Counter(myList).keys()
[1, 2, 3, 4, 5]
>>> 
>>> print(Counter(myList).values())
[3, 4, 4, 2, 1]
```

### Ejercicio 2:
Raghu es dueño de una zapatería. Su tienda tiene "X" cantidad de zapatos.
Tiene una lista que contiene el tamaño de cada zapato que tiene en su tienda.
Hay "N" número de clientes que están dispuestos a pagar "X" cantidad de
dinero sólo si consiguen el zapato de su talla deseada.

Tu tarea es calcular cuánto dinero ganó Raghu.

**Formato de entrada (input):**

- La primera línea contiene "X", el número de zapatos.
- La segunda línea contiene la lista separada por espacios de todos los tamaños de zapatos en la tienda.
- La tercera línea contiene "N", el número de clientes.
- Las siguientes N líneas contienen los valores separados por espacios del tamaño del calzado deseado por el cliente y 2, el precio del zapato.

**Restricciones:**
- Valor "X" cantidad de zapatos 0 < X < 10**3
- Valor "N" numero de clientes 0 < N <= 10**3
- Precio del zapato deseado 20 < Xi < 100
- Tamaño del zapato deseado 2 < Sz < 20

### Ejemplo de input
```
10
2 3 4 5 6 8 7 6 5 18
6
6 55
6 45
6 55
4 40
18 60
10 50
```
### Resultado de salida (output)
```
200
```

### Explicación:
- Cliente 1: Compró un zapato talla 6 por $55.
- Cliente 2: Compró un zapato talla 6 por $45.
- Cliente 3: La talla 6 ya no está disponible, por lo que no se realiza la compra.
- Cliente 4: Compró un zapato talla 4 por $40.
- Cliente 5: Compró un zapato talla 18 por $60.
- Cliente 6: La talla 10 no está disponible, por lo que no se realiza la compra.
- Dinero total ganado = 55 + 45 + 40 + 60 = $200

## 3.- Python string formatting (formato de cadenas en python)

Dado un entero "n", imprima los siguientes valores para cada entero "i" de 1 a "n":

1. Decimal
2. Octal
3. Hexadecimal (en mayúscula)
4. Binario

### Descripción

Realice la una función que reciba los siguientes parámetros:

• int número: el valor máximo a imprimir.

**Print (imprimir):**

Los cuatro valores deben imprimirse en una sola línea en el orden especificado anteriormente para cada "i" desde 1 hasta "n" número. Cada valor debe rellenarse con un espacio para que coincida con el ancho del valor binario de número y los valores deben estar separados por un solo espacio.

**Formato de entrada:**

- Un solo entero que denota n.

**Restrucciones:**
- 1 <= n <= 99

### Ejemplo de input (entrada)
```
17
```

### Ejemplo de output (salida)
```
    1     1     1     1
    2     2     2    10
    3     3     3    11
    4     4     4   100
    5     5     5   101
    6     6     6   110
    7     7     7   111
    8    10     8  1000
    9    11     9  1001
   10    12     A  1010
   11    13     B  1011
   12    14     C  1100
   13    15     D  1101
   14    16     E  1110
   15    17     F  1111
   16    20    10 10000
   17    21    11 10001
```