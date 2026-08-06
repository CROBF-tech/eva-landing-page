# Instrucciones para Claude — Eva Landing Page

Este archivo define comportamientos y preferencias específicas para trabajar en la landing page de **Eva** dentro de CROBF-tech.

## Identidad del producto

Eva es una aplicación de seguridad personal para mujeres. Su propuesta central es: *"Contale tu plan. Nosotros nos encargamos del resto."*

La landing page debe comunicar empatía, confianza y claridad. El tono es cercano pero profesional. Nunca se debe revelar el mecanismo exacto de la alerta silenciosa en material público: basta con mencionar que existe un sistema de alerta discreta ante situaciones de coerción.

## Principios generales

- Priorizar la seguridad y privacidad de las usuarias en cualquier decisión de copy o funcionalidad.
- Mantener el stack simple y moderno: Astro 7, Tailwind v4 CSS-first, Node.js standalone, Drizzle + Turso.
- No exponer credenciales, URLs de base de datos completas ni tokens en commits o archivos públicos.
- Hacer cambios mínimos y enfocados. Consultar antes de modificar la lógica del formulario de suscripción o el esquema de base de datos.

## Convenciones de código

- TypeScript estricto. ESM nativo.
- Tailwind v4 con `@theme inline` en `src/styles/global.css`. No usar `tailwind.config.*`.
- Componentes Astro para la interfaz. Endpoints de API en `src/pages/api/*.ts`.
- Estilos inline de Tailwind preferidos sobre CSS personalizado a menos que sea necesario.

## Flujo de trabajo recomendado

1. Leer `AGENTS.md` y este archivo antes de empezar.
2. Entender el cambio solicitado: ¿afecta copy, UI, API o infraestructura?
3. Cargar la skill correspondiente cuando aplique (UI, copywriting, Tailwind v4, etc.).
4. Probar localmente con `pnpm dev`.
5. Verificar que el formulario de suscripción siga funcionando; si se puede, probar también con base de datos.
6. No hacer commits ni pushes salvo que el usuario lo solicite explícitamente.

## Qué no hacer

- No agregar dependencias pesadas sin consultar.
- No modificar el esquema de base de datos ni la API de suscripción sin aprobación.
- No generar documentación adicional salvo que se solicite.
- No usar el nombre "Eva" de forma genérica o con mayúsculas inconsistentes en copy público.

## Contacto y contexto

- Organización: https://github.com/CROBF-tech
- Repo: https://github.com/CROBF-tech/eva-landing-page
- Documentación de Astro: https://docs.astro.build

Si hay dudas sobre alcance o prioridades, preguntar al usuario antes de avanzar.
