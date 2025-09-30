
# Proyecto Veterinaria v0.1  
Este repositorio contiene el proyecto de un sistema de gestión para una **veterinaria**, desarrollado con **React**, **Vite** y **Firebase**.  
Permite gestionar **mascotas, citas y servicios**, con una interfaz web intuitiva y almacenamiento en la nube mediante Firebase.

---

## Contenido

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Instalación](#instalación)
- [Ejecutar el proyecto](#ejecutar-el-proyecto)
- [Versionado](#versionado)
- [Cómo colaborar](#cómo-colaborar)
- [Licencia](#licencia)

---

## Descripción

El sistema permite:

- Registrar clientes y sus mascotas
- Alertas y confirmaciones interactivas con **SweetAlert**
- Sin necesidad de backend propio: todo se maneja con **Firebase Firestore y Authentication**

---

## Tecnologías

- **Frontend:** React, Vite  
- **Alertas y notificaciones:** SweetAlert  
- **Base de datos y autenticación:** Firebase (Firestore y Firebase Auth)  
- **Otros:** Git, GitHub, CSS / Bootstrap (según implementación)

---

## Estructura de Carpetas

```text
/proyecto_veterinaria
    /src
        /assets
        /components
            CerrarSesion.jsx
            FichaIngresoForm.jsx
        /context
            AuthConext.js
            AuthProvider.jsx
        /pages
            FichaIngreso.jsx
            Home.jsx
            Login.jsx
            Register.jsx
        /routes
            AppRouter.Jsx
            ProtecedRoute.jsx
        /services
            firebase.js
            userService.js
        App.css
        App.jsx
        index.css
        main.jsx
        router.jsx
index.html
package-lock.json
package.json
READEME.md
vite.config.js