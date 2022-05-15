function mudaModo(){
    mudaClasse();
    mudaTexto();
}

function mudaClasse(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function mudaTexto(){
    const lgmode = "Light Mode";
    const dkmode = "Dark Mode";

    if(body.classList.contains(darkModeClass)){
        botao.innerHTML = lgmode;
        h1.innerHTML = dkmode;

        return;
    }

    botao.innerHTML = dkmode;
    h1.innerHTML = lgmode;
}

const darkModeClass = 'dark-Mode'
const button = document.getElementById('botao'); /*para selecionar o botão */
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; /* os [] vem por conta da tag retornar uma coleção */
const footer = document.getElementsByTagName('footer') [0];

botao.addEventListener('click', mudaModo)