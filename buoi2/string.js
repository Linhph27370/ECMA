var h1 = document.querySelector('h1');
var text = h1.innerHTML

text = text.toLowerCase()
text = text.replaceAll("chó", "mèo")
console.log(text[0].toUpperCase() + text.slice(1));
//  mozilla


var text = "xin chao cả lop"
// giá trị trả về của hàm sau từ khóa "return"
function reverseString1(str) {
    console.log(str);
    return str
}
console.log("reverseString1", reverseString1(text));

var h3 = document.querySelector('h3');
var cat = "cat"

 


function reverseString(strr) {
    var reverse =""
    //for (điều kiện bắt đầu ; điều kiện kết thúc ; bước nhảy)
    for(var index = strr.length-1 ; index >=0; index =index -1){
        reverse = reverse + strr[index]
    }
    return reverse
}

console.log(reverseString(text));
console.log(reverseString(cat));
h3.innerHTML = cat + '=>' + reverseString(cat)
///bai1
var textbai1 = ""