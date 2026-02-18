let sexSelected = "Boy";

const names = ["Alice", "Bob", "Bia", "Diana", "Pedro",
    "Nicholas", "Grace", "Ernesto", "Angelica", "Alvaro",
    "Frederick", "Maria", "Nena", "Dinho", "Bernardo", "Pura"];
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to reveal gender
async function revealGender() {
    btnRev.style.display = 'none';
    const namesContainer = document.getElementById('namesContainer');
    let usedNumbers = [];

    for (let index = 0; index < names.length; index++) {
        let randomIndex = Math.floor(Math.random() * names.length);

        while (usedNumbers.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * names.length);
        }
        usedNumbers.push(randomIndex);

        //more snowflakes
        for (let index = 0; index < 20; index++) {
            createDoll(index);
            await sleep(50);
        }

        // Save the number to avoid repetition
        nameToShow = names[randomIndex];
        namesContainer.textContent = nameToShow;
        namesContainer.style.display = 'block';

        await sleep(300);
        namesContainer.style.display = 'none';
        await sleep(100); // pequena pausa invisível

    }

    // Ao final de tudo, apaga e esconde
    namesContainer.textContent = "";
    namesContainer.style.display = 'none';
    //more snowflakes
    for (let index = 0; index < 500; index++) {
        createDoll(index);
        await sleep(10);
    }
    await sleep(100);
    namesContainer.textContent = sexSelected;
    namesContainer.style.fontSize = '100px';
    namesContainer.style.display = 'block';
    if (sexSelected == 'Menina' || sexSelected == 'Female' || sexSelected == 'Girl')
        namesContainer.style.color = 'red';
    else
        namesContainer.style.color = 'blue';

}
// effect girl or boy
async function createDoll(number) {
    const doll = document.createElement('div');
    if (number % 2 === 0) {
        doll.classList.add('boy');
    } else {
        doll.classList.add('girl');
    }

    doll.style.left = Math.random() * window.innerWidth + 'px';
    doll.style.bottom = Math.random() * window.innerWidth + 'px';
    doll.style.animationDuration = (Math.random() * 3 + 2) + 's';
    let color;
    if (number % 2 === 0) {
        color = `rgb(${Math.floor(Math.random() * 64)}, ${Math.floor(Math.random() * 64)}, 255)`;
    } else {
        color = `rgb(255, ${Math.floor(Math.random() * 64)}, ${Math.floor(Math.random() * 64)})`;
    }
    doll.style.background = color;
    let randomRotate = Math.floor(Math.random() * 360) + 'deg';
    doll.style.transform = 'rotate(' + randomRotate + ')';
    document.body.appendChild(doll);
}