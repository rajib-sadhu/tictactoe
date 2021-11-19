const s1=document.querySelector(".span1");
const s2=document.querySelector(".span2");
const s3=document.querySelector(".span3");
const s4=document.querySelector(".span4");
const s5=document.querySelector(".span5");
const s6=document.querySelector(".span6");
const s7=document.querySelector(".span7");
const s8=document.querySelector(".span8");


const div1=document.getElementById("div1");
const div2=document.querySelector("#div2");
const div3=document.querySelector("#div3");
const div4=document.querySelector("#div4");
const div5=document.querySelector("#div5");
const div6=document.querySelector("#div6");
const div7=document.querySelector("#div7");
const div8=document.querySelector("#div8");
const div9=document.querySelector("#div9");

const res =document.querySelector("#result");
const popup =document.querySelector(".popup");
const start =document.querySelector("#start");
const idRes =document.querySelector("#reset");
// const drawn =document.querySelector("#draw");
const classRes =document.querySelector(".reset");



var str="X";

 var b1=2;
 var b2=3;
 var b3=4;
 var b4=5;
 var b5=6;
 var b6=7;
 var b7=8;
 var b8=9;
 var b9=10;

 start.addEventListener('click', () =>{

    popup.style.display="none";
 }); 
 
 

 idRes.addEventListener('click', () =>{

classRes.style.display="none";
location.reload();
}); 






 


     const btn1 = () => {

   
    if(str=="X")
    {
        
        div1.innerHTML="O";
        str="O";
        b1=0;

        if(b1==b2 && b1==b3){
            res.innerHTML="Player 1 Win";
            s6.style.display="block";
            classRes.style.display="block";
            
            
         }
        else if(b1==b4 && b1==b7){
            res.innerHTML="Player 1 Win";
            s3.style.display="block";
            classRes.style.display="block";
            
        }
         else if(b1==b5 && b1==b9){
            res.innerHTML="Player 1 Win";
            s1.style.display='block';
            classRes.style.display="block";
            
        }
        
    }
    else{
        div1.innerHTML="X";
        str="X";
        b1=1;
        if(b1==b2 && b1==b3){
            res.innerHTML="Player 2 Win";
            s6.style.display='block';
            classRes.style.display="block";
           
      }
         else if(b1==b4 && b1==b7){
            res.innerHTML="Player 2 Win";
            s3.style.display='block';
            classRes.style.display="block";
            
      }
         else if(b1==b5 && b1==b9){
            res.innerHTML="Player 2 Win";
            s1.style.display='block';
            classRes.style.display="block";
            
      }
    
    }
draw();
// console.log(b1);
    
}


