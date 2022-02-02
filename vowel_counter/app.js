// SELECTORS
const inputString = document.querySelector('.vowel-input');
const inputButton = document.querySelector('.submit-button')

// EVENT LISTENERS
inputButton.addEventListener('click', vowelCounter);

// FUNCTIONS
function vowelCounter(event){
    event.preventDefault();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    letters = inputString.value.split('');
    let counter = 0;
    for (let i = 0; i < letters.length; i++){
        letters[i] = letters[i].toLowerCase();
        if (vowels.includes(letters[i])){
            counter ++;
        }
    }
    
    const element = document.getElementById('vowel-count');
    
    if (element.children.length > 0){
        console.log(element.children[1])
        element.children[0].innerText = counter;
        element.children[1].innerText = "vowels in \'" + inputString.value + "\'";
    }else{
        const output = document.createElement("h2");
        const msg = document.createElement("h3");
        const node = document.createTextNode(counter);
        const node2 = document.createTextNode("vowels in \'" + inputString.value + "\'");
        output.append(node);
        msg.append(node2);
        element.appendChild(output);
        element.appendChild(msg);
    }
}