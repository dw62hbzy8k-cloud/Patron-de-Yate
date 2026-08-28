# Capitán de Yate · Murcia

Repositorio persistente del proyecto **Aprobar Náutica AI**.

## Principio del proyecto

El MASTER es acumulativo: ninguna actualización puede borrar, sustituir por una demo ni perder contenido ya incorporado. Las correcciones deben conservar trazabilidad.

## Estado importado

- Checkpoint recuperado el 28 de agosto de 2026.
- Base web acumulativa: 34 exámenes y 1.360 preguntas.
- Convocatorias de noviembre de 2023 y de 2024–2026 importadas desde el Excel maestro sin eliminar ningún examen anterior.
- Los exámenes recientes no incluyen solucionario en la fuente; sus respuestas permanecen pendientes y no se han inventado.
- Web estática preparada para publicación desde la raíz del repositorio.
- MASTER, manifiesto y archivos de seguridad conservados en `master/`.
- Material del Almanaque conservado en `assets/almanaque/`.

El manifiesto documenta qué convocatorias del objetivo acumulativo todavía deben reimportarse desde sus fuentes originales. La base existente se conserva íntegra mientras se completa esa consolidación.

## Archivos principales

- `index.html`: aplicación web.
- `murcia_master.json`: banco de exámenes y preguntas usado por la web.
- `MASTER_MANIFEST.json`: inventario, reglas y estado de consolidación.
- `master/ARCHIVO_MAESTRO_CAPITAN_YATE_MURCIA.xlsx`: hoja maestra recuperada.
- `master/checkpoints/CAPITAN_YATE_MASTER_CHECKPOINT.zip`: checkpoint original, sin modificar.
