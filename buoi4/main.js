// Object
var StringObject = {
    value: "polytechnic",
    length: 11,
    toUpperCase: function(){

    }
}
// Object Contructor Function 
// String 

// var MyString = function(){
//     this.value= "Dao Quang Linh"
//     this.toUpperCase = function(){
//         return this.value.toUpperCase()
//     }
// }

var sinhvien ={
    name: "Dao Quang Linh",
    age: 20,
    homeTown: "Ha nam",
    showInfo: function () {
        // return this.name + "," + this.age + "," + this.homeTown
        return sinhvien.name + "," + sinhvien.age + "," + sinhvien.homeTown
    }

}

var sinhVien = function(){

    this.name = "Dao Quang Linh",
    this.age =19,
    this.homeTown,
    this.showInfo= function(){
        return this.name.age.homeTown
    }
}
var sv = new sinhVien();
