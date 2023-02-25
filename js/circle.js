 // Circle

 document.getElementById('circle-button').addEventListener('click' , function(){
    const inputOne= getInputvalues('circle-input');
    
    const circleResultfloat= Math.PI*inputOne*inputOne;
    const circleResult=circleResultfloat.toFixed(2);

    if(isNaN(circleResult)){
        alert('please Provide valid Data');
        return;
    }


    // Show Result
    const h1= document.createElement('h1');
    h1.innerText=`${circleResult}`;
    
    const Result= document.getElementById('circle-result');
    Result.appendChild(h1);

    document.getElementById('circle-remove').removeAttribute('disabled');

    document.getElementById('circle-input').setAttribute('disabled',true);

    
})

document.getElementById('circle-remove').addEventListener('click' ,function(){
    document.getElementById('circle-input').removeAttribute('disabled',true);
    const remove=document.getElementById('circle-result');
    remove.removeChild(remove.firstElementChild,true);
    
})