// get input first value

// document.getElementById('button').addEventListener('click' ,function(){
//     const input= document.getElementById()
// })

function getInputvalues(input){
    const inputs= document.getElementById(input);
    const inputStr= inputs.value;
    const inputValue= parseFloat(inputStr);
    
    
    inputs.value='';
    return inputValue;
}







