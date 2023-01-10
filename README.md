# GreydiveChallenge
<p>Este proyecto es la resolución a un challenge para <strong>"Greydive"</strong>.</p>

<ul>Para iniciar:

<li>Clonar repositorio: https://github.com/echezuri/GreydiveChallenge.git</li>
<li>Npm install desde una terminal en la carpeta descargada</li>
<li>Npm start desde la misma terminal</li>
<ul> Alternativa:
<li>Ingresar al siguiente enlace: https://greydive-challenge-x9ux.vercel.app</li>
</ul></ul>

<p>La app está compuesta de un componente <strong>HOME</strong>, que actúa como página de inicio. Donde simplemente se invita al usuario a realizar la encuesta.

Al ingresar al componente <strong>FORM</strong>, se renderiza un formulario en base al archivo db.json ubicado dentro de la carpeta db. Este archivo es el proporcionado en https://drive.google.com/file/d/1hsOMsEHx5mjFSt0nIPovciai8DdLq0Nu.

Una vez completados todos los campos, se ejecuta el Submit desde el botón "Enviar", y se muestra un modal a modo de confirmación de la operación. Inmediatamente se genera un nuevo campo debajo con un acceso a la respuesta del formulario.

Al acceder al componente <strong>RESPUESTA</strong> se muestra una tabla con las respuestas proporcionadas por el usuario.</p>

<ul>Se utilizó:

<li>Firebase (base de datos externa donde se almacenan las respuestas)</li>
<li>Axios (Para guardar y traer la información desde la base de datos)</li>
<li>React Hook Forms (Para gestionar la información obtenida en los campos del formulario)</li>
<li>React Router Dom (Para manejar las rutas dentro de la aplicación)</li>
<li>SweetAlert (Para generar el modal de confirmación luego del submit)</li>
</ul>

<ul>Estilos:

<li>En este caso utilicé CSS plano, sin ninguna librería de estilos.</li>
<li>La aplicación funciona tanto en vista escritorio como movil.</li>
</ul>