const btn2 = () => {

   
    if(str=="X")
    {
        div2.innerHTML="O";
        str="O";
        b2=0;
        if(b2==b1 && b2==b3){
            res.innerHTML="Player 1 Win";
            s6.style.display='block';
            classRes.style.display="block";
        }
        else if(b2==b5 && b2==b8){
       
            res.innerHTML="Player 1 Win";
            s4.style.display='block';
            classRes.style.display="block";
         }
    }
    else{
        div2.innerHTML="X";
        str="X";
        b2=1;
        if(b2==b1 && b2==b3){
            res.innerHTML="Player 2 Win";
            s6.style.display='block';
            classRes.style.display="block";
        }
        else if(b2==b5 && b2==b8){
       
            res.innerHTML="Player 2 Win";
            s4.style.display='block';
            classRes.style.display="block";
         }
    }
    
draw();
// console.log(b2);
    
}
const btn3 = () => {

   
    if(str=="X")
    {
        div3.innerHTML="O";
        str="O";
        b3=0;
        if(b3==b1 && b3==b2){
            res.innerHTML="Player 1 Win";
            s6.style.display='block';
            classRes.style.display="block";
        }
        else if(b3==b5 && b3==b7){
       
            res.innerHTML="Player 1 Win";
            s2.style.display='block';
            classRes.style.display="block";
         }
         else if(b3==b6 && b3==b9){
       
            res.innerHTML="Player 1 Win";
            s5.style.display='block';
            classRes.style.display="block";
        }
    }
    else{
        div3.innerHTML="X";
        str="X";
        b3=1;
        if(b3==b1 && b3==b2){
            res.innerHTML="Player 2 Win";
            s6.style.display='block';
            classRes.style.display="block";
        }
        else if(b3==b5 && b3==b7){
       
            res.innerHTML="Player 2 Win";
            s2.style.display='block';
            classRes.style.display="block";
         }
         else if(b3==b6 && b3==b9){
       
            res.innerHTML="Player 2 Win";
            s5.style.display='block';
            classRes.style.display="block";
        }
    }
    
draw();
// console.log(b3);
    
}
const btn4 = () => {

   
    if(str=="X")
    {
        div4.innerHTML="O";
        str="O";
        b4=0;
        if(b4==b5 && b4==b6){
            res.innerHTML="Player 1 Win";
            s7.style.display='block';
            classRes.style.display="block";
        }
        else if(b4==b1 && b4==b7){             
            res.innerHTML="Player 1 Win";
            s3.style.display='block';
            classRes.style.display="block";
         }
    }
    else{
        div4.innerHTML="X";
        str="X";
        b4=1;
        if(b4==b5 && b4==b6){
            res.innerHTML="Player 2 Win";
            s7.style.display='block';
            classRes.style.display="block";
        }
        else if(b4==b1 && b4==b7){              
            res.innerHTML="Player 2 Win";
            s3.style.display='block';
            classRes.style.display="block";
        }
    }
    
draw();
// console.log(b4);
}
const btn5 = () => {

   

    if(str=="X")
    {
        div5.innerHTML="O";
        str="O";
        b5=0;
        if(b5==b1 && b5==b9){
            res.innerHTML="Player 1 Win";
            s1.style.display='block';
            classRes.style.display="block";
        }
        else if(b5==b2 && b5==b8){
       
            res.innerHTML="Player 1 Win";
            s4.style.display='block';
            classRes.style.display="block";
         }
         else if(b5==b3 && b5==b7){
            res.innerHTML="Player 1 Win";
            s2.style.display='block';
            classRes.style.display="block";
        }
         else if(b5==b4 && b5==b6){
            res.innerHTML="Player 1 Win";
            s7.style.display='block';
            classRes.style.display="block";
        }
    }
    else{
        div5.innerHTML="X";
        str="X";
        b5=1;
        if(b5==b1 && b5==b9){
            res.innerHTML="Player 2 Win";
            s1.style.display='block';
            classRes.style.display="block";
        }
        else if(b5==b2 && b5==b8){
       
            res.innerHTML="Player 2 Win";
            s4.style.display='block';
            classRes.style.display="block";
         }
         else if(b5==b3 && b5==b7){
            res.innerHTML="Player 2 Win";
            s2.style.display='block';
            classRes.style.display="block";
        }
         else if(b5==b4 && b5==b6){
            res.innerHTML="Player 2 Win";
            s7.style.display='block';
            classRes.style.display="block";
        }
    }
  
draw();  
// console.log(b5);
}

    const btn6 = () => {

   
    if(str=="X")
    {
        div6.innerHTML="O";
        str="O";
        b6=0;
        if(b6==b3 && b6==b9){
            res.innerHTML="Player 1 Win";
            s5.style.display='block';
            classRes.style.display="block";
     }
    else if(b6==b4 && b6==b5){
            res.innerHTML="Player 1 Win";
            s7.style.display='block';
            classRes.style.display="block";
     }
    }
    else{
        div6.innerHTML="X";
        str="X";
        b6=1;
        if(b6==b3 && b6==b9){
            res.innerHTML="Player 2 Win";
            s5.style.display='block';
            classRes.style.display="block";
     }
    else if(b6==b4 && b6==b5){
            res.innerHTML="Player 2 Win";
            s7.style.display='block';
            classRes.style.display="block";
     }
    }
  
draw();
// console.log(b6);
}



    const btn7 = () => {

   
    if(str=="X")
    {
        div7.innerHTML="O";
        str="O";
        b7=0;
        if(b7==b4 && b7==b1){
            res.innerHTML="Player 1 Win";
            s3.style.display='block';
            classRes.style.display="block";
     }
        else if(b7==b8 && b7==b9){
            res.innerHTML="Player 1 Win";
            s8.style.display='block';
            classRes.style.display="block";
     }
        else if(b7==b5 && b7==b3){
            res.innerHTML="Player 1 Win";
            s2.style.display='block';
            classRes.style.display="block";
     }
    }
    else{
        div7.innerHTML="X";
        str="X";
        b7=1;
        if(b7==b4 && b7==b1){
            res.innerHTML="Player 2 Win";
            s3.style.display='block';
            classRes.style.display="block";
     }
        else if(b7==b8 && b7==b9){
            res.innerHTML="Player 2 Win";
            s8.style.display='block';
            classRes.style.display="block";
     }
        else if(b7==b5 && b7==b3){
            res.innerHTML="Player 2 Win";
            s2.style.display='block';
            classRes.style.display="block";
     }
    }
   
draw();
// console.log(b7);
}


    const btn8 = () => {

   
    if(str=="X")
    {
        div8.innerHTML="O";
        str="O";
        b8=0;
        if(b8==b5 && b8==b2){
            res.innerHTML="Player 1 Win";
            s4.style.display='block';
            classRes.style.display="block";
     }
         else if(b8==b7 && b8==b9){
            res.innerHTML="Player 1 Win";
            s8.style.display='block';
            classRes.style.display="block";
     }
    }
    else{
        div8.innerHTML="X";
        str="X";
        b8=1;
        if(b8==b5 && b8==b2){
            res.innerHTML="Player 2 Win";
            s4.style.display='block';
            classRes.style.display="block";
     }
        else if(b8==b7 && b8==b9){
            res.innerHTML="Player 2 Win";
            s8.style.display='block';
            classRes.style.display="block";
     }
    }
 
draw();
// console.log(b8);
}


    const btn9 = () => {

   
    if(str=="X")
    {
        div9.innerHTML="O";
        str="O";
        b9=0;
        if(b9==b1 && b9==b5){
            res.innerHTML="Player 1 Win";
            s1.style.display='block';
            classRes.style.display="block";
     }
        else if(b9==b6 && b9==b3){
            res.innerHTML="Player 1 Win";
            s5.style.display='block';
            classRes.style.display="block";
     }
        else if(b9==b7 && b9==b8){
            res.innerHTML="Player 1 Win";
            s8.style.display='block';
            classRes.style.display="block";
     }
    
    }
    else{
        div9.innerHTML="X";
        str="X";
        b9=1;
        if(b9==b1 && b9==b5){
            res.innerHTML="Player 2 Win";
            s1.style.display='block';
            classRes.style.display="block";
            
     }
        else if(b9==b6 && b9==b3){
            res.innerHTML="Player 2 Win";
            s5.style.display='block';
            classRes.style.display="block";
            
     }
        else if(b9==b7 && b9==b8){
            res.innerHTML="Player 2 Win";
            s8.style.display='block';
            classRes.style.display="block";
            
     }
    }
draw();
// console.log(b9);
}



div1.addEventListener('click', btn1);
div2.addEventListener('click', btn2);
div3.addEventListener('click', btn3);
div4.addEventListener('click', btn4);
div5.addEventListener('click', btn5);
div6.addEventListener('click', btn6);
div7.addEventListener('click', btn7);
div8.addEventListener('click', btn8);
div9.addEventListener('click', btn9);


function draw(){
    if((b1==0 || b1==1) && (b2==0 || b2==1) && (b3==0 || b3==1) && (b4==0 || b4==1) && (b5==0 || b5==1) && 
       (b6==0 || b6==1) && (b7==0 || b7==1) && (b8==0 || b8==1) && (b9==0 || b9==1) )
       {
        classRes.style.display="block";
        // drawn.innerHTML="Match Draw";
       }
       
}
