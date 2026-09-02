# Junio 2024 · pregunta 19 · altura estimada de Vega

Estado editorial: **preparada y pendiente de revisión del usuario**. No marcar en verde hasta recibir su aprobación.

## Datos utilizados

- HcG: 10:00.
- Situación estimada: `l = 31°32,2′ N`, `L = 121°38,2′ W`.
- Ángulo en el Polo facilitado: `P = 13°05′46″ W`.
- Declinación de Vega indicada por el cartoncillo del ejercicio: `d* = +38°48,2′`.
- Resultado pedido: altura estimada de Vega, `ae*`.

Como `P` ya está facilitado, HcG y L no intervienen en la fórmula de la altura.

## Cálculo independiente

Fórmula:

`sen(ae*) = sen(l)·sen(d*) + cos(l)·cos(d*)·cos(P)`

Sustitución:

`sen(ae*) = sen(31°32,2′)·sen(38°48,2′) + cos(31°32,2′)·cos(38°48,2′)·cos(13°05′46″)`

### Entrada en la calculadora interactiva

La guía conserva directamente los minutos decimales de los datos. La primera pulsación de `°′″` cierra los grados y la segunda cierra los minutos:

- `31°32,2′`: `31 → °′″ → 32 → . → 2 → °′″`.
- `38°48,2′`: `38 → °′″ → 48 → . → 2 → °′″`.
- `13°05′46″`: `13 → °′″ → 5 → °′″ → 46 → °′″`; este dato ya incluye segundos, por eso tiene tres grupos.

En la web no se repite esta lista como una explicación separada. La calculadora aparece dentro del paso 3 y guía directamente la introducción de la fórmula, tecla por tecla, con el mismo modelo empleado en los ejercicios anteriores.

La estructura visible debe conservar la plantilla ya aprobada en las preguntas verdes de altura estimada: datos preparados en el papel → reglas de signos → dibujo → fórmula general → sustitución → calculadora → paso 1, calcular la parte derecha → paso 2, recuperar `ae*` con `SHIFT → SIN` → paso 3, convertir al formato de las respuestas. No crear una numeración o una tipología distinta para esta pregunta.

La versión rápida conserva visible la fórmula general y su sustitución numérica antes del resultado.

Resultados sin redondear antes de tiempo:

- `sen(ae*) = 0,974693172380`
- `ae* = 77,082554213904°`
- `ae* = 77°04′57,195″`
- Redondeado al segundo: `ae* = 77°04′57″`

Respuesta en la web: **D · 77°04′57″**.

## Control geométrico

- Colatitud `PN–Z = 90° − l = 58°27,8′`.
- Distancia polar de Vega `PN–Vega = 90° − d* = 51°11,8′`.
- Distancia cenital `z = 90° − ae* = 12°55′02,8″`.

## Fuentes y trazabilidad

- Examen oficial CARM, Junio 2024, Tipo 1 con respuestas: `master/fuentes_oficiales/CARM_CY_Junio_2024_Tipo1_con_respuestas.pdf`.
- URL oficial registrada en la pregunta: https://www.carm.es/web/descarga?ALIAS=ARCH&ARCHIVO=CAP+junio-2024+Tipo+1+con+respuestas.pdf&IDCONTENIDO=199033&IDTIPO=60
- Cartoncillo didáctico incorporado a la web: `assets/almanaque/2024/2024_cartoncillo_vega_junio.svg`.
- Tabla real de estrellas del Nautical Almanac 2024 incorporada a la web: `assets/almanaque/2024/2024_tabla_real_estrellas_vega.png`. En la fila Vega figuran `SHA 80°33,1′` y `Dec +38°48,2′`, exactamente el dato empleado por la respuesta oficial.
- Documento público de origen: https://www.estudiasonavegas.com/images/Archivos/CY/CY_Almanaques_Nauticos/2024_Nautical_Almanac.pdf

Nota de control: el valor `+38°48,2′` es el que reproduce exactamente la opción oficial. No sustituirlo por otra edición o redondeo del Almanaque sin volver a comprobar toda la pregunta.

## Revisión integral reabierta

- Se añadió al final «Resolución completa» con la misma cadena y el mismo orden de las preguntas de altura estimada ya aprobadas.
- El recuadro morado de `P` ocupa el hueco superior izquierdo, cerca del vértice `PN`; su flecha llega al ángulo mediante un recorrido corto. El recuadro azul baja por el lado largo `PN–Z`, al que apunta con otra flecha corta. No colocar `P` debajo del azul ni enviarlo al extremo opuesto del dibujo.
- La pregunta volvió a amarillo el 2 de septiembre de 2026: una auditoría completa posterior mostró que todavía faltaba estabilizar la aparición de la calculadora, revisar toda su secuencia y terminar el control visual.
- Para las siguientes preguntas de altura estimada y triángulo se aplicará obligatoriamente `master/plantilla-control-altura-estimada-triangulo.md`.
