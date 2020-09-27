

const geoInput = document.getElementById("geographic-feature-input");
const placeNameInput = document.getElementById("place-name-input");
const nameInput = document.getElementById("name-input");
const noun1Input = document.getElementById("noun1-input");
const noun2Input = document.getElementById("noun2-input");
const adjInput = document.getElementById("adjective-input");
const verbInput = document.getElementById("verb-input");
const animalInput = document.getElementById("animal-input");
const emotionInput = document.getElementById("emotion-input");
const settingInput = document.getElementById("setting-input");
const sizeInput = document.getElementById("size-input");
const poaInput = document.getElementById("poa-input");
const adjective2Input = document.getElementById("adjective2-input");
const noun3Input = document.getElementById("noun3-input");
const sittingInput = document.getElementById("sitting-input");
const noun4Input = document.getElementById("noun4-input");
const facialExpressionInput = document.getElementById("facial-expression-input");
const emotion2Input = document.getElementById("emotion2-input");
const button = document.getElementById("button");

const geoOutput = document.getElementById("geographic-feature");
const placeNameOutput = document.getElementById("place-name");
const nameOutput = document.getElementById("name");
const noun1Output = document.getElementById("noun1");
const noun2Output = document.getElementById("noun2");
const adjOutput = document.getElementById("adjective");
const verbOutput = document.getElementById("verb");
const animalOutput = document.getElementById("animal");
const emotionOutput = document.getElementById("emotion");
const settingOutput = document.getElementById("setting");
const sizeOutput = document.getElementById("size");
const poaOutput = document.getElementById("poa");
const poa2Output = document.getElementById("poa2");
const adjective2Output = document.getElementById("adjective2");
const noun3Output = document.getElementById("noun3");
const sittingOutput = document.getElementById("sitting");
const noun4Output = document.getElementById("noun4");
const sitting2Output = document.getElementById("sitting2");
const facialExpressionOutput = document.getElementById("facialexpression");
const emotion2Output = document.getElementById("emotion2");
const animal2Output = document.getElementById("animal2");
const noun21Output = document.getElementById("noun2-1");


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
    const emotionInputValue = emotionInput.value;
    const settingInputValue = settingInput.value;
    const sizeInputValue = sizeInput.value;
    const poaInputValue = poaInput.value;
    const adjective2InputValue = adjective2Input.value;
    const noun3InputValue = noun3Input.value;
    const sittingInputValue = sittingInput.value;
    const noun4InputValue = noun4Input.value;
    const facialExpressionInputValue = facialExpressionInput.value;
    
    



    // set each output to the values above
    geoOutput.textContent = geoInputValue;
    placeNameOutput.textContent = placeNameInputValue;
    nameOutput.textContent = nameInputValue;
    noun1Output.textContent = noun1InputValue;
    noun2Output.textContent = noun2InputValue;
    noun21Output.textContent = noun2InputValue;
    adjOutput.textContent = adjInputValue;
    verbOutput.textContent = verbInputValue;
    animalOutput.textContent = animalInputValue;
    animal2Output.textContent = animalInputValue;
    
    name2Output.textContent = nameInputValue;
    noun12Output.textContent = noun1InputValue;
    name3Output.textContent = nameInputValue;
    noun22Output.textContent = noun2InputValue;
    noun13Output.textContent = noun1InputValue;

    emotionOutput.textContent = emotionInputValue;
    emotion2Output.textContent = emotionInputValue;
    settingOutput.textContent = settingInputValue;
    sizeOutput.textContent = sizeInputValue;
    poaOutput.textContent = poaInputValue;
    adjective2Output.textContent = adjective2InputValue;
    noun3Output.textContent = noun3InputValue;
    sittingOutput.textContent = sittingInputValue;
    sitting2Output.textContent = sittingInputValue;
    poa2Output.textContent = poaInputValue;
    noun4Output.textContent = noun4InputValue;
    facialExpressionOutput.textContent = facialExpressionInputValue;
    
    
    // toggle hidden somehow?

});