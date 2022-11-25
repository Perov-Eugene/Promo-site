
// slider

let offset=0; //смещение от левого края
const sliderLine=document.querySelector('.slider-line');

document.querySelector('.button').addEventListener('click', function(){


    offset=offset+500;

if(offset>1500){
    offset=0;
}
sliderLine.style.left=-offset+'px';



});

let c=0; 

const num=document.querySelector('.slider-line');

document.querySelector('.button').addEventListener('mousedown', function(){


    c=c+500;

if(c>1500){
    c=0;
}

num.style.left=-c+'px';



});




// change color

let arr=['rgb(166, 175, 31)','rgb(121, 90, 33)','rgb(117, 41, 41)','#5C62EC'];

let i=0;

const but=document.querySelector(':root');

document.querySelector('.button').addEventListener('click', function(){

        
       


         but.style.cssText=`--accent:${arr[i]}`;
                   i++;
        
         if(i>3){

            i=0;
         }



});

// change page

let d=0; 
const check=document.querySelector('.header');

document.querySelector('.checkbox-input').addEventListener('click', function(){


     if(d%2==0) {  

    check.style.backgroundColor="var(--pageTop)";

     } else{
      
     check.style.backgroundColor="var(--black)";

     }   

     d++;

    });