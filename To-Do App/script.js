
var addButton = document.getElementById('add-btn');
var text = document.getElementById('input-text');
var value = '';
var rmvButton = document.getElementById('rmv-btn');

text.addEventListener('input', function (e){
    value = e.target.value;
})
function newItem() {
    var newListItem = document.createElement('li');
    var textNode = document.createTextNode(value);
    newListItem.appendChild(textNode);
    var list = document.getElementById('list');
    list.appendChild(newListItem);

    return newListItem;
    
}
function addItem() {
    if(value !== undefined && value !== null && value !== ''){
        var newListItem = newItem();
        text.value = '';
        value = '';
    }
    else{
        alert('Enter a valid text.')
    }
}
function rmvItem() {
    var firstItem = list.firstElementChild;
    list.removeChild(firstItem);
} 
text.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){
        addItem();
    }
})


addButton.addEventListener("click",addItem );
rmvButton.addEventListener('click',rmvItem );
