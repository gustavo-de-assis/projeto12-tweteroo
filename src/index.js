import express, {json} from 'express';
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

app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
    
    if(!username || !avatar){
        res.status(420).send("Please, fill all fields");
        return;
    }    
 /*    if(signedUser){
        res.status(409).send("User already exists");
        return;
    } */
    const user = {username, avatar};

    users.push(user);
    console.log(users);
    res.status(201).send("OK!");
})

app.post('/tweets', (req, res)=>{
    const {username, tweet} = req.body;

    const usr = users[0];

    const obj = {
        username, 
        tweet,
        avatar: usr.avatar
    }

    if(!username || !tweet){
        res.status(420).send("Please, fill all fields");
        return;
    }
    

    //tweets.push(req.body);
    tweets.unshift(req.body);
    res.status(201).send("OK!");

})

app.get('/tweets', (req,res)=>{
    let tweetList = [];

	for(let i = 0; i < 10; i++){
		tweetList.push(tweets[i]);
	}

	res.send(tweetList);
    
})

app.listen(5000);