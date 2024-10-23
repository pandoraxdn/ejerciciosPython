Ejercicio: **Sumatoria con Condiciones en un Sistema de Facturación**

**Descripción del problema:**

En un sistema de facturación, los empleados registran diariamente varias facturas. Cada factura tiene un valor, pero algunas pueden estar marcadas como **"factura pendiente"** (que no debe sumarse). Además, en algunas ocasiones se solicita un reporte parcial que excluye facturas por debajo de un valor mínimo.

Debes escribir un **programa en python** que, dado un conjunto de valores de facturas y sus estados, calcule la **sumatoria recursiva** de las facturas válidas bajo las siguientes restricciones:

1. Si la factura está marcada como **pendiente**, no debe incluirse en la sumatoria.
2. Solo se sumarán las facturas cuyo valor sea igual o mayor a un **valor mínimo** dado.
3. El script debe ser **recursivo**.
4. Si no hay facturas válidas, el programa debe retornar 0.

**Entrada:**
- La primera línea contiene un entero **N** (1 ≤ N ≤ 10^5) que representa el número de facturas.
- La segunda línea contiene **N** enteros separados por espacios que representan los valores de las facturas.
- La tercera línea contiene **N** valores que representan el estado de cada factura (0 = pendiente, 1 = válida).
- La cuarta línea contiene un entero **M** (1 ≤ M ≤ 10^4), el valor mínimo que debe tener una factura para ser sumada.

**Salida:**
- Un entero que representa la suma total de las facturas válidas que cumplen con todas las restricciones.

**Ejemplo:**

Entrada:
```
5
120 200 50 300 75
1 1 0 1 0
100
```

Salida:
```
620
```

**Explicación:**
- Hay 5 facturas con valores: 120, 200, 50, 300, 75.
- Los estados de las facturas son: válida, pendiente, válida, válida, pendiente.
- El valor mínimo permitido es 100.

El script suma las facturas 120, 200, y 300, ya que son válidas y mayores o iguales a 100. Por lo tanto, la salida es 620.

---

### Pistas:
- Utiliza una función recursiva para ir sumando factura por factura, teniendo en cuenta las restricciones.
- No olvides detener la recursión cuando no queden más facturas que procesar.
- Filtra las facturas que no cumplen con las condiciones antes de sumarlas en la recursión.

---