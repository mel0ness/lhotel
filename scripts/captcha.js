const allClickOne = document.getElementById("allClick1");
const allClickTwo = document.getElementById("allClick2");
const allClickThree = document.getElementById("allClick3");
const allClickFour = document.getElementById("allClick4");
const inputOne = document.getElementById("type_1");
const inputTwo = document.getElementById("type_2");
const inputThree = document.getElementById("type_3");
const inputFour = document.getElementById("type_4");

const nimals = document.getElementById("nimalsCadre")
const noNimals = document.getElementById("type_11");
const yesNimals = document.getElementById("type_22");
const msgNimals = document.getElementById("msgNimal");

const yesCook = document.getElementById("noButYes");
const noCook = document.getElementById("yesButNo");
const container = document.getElementById("yesorno");

yesCook.addEventListener("click", () => {
    container.style.left = "200%";
    container.style.transition = "2s";
    container.style.transform = "scale(0.1)";
    container.style.opacity = "0";
})

noCook.addEventListener("click", () =>{
    location.href="../index.html"
})

nimals.addEventListener("click", () => {
    if(yesNimals.checked === true) {
        msgNimals.required = true;
        msgNimals.minLength = "10";
    }
    else if(noNimals.checked === true) {
        msgNimals.required = false;
        msgNimals.minLength = "0";
    }
})

allClickOne.addEventListener("click", () => {
    inputOne.checked = true;
    allClickOne.classList.add("chosen");
    allClickTwo.classList.remove("chosen");
    allClickThree.classList.remove("chosen");
    allClickFour.classList.remove("chosen");
})

allClickTwo.addEventListener("click", () => {
    inputTwo.checked = true;
    allClickOne.classList.remove("chosen");
    allClickTwo.classList.add("chosen");
    allClickThree.classList.remove("chosen");
    allClickFour.classList.remove("chosen");
})

allClickThree.addEventListener("click", () => {
    inputThree.checked = true;
    allClickOne.classList.remove("chosen");
    allClickTwo.classList.remove("chosen");
    allClickThree.classList.add("chosen");
    allClickFour.classList.remove("chosen");
})

allClickFour.addEventListener("click", () => {
    inputFour.checked = true;
    allClickOne.classList.remove("chosen");
    allClickTwo.classList.remove("chosen");
    allClickThree.classList.remove("chosen");
    allClickFour.classList.add("chosen");
})



function submitBtn() {
    document.getElementById("btnImp").classList.add("activable");
    document.getElementById("btnImp").textContent = "J'ai validé le Captcha, cliquez ici!"
}

document.getElementById("btnImp").addEventListener("click", () => {
    
    const btnImpo = document.getElementById("btnImp2");
    const btnDisap = document.getElementById("btnImp");

    if(btnDisap.classList.contains("activable") == true && container.style.opacity == "0"){
btnDisap.style.visibility = "hidden";
btnImpo.style.visibility = "visible";
btnImpo.disabled = false;

}
else if(btnDisap.classList.contains("activable") == true && container.style.opacity !== "0") {
    btnDisap.textContent = "Veuillez accepter les cookies puis re-cliquer"
}
})