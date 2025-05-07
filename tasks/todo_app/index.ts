import express from "express";
import type { Request, Response } from "express";
const app = express()
const PORT: String | undefined = process.env.PORT
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Kurkkumopo")
})

app.listen(PORT, () => {
    console.log("Server started in port " + process.env.PORT)
})