let gameSeq=[];
let userSeq=[];
let btns=["blue","green","yellow","pink","orange","red","purple","brown","black"];
let start = false;
let level=0;
let h2=document.querySelector("h2")
document.addEventListener("keypress",()=>{
    if (start==false){
        start=true;
        levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level${level}`
    let x=Math.floor(Math.random()*9);
    let r=btns[x];
    let btn=document.querySelector(`#${r}`);
    gameSeq.push(r);
    btnFlash(btn);
}
function btnFlash(btn){
    btn.classList.add("blink");
    setTimeout(() => {
        btn.classList.remove("blink")
    }, 250);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnclick);
}
function btnclick(){
    let btn=this;
    btnFlash(btn);
    let btnClr=btn.getAttribute("id");
    userSeq.push(btnClr);
    btncheck();
}
function btncheck(){
    let index=userSeq.length-1;
    if(gameSeq[index]==userSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1500);
        }
    }
    else{
        h2.innerText=`game over Your Score:${level}`;
        start=false;
        level=0;
        gameSeq=[];
    }
}