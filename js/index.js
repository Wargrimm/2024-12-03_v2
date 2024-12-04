// alert("Le fichier Js n'est pas chargé");
function loadingDOM() {
  var notif = document.querySelector("#js-notification");
  notif.style.backgroundColor = "green";
  notif.innerHTML =
    'le <span style="font-weight:900;color:blue;">JS</span> est ok';
  document
    .querySelector("button.btn-danger")
    .addEventListener("click", function () {
      console.log("bouton du header cliqué");
    });
}

document.addEventListener(DOMContentLoaded, loadingDOM);
