# Capitán de Yate · Murcia

Repositorio persistente del proyecto **Aprobar Náutica AI**.

## Principio del proyecto

El MASTER es acumulativo: ninguna actualización puede borrar, sustituir por una demo ni perder contenido ya incorporado. Las correcciones deben conservar trazabilidad.

## Estado importado

- Checkpoint recuperado el 28 de agosto de 2026.
- Base web acumulativa: 34 exámenes y 1.360 preguntas.
- Convocatorias de noviembre de 2023 y de 2024–2026 importadas desde el Excel maestro sin eliminar ningún examen anterior.
- Las 320 preguntas de las ocho convocatorias de 2024–2026 están contrastadas una por una con los cuestionarios oficiales con respuestas de la CARM.
- Marzo de 2026 conserva como anuladas las preguntas 17 y 20; no se les asigna una respuesta ficticia.
- Los PDFs oficiales utilizados se conservan en `master/fuentes_oficiales/` y cada pregunta enlaza su fuente dentro del JSON.
- Web estática preparada para publicación desde la raíz del repositorio.
- La web calcula automáticamente el progreso del alumno en el navegador: evolución, media, fallos repetidos, preguntas pendientes de repaso y recomendaciones. También permite descargar un informe de estadísticas.
- Cada convocatoria muestra su número de intentos completos. “Mi progreso” reúne únicamente las preguntas cuyo último resultado fue incorrecto o quedó en blanco, indica cuántas veces se hizo cada una y crea un examen personal con todos esos fallos. Al acertarlas en el repaso desaparecen automáticamente de la lista.
- Junto a los intentos de cada convocatoria aparece una barra con el porcentaje aprobado y la relación de aprobados sobre intentos totales.
- Ningún examen completo ni examen personal de fallos puede corregirse mientras quede alguna pregunta sin responder; la web lleva al alumno a la primera pendiente.
- Próxima capa didáctica: cada pregunta de cálculo tendrá referencia a las páginas necesarias del Almanaque Náutico, datos a extraer, croquis/esquema y resolución guiada paso a paso en lenguaje sencillo. Las explicaciones se añadirán sin borrar ni sustituir el contenido del MASTER.
- MASTER, manifiesto y archivos de seguridad conservados en `master/`.
- Material del Almanaque conservado en `assets/almanaque/`.
- Primera resolución completa incorporada: junio de 2026, pregunta 11 (altura estimada del Sol), con página 173 del Almanaque, signos, cálculo y teclas exactas de la Casio fx-85SP X II.

El manifiesto documenta qué convocatorias del objetivo acumulativo todavía deben reimportarse desde sus fuentes originales. La base existente se conserva íntegra mientras se completa esa consolidación.

## Archivos principales

- `index.html`: aplicación web.
- `murcia_master.json`: banco de exámenes y preguntas usado por la web.
- `MASTER_MANIFEST.json`: inventario, reglas y estado de consolidación.
- `master/ARCHIVO_MAESTRO_CAPITAN_YATE_MURCIA.xlsx`: hoja maestra recuperada.
- `master/checkpoints/CAPITAN_YATE_MASTER_CHECKPOINT.zip`: checkpoint original, sin modificar.
- `master/fuentes_oficiales/`: cuestionarios oficiales CARM usados para verificar las respuestas.
