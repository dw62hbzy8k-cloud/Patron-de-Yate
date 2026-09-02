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
8. Esfera celeste tridimensional e interactiva después de todos los pasos.
9. Versión rápida con datos, fórmula, sustitución y resultado.

Las fórmulas completas permanecen en un solo renglón y utilizan el mayor tamaño que permite el ancho disponible. Se dice siempre «calculadora» en las instrucciones visibles. La pregunta conserva su marco verde hasta que el usuario decida otro estado.

La obtención de `ae` no utiliza expresiones imprecisas como «continúa con la secuencia indicada». Especifica las teclas completas: con `0,779722` en pantalla, `SHIFT → SIN → Ans → ) → =`.

La frase abstracta «P entra dentro de cos(P)» se sustituye por una instrucción explícita: en la fórmula `cos(P)`, reemplaza `P` por su valor, de modo que quede `cos(36°53,9′)`. En la calculadora solo se introduce el número; la letra `E` conserva la orientación y no se escribe como signo negativo.

## Norma visual corregida

Se retira la antigua vista polar plana que se presentaba como «a escala». El triángulo de posición es esférico y sus lados son arcos de círculos máximos sobre la esfera celeste; una figura plana podía inducir una interpretación incorrecta.

La nueva representación es tridimensional, giratoria y se genera a partir de los datos reales de la pregunta:

- `PN = (0, 0, 1)` sobre la esfera celeste.
- `Z` se coloca mediante `l = 29°26,5′ N`.
- El Sol se coloca mediante `d = +11°22,8′` y `P = 36°53,9′ E`.
- Los arcos `PN–Z`, `PN–Sol` y `Z–Sol` se calculan mediante interpolación sobre círculos máximos.
- La Tierra se muestra en el centro y el observador sobre su superficie, alineado radialmente con el cenit `Z`.
- La parte posterior de la esfera y de los arcos se diferencia visualmente de la parte delantera.
- Los círculos de referencia y los círculos máximos que contienen cada lado se dibujan completos. Fuera de los tres lados del triángulo, sus prolongaciones continúan con el mismo color pero mucho más tenues.
- Una línea punteada une el observador situado sobre la Tierra con su cenit `Z`.
- La profundidad se respeta al girar la esfera: los arcos delanteros se redibujan por delante de la Tierra; los arcos posteriores quedan ocultos por ella cuando coinciden con su disco aparente.

No se reutilizarán los antiguos dibujos planos en las siguientes preguntas. Cada futuro gráfico del triángulo deberá respetar esta geometría esférica.

En toda fórmula numérica, cada valor llevará justo debajo su símbolo y significado: `l · latitud`, `d · declinación` y `P · ángulo en el Polo`. La longitud `L` solo se etiqueta en las operaciones donde realmente interviene, por ejemplo al obtener `hL`.

La fórmula numérica mantiene el mismo formato de la plantilla aprobada: `sen(ae)` en un recuadro azul como parte izquierda y toda la operación en un recuadro verde como parte derecha. El comienzo del uso de teclas se anuncia con `PASO 3 · A PARTIR DE AQUÍ, UTILIZA LA CALCULADORA`; después se pide calcular toda la parte derecha verde.

Dentro del paso 3 la fórmula se muestra una sola vez, en el apartado donde se calcula la parte derecha verde. No se repite antes de desplegar la calculadora.
