function genaratePin(){
    const randomNumber=Math.round(Math.random()*10000);
    return randomNumber
}
// string ke convert kora 
function checkNumber(){
    let pin=genaratePin()
    let pinString=pin+''
    if(pinString.length===4){
        return pin;

    }
    else{
        
        return checkNumber();
    }
}


document.getElementById("generate-btn").addEventListener("click",function(){
    const pin=checkNumber();
    console.log(pin)
    let inputfield=document.getElementById("displayPin")
    inputfield.value=pin;
})
 
// part 2 .number na kongula ta aghe korlam pore number taike C newa holo.

document.getElementById("calculetor").addEventListener('click',function(event){
    // alada alada number ke print 
 const number=event.target.innerText
const typeNumberfld=document.getElementById("typeNumber")
const previousNUmber=typeNumberfld.value;

// cut ar jonno 
 if(isNaN(number)){
  if(number==="C"){
    typeNumberfld.value=" ";
  }
  else if(number==="<"){
    let digits=previousNUmber.split("")
    // sesergula jno kete jai
    digits.pop(typeNumberfld)
    const remaining=digits.join("")
    typeNumberfld.value=remaining;
  }
 }
 else{
    
    const NewtypeNumber=previousNUmber+number;
    typeNumberfld.value=NewtypeNumber
    
 }
})
// part 3 compare korar kaj .css a display none kore dilam niser  live ar golo.
document.getElementById("Verify-pin").addEventListener("click",function(){
   const generatpin=document.getElementById("displayPin")
   const generatPInvalue=generatpin.value;

   const typeNumberfld=document.getElementById("typeNumber")
   const typeNumberfldValue=typeNumberfld.value;
//    jodi number 2 tar mill take tahole success ata r naa hoi wrong dekabe
   
    let succsesspinmass=document.getElementById("SuccessPin")
    let wrongPin=document.getElementById("wrongPin")

    if(generatPInvalue===typeNumberfldValue){
        succsesspinmass.style.display="block";
        wrongPin.style.display="none"
    }
    else{
        succsesspinmass.style.display="none";
        wrongPin.style.display="block"
    }
    
   })
   document.getElementById("try-left").addEventListener("click",function(){
    let retraynumber=document.getElementById("try-left")
    let retraynumberText=retraynumber.innerText
    let retraynumberint=parseInt(retraynumberText)
    retraynumber.innerText=retraynumberint-1
   })

  


