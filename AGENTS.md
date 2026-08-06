# Guía del agente — Eva Landing Page

Repositorio: https://github.com/CROBF-tech/eva-landing-page

Este proyecto es la landing page del producto **Eva**, una aplicación de seguridad personal para mujeres. Está construido con **Astro 7**, **Tailwind CSS v4** y el **adaptador de Node.js** en modo standalone, y usa **Drizzle ORM** sobre **Turso** para registrar correos de personas interesadas.

---

## Desarrollo

### Requisitos

- Node.js >= 22.12.0
- pnpm

### Instalación

```bash
pnpm install
```

### Variables de entorno

Copiar el archivo de ejemplo y completar con credenciales de Turso:

```bash
cp .env.example .env
```

```env
TURSO_DATABASE_URL=libsql://...turso.io
TURSO_AUTH_TOKEN=
```

### Servidor de desarrollo

Usar siempre modo background:

```bash
astro dev --background
```

Administrar el servidor con:

- `astro dev stop`
- `astro dev status`
- `astro dev logs`

### Otros comandos

| Comando           | Acción                                           |
| ----------------- | ------------------------------------------------ |
| `pnpm dev`        | Levanta el servidor de desarrollo                |
| `pnpm build`      | Compila el sitio en `./dist/`                    |
| `pnpm preview`    | Previsualiza la compilación localmente           |
| `pnpm astro ...`  | Ejecuta comandos del CLI de Astro                |

---

## Stack y convenciones

- **Framework:** Astro 7 con output por servidor (`@astrojs/node`, modo standalone).
- **Estilos:** Tailwind CSS v4 en modo CSS-first. Las variables de tema se declaran en `src/styles/global.css` usando `@theme inline`. No usar `tailwind.config.*`.
- **Base de datos:** Drizzle ORM + Turso (SQLite).
- **Migraciones:** `drizzle-kit push` o `drizzle-kit generate` según el entorno.
- **API:** rutas en `src/pages/api/*.ts` usando `APIRoute` de Astro.
- **TypeScript:** estricto, módulos ESM.

---

## Estructura del proyecto

```
/
├── drizzle/              # Migraciones generadas por Drizzle Kit
├── public/               # Archivos estáticos (favicon, imágenes)
├── src/
│   ├── components/       # Componentes Astro de la landing
│   ├── db/               # Configuración de Drizzle, esquemas y cliente
│   ├── layouts/          # Layouts de página
│   ├── pages/            # Rutas Astro y endpoints de API
│   └── styles/           # Estilos globales con Tailwind v4
├── .env.example
├── astro.config.mjs
├── drizzle.config.ts
└── package.json
```

---

## Reglas de trabajo

- No modificar lógica de negocio existente a menos que se solicite explícitamente.
- Mantener la landing page enfocada en presentar el producto y captar interesados.
- Cualquier cambio en la API de suscripción debe validar el email y manejar el error de duplicado.
- No exponer secrets ni credenciales en el código o en commits.
- El formulario de suscripción debe seguir funcionando sin base de datos en desarrollo local si no hay credenciales configuradas.

---

## Documentación de Astro

Antes de trabajar en tareas relacionadas, consultar las guías oficiales:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

## Skills disponibles

El repositorio incluye skills en `.agents/skills/` y `.claude/skills/`. Cargar la skill correspondiente cuando la tarea lo amerite (UI, copywriting, Tailwind v4, etc.).
