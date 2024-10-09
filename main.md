### Ejercicios de Python con Colecciones

1. **Contar Ocurrencias de Elementos**  
   **Colección**: Lista  
   **Descripción**: Dada una lista de palabras, crea una función que devuelva un diccionario con la cantidad de veces que aparece cada palabra.  
   **Ejemplo**:  
   ```python
   palabras = ["python", "java", "python", "c++"]
   # Salida: {"python": 2, "java": 1, "c++": 1}
   ```

2. **Combinar Diccionarios**  
   **Colección**: Diccionario  
   **Descripción**: Escribe una función que combine dos diccionarios, sumando los valores de las claves comunes.  
   **Ejemplo**:  
   ```python
   dic1 = {'a': 1, 'b': 2}
   dic2 = {'b': 3, 'c': 4}
   # Salida: {'a': 1, 'b': 5, 'c': 4}
   ```

3. **Listas de Frecuencia**  
   **Colección**: Lista  
   **Descripción**: Dada una lista de números, devuelve un diccionario con la frecuencia de cada número.  
   **Ejemplo**:  
   ```python
   numeros = [1, 1, 2, 3, 3, 3]
   # Salida: {1: 2, 2: 1, 3: 3}
   ```

4. **Filtrar Palabras Largas**  
   **Colección**: Lista  
   **Descripción**: Crea una función que reciba una lista de palabras y un número entero, devolviendo una nueva lista con palabras que tienen más de ese número de caracteres.  
   **Ejemplo**:  
   ```python
   palabras = ["hola", "mundo", "python", "programación"]
   longitud = 5
   # Salida: ["programación"]
   ```

5. **Inversión de Tuplas en Lista**  
   **Colección**: Lista de Tuplas  
   **Descripción**: Dada una lista de tuplas, crea una función que devuelva una lista con las tuplas invertidas.  
   **Ejemplo**:  
   ```python
   tuplas = [(1, 2), (3, 4), (5, 6)]
   # Salida: [(2, 1), (4, 3), (6, 5)]
   ```

6. **Encontrar el Valor Más Frecuente**  
   **Colección**: Lista  
   **Descripción**: Dada una lista de números, crea una función que encuentre y devuelva el número que aparece con mayor frecuencia.  
   **Ejemplo**:  
   ```python
   numeros = [1, 2, 3, 1, 2, 1]
   # Salida: 1
   ```

7. **Comprobar Subconjunto**  
   **Colección**: Conjunto  
   **Descripción**: Escribe una función que determine si un conjunto es un subconjunto de otro.  
   **Ejemplo**:  
   ```python
   conjunto1 = {1, 2, 3}
   conjunto2 = {1, 2, 3, 4, 5}
   # Salida: True
   ```

8. **Agrupación por Clave**  
   **Colección**: Lista de Diccionarios  
   **Descripción**: Dada una lista de diccionarios que representan personas (con claves "nombre" y "edad"), agrúpalos por edad.  
   **Ejemplo**:  
   ```python
   personas = [{"nombre": "Ana", "edad": 25}, {"nombre": "Luis", "edad": 25}, {"nombre": "Carlos", "edad": 30}]
   # Salida: {25: ['Ana', 'Luis'], 30: ['Carlos']}
   ```

9. **Merge Sort utilizando Listas**  
   **Colección**: Lista  
   **Descripción**: Implementa el algoritmo Merge Sort para ordenar una lista de números.  
   **Ejemplo**:  
   ```python
   numeros = [5, 3, 8, 6, 2]
   # Salida: [2, 3, 5, 6, 8]
   ```

10. **Eliminar Elementos por Condición**  
    **Colección**: Lista  
    **Descripción**: Crea una función que reciba una lista y elimine todos los elementos que sean menores que un valor dado.  
    **Ejemplo**:  
    ```python
    numeros = [1, 2, 3, 4, 5]
    limite = 3
    # Salida: [3, 4, 5]
    ```

11. **Flatten List of Lists**  
    **Colección**: Lista de Listas  
    **Descripción**: Dada una lista que contiene otras listas, crea una función que "aplane" la lista, es decir, devuelva una sola lista con todos los elementos.  
    **Ejemplo**:  
    ```python
    lista_de_listas = [[1, 2], [3, 4], [5]]
    # Salida: [1, 2, 3, 4, 5]
    ```

12. **Cálculo de Mediana**  
    **Colección**: Lista  
    **Descripción**: Crea una función que calcule la mediana de una lista de números.  
    **Ejemplo**:  
    ```python
    numeros = [1, 3, 2, 4, 5]
    # Salida: 3
    ```

13. **Duplicar Elementos en una Lista**  
    **Colección**: Lista  
    **Descripción**: Dada una lista de números, crea una función que devuelva una nueva lista donde cada número se duplique.  
    **Ejemplo**:  
    ```python
    numeros = [1, 2, 3]
    # Salida: [1, 1, 2, 2, 3, 3]
    ```

14. **Contar Palabras en Frases**  
    **Colección**: Lista  
    **Descripción**: Dada una lista de frases, crea una función que devuelva un diccionario con la cantidad de palabras en cada frase.  
    **Ejemplo**:  
    ```python
    frases = ["Hola mundo", "Python es genial", "Me gusta programar"]
    # Salida: {0: 2, 1: 3, 2: 3}
    ```

15. **Encontrar Clave Máxima en Diccionario**  
    **Colección**: Diccionario  
    **Descripción**: Crea una función que encuentre la clave con el valor máximo en un diccionario.  
    **Ejemplo**:  
    ```python
    diccionario = {'a': 10, 'b': 20, 'c': 5}
    # Salida: 'b'
    ```

16. **Palíndromos en una Lista**  
    **Colección**: Lista  
    **Descripción**: Escribe una función que devuelva una lista de palabras que son palíndromos de una lista dada.  
    **Ejemplo**:  
    ```python
    palabras = ["ana", "oso", "hola", "level"]
    # Salida: ["ana", "oso", "level"]
    ```
