
# Proyecto Veterinaria
Este repositorio contiene el proyecto de un sistema de gestión para una **veterinaria**, desarrollado con **React**, **Vite** y **Firebase**.  
Permite gestionar **mascotas, citas y servicios**, con una interfaz web intuitiva y almacenamiento en la nube mediante Firebase.

---

## Contenido

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Historial de versiones](#historial-de-versiones)

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
VETERINARIA
src/
┣ assets/
┃ ┣ images/
┃ ┃ ┗ login.png
┃ ┗ react.svg
┣ components/
┃ ┣ forms/
┃ ┃ ┣ IngresoCliente.jsx
┃ ┃ ┗ IngresoMascota.jsx
┃ ┣ layout/
┃ ┃ ┣ NavBar.jsx
┃ ┃ ┗ Sidebar.jsx
┃ ┣ ui/
┃ ┃ ┗ ModalBase.jsx
┃ ┗ CerrarSesion.Jsx
┣ context/
┃ ┣ AuthContext.js
┃ ┗ AuthProvider.jsx
┣ pages/
┃ ┣ asistente/
┃ ┃ ┣ FichaIngreso.jsx
┃ ┃ ┗ IndexAsistente.jsx
┃ ┣ shared/
┃ ┣ veterinario/
┃ ┃ ┣ IngresoAtencion.jsx
┃ ┃ ┣ IngresoReceta.jsx
┃ ┃ ┗ ModificarAtencion.jsx
┃ ┣ Home.jsx
┃ ┣ Login.jsx
┃ ┣ Perfil.jsx
┃ ┗ Register.jsx
┣ routes/
┃ ┣ AppRouter.jsx
┃ ┗ ProtectedRoute.jsx
┣ services/
┃ ┣ firebase.js
┃ ┗ userService.js
┣ App.css
┣ App.jsx
┣ index.css
┣ main.jsx
┗ router.jsx
```

## Historial de versiones

- v0.1: Creacion del proyecto.
- v0.2: Creacion de formularios, mejoras menores.
- v0.3: Creacion de formulario cliente y separacion por componentes.
- v0.4: Creacion de modal Cliente-Mascota, Sidebar finalizada