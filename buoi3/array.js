var web17308 = new Array("Nguyen Giang Minh","Dao Thi Giang","Nguyen Quang Minh", "Tran van D");

// duyet mang
// for(var i=0; i < web17308.length; i++){
//     console.log(web17308[i]);
// }

// for(var item of web17308){
//     console.log(item);
// }

web17308.forEach(function (item) {
    console.log(item)
})

/// tim kiem / loc
// function searchByName(name) {
//     var result = web17308.find(function(item){
//         return item == name;
//     })
//     return result;
    
// }
// console.log(searchByName("Nguyen van C"))

function searchByName(name) {
    var result = web17308.filter(function(item){
        return item.includes(name);
    })
    return result;
    
}
// console.log(searchByName("Nguyen van C"))
var newArr = web17308.map(function(item) {
    // Logic biến đổi
    return item.split(" ").pop()
})
function unique(arr){
    return arr.filter(function(item,index){
        // logic loc
        return arr.indexOf(item) == index
    })
}
console.log(unique(newArr));