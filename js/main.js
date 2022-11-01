var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

const menuHamburguer = document.querySelector(".menuHamburguer");
const navMenu = document.querySelector(".navMenu");
const navIdioma = document.querySelector(".navIdioma");

menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
    navIdioma.classList.toggle('ativo');
});

var typed = new Typed(".typed",{
    strings : [
        'senvolvedor',
        'signer'
      ],
    smartBackspace: false,
    typeSpeed : 100,
    backSpeed : 80,
    startDelay : 1000,
    backDelay : 1500,
    loop : true,
    loopCount : Infinity,
});

var swiper = new Swiper(".cardsSlider", {
    slidesPerView: 3,
    spaceBetween: 0,
    mousewheel: true,
});

const mensagem = document.getElementById("mensagem");
mensagem.style.cssText = `height: ${mensagem.scrollHeight}px; overflow-y:hidden`;
mensagem.addEventListener("keyup", e =>{
    mensagem.style.height = "24px";
    let scHeight = e.target.scrollHeight;
    mensagem.style.height = `${scHeight}px`;
});