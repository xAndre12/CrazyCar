const masina = document.querySelector(".masina");
const sageataStanga = document.querySelector(".je");
const sageataSus = document.querySelector(".je1");
const sageataDreapta = document.querySelector(".je2");
const sageataJos = document.querySelector(".je3");

masina.style.left = 0;
masina.style.top = 0;

// masina.style.transform = "rotate(90deg)";

sageataDreapta.addEventListener("click", () => {
    masina.style.left = parseInt(masina.style.left) + 50 + 'px';
    masina.style.transform = "rotate(0deg)";
})

sageataStanga.addEventListener("click", () => {
    masina.style.left = parseInt(masina.style.left)- 50 + 'px';
    masina.style.transform = "rotate(-180deg)";
})
sageataSus.addEventListener("click", () => {
    masina.style.top = parseInt(masina.style.top)- 50 + 'px';
    masina.style.transform = "rotate(-90deg)";
})

sageataJos.addEventListener("click", () => {
    masina.style.top = parseInt(masina.style.top)+ 50 + 'px';
    masina.style.transform = "rotate(90deg)";
})

