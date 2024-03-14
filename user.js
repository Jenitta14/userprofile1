let obj = {
    Empimage:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    Empname: "Mechan",
    Age:20
}


let Empimage = document.getElementById("empimage").src = obj.Empimage;
let empname = document.getElementById("empname").textContent = obj.Empname;
let age = document.getElementById("age").textContent = `Age:${obj.Age}`;