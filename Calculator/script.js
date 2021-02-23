var input = document.getElementById('screen');
var buttons = document.getElementsByTagName('button');
var scrValue = '';

for(items of buttons){
    items.addEventListener('click',function(){
        buttonText = this.innerText;
        console.log(buttonText);
        
        
        if(buttonText == 'C'){
            input.value = '';
            scrValue = '';
        }
        else if(buttonText == '='){
            input.value = eval(scrValue);
        }
        
        else{
            scrValue += buttonText;
            input.value = scrValue;
        }
    })
}
