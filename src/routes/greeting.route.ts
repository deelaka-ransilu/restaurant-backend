import {Router,Response,Request} from 'express';

const router = Router();

router.get("/",(req:Request,res:Response)=>{
    res.send("greeting router is working");
});

router.post("/",(req:Request,res:Response)=>{
    const {name} = req.body;
    res.send(`Hello, ${name}! Welcome to our restaurant.`);
});

export default router;