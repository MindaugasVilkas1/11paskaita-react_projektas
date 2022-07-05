import express from "express";
import fetch from 'node-fetch';
import cors from 'cors'

const app = express();
app.use(cors(corsOption));
const corsOption = {
    origin:"localhost:5000",
    optionsSuccessStatus: 200
  }
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app get movies
app.get("/api/movies/:id?", async (req, res) => {
    const data = await fetch(`http://localhost:8080/movies/${req.params.id?req.params.id:''}`)
    .then(data => data.json())
    res.json(data)
});

app.listen(5000, () => console.log("Server is running on Port 5000"))



