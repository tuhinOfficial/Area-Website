// Triangle

document.getElementById('tringle-button').addEventListener('click' , function(){
    const inputOne= getInputvalues('triangle-inputone');
    const inputtwo= getInputvalues('triangle-inputtwo');
    
    const triangleResult= .5*inputOne*inputtwo;

    if(isNaN(triangleResult)){
        alert('please Provide valid Data');
        return;
    }


    // Show Result
    const h1= document.createElement('h1');
    h1.innerText=`${triangleResult}`;
    
    const Result= document.getElementById('result');
    Result.appendChild(h1);

    document.getElementById('tri-remove').removeAttribute('disabled');

    document.getElementById('triangle-inputone').setAttribute('disabled',true);
    document.getElementById('triangle-inputtwo').setAttribute('disabled',true);

    
})

document.getElementById('tri-remove').addEventListener('click' ,function(){
    document.getElementById('triangle-inputone').removeAttribute('disabled',true);
    document.getElementById('triangle-inputtwo').removeAttribute('disabled',true);
    const remove=document.getElementById('result');
    remove.removeChild(remove.firstElementChild);
    
})