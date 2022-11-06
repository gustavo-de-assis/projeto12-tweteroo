import express, { json } from 'express';
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
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
]

app.get('/tweets', (req,res)=>{
    const tweetList = [];

     for(let i = 0; i < 10 ; i++){
        tweetList.push(tweets[i]);
    }
    console.log(tweetList);

	res.status(201).send(tweets);
    
})

app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
    
    if(!username || !avatar){
        res.status(422).send("Please, fill all fields");
        return;
    }

    
    const signedUser = users.find((usr)=> usr.username === username);
    if(signedUser){
        res.status(409).send("User already exists");
        return;
    }
    
    const user = {username, avatar};
    
    users.push(user);
    res.status(201).send("OK!");
})

app.post('/tweets', (req, res)=>{
    const {username, tweet} = req.body;
    const avatar = users[0].avatar;

    const obj = {
        username, 
        tweet,
        avatar
    }

    if(!username || !tweet){
        res.status(420).send("Please, fill all fields");
        return;
    }
    

    
    tweets.unshift(obj);
    res.status(201).send("OK!");

})



app.listen(5000);