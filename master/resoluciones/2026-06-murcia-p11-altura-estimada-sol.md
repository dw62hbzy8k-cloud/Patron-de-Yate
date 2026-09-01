# Junio 2026 · Murcia · Pregunta 11 · Altura estimada del Sol

## Estado

- Resolución numérica y respuesta oficial comprobadas.
- Desarrollo didáctico preparado en la web y pendiente del visto bueno del usuario antes de pasar a verde.
- Respuesta oficial: **b) ae = 63°56,2′**.
- Pregunta del MASTER: `id 1010`.
- Hojas necesarias del Almanaque: página diaria 173 y página 430 de incrementos.

## Datos del enunciado

- Fecha: 13 de junio de 2026.
- UT: 14:10:44.
- Latitud estimada: `l = 40°34′ N`.
- Longitud estimada: `L = 009°30′ W`.

## Datos leídos en el Almanaque

En la página 173, tabla del Sol, fila `UT 14 h`:

- Horario en Greenwich del Sol: `hG☉ = 29°58,6′`.
- Declinación: `d☉ = +23°13,8′` (N).

En la fila `UT 15 h`, la declinación es `+23°13,9′`. Durante 10 min 44 s solo cambia aproximadamente `+0,02′`, por lo que a décimas de minuto se conserva `d☉ = +23°13,8′`.

Hojas conservadas:

- `assets/almanaque/2026/2026-06-13_p173_diaria_sol_luna_planetas.png`.
- `assets/almanaque/2026/2026_p430_incrementos_10m.png`.

## Paso 1 · Incremento de hG entre las 14:00:00 y las 14:10:44

En la página 430 se entra en el bloque de 10 minutos, fila de 44 segundos y columna «Sol y planetas». Allí se lee directamente:

```text
incremento = 2°41,0′
```

Por tanto:

```text
hG☉ = 29°58,6′ + 2°41,0′
hG☉ = 32°39,6′
```

## Paso 2 · Pasar de hG a horario local

Se trabaja con longitud algebraica:

- Este: positiva.
- Oeste: negativa.

Como la longitud es oeste, `L = −9°30,0′`:

```text
hL☉ = hG☉ + L
hL☉ = 32°39,6′ + (−9°30,0′)
hL☉ = 23°09,6′ W
```

Error típico: sumar 9°30′ por ver la letra W. Con esta convención no se suma: la longitud W lleva signo negativo.

## Paso 3 · Convertir hL en P

El horario local se expresa de 0° a 360°, pero la fórmula usa el ángulo menor en el Polo, de 0° a 180°:

- Si `hL ≤ 180°`, `P = hL W`.
- Si `hL > 180°`, `P = 360° − hL E`.

Aquí `hL = 23°09,6′`, que no supera 180°. Por tanto:

```text
P = 23°09,6′ W
```

## Paso 4 · Fórmula de la altura estimada

```text
sen ae = sen l × sen d + cos l × cos d × cos P
```

Sustituyendo:

```text
sen ae = sen 40°34′ × sen 23°13,8′
       + cos 40°34′ × cos 23°13,8′ × cos 23°09,6′

sen ae = 0,8983134026
ae = arcsen(0,8983134026)
ae = 63,9372496°
ae = 63°56′14,1″
ae = 63°56,2′
```

## Croquis mínimo

```text
                 Sol
                  ●
                 /|
                / |  ae = altura que buscamos
               /  |
Horizonte  ----+---+----------------
            observador

Triángulo de posición:
  l  = 40°34′ N
  d  = 23°13,8′ N
  P  = 23°09,6′ W
```

## Casio fx-85SP X II Iberia · teclas exactas

### Preparar la calculadora

1. `MENU` → seleccionar `Calcular` con las flechas → `=`.
2. `SHIFT` → `MENU (CONFIG)` → `2 (Unidad angular)` → `1 (Grado sexag D)`.
3. Comprobar que aparece `D` en la parte superior de la pantalla.
4. Pulsar `AC`.

La tecla `°′″` es la tecla sexagesimal. En esta pregunta se conservan los minutos decimales exactamente como los entrega el enunciado:

- `23°13,8′`: pulsar `23`, `°′″`, `13`, `.`, `8`, `°′″`.
- `23°09,6′`: pulsar `23`, `°′″`, `9`, `.`, `6`, `°′″`.

La primera pulsación de `°′″` cierra los grados y la segunda cierra los minutos. No es necesario convertir `0,8′` en `48″` ni `0,6′` en `36″`.

### Introducir toda la fórmula

Pulsar, en este orden:

```text
SIN  40  °′″  34  °′″  )
×
SIN  23  °′″  13  .  8  °′″  )
+
COS  40  °′″  34  °′″  )
×
COS  23  °′″  13  .  8  °′″  )
×
COS  23  °′″  9  .  6  °′″  )
=
```

Debe aparecer aproximadamente `0,8983134026`. Ese número es `sen(ae)`, no la altura.

Ahora se recupera el ángulo:

```text
SHIFT  SIN  Ans  )  =
```

Debe aparecer aproximadamente `63,9372496`.

Pulsar una vez `°′″` para convertir el resultado:

```text
63°56′14,1″
```

Como las respuestas están en décimas de minuto, `14,1″ ÷ 60 = 0,235′`; se redondea a `63°56,2′`.

## Comprobación final

- El resultado calculado coincide con la opción oficial b.
- La altura está entre 0° y 90°, por lo que es físicamente posible.
- Si se suma por error la longitud W, sale aproximadamente `50°42,7′`, muy lejos de las cuatro opciones; eso permite detectar el error.

## Fuentes

- Documento de datos enlazado en la pregunta: `https://www.estudiasonavegas.com/test-online/images/Murcia-0626/Datos-CY-Murcia-0626.pdf`.
- Cuestionario oficial CARM con respuesta: `https://www.carm.es/web/descarga?ARCHIVO=WEB%20Tipo%201.CAP%20%20junio-26%20con%20respuestas.docx.pdf&ALIAS=ARCH&IDCONTENIDO=170471&IDTIPO=60&RASTRO=c$m74797`.
- Manual Casio fx-82SP X II / fx-85SP X II / fx-350SP X II: `https://www.edu-casio.es/wp-content/uploads/2020/01/fx-85-82-350spxii_guia.pdf`.
