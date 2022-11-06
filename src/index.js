import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
]

app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
    if(!username || !avatar){
        res.status(420).send("Please, fill all fields");
        return;
    }
    const signedUser = users.find((usr)=> usr.username === username);
    if(signedUser){
        res.status(409).send("User already exists");
        return;
    }
        

    users.push(req.body);
    console.log(users);
    res.status(201).send("OK!");
})

app.post('/tweets', (req, res)=>{
    const {username, tweet} = req.body;
    
    if(!username || !tweet){
        res.status(420).send("Please, fill all fields");
        return;
    }

    tweets.push(req.body);
    console.log(tweets);
    res.status(201).send("OK!");

})

console.log(users)

app.listen(5000);