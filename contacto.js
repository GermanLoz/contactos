let buttonRes = document.getElementById("menu-res-contacto");
buttonRes.addEventListener("click", mostrarRess);
let testResponsive = false;
let responsiveA = document.getElementById("responsiveContacto");
function mostrarRess(){ 
     if(testResponsive == false){
      responsiveA.classList.add("nostrar-res");
      testResponsive = true;
} else if(testResponsive == true){
      responsiveA.classList.remove("nostrar-res");
      testResponsive = false;
 }
}
let wspp = document.querySelector(`.contacto-whatsapp`);
let numero = document.querySelector(`.contacto-numero`);
let instagram = document.querySelector(`.contacto-instagram`);
let facebook = document.querySelector(`.contacto-facebook`);
let gmail = document.querySelector(`.contacto-gmail`);
let h1 = document.querySelector(`.h1-contactos`);

function animarFunct(animar,animacion, number){
      let srl = document.documentElement.scrollTop;
      let altura = animar.offsetTop;
            if(altura -number < srl){
                  animacionn = animar.children;
                  for(let animaciones of animacionn){
                        animaciones.style.opacity="1";
                        animaciones.classList.add(animacion);
                  }
           }
}
window.addEventListener(`scroll`, e =>{
      animarFunct(wspp,`animacion-transform`, 500 );
      animarFunct(numero,`animacion-transform`, 500 );
      animarFunct(instagram,`animacion-transform`, 500 );
//      animarFunct(gmail,`animacion-transform`, 500 );
      animarFunct(facebook,`animacion-transform`, 500 );
      animarPrincipio(h1,`animacionh1-transform`, 500);
})
function animarPrincipio(animar,animacion, number){
      let srl = document.documentElement.scrollTop;
      let altura = animar.offsetTop;
            if(altura -number < srl){
                  animar.style.opacity="1";
                  animar.classList.add(animacion);
           }
};
