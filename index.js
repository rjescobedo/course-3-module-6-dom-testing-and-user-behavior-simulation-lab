// Grab simulate-click button
const simulateButton = document.getElementById('simulate-click');
//Add click eventListener
simulateButton.addEventListener('click', () => {
    console.log('button clicked!')
    //Get a hold of the dynamic-content div
    const dynamicContent = document.getElementById('dynamic-content');
    // Create paragraph element
    const addContent = document.createElement('p');
    // Add textContent to the p-tag
    addContent.textContent = 'button clicked!'
    //Appen do the dynamicContent div
    dynamicContent.append(addContent);
})
// Grab user-form ID
const submitForm = document.getElementById('user-form');
// addEventListener and listen for a 'submit'
submitForm.addEventListener('submit', (event) => {
    //Passed in event to handle preventDefault so it doesn't refresh the page once submitted
    event.preventDefault();
    // Grabbed the value of the user input field
    const userInput = document.getElementById('user-input').value;
    //Like earlier, get a hold of the dynamicContent div
    const dynamicContent = document.getElementById('dynamic-content');
    //Grab the errorMessage div to handle any errors
    const errorMessage = document.getElementById('error-message');
    // Create a paragraph element
    const addContent = document.createElement('p');
    
    //if the userInput is empty, pass this error
    if(userInput === ''){
        console.error('Error submitting form')
        addContent.textContent = 'Error Submitting Form!'
        errorMessage.classList.remove('hidden');
        errorMessage.append(addContent);
    //else, add the text content to dynamicContent
    } else {
        console.log(`Form submitted: ${userInput}`)
        addContent.textContent = userInput;
        dynamicContent.append(addContent);
    }
   
})
