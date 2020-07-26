let elements  = document.querySelectorAll('main .icons a');

console.log(elements);
elements.forEach( icon => {
    // console.log("estoy encima");
 icon.addEventListener('onmouseover' , ()=>{
     console.log("estoy encima");
 })

})

console.log("suxxes");