import { ACCOUNT_TYPE, TAccount, TProducts } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

export const products: TProducts[] = [
    {
        id: "p001",
        name: "Mouse",
        price: 100,
        color:"branco"
    },
    {
        id: "p002",
        name: "Teclado",
        price: 200,
        color:"preto"
    },
    {
        id: "p003",
        name: "Webcam",
        price: 200,
        color:"prata"
    }
]