 // Rectangle

 document.getElementById('rec-button').addEventListener('click' , function(){

    const inputOne= getInputvalues('rec-inputone');
    const inputtwo= getInputvalues('rec-inputtwo');
    
    const recResult= inputOne*inputtwo;

    if(isNaN(recResult)){
        alert('please Provide valid Data');
        return;
    }


    // Show Result
    const h1= document.createElement('h1');
    h1.innerText=`${recResult}`;
    
    const Result= document.getElementById('rec-result');
    Result.appendChild(h1);

    document.getElementById('rec-remove').removeAttribute('disabled');

    document.getElementById('rec-inputone').setAttribute('disabled',true);
    document.getElementById('rec-inputtwo').setAttribute('disabled',true);

    
})

document.getElementById('rec-remove').addEventListener('click' ,function(){
    document.getElementById('rec-inputone').removeAttribute('disabled',true);
    document.getElementById('rec-inputtwo').removeAttribute('disabled',true);
    const remove=document.getElementById('rec-result');
    remove.removeChild(remove.firstElementChild);
    
})