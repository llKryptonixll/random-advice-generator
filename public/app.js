const id = document.querySelector(".id");
const advice = document.querySelector(".advice");
const button = document.querySelector(".get-random-advice-button");

async function getRandomAdvice () {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    console.log(data)

    id.innerText = `#${data.slip.id}`;
    advice.innerText = `"${data.slip.advice}"`
}

button.addEventListener("click", getRandomAdvice);
window.addEventListener("load", getRandomAdvice);