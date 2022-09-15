var dia = prompt(
  "Ingresa el día del evento (Ejemplo: '8 de febrero')                                                      "
);
var horario = prompt(
  "Ingresa el horario del evento (Ejemplo: '9:00-12:00 h.')                                                      "
);
const first = "¡Aparta el ";
const last = " de 2022!";
var fecha = first + dia + last;
var email = prompt("Ingresa el email del invitado");
console.log(email)
//#############################################################################################
document.getElementById("output").innerHTML = dia;
document.getElementById("out").innerHTML = horario;


const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({values:{email:email,dia:dia,horario:horario}})
};
fetch("https://beemexico.com/lenovo-event/registroInvitados", requestOptions)
  .then(async response => {
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson && await response.json();
      // check for error response
      if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
      }
  })
  .then(()=>document.querySelector("main").addEventListener("click", downloadInvite))
  .catch(error => {
      console.error('There was an error!', error);
  });

// #############################################################################################
function downloadInvite(e) {
  htmlToImage.toJpeg(e.currentTarget, { quality: 0.95 }).then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "invite.jpeg";
    link.href = dataUrl;
    link.click();
    link.remove();
  });
}
//#############################################################################################