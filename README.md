# Eva

> **Contale tu plan. Nosotros nos encargamos del resto.**

Eva es una aplicación de seguridad personal pensada para acompañar a las mujeres antes, durante y después de actividades que impliquen un mayor nivel de riesgo: conocer a alguien por primera vez, viajar sola, tomar un transporte privado o cualquier situación en la que sea importante que alguien de confianza sepa dónde están y qué están haciendo.

---

## ¿Qué problema resuelve?

Muchas personas comparten su ubicación o envían un mensaje de "ya llegué" como rutina de cuidado. Pero esos hábitos dependen de que nada salga mal en el trayecto: de que se acuerden, de que tengan batería, de que puedan reaccionar rápido.

Eva automatiza ese cuidado. La usuaria cuenta el plan una sola vez y, si no confirma que llegó bien dentro del tiempo acordado, la app notifica automáticamente a sus contactos de confianza con toda la información necesaria para actuar.

---

## ¿Cómo funciona?

1. **Armá tu plan** antes de salir  
   Indicá destino, actividad, con quién vas, tiempo estimado y contactos de confianza.

2. **Iniciá el seguimiento**  
   Eva registra tu ubicación en segundo plano de forma discreta y privada.

3. **Confirmá que todo salió bien**  
   Al terminar el tiempo estimado, la app te pregunta. Si respondés, el plan se cierra.

4. **Si no respondés, actuamos**  
   Pasado el margen de seguridad configurado, se activa el protocolo de emergencia.

---

## Características principales

- **Planes de seguimiento** con destino, descripción, tiempo estimado y margen de tolerancia.
- **Contactos seguros**: solo ellos reciben información cuando se activa una alerta.
- **Confirmaciones inteligentes**: la app pregunta primero, sin disparar alarmas de inmediato.
- **Extensión rápida** si la actividad se alarga.
- **PIN de seguridad** para crear planes, confirmar o finalizar un seguimiento.
- **Alerta silenciosa** para situaciones de coerción: un mecanismo discreto que notifica a los contactos sin levantar sospechas en pantalla.
- **Privacidad primero**: la ubicación no se comparte con terceros salvo durante una alerta de emergencia.

---

## Protocolo de emergencia

Cuando se activa una alerta, los contactos seguros reciben un enlace con:

- Nombre y teléfono de la usuaria.
- Descripción del plan, lugar previsto y hora de inicio.
- Última ubicación registrada e historial del recorrido.
- Mensaje personalizado de la usuaria.
- Accesos rápidos al mapa y al contacto telefónico.

Eva no reemplaza a los servicios de emergencia: les da a las personas cercanas la información necesaria para ayudar rápidamente.

---

## Sobre este repositorio

Este repositorio contiene la **landing page de Eva**: un sitio estático construido con Astro, Tailwind CSS v4 y el adaptador de Node.js, pensado para presentar el producto y captar correos de personas interesadas antes del lanzamiento.

Incluye:

- Página de presentación del producto.
- Formulario de suscripción con backend en `src/pages/api/register.ts`.
- Persistencia en Turso usando Drizzle ORM.

---

## Stack técnico

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4 (modo CSS-first con `@theme`)
- [Drizzle ORM](https://orm.drizzle.team) + [Turso](https://turso.tech)
- Adaptador: [`@astrojs/node`](https://docs.astro.build/en/guides/integrations-guide/node/) en modo standalone

---

## Empezar

### Requisitos

- Node.js >= 22.12.0
- pnpm

### Instalación

```bash
pnpm install
```

### Variables de entorno

Copiá el archivo de ejemplo y completá tus credenciales de Turso:

```bash
cp .env.example .env
```

```
TURSO_DATABASE_URL=libsql://...turso.io
TURSO_AUTH_TOKEN=
```

> **Nota para producción:** la landing page puede funcionar sin base de datos en modo de solo lectura. El formulario de suscripción requiere conexión a Turso.

### Comandos disponibles

| Comando           | Acción                                           |
| ----------------- | ------------------------------------------------ |
| `pnpm dev`        | Levanta el servidor de desarrollo                |
| `pnpm build`      | Compila el sitio en `./dist/`                    |
| `pnpm preview`    | Previsualiza la compilación localmente           |
| `pnpm astro ...`  | Ejecuta comandos del CLI de Astro                |

### Despliegue

La app se puede desplegar en cualquier plataforma que soporte Node.js. El adaptador genera un servidor standalone con `node ./dist/server/entry.mjs`.

---

## Estructura del proyecto

```
/
├── drizzle/              # Migraciones de Drizzle
├── public/               # Archivos estáticos
├── src/
│   ├── components/       # Componentes Astro de la landing
│   ├── db/               # Configuración de Drizzle y esquemas
│   ├── layouts/          # Layouts de página
│   ├── pages/            # Rutas Astro (incluye API)
│   └── styles/           # Estilos globales con Tailwind v4
├── .env.example
├── astro.config.mjs
├── drizzle.config.ts
└── package.json
```

---

## Licencia

Este proyecto es propiedad de [CROBF-tech](https://github.com/CROBF-tech). Todos los derechos reservados.

---

## Contacto

Para dudas, sugerencias o colaboraciones, escribinos a través de los canales de CROBF-tech.
