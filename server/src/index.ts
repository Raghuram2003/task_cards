import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import { Deck } from '../models/deck.models';
import {config} from "dotenv";
config()

const app = express();
const PORT : Number = 5000

app.use(express.json())

app.post("/decks",async(req:Request,res:Response)=> {
    const {title} = req.body
    const newDeck = new Deck({title});
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
});

const db = mongoose.connect(process.env.MONGODB_URL ?? "")
.then(()=>{
    console.log("database connected")
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})