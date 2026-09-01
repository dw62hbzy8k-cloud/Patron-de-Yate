# Marzo 2026 · Modelo 2 · pregunta 11 · altura estimada del Sol

## Tipo de problema

Altura estimada mediante el triángulo de posición. No es una ortodrómica.

Se reconoce porque el enunciado pide literalmente calcular la **altura estimada del Sol**. En este ejercicio proporciona la fecha, la hora UT y las coordenadas de la situación estimada: latitud y longitud.

### Símbolos

- `ae`: altura estimada.
- `l`: latitud estimada.
- `L`: longitud estimada.
- `UT`: hora universal.
- `hG☉`: horario de Greenwich del Sol.
- `d☉`: declinación del Sol.
- `hL☉`: horario local del Sol.
- `P`: ángulo en el Polo.

## Formas en las que pueden facilitar los datos

Para aplicar la fórmula de la altura estimada siempre se necesitan `l`, `d` y `P`, pero el examen no siempre los entrega del mismo modo. En el banco real aparecen estas variantes:

1. Latitud, declinación y ángulo en el Polo dados directamente.
2. Fecha, hora, astro, latitud y longitud; `hG` y `d` se obtienen del Almanaque y después se calculan `hL` y `P`.
3. Referencia a «la misma hora y situación anteriores»; los datos se recuperan de la pregunta precedente.
4. Ángulo en el Polo ya calculado y declinación que debe leerse en una hoja anexa, especialmente para estrellas.

En estos exámenes la hora aparece como `UT` o `HcG` —hora civil de Greenwich—. Ambas están referidas a Greenwich y permiten consultar el Almanaque. Cuando el enunciado dice «a la misma HcG anterior», se utiliza la hora indicada en la pregunta anterior.

## Qué entrega esta pregunta y qué falta

El enunciado proporciona:

- fecha: 14 de marzo de 2026;
- hora: `UT 11:10:00`;
- astro: Sol;
- latitud estimada: `l = 35°54′ N`;
- longitud estimada: `L = 10°40′ W`;
- incógnita solicitada: altura estimada del Sol, `ae☉`.

No proporciona y se debe obtener:

- `hG☉`, mediante las páginas 82 y 430;
- `d☉`, mediante la página diaria 82;
- `hL☉`, combinando `hG☉` con `L`;
- `P`, a partir de `hL☉`;
- `ae☉`, aplicando la fórmula del triángulo de posición.

## Datos

- Fecha: 14 de marzo de 2026.
- UT: 11:10:00.
- Latitud estimada: 35°54′ N.
- Longitud estimada: 10°40′ W.

## Hojas del Almanaque

- Página diaria 82: para UT 11, `hG del Sol = 342°42,5′` y `declinación = 2°26,1′ S`.
- Página 430 de incrementos: para 10 minutos y 0 segundos, incremento del Sol `2°30,0′`.

### Cómo leer la página 430

1. `UT 11:10:00` se separa en la hora entera `11 h` y el tiempo transcurrido después de ella: `10 min 00 s`.
2. En la página 430 se entra por el bloque `10ᵐ`.
3. En la primera columna, encabezada con `s`, se busca la fila `0` porque la UT tiene cero segundos.
4. En esa misma fila se avanza hasta la columna `Sol y planetas` y se lee `2°30,0′`.
5. Las columnas `Dif.` y `Correc.` de la derecha no se utilizan en esta pregunta.

Aunque la página se titula «Correcciones», el valor `2°30,0′` de la columna `Sol y planetas` es el incremento de horario acumulado durante los diez minutos posteriores a las 11:00. Aparece sin signo porque la tabla da su magnitud y su operación ya está definida: se añade al horario de Greenwich de la hora entera.

## Cálculo

Antes de operar se separan dos reglas diferentes:

- Para calcular `hL`, la longitud Este se suma a `hG` y la longitud Oeste se resta.
- Al introducir `l` y `d` en la fórmula, Norte lleva signo positivo y Sur lleva signo negativo.

1. `hG = 342°42,5′ + 2°30,0′ = 345°12,5′`.
2. La longitud es Oeste, por lo que se resta: `hL = 345°12,5′ − 10°40,0′ = 334°32,5′`.
3. `hL` se expresa sobre el círculo completo, de 0° a 360°. `P` utiliza el arco menor, de 0° a 180°, e indica Este u Oeste. Si `hL` está entre 0° y 180°, `P = hL W`; si `hL > 180°`, `P = 360° − hL E`. En esta pregunta: `P = 360° − 334°32,5′ = 25°27,5′ E`.
4. Fórmula: `sen(ae) = sen(l) × sen(d) + cos(l) × cos(d) × cos(P)`.
5. La declinación Sur entra con signo negativo.
6. Se calcula completa la parte situada a la derecha del signo igual: `sen(+35°54′) × sen(−2°26,1′) + cos(+35°54′) × cos(−2°26,1′) × cos(25°27,5′)`.
7. Al pulsar `=`, la parte derecha da aproximadamente `0,705812`. Por tanto, `sen(ae) = 0,705812`. Este decimal todavía no es `ae`.
8. El resultado queda guardado en la memoria `Ans`. Pulsar `SHIFT → SIN → Ans → ) → =` para calcular `sen⁻¹(Ans)`.
9. La pantalla muestra `ae = 44,895188°`.

## Conversión en la Casio fx-85SP X II

1. Apuntar los 44 grados completos.
2. Con `44,895188` todavía en pantalla, pulsar `− 44 =`.
3. Aparece `0,895188`.
4. Pulsar `× 60 =`.
5. Aparece `53,71128`, que son minutos.
6. Redondear a una cifra decimal: `53,7′`.
7. Reunir grados y minutos: `44°53,7′`.

Resultado: `44°53,7′`. Respuesta C.

## Entrenador interactivo incorporado

La web incluye esta conversión en una simulación educativa de la Casio fx-85SP X II con tres niveles:

1. **Aprender:** solo funciona la tecla correcta y aparece iluminada en verde suave.
2. **Practicar:** ninguna tecla se adelanta; una pulsación equivocada queda bloqueada, se marca en rojo y puede emitir un aviso. La correcta se confirma brevemente en verde, sin texto innecesario.
3. **Solo:** permite realizar la operación libremente y revisar el resultado. Si no coincide, señala la primera pulsación que se separó de la ruta enseñada.

La secuencia validada de esta lección es `− → 4 → 4 → = → × → 6 → 0 → =`. El resultado intermedio obligatorio es `0,895188` y el resultado de los minutos es `53,71128′`. La web guarda por separado los ejercicios completados en cada nivel y recomienda el siguiente nivel sin modificar ni borrar el historial de exámenes del alumno.

La conservación del último resultado en la memoria `Ans` se ha contrastado con el manual oficial de la Casio fx-82/85/350SP X II: `https://support.casio.com/storage/es/manual/pdf/ES/004/fx-82_85_350SP_X_II_ES.pdf`.
