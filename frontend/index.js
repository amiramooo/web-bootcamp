//alert("welcome to web bootcamp");
var users =[
    {
        "name": "john doe",
        "gender": "male",
        "image": "john.png"
    
    },
    {
        "name": "jane doe",
        "gender": "female",
        "image": "jane.png"
    },
]

var curId = 0;
function toggleUser(){
    curId = (curId+1)%2;
    var user = users[curId];
    var userImage = document.getElementById("user-image");
    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
  userName.innerHTML = users[curId].name;
  userGender.innerHTML = users[curId].gender;
  userImage.src = users[curId].image;
}