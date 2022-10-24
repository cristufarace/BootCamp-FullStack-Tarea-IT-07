// 2 A través de un callback asociado al evento DOMContentLoaded de document, escribir en la consola el texto "Contenido del DOM cargado".
window.addEventListener("DOMContentLoaded", () => {
//   console.log("Contenido del DOM cargado");

  // 3 Cargar desde JS el value del textarea con el siguiente contenido:
  // <p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>

  let textarea = document.getElementById("origen");
  textarea.value =
    "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";
//   console.log(textarea);

  // 4 Cuando se dispare el evento input del textarea, obtener un HTMLCollection con todos los <input> de la página y cambiar a false su propiedad disabled para que los mismos dejen de estar deshabilitados. Hacer lo mismo con el botón que falta.

  textarea.addEventListener("input", () => {
    // desactivo disabled cada input
    let inputs = document.getElementsByTagName("input");
    for (let inp = 0; inp < inputs.length; inp++) {
      inputs[inp].disabled = false;
    }
    // desactivo disabled boton
    let botonConvertirAMinisculas = document.getElementsByTagName("button")[0];
    // console.log(botonConvertirAMinisculas);
    botonConvertirAMinisculas.disabled = false;
  });

  // 5 Programar los 5 botones superiores para que cumplan estas funciones:
  // Botón "Reemplazar": reemplaza el contenido del div destino por el contenido del textarea origen.

  let botonReemplazar = document.getElementsByTagName("input")[0];
  botonReemplazar.addEventListener("click", ()=> {
    let destino = document.getElementById("destino")
    destino.innerHTML = textarea.value
  })
//   console.log(botonReemplazar);

  // Botón "Agregar": agrega el contenido del textarea origen al contenido del div destino.
  let botonAgregar = document.getElementsByTagName("input")[1];
  botonAgregar.addEventListener("click", ()=> {
    let destino = document.getElementById("destino")
    destino.innerHTML = textarea.value + textarea.innerHTML
  })
//   console.log(botonAgregar);

  // Botón "Agregar 5 veces": agrega 5 veces el contenido del textarea origen al contenido del div destino.
  let botonAgregar5Veces = document.getElementsByTagName("input")[2];
  botonAgregar5Veces.addEventListener("click", ()=> {
    let destino = document.getElementById("destino")
    destino.innerHTML = (textarea.value + textarea.innerHTML).repeat(5)
  })
//   console.log(botonAgregar5Veces);

  // Botón "Agregar 10 veces": agrega 10 veces el contenido del textarea origen al contenido del div destino.
  let botonAgregar10Veces = document.getElementsByTagName("input")[3];
  botonAgregar10Veces.addEventListener("click", ()=> {
    let destino = document.getElementById("destino")
    destino.innerHTML = (textarea.value + textarea.innerHTML).repeat(10)
  })
//   console.log(botonAgregar10Veces);

  // Botón "Agregar n veces": agrega la cantidad de veces que indique el usuario (a partir de un prompt) el contenido del textarea origen al contenido del div destino.
  let botonAgregarNveces = document.getElementsByTagName("input")[4];
  botonAgregarNveces.addEventListener("click", ()=> {
    let Nveces = prompt("Ingresa cuantas veces quieres que repita el texto en numeros")
    let destino = document.getElementById("destino")
    destino.innerHTML = (textarea.value + textarea.innerHTML).repeat(Nveces)
  })
//   console.log(botonAgregarNveces);

  // 6 Programar los 3 botones inferiores para que cumplan estas funciones:
  // Botón "Vaciar": vacía el contenido del div destino.
  let botonVaciar = document.getElementsByTagName("input")[5];
  botonVaciar.addEventListener("click", ()=> {
    let destino = document.getElementById("destino")
    destino.innerHTML = ""
  })
//   console.log(botonVaciar);

  // Botón "Convertir a mayúsculas": convierte en mayúsculas el contenido del div destino.
  let botonConvertirAMayusculas = document.getElementsByTagName("input")[6];
  botonConvertirAMayusculas.addEventListener("click", ()=> {
    let destino = document.getElementById("destino")
    destino.innerHTML = destino.innerHTML.toUpperCase()
  })
//   console.log(botonConvertirAMayusculas);

  // Botón "Convertir a minúsculas": convierte en minúsculas el contenido del div destino.
  let botonConvertirAMinisculas = document.getElementsByTagName("button")[0]
  botonConvertirAMinisculas.addEventListener("click", ()=> {
    let destino = document.getElementById("destino")
    destino.innerHTML = destino.innerHTML.toLowerCase()
  })

  // 7 Una vez terminados los puntos anteriores, obtener un HTMLCollection con todos los <li> de la página y agregar al inicio de su contenido el texto "[Ok] ".
const allLi = document.getElementsByTagName("li")
for (let li = 0; li < allLi.length; li++) {
    let cadaTexto = allLi[li].innerHTML
    allLi[li].innerHTML = "[Ok]" + cadaTexto
  }

//   cierre del content loaded
});





// hacer fork, modificar, hacer push, entrar a github, aparece "realizr pull requiest"
