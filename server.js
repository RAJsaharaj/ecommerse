import express from 'express';

//configure env
// dotenv.config();

//rest object
const app = express();

//rest api 
app.get('/',(req,res) => {
    res.send({
        message:"welcome to ecommer app"
    })
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,() => {
  console.log(`server running on ${PORT}`);
});

