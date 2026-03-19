# 🛍️ Google Store - Product Pages

Proyecto frontend que recrea páginas de producto tipo Google Store utilizando **HTML, CSS (mobile-first)** y **JavaScript**.

---

## 📌 Descripción

Este proyecto consiste en el desarrollo de dos páginas de producto:

* 🎧 **Google Pixel Buds Pro**
* ⌚ **Fitbit Inspire 3 (Smartwatch)**

El objetivo ha sido replicar un diseño realista basado en mockups, aplicando buenas prácticas de maquetación, responsive design y comportamiento interactivo.

---

## 🚀 Funcionalidades

### 🖼️ Galería de imágenes (Earbuds)

* Miniaturas (`thumbnails`) clicables
* Cambio dinámico de imagen principal con JavaScript
* Indicador visual de selección

### 🎨 Selección de color

* Uso de inputs tipo `radio`
* Estilos personalizados para selección activa
* Diseño limpio sin inputs visibles

### 🔁 Cambio de imagen dinámico

* Implementado con JavaScript
* Uso de atributos `data-*`
* Interacción sin recargar la página

### 📱 Diseño responsive (Mobile First)

* Mobile → estructura vertical
* Tablet → aparecen thumbnails
* Desktop → layout en dos columnas

### 🔗 Navegación entre páginas

* Enlaces entre productos
* Botón de “volver atrás”

---

## 🧱 Tecnologías utilizadas

* HTML5
* CSS3 (Flexbox + Media Queries)
* JavaScript (DOM manipulation)
* Metodología **Mobile First**

---

## 📁 Estructura del proyecto

```
/project
│
├── pixel-buds.html
├── smartwatch.html
├── style.css
├── googlestore-2.css
├── script.js
│
└── /images
    ├── earbuds/
    ├── smartwatch/
    └── icons/
```

---

## 🧠 Aprendizajes clave

* Uso de **Flexbox** para layouts complejos
* Diferencia entre **estructura HTML vs comportamiento CSS**
* Implementación de **eventos en JavaScript**
* Uso de `data-*` para manejar información dinámica
* Importancia de la **organización del código**
* Buenas prácticas con **commits (feat, fix, etc.)**

---

## ⚠️ Retos encontrados

* Problemas con rutas de imágenes
* Conflictos entre estilos en media queries
* Diferencias entre diseño mockup vs implementación real
* Control del layout en distintas resoluciones

---

## 💡 Mejoras futuras

* Añadir animaciones al cambiar imágenes
* Sincronizar selección de color + thumbnails
* Implementar carrito de compra
* Optimización del código CSS
* Separación en componentes reutilizables

---

## 👩‍💻 Autor

Proyecto desarrollado como parte del aprendizaje en **Frontend / Fullstack Developer**.

---

## 📸 Preview

Interfaz basada en diseño tipo ecommerce con:

* Galería interactiva
* Selección de producto
* Diseño responsive

---

✨ Proyecto enfocado en aprendizaje, mejora continua y buenas prácticas.
