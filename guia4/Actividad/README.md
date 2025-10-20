Descripción general del proyecto
Este proyecto consiste en una página web sencilla y funcional hecha en un solo archivo HTML, donde se implementa una interfaz de inicio de sesión utilizando el framework Bootstrap 5, un poco de CSS personalizado y JavaScript.

El propósito del ejercicio es mostrar cómo se combinan las tres tecnologías principales del desarrollo web (HTML, CSS y JS) dentro de un mismo documento, aprovechando la potencia visual de Bootstrap sin complicar el código.

🧩 Objetivo del código

El objetivo principal es simular un inicio de sesión básico, en el que el usuario pueda abrir un modal (ventana emergente), ingresar un nombre de usuario y una contraseña, y recibir una validación simple.

Este tipo de ejercicios sirve para aprender:

Cómo usar componentes de Bootstrap (botones, tarjetas, modales, formularios).

Cómo aplicar estilos personalizados con CSS.

Cómo controlar la interactividad de la página con JavaScript.

⚙️ Tecnologías utilizadas

HTML5 → Se usó para estructurar el contenido de la página (tarjeta, botones, modal y formulario).

CSS3 → Se aplicó un fondo azul claro, sombras suaves y bordes redondeados para mejorar la estética visual.

Bootstrap 5.3.3 → Framework CSS utilizado para los estilos, botones, estructura responsive y el diseño del modal.

JavaScript (Vanilla JS) → Se encargó de abrir el modal y validar el formulario de inicio de sesión.

🧱 Estructura del código

El archivo está organizado de forma limpia y clara en cuatro secciones principales:

1️⃣ Encabezado (<head>)

Se define el idioma (lang="es") y la codificación (UTF-8).

Se agrega el título de la página.

Se enlaza el CDN de Bootstrap para tener acceso a sus estilos sin descargar nada.

Se incluye un bloque <style> con un CSS mínimo que da un fondo azul claro (#e3f2fd) y una sombra a la tarjeta para resaltar.

2️⃣ Cuerpo de la página (<body>)

Se centra el contenido con una estructura de Bootstrap (container, row, col-md-4).

Dentro hay una tarjeta (card) que muestra:

Un título (“Bienvenido”).

Un texto corto explicativo.

Un botón verde “Iniciar Sesión” que abre el modal.

3️⃣ Modal (ventana emergente)

Este componente aparece cuando se presiona el botón.

Contiene un formulario de inicio de sesión, compuesto por:

Un campo de usuario (input type="text").

Un campo de contraseña (input type="password").

Un botón de enviar.

Todo dentro de una estructura de Bootstrap que da el estilo visual y la animación del modal.

4️⃣ Scripts (<script>)

Hay dos bloques de JavaScript:

🔹 Script 1 – Control del Modal
const modal = new bootstrap.Modal(document.getElementById('miModal'));
document.getElementById('abrirModal').addEventListener('click', () => {
    modal.show();
});


👉 Este fragmento se encarga de mostrar el modal cuando se hace clic en el botón “Iniciar Sesión”.
Se utiliza la clase bootstrap.Modal para invocar el componente desde el propio framework.

🔹 Script 2 – Validación del Formulario
const form = document.getElementById('formLogin');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.getElementById('password').value;
    if (user === "admin" && pass === "1234") {
        alert("Inicio de sesión exitoso ✅");
    } else {
        alert("Credenciales incorrectas ❌");
    }
});


👉 Este código evita que el formulario se envíe de forma tradicional (con preventDefault()), y valida si el usuario y la contraseña coinciden con los valores definidos:

Usuario: admin
Contraseña: 1234
Si son correctos, muestra un mensaje de éxito. Si no, muestra una alerta de error.

🎨 Detalles visuales y de diseño

Fondo: Azul claro suave (#e3f2fd) para dar una sensación limpia y profesional.

Tarjeta: Centrada, con sombra (box-shadow) para darle un efecto moderno y resaltar sobre el fondo.

Modal: Con bordes redondeados y estructura limpia gracias a Bootstrap.

Diseño responsive: Se adapta automáticamente a celulares, tabletas y computadoras.

Tipografía: Arial, clara y fácil de leer.

🧠 Funcionamiento general paso a paso

El usuario entra a la página y ve una tarjeta centrada con el botón verde “Iniciar Sesión”.

Al presionar el botón, se abre una ventana emergente (modal).

Dentro del modal, el usuario ingresa su nombre y contraseña.

Al presionar “Ingresar”:

El JavaScript toma los valores de los campos.

Verifica si son admin y 1234.

Si es correcto → muestra “Inicio de sesión exitoso ✅”.

Si no → muestra “Credenciales incorrectas ❌”.

El modal puede cerrarse con el botón “X” o haciendo clic fuera del cuadro.