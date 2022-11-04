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
    breakpoints: {
        425: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1440: {
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


function enviarEmail(){
    var params = {
        nomeContato: document.getElementById("nomeForm").value,
        emailContato: document.getElementById("emailForm").value,
        mensagemContato: document.getElementById("mensagemForm").value,
    };


    if(nomeForm.value === '' || emailForm.value === '' || mensagemForm.value === ''){
        erro.style.display = "block";
    }else{
        const serviceID = "service_ex3qosv";
        const templateID = "template_zwmy3tl";

        emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            sucesso.style.display = "block";
        })
        .catch((err) => erro.style.display = "block");
        sucesso.style.display = "block";

        setTimeout(() =>{
            nomeForm.value = '';
            emailForm.value = '';
            mensagemForm.value = '';
        }, 2000);
    }

    setTimeout(() =>{
        erro.style.display = 'none';
        sucesso.style.display = 'none';
    }, 4000);
};

