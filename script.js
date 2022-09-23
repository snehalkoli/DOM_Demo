const addB = document.getElementsByClassName('add-button')[0];
const listB = document.getElementsByClassName('movie-list')[0];

function addElement(){
    const inputBox=document.getElementsByClassName('movie-input')[0];
    const inputText=inputBox.value;
    console.log(inputText);
    if(inputText){
        createItem(inputText);
    }
    function createItem(value){
        const newD = document.createElement('div');
        const item = document.createElement('li');
        item.setAttribute('class','movie-list');
        item.innerText = value;
        // const p = document.createElement('p');
        // p.innerText = value;
        // const complete = document.createElement('button');
        // complete.innerText = "completed";
        // complete.setAttribute('class','complete-btn');
        const trash = document.createElement('span');
        trash.innerText = "delete";
        trash.setAttribute('class','delete');
        // item.append(...[p,complete,trash]);
        newD.append(...[item, trash]);
        listB.appendChild(newD);
    }

    addB.addEventListener('click',function(event){
    event.preventDefault();
    addElement();

});

document.addEventListener('click',function(event){
    if(event.target.className === "trash-btn"){
        // console.log(event.target);
        const removeItem = event.target.parentNode ;
        // console.log(removeItem);
        removeItem.remove();
    }
    else if(event.target.className === "complete-btn"){
        const removeItem = event.target.parentNode.childNodes[0] ;
        if(removeItem.classList.contains('strikeh')){
            removeItem.classList.remove('strikeh');
        }
        else
        {
            removeItem.classList.add('strikeh');
        }
    }
})

}