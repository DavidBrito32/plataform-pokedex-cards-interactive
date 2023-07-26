let controle = 1;

const abreMenu = () => {
  menu.classList.toggle("active");
  noturno.classList.toggle("active");
  login.classList.toggle("active");
  overlay.classList.toggle("active");
};

const fechaMenu = () => {
  menu.classList.remove("active");
  noturno.classList.remove("active");
  overlay.classList.remove("active");
  pokedex.classList.remove("active");
};

const alteraDarkLight = () => {
  noturno.classList.toggle("dia");
  bodyId.classList.toggle("active");
};

const voltaSlide = () => {
  const slideUm = document.querySelector("#first");
  const slidedois = document.querySelector("#second");
  const slidetres = document.querySelector("#thirdy");

  if (controle === 2) {
    slideUm.classList.add("active");
    slidedois.classList.remove("active");
    slidetres.classList.remove("active");
    slidetres.classList.add("desactive");
    controle--;
    console.log(controle);
  } else if (controle === 3) {
    slidedois.classList.add("active");
    slidedois.classList.remove("desactive");
    slidetres.classList.remove("active");
    controle--;
    console.log(controle);
  } else if (controle === 1) {
    slidetres.classList.add("active");
    slidetres.classList.remove("desactive");
    slideUm.classList.add("active");
    controle = 3;
    console.log(controle);
  }
};

const avancaSlide = () => {
  const slideUm = document.querySelector("#first");
  const slidedois = document.querySelector("#second");
  const slidetres = document.querySelector("#thirdy");

  if (controle === 1) {
    slidetres.classList.remove("active");
    slideUm.classList.add("desactive");
    slideUm.classList.remove("active");
    slidedois.classList.add("active");
    controle++;
    console.log(controle);
  } else if (controle === 2) {
    slidedois.classList.add("active");
    slidetres.classList.add("active");
    slidetres.classList.remove("desactive");
    controle++;
    console.log(controle);
  } else if (controle === 3) {
    controle = 1;
    slidedois.classList.remove("active");
    slidedois.classList.add("desactive");
    slidetres.classList.remove("active");
    slideUm.classList.add("active");
    console.log(controle);
  }
};

const abrePokedex = () => {
  pokedex.classList.toggle("active");
  overlay.classList.toggle("active");
};

const fechaPokedex = () => {
  pokedex.classList.remove("active");
  overlay.classList.remove("active");
};

abrePoke.addEventListener("click", abrePokedex);//evento de click que abre a pokedex

prev.addEventListener("click", voltaSlide);//evento de click botao voltar slide
next.addEventListener("click", avancaSlide);//evento de click botao avancar slide

burguer.addEventListener("click", abreMenu);//evento de click botao abrir meu hamburguer
noturno.addEventListener("click", alteraDarkLight);//evento de click botao modo dark-light
overlay.addEventListener("click", fechaMenu);
