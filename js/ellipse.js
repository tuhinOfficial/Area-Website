// Ellipsis

document.getElementById('ellipse-button').addEventListener('click' , function(){
    const inputOne= getInputvalues('ellipse-inputone');
    const inputtwo= getInputvalues('ellipse-inputtwo');
    
    const ellipseleResultfloat= Math.PI*inputOne*inputtwo;
    const ellipseResult=ellipseleResultfloat.toFixed(2);

    if(isNaN(ellipseResult)){
        alert('please Provide valid Data');
        return;
    }


    // Show Result
    const h1= document.createElement('h1');
    h1.innerText=`${ellipseResult}`;
    
    const Result= document.getElementById('ellipse-result');
    Result.appendChild(h1);

    document.getElementById('ellipse-remove').removeAttribute('disabled');

    document.getElementById('ellipse-inputone').setAttribute('disabled',true);
    document.getElementById('ellipse-inputtwo').setAttribute('disabled',true);

    
})

document.getElementById('ellipse-remove').addEventListener('click' ,function(){
    document.getElementById('ellipse-inputone').removeAttribute('disabled',true);
    document.getElementById('ellipse-inputtwo').removeAttribute('disabled',true);
    const remove=document.getElementById('ellipse-result');
    remove.removeChild(remove.firstElementChild);
    
})