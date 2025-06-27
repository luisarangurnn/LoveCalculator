# 💘 Calculadora del Amor 💘

Una divertida aplicación web que calcula la compatibilidad amorosa entre dos personas basándose en sus nombres.

---

## 📝 Descripción

La **Calculadora del Amor** es un proyecto simple desarrollado con **HTML**, **CSS** y **JavaScript**. Permite a los usuarios ingresar su nombre y el de su persona especial para obtener un porcentaje de compatibilidad amorosa y un mensaje según el resultado.

> **⚠️ Nota:** La lógica de cálculo no es científica, solo es con fines de entretenimiento. 😉

---

## 🚀 Funcionalidades

- ✅ Entrada personalizada de nombres.
- ✅ Cálculo de porcentaje de compatibilidad (0% - 100%).
- ✅ Mensaje dinámico basado en el resultado:
  - Si el porcentaje es **mayor o igual al 50%**: _"Luchen por su amor"_ ❤️
  - Si es **menor al 50%**: _"No hacen buena pareja"_ 💔
- ✅ Diseño responsivo adaptable a desktop y móviles.
- ✅ Estilo colorido y visualmente atractivo.

---

## 📂 Estructura del proyecto

CalculadoraDelAmor/
├── index.html
├── style.css
├── script.js
├── Readme.md
└── assets/
└── corazonicon.png
---
⚙️ Cómo ejecutar el proyecto
Clona o descarga el repositorio.

Abre el archivo index.html con tu navegador favorito (Chrome, Firefox, Edge, etc).

Ingresa dos nombres y haz clic en el botón "Calcular Amor".

🧮 Lógica del cálculo (Explicación técnica)
Se concatenan ambos nombres.

Se convierten todos los caracteres a minúsculas.

Se calcula la suma de los códigos ASCII de cada carácter.

Finalmente, el resultado se convierte en un porcentaje del 0 al 100 utilizando el operador módulo % 101.

Esto asegura que el resultado sea siempre un valor entre 0% y 100%.

🎨 Tecnologías utilizadas
HTML5 📄

CSS3 🎨

JavaScript (Vanilla JS) 💻

✨ Mejoras futuras
Añadir animaciones al mostrar el resultado.

Efectos de sonido para mayor interacción.

Opción de compartir el resultado en redes sociales.

Personalización de estilos según el porcentaje.

👩‍💻 Autor
Desarrollado por Luisarangurnn

🧡 Licencia
Proyecto de uso libre, creado solo con fines educativos y de entretenimiento.