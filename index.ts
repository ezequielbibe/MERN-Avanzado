import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT: string | number = process.env.PORT || 8080

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to de API with TypeScript and Express!")
})

app.listen(PORT, () => console.log(`Express server on PORT: ${PORT}`))