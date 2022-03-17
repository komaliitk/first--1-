import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
const app = express();
const PORT = 5010;

app.use(bodyParser.json());
app.use('/user',userRoutes);

// routes
app.get('/',(req,res)=>{
    console.log("hi am working");
    res.send('hello world');
});

//user one



app.listen(PORT,()=> console.log(`Server Is Running on port : http://localhost:${PORT}`));


