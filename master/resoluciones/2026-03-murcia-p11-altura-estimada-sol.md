# Marzo 2026 · Modelo 2 · pregunta 11 · altura estimada del Sol

## Tipo de problema

Altura estimada mediante el triángulo de posición. No es una ortodrómica.

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

1. `hG = 342°42,5′ + 2°30,0′ = 345°12,5′`.
2. La longitud es Oeste, por lo que se resta: `hL = 345°12,5′ − 10°40,0′ = 334°32,5′`.
3. Como `hL > 180°`, `P = 360° − 334°32,5′ = 25°27,5′ E`.
4. Fórmula: `sen(ae) = sen(l) × sen(d) + cos(l) × cos(d) × cos(P)`.
5. La declinación Sur entra con signo negativo.
6. La expresión da aproximadamente `sen(ae) = 0,705812`.
7. Con `SHIFT → SIN`, `ae = 44,895188°`.

## Conversión en la Casio fx-85SP X II

1. Apuntar los 44 grados completos.
2. Con `44,895188` todavía en pantalla, pulsar `− 44 =`.
3. Aparece `0,895188`.
4. Pulsar `× 60 =`.
5. Aparece `53,71128`, que son minutos.
6. Redondear a una cifra decimal: `53,7′`.
7. Reunir grados y minutos: `44°53,7′`.

Resultado: `44°53,7′`. Respuesta C.
