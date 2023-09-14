import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, products } from './database'
import { ACCOUNT_TYPE } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

app.get('/accounts/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const result = accounts.find((account) => account.id === id)
    res.status(200).send(result)
})

app.delete('/accounts/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const indexToDelete = accounts.findIndex((account) => account.id === id)

    if(indexToDelete >= 0){
        accounts.splice(indexToDelete, 1)
    } else {
        console.log('Index não encontrado')
    }
    res.status(200).send({message: 'O item foi deletado com sucesso.'})
})

app.put('/accounts/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined

    const account = accounts.find((account) => account.id === id)

    account.ownerName = newOwnerName || account.ownerName
    account.balance = isNaN(newBalance) ? account.balance : newBalance
    account.type = newType || account.type
    
    res.status(200).send({message: 'O item foi alterado com sucesso.'})
})

app.get("/products", (req: Request, res: Response) => {
    res.send(products)
})

app.get('/products/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const result = products.find((product) => product.id === id)
    res.status(200).send(result)
})

app.post('/products', (req: Request, res: Response)=>{
    const id: string = req.body.id
    const name: string = req.body.name
    const price: number = req.body.price
    const color: string = req.body.color

    const newProduct = {
        id,
        name,
        price,
        color
    }

    products.push(newProduct)

    res.status(200).send({message: 'Produto adicionado com sucesso'})
})

app.put('/products/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newColor = req.body.color as string | undefined

    const product = products.find((product) => product.id === id)

    product.name = newName || product.name
    product.price = isNaN(newPrice) ? product.price : newPrice
    product.color = newColor || product.color
    
    res.status(200).send({message: 'O produto foi alterado com sucesso.'})
})

app.delete('/products/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const indexToDelete = products.findIndex((product) => product.id === id)

    if(indexToDelete >= 0){
        products.splice(indexToDelete, 1)
    } else {
        console.log('Index não encontrado')
    }
    res.status(200).send({message: 'O produto foi deletado com sucesso.'})
})