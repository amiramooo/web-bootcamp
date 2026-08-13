const express = require('express');
const app = express();

const port = process.env.port || 8080;
app.use(express.static("frontend"));
app.use(express.json());

var users = [
    { 
        "id": 1,
         "name": "Kaspian Trondsen" ,
          "gender": "male", 
          "image": "https://randomuser.me/api/portraits/men/46.jpg"
    },
    { 
        "id": 2, 
        "name": "Saron Yang" , 
        "gender": "female", 
        "image": "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
         "id": 3,
         "name": "Eino Halko" , 
         "gender": "male",
          "image": "https://randomuser.me/api/portraits/men/76.jpg"
        },
    { 
        "id": 4,
         "name": "Bhoomika Padmanabha" ,
          "gender": "female", 
          "image": "https://randomuser.me/api/portraits/women/17.jpg"
        },
    { 
          "id": 5, 
          "name": "Glen Cruz" ,
          "gender": "male",
          "image":  "https://randomuser.me/api/portraits/men/99.jpg"
        },

    
    {
        "id":"6",
        "name":"john",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/18.jpg",
    },

    {
        "id":"7",
        "name":"amber",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/43.jpg",
    },

    {
        "id":"8",
        "name":"lily",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/26.jpg",
    },

    {
        "id":"9",
        "name":"juan",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/88.jpg",
    },

    {
        "id":"10",
        "name":"valtteri rantala",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/5.jpg",
    },


        ];
        var nextId =11;

        function findIndex(id){
            for(var i = 0; i < users.length; i++){
                if(users[i].id === id){
                    return i;
                }
            }
            return -1;
        }

  app.get("/api/users", function(req, res){
    return res.json(users);
  })

  app.get("/api/users/:id", function(req, res){
    var id = Number(req.params.id);
    var index = findIndex(id);

    if(index === -1){
        return res.status(404).json({
             "message": "user not found with id:" + id });
    }
    var users = users[index];
    return res.json(user);
  })

  app.get("/api/random-user", function(req, res){
    if(users.length === 0){
       return res.status(404).json({"message":"no users found"});
        
    }
     var randomIndex = Math.floor(Math.random() * users.length);
    return res.json(users[randomIndex]);
  })

  app.post("/api/users", function(req, res){
    var newUser = req.body;
    var tempUser ={
        "id": nextId,
        "name": newUser.name,
        "gender": newUser.gender,
        "image": newUser.image
    };
   nextId = nextId+1;
    users.push(tempUser);

    return res.status(201).json({"message":"user created successfully", "user": tempUser});
  });

app.listen(port, function(){
    console.log("server running on http://localhost:" + port);
});