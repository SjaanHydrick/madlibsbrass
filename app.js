

const geoInput = document.getElementById("geographic-feature-input");
const placeNameInput = document.getElementById("place-name-input");
const nameInput = document.getElementById("name-input");
const noun1Input = document.getElementById("noun1-input");
const noun2Input = document.getElementById("noun2-input");
const adjInput = document.getElementById("adjective-input");
const verbInput = document.getElementById("verb-input");
const animalInput = document.getElementById("animal-input");
const button = document.getElementById("button");

const geoOutput = document.getElementById("geographic-feature");
const placeNameOutput = document.getElementById("place-name");
const nameOutput = document.getElementById("name");
const noun1Output = document.getElementById("noun1");
const noun2Output = document.getElementById("noun2");
const adjOutput = document.getElementById("adjective");
const verbOutput = document.getElementById("verb");
const animalOutput = document.getElementById("animal");

// name-2, noun1-2, name-3, noun2-2, noun1-3
const name2Output = document.getElementById("name-2");
const noun12Output = document.getElementById("noun1-2");
const name3Output = document.getElementById("name-3");
const noun22Output = document.getElementById("noun2-2");
const noun13Output = document.getElementById("noun1-3");

button.addEventListener('click', () => {
    const geoInputValue = geoInput.value;
    const placeNameInputValue = placeNameInput.value;
    const nameInputValue = nameInput.value;
    const noun1InputValue = noun1Input.value;
    const noun2InputValue = noun2Input.value;
    const adjInputValue = adjInput.value;
    const verbInputValue = verbInput.value;
    const animalInputValue = animalInput.value;

    // set each output to the values above
    geoOutput.textContent = geoInputValue;
    placeNameOutput.textContent = placeNameInputValue;
    nameOutput.textContent = nameInputValue;
    noun1Output.textContent = noun1InputValue;
    noun2Output.textContent = noun2InputValue;
    adjOutput.textContent = adjInputValue;
    verbOutput.textContent = verbInputValue;
    animalOutput.textContent = animalInputValue;
    
    name2Output.textContent = nameInputValue;
    noun12Output.textContent = noun1InputValue;
    name3Output.textContent = nameInputValue;
    noun22Output.textContent = noun2InputValue;
    noun13Output.textContent = noun1InputValue;
    
    // toggle hidden somehow?

});