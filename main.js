const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () =>
header.classList.toggle("active"));

function removeNav(){
    if(header.classList.contains("active")){
        header.classList.remove("active");
    }
}

let scrollTela = 0;
window.addEventListener('scroll', function(){
    let scrollAtual = window.pageXOffset || document.documentElement.scrollTop;

    if (scrollAtual > scrollTela){
        header.style.top = '-70px'
    }
    else{
        header.style.top = '0px'
    }
    scrollTela = scrollAtual <= 0 ? 0 : scrollAtual;
})

const btnProjetos = document.querySelector("#btn-projetos");
const projetos = document.querySelector("#projetosAdicionais");

btnProjetos.addEventListener("click", function (){
    btnProjetos.classList.toggle("rotacao");
    projetos.classList.toggle("projetsoActive");
});