//khai bao DOM( DOM declaration);
var h1 = document.querySelector('h1')
var h2 = document.querySelector('h2')
var text1 = "cao dang fpt...."
var text = "cao dang fpt polytechnic"
var button = document.querySelector('button');


// button1.addEventListener('click', function () {
//     h1.style.color = "blue"
//     h1.style.textAlign = "center"
//     h1.style.textTransform = "capitalize"
// })



button.onclick = function(){
    if(text.length>23){
        h2.innerHTML = text1 
        h2.style.color = "red"
        h2.style.textAlign = "center"
        h2.style.textTransform = "capitalize"
    }else
    h1.innerHTML = text + text.length
    h1.style.color = "red"
    h1.style.textAlign = "center"
    h1.style.textTransform = "capitalize"
}
