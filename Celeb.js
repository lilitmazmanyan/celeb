var buttons=Array.from(document.getElementsByClassName("button"));
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        button.style.backgroundColor="hsl(0, 96%, 28%)";
    })
})

var SecondAct = document.getElementById("SecondAct");
var GreasersPalace = document.getElementById("GreasersPalace");
var ElkiLast = document.getElementById("ElkiLast");

SecondAct.addEventListener('click', clickbtn);
GreasersPalace.addEventListener('click', clickbtn);
ElkiLast.addEventListener('click', clickbtn);

var Changeling = document.getElementById("Changeling");
var Tourist = document.getElementById("Tourist");
var TakingLives = document.getElementById("TakingLives")
var IronMan = document.getElementById("IronMan");
var SherlockHolmes = document.getElementById("SherlockHolmes");
var Zodiack = document.getElementById("Zodiack");
var LyubovMarkov = document.getElementById("LyubovMarkov");
var NochnoyDozor = document.getElementById("NochnoyDozor")
var Elki2 = document.getElementById("Elki2")

Changeling.addEventListener('click', countFunction);
Tourist.addEventListener('click', countFunction);
TakingLives.addEventListener('click', countFunction);
IronMan.addEventListener('click', countFunction);
SherlockHolmes.addEventListener('click', countFunction);
Zodiack.addEventListener('click', countFunction);
LyubovMarkov.addEventListener('click', countFunction);
NochnoyDozor.addEventListener('click', countFunction);
Elki2.addEventListener('click', countFunction);



let k=0, count=0;
function clickbtn(){
    count++;
    k++;
}

function countFunction(){
    count++;
}

var res = 8;
if(count==0)
res="Mi 2 ban nsheq";
else if( k<=2 )
res="POrdzeq krkin";
else res = "You Won";

var resultClick = 0;
var seeResults = document.getElementById("seeResults");
seeResults.addEventListener('click', makeVisible);



function makeVisible(){

resultClick++;
if(resultClick%2==1){
    document.getElementById("dv").style.display="block";
    document.getElementById("dv").innerText=res;

}
else {
    // document.getElementById("dv").style.display="none";}
 window.location.reload(true);

}
}
