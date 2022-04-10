let screen=document.getElementById("screen");
let buttons=document.getElementsByTagName("button");
let screenvalue="";

for (const button of buttons) {
    button.addEventListener("click",(e)=>{
        let clicktext=e.target.innerText;
        if (clicktext==="C"){
            screenvalue="";
        }
        else if(clicktext==="="){
            screenvalue=eval(screenvalue);
        }
        else if(clicktext==="X"){
            screenvalue+="*";
        }
        else{
        screenvalue+=clicktext;
        }
    screen.value=screenvalue
    })
}