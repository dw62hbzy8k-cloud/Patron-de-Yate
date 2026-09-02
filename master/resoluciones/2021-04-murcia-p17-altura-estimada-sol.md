# Abril 2021 · Modelo 2 · pregunta 17 · altura estimada del Sol

Estado editorial: **verde, terminada y aprobada previamente por el usuario; presentación rehecha según la plantilla didáctica de Marzo 2026 P11 y pendiente de revisión visual de esta nueva versión**.

## Enunciado independiente

El enunciado original remite a la hora y a la situación estimada del ejercicio anterior. Como las preguntas se practican de manera independiente, la web mantiene a la vista el contexto necesario:

- `HcG = 14:10`.
- `l = 29°26,5′ N`.
- `L = 69°37,9′ W`.

Para resolver esta pregunta solo se utiliza la latitud `l`. La hora y la longitud se conservan porque pertenecen al contexto original, pero no entran en la fórmula: el enunciado actual ya proporciona `d` y `P`.

## Datos utilizados

- `l = +29°26,5′` porque la latitud es Norte.
- `d = +11°22,8′` porque la declinación se entrega positiva, es decir, Norte.
- `P = 36°53,9′ E`.
- Incógnita: `ae`, altura estimada del Sol.

No se abre el Almanaque Náutico y no se calculan `hG` ni `hL`.

## Fórmula y cálculo verificado

`sen(ae) = sen(l) × sen(d) + cos(l) × cos(d) × cos(P)`

`sen(ae) = sen(+29°26,5′) × sen(+11°22,8′) + cos(+29°26,5′) × cos(+11°22,8′) × cos(36°53,9′)`

`sen(ae) ≈ 0,779722`

`ae = 51,235123° = 51°14′06,4″ = 51°14,1′`

Resultado: **respuesta A · ae = 51°14,1′**.

## Orden didáctico aplicado

1. Fórmula general limpia, sin recuadros de datos pendientes.
2. Paso 1: reunir los tres datos ya disponibles y explicar por qué no hace falta el Almanaque.
3. Paso 2: comprobar los signos.
4. Paso 3: utilizar la calculadora desde la primera operación, con apartados A, B y C dentro del mismo paso.
5. Mostrar primero `sen(ae)`, aclarando que todavía no es la altura.
6. Obtener `ae`, convertirla al formato de las respuestas y redondear únicamente al final.
7. Comprobación razonable.
8. Gráfico explicativo después de todos los pasos.
9. Versión rápida con datos, fórmula, sustitución y resultado.

Las fórmulas completas permanecen en un solo renglón y utilizan el mayor tamaño que permite el ancho disponible. Se dice siempre «calculadora» en las instrucciones visibles. La pregunta conserva su marco verde hasta que el usuario decida otro estado.
