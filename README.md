# NavegandoAndo · Capitán de Yate

Repositorio persistente del proyecto **NavegandoAndo**.

## Principio del proyecto

El MASTER es acumulativo: ninguna actualización puede borrar, sustituir por una demo ni perder contenido ya incorporado. Las correcciones deben conservar trazabilidad.

## Estado importado

- Checkpoint recuperado el 28 de agosto de 2026.
- Base web acumulativa: 34 exámenes y 1.360 preguntas.
- Convocatorias de noviembre de 2023 y de 2024–2026 importadas desde el Excel maestro sin eliminar ningún examen anterior.
- Las 320 preguntas de las ocho convocatorias de 2024–2026 están contrastadas una por una con los cuestionarios oficiales con respuestas de la CARM.
- Noviembre de 2023, Modelo 1, acaba de incorporarse con sus 40 respuestas verificadas desde el PDF oficial CARM; en las preguntas 14 y 15 se conservan las varias opciones que la propia fuente subraya.
- Noviembre de 2022, Modelo 2, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM.
- Marzo de 2023 queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM; se comprobó cada correspondencia por enunciado y texto de opción porque el orden de la base difiere del documento.
- Junio de 2022 queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM; se recuperó la pregunta real sobre Orión que sustituye el antiguo marcador sin enunciado.
- Abril de 2022 queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM, cruzadas por enunciado y texto de opción.
- Noviembre de 2021 queda incorporado con sus 40 respuestas verificadas; la pregunta 15 acepta las cuatro opciones porque el PDF oficial subraya las cuatro.
- Julio de 2021 queda incorporado con sus 40 respuestas verificadas desde el cuestionario oficial CARM de junio de 2021, Tipo 1; la correspondencia completa se comprobó por enunciado y texto de opción porque la base usa otra denominación y otro orden.
- Abril de 2021, Modelo 2, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1, cruzadas por enunciado y texto de opción.
- Julio de 2020, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1; se conserva literalmente la respuesta oficial de la pregunta 33 de inglés.
- Marzo de 2020, Modelo 2, queda corregido con las 40 respuestas aportadas por el usuario el 31 de agosto de 2026; la clave queda identificada como aportación del usuario y pendiente de contraste con un solucionario oficial.
- Noviembre de 2019, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1; se corrigen dos errores de transcripción en las opciones 20 y 36.
- Junio de 2019, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1.
- Marzo de 2019, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1, cruzadas por enunciado y texto de opción debido al orden diferente del banco.
- Noviembre de 2018, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1.
- Junio de 2018, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1; los cálculos sin subrayado visible se verifican numéricamente.
- Marzo de 2018, Modelo 2, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1, cruzadas por enunciado y texto de opción debido al orden diferente del banco.
- Noviembre de 2017, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1.
- Junio de 2017, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1; las respuestas de cálculo sin subrayado nítido se comprobaron numéricamente.
- Marzo de 2017, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1, cruzadas por enunciado y texto de opción debido al orden diferente del banco.
- Noviembre de 2016, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1; la pregunta 12, cuyo subrayado no es nítido, se comprobó con los datos del propio cálculo.
- Marzo de 2016, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1; las preguntas 16 y 18, cuyas marcas no son nítidas, se comprobaron con los datos del propio cálculo.
- Noviembre de 2015, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1; en la pregunta 4 la propia fuente subraya las cuatro afirmaciones y «Todas las respuestas son correctas».
- Junio de 2015, Modelo 1, queda incorporado con sus 40 respuestas verificadas desde el PDF oficial CARM Tipo 1.
- Junio de 2016, Modelo 1, queda incorporado con sus 40 respuestas verificadas mediante contraste conceptual con cuestionarios oficiales ya validados y recálculo independiente de los ejercicios 11–20; la hoja de trazabilidad se conserva en `master/verificaciones/`.
- Marzo de 2026 conserva como anuladas las preguntas 17 y 20; no se les asigna una respuesta ficticia.
- Los PDFs oficiales utilizados se conservan en `master/fuentes_oficiales/` y cada pregunta enlaza su fuente dentro del JSON.
- Web estática preparada para publicación desde la raíz del repositorio.
- Plan personal de Cálculo empezando por los bloques más fáciles, con acceso directo a prácticas por tema y progreso automático gris/rojo/amarillo/verde basado en aciertos, variedad de preguntas y repetición en días distintos.
- Corregida la clasificación de abril de 2022: sus preguntas 14, 15 y 17 son respectivamente latitud por meridiana, horario de astros y latitud por la Polar; la mera mención de la derrota ortodrómica no las convierte en ejercicios de Ortodrómica.
- La web calcula automáticamente el progreso del alumno en el navegador: evolución, media, fallos repetidos, preguntas pendientes de repaso y recomendaciones. También permite descargar un informe de estadísticas.
- Cada convocatoria muestra su número de intentos completos. “Mi progreso” reúne las preguntas que necesitan refuerzo —falladas, dudadas, adivinadas, aún no consolidadas o con repaso vencido—, indica cuántas veces se hizo cada una y crea una práctica personal con ellas. Desaparecen de pendientes cuando se aciertan con seguridad en dos días distintos, hasta su siguiente repaso programado.
- Junto a los intentos de cada convocatoria aparece una barra con el porcentaje aprobado y la relación de aprobados sobre intentos totales.
- Ningún examen completo ni examen personal de fallos puede corregirse mientras quede alguna pregunta sin responder; la web lleva al alumno a la primera pendiente.
- La portada prepara automáticamente un «Entrenamiento de hoy» de 15 preguntas: prioriza fallos, respuestas dudadas o adivinadas, repasos vencidos y temas flojos; completa la sesión con preguntas nuevas o antiguas sin introducir cálculos avanzados nuevos.
- Cada respuesta puede marcarse como «La sabía», «Dudé» o «La adiviné». Una respuesta acertada por suerte sigue pendiente de refuerzo.
- La repetición inteligente programa repasos a 1, 3, 7 y 14 días. Una pregunta solo se considera consolidada después de acertarla con seguridad en dos días distintos.
- “Mi progreso” incluye un semáforo de preparación por Teoría, Cálculo, Meteorología e Inglés y conserva cinco copias automáticas locales del historial y la práctica.
- Al fallar aparece un panel de corrección con la respuesta elegida, la correcta completa, explicación, truco de memoria y fuente. Las cinco preguntas actualmente falladas por el alumno —Junio 2026 P1, P2 y P8; Noviembre 2025 P11 y P16— tienen explicación pedagógica específica; las dos de cálculo incluyen el desarrollo numérico comprobado.
- Esas cinco explicaciones incorporan esquemas visuales propios y adaptables a móvil. Las preguntas de ángulo en el Polo y altura/distancia cenital incluyen además enlaces comprobados a vídeos didácticos específicos de Capitán de Yate Online. No se copia la imagen externa usada como referencia.
- Las guías de cálculo siguen una receta de principiante: identificar lo pedido, copiar datos/unidades, hacer croquis, fijar signos, escribir fórmula, sustituir, usar la Casio, convertir unidades y comprobar el resultado. Noviembre 2025 P11 y P16 incluyen las teclas exactas paso a paso.
- Próxima capa didáctica: cada pregunta de cálculo tendrá referencia a las páginas necesarias del Almanaque Náutico, datos a extraer, croquis/esquema y resolución guiada paso a paso en lenguaje sencillo. Las explicaciones se añadirán sin borrar ni sustituir el contenido del MASTER.
- MASTER, manifiesto y archivos de seguridad conservados en `master/`.
- Material del Almanaque conservado en `assets/almanaque/`.
- Primera resolución completa incorporada: junio de 2026, pregunta 11 (altura estimada del Sol), con página 173 del Almanaque, signos, cálculo y teclas exactas de la Casio fx-85SP X II.
- Resolución completa incorporada: junio de 2023, pregunta 15 (declinación del Sol), con el enunciado autosuficiente, página 184 del Almanaque 2023, lectura guiada de fila y columna e interpolación de 20 minutos.
- Resolución completa incorporada: junio de 2023, pregunta 17 (altura verdadera del Sol), con clasificación frente a ortodrómica, Tabla A/B de la página 387 y operaciones de corrección paso a paso.
- “Mi progreso” permite guardar una copia completa y recuperarla en otro navegador sin borrar los resultados que ya existan allí.
- La portada permite guardar el nombre del alumno y lo saluda personalmente sin modificar ni reiniciar su historial. En esta primera versión el nombre se conserva en el mismo navegador; las cuentas individuales con progreso sincronizado en la nube forman parte de la evolución comercial de la plataforma.
- Todas las preguntas de Cálculo muestran un cuadro previo con el tipo de problema, las pistas para reconocerlo y si necesita Almanaque. Cuando falta la hoja exacta, la web lo advierte claramente y deja de afirmar que existe una referencia todavía no incorporada.
- Altura estimada muestra destacada la fórmula completa del triángulo de posición y define cada letra. Junio y marzo de 2026 P11 incluyen las dos hojas necesarias: página diaria y tabla de incrementos, rotuladas con la fila y columna que debe leer el alumno.

El manifiesto documenta qué convocatorias del objetivo acumulativo todavía deben reimportarse desde sus fuentes originales. La base existente se conserva íntegra mientras se completa esa consolidación.

## Archivos principales

- `index.html`: aplicación web.
- `murcia_master.json`: banco de exámenes y preguntas usado por la web.
- `MASTER_MANIFEST.json`: inventario, reglas y estado de consolidación.
- `HOJA_DE_RUTA_PRODUCTO_Y_NEGOCIO.md`: memoria acumulativa de las ideas, prioridades y decisiones de expansión nacional.
- `master/ARCHIVO_MAESTRO_CAPITAN_YATE_MURCIA.xlsx`: hoja maestra recuperada.
- `master/checkpoints/CAPITAN_YATE_MASTER_CHECKPOINT.zip`: checkpoint original, sin modificar.
- `master/fuentes_oficiales/`: cuestionarios oficiales CARM usados para verificar las respuestas.
