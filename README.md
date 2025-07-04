# DiagnostikCare - Plataforma Web

---

## 📋 Descripción

Es una plataforma web desarrollada con **Next.js**, **TypeScript** y **Material-UI (MUI)**, enfocada en la gestión eficiente de usuarios y datos relacionados. El proyecto incluye funcionalidades clave como:

- Listado paginado de usuarios con búsqueda y filtros.
- Visualización detallada de usuario.
- Administración de estado global usando **Redux Toolkit**.
- Estilos encapsulados mediante **styled-components**.
- Pruebas unitarias e integración con **Jest** y **React Testing Library**.

El objetivo principal es facilitar una experiencia de usuario ágil y moderna, con rendimiento optimizado y escalabilidad.

---

## nstrucciones para levantar el proyecto

### Requisitos previos

- **Node.js** versión 16 o superior (recomendado 18+)
- **npm** o **yarn** instalado
- Conexión a internet para instalar dependencias

---

### Pasos para desarrollo local

1. **Clona el repositorio**

```bash
git clone https://github.com/JAbdelEsp/diagnostikcare.git
cd diagnostikcare
```

2. **Instala dependencias**

```bash
npm install
# o si usas yarn
yarn install
```

3. **Levanta el servicio**

```bash

npm run dev

# o yarn dev

### Decisiones tecnicas
```

Next.js: Framework React para renderizado híbrido (SSR, SSG) y enrutamiento basado en archivos.

TypeScript: Para robustez, mantenibilidad y autocompletado en el desarrollo.

Material-UI (MUI): Biblioteca UI con componentes accesibles, personalizables y responsivos.

Redux Toolkit: Manejo eficiente del estado global, con slices y manejo de acciones asíncronas.

styled-components: Para estilos encapsulados y dinámicos sin conflictos en el scope.

Testing: Uso de Jest y React Testing Library para asegurar calidad del código y evitar regresiones.

Paginación: Implementada con el componente DataGrid de MUI, permitiendo paginado y ordenamiento.

Optimización del Build: Exclusión de archivos pesados y node_modules del repositorio con .gitignore para evitar problemas de tamaño.

Estructura de Carpetas Limpia:

/pages: Contiene rutas y componentes de página.

/components: Componentes reutilizables UI.

/styles: Archivos de estilos específicos.

/store: Configuración y slices de Redux.

/tests: Pruebas unitarias y de integración.

### ScreenShots

### desktop

![alt text](<Screenshot 2025-07-04 at 8.52.15 a.m..png>)
![alt text](<Screenshot 2025-07-04 at 8.53.10 a.m..png>)
![alt text](<Screenshot 2025-07-04 at 8.54.01 a.m..png>)

### mobile

![alt text](<WhatsApp Image 2025-07-04 at 08.54.55.jpeg>)
![alt text](<WhatsApp Image 2025-07-04 at 08.56.25.jpeg>)
