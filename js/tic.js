let element = document.querySelectorAll(".mincon");
let curent = "x"
let look = [ , , ,
             , , ,
             , , 
            ];
let row1 = 0;
let row2 = 0;
let row3 = 0;
document.body.onclick = function(e){
    if(e.target.classList.contains("box")){
        if (e.target.textContent==="") {
            e.target.textContent = curent;
            if(curent==="x"){
                e.target.style.color = "black";
                look[e.target.dataset.number]="x";
                curent="o";
                }
            else{
                e.target.style.color = "black";
                look[e.target.dataset.number]="o";
                curent="x";
                }
                
            }
            
            // for(let i = 0;i<9;i++){
            //     if(i==0){
            //         if 
            //     }
            
            // }
            
        }
    }
// document.body.addEventListener( "mouseenter",function(e){
//     if(e.target.classList.contains("box")){
//     if (e.target.textContent.length>0) {
//         e.target.style.cursor = "auto";
//         console.log(e.target.textContent.length);
//     }
//     else{
//         e.target.style.cursor = "pointer";
//     }
// }
// },false)
