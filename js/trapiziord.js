// Trapiziord

document.getElementById('trapoziod-button').addEventListener('click' , function(){
    console.log('clicked');
    const inputOne= getInputvalues('trapiziord-inputone');
    const inputtwo= getInputvalues('trapiziord-inputtwo');
    const inputtree= getInputvalues('trapiziord-inputthree');
    
    const trapoziodResult= .5*(inputOne+inputtwo)*inputtree;

    if(isNaN(trapoziodResult)){
        alert('please Provide valid Data');
        return;
    }


    // Show Result
    const h1= document.createElement('h1');
    h1.innerText=`${trapoziodResult}`;
    
    const Result= document.getElementById('trapoziod-result');
    Result.appendChild(h1);

    document.getElementById('trapoziod-remove').removeAttribute('disabled');

    document.getElementById('trapiziord-inputone').setAttribute('disabled',true);
    document.getElementById('trapiziord-inputtwo').setAttribute('disabled',true);
    document.getElementById('trapiziord-inputthree').setAttribute('disabled',true);


    
})

document.getElementById('trapoziod-remove').addEventListener('click' ,function(){
    document.getElementById('trapiziord-inputone').removeAttribute('disabled',true);
    document.getElementById('trapiziord-inputtwo').removeAttribute('disabled',true);
    document.getElementById('trapiziord-inputthree').removeAttribute('disabled',true);
    const remove=document.getElementById('trapoziod-result');
    remove.removeChild(remove.firstElementChild,true);
    
})