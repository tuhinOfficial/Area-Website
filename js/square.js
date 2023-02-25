 // Square

 document.getElementById('square-button').addEventListener('click' , function(){

    const inputOne= getInputvalues('square-input');
    
    
    const squareResult= inputOne*inputOne;

    if(isNaN(squareResult)){
        alert('please Provide valid Data');
        return;
    }


    // Show Result
    const h1= document.createElement('h1');
    h1.innerText=`${squareResult}`;
    
    const Result= document.getElementById('square-result');
    Result.appendChild(h1);

    document.getElementById('square-remove').removeAttribute('disabled');

    document.getElementById('square-input').setAttribute('disabled',true);

    
})

document.getElementById('square-remove').addEventListener('click' ,function(){
    document.getElementById('square-input').removeAttribute('disabled',true);
    const remove=document.getElementById('square-result');
    remove.removeChild(remove.firstElementChild);
    
})