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
    mousewheel: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
      },
});
const mensagem = document.getElementById("mensagemForm");
mensagem.style.cssText = `height: ${mensagem.scrollHeight}px; overflow-y:hidden`;
mensagem.addEventListener("keyup", e =>{
    mensagem.style.height = "24px";
    let scHeight = e.target.scrollHeight;
    mensagem.style.height = `${scHeight}px`;
});
function enviarForm(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("sucesso").style.display = "block";
            document.getElementById("erro").style.display = "none";
            form.reset();
        } else {
            document.getElementById("sucesso").style.display = "none";
            document.getElementById("erro").style.display = "block";
        }
    })
    .catch(error => {
        console.error(error);
        document.getElementById("sucesso").style.display = "none";
        document.getElementById("erro").style.display = "block";
    });
    
    setTimeout(() =>{
        erro.style.display = 'none';
        sucesso.style.display = 'none';
    }, 4000);
}