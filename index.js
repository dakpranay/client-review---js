let a=[{
    src:"1.jpg",
    name:"Pranay",
    review:"100"
},{
    src:"2.jpg",
    name:"Garima",
    review:"200"
},{
    src:"3.jpg",
    name:"Preeti",
    review:"300"
},{
    src:"4.jpg",
    name:"Anil",
    review:"400"
}]


let button=document.querySelectorAll('button');
let currentValue=0;
button.forEach((button)=>{
    button.addEventListener('click',function(){
        let name=document.getElementById('name');
        let image=document.getElementById('image');
        let r=document.getElementById('review');
        if(button.classList.contains('left')){
            currentValue--;
            if(currentValue>=0 && currentValue<a.length){
                image.src=a[currentValue].src;
                name.textContent=a[currentValue].name;
                r.textContent=a[currentValue].review;
               }
            
            else if(currentValue<0){
                currentValue=a.length-1;
                image.src=a[currentValue].src;
                name.textContent=a[currentValue].name;
                r.textContent=a[currentValue].review;
            }
          
        }

        else if(button.classList.contains('right')){
            currentValue++;
            if(currentValue<a.length){
                image.src=a[currentValue].src;
                name.textContent=a[currentValue].name;
                r.textContent=a[currentValue].review;
               }
            
            else if(currentValue ==a.length){
                currentValue=0;
                image.src=a[currentValue].src;
                name.textContent=a[currentValue].name;
                r.textContent=a[currentValue].review;
            }

            console.log(currentValue);
        }
    })

})