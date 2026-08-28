# Junio 2026 · Murcia · Pregunta 11 · Altura estimada del Sol

## Estado

- Resolución numérica comprobada.
- Respuesta oficial: **b) ae = 63°56,2′**.
- Pregunta del MASTER: `id 1010`.
- Hoja necesaria del Almanaque: página 173, sábado 13 de junio de 2026.

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

Hoja conservada: `assets/almanaque/2026/2026-06-13_p173_diaria_sol_luna_planetas.png`.

## Paso 1 · Incremento de hG entre las 14:00:00 y las 14:10:44

El Sol avanza 15° por hora, que equivale a 15′ de arco por cada minuto de tiempo.

```text
10 min 44 s × 15 = 2°41,0′
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

## Paso 3 · Fórmula de la altura estimada

```text
sen ae = sen l × sen d + cos l × cos d × cos hL
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
  hL = 23°09,6′ W
```

## Casio fx-85SP X II Iberia · teclas exactas

### Preparar la calculadora

1. `MENU` → seleccionar `Calcular` con las flechas → `=`.
2. `SHIFT` → `MENU (CONFIG)` → `2 (Unidad angular)` → `1 (Grado sexag D)`.
3. Comprobar que aparece `D` en la parte superior de la pantalla.
4. Pulsar `AC`.

La tecla `°′″` es la tecla sexagesimal. Para evitar minutos decimales se usan estas equivalencias:

- `23°13,8′ = 23°13′48″`.
- `23°09,6′ = 23°09′36″`.

### Introducir toda la fórmula

Pulsar, en este orden:

```text
SHIFT  SIN
SIN  40  °′″  34  °′″  0  °′″  )
×
SIN  23  °′″  13  °′″  48  °′″  )
+
COS  40  °′″  34  °′″  0  °′″  )
×
COS  23  °′″  13  °′″  48  °′″  )
×
COS  23  °′″  9  °′″  36  °′″  )
)
=
```

Debe aparecer aproximadamente `63,93724958`.

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
