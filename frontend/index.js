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
function Randomuser(){
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var UserName = document.getElementById("user-name");
        var UserGender = document.getElementById("user-gender");
        var userImage = document.getElementById("user-image");
        var newusername = data.results[0].name.first + " " + data.results[0].name.last;
        var newusergender = data.results[0].gender;
        var newuserimage = data.results[0].picture.large;

        UserName.innerHTML = newusername;
        UserGender.innerHTML = newusergender;
        userImage.src = newuserimage;
    })
}
    
    function myRandomUser(){
    fetch("/api/random-user")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var UserName = document.getElementById("user-name");
        var UserGender = document.getElementById("user-gender");
        var userImage = document.getElementById("user-image");
        

        UserName.innerHTML = data.name;
        UserGender.innerHTML = data.gender;
        userImage.src = data.image;
    })
    
  
    .catch(function(err){
        console.log("error occurred:" + err);
    })
    }