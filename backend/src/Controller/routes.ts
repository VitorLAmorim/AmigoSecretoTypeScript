import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../Services/database.services";
import Pessoa from "../Model/Pessoas";


export const pessoasRouter = express.Router();

pessoasRouter.use(express.json());

pessoasRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const pessoas = await collections.pessoas.find({}).toArray();

        res.status(200).send(pessoas);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

pessoasRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const game = await collections.pessoas.findOne(query);

        if (game) {
            res.status(200).send(game);
        }
    } catch (error) {
        res.status(404).send(`Pessoa não encontrada: ${req.params.id}`);
    }
});


pessoasRouter.post("/", async (req: Request, res: Response) => {
    try {
        const novaPessoa = req.body as Pessoa;
        const result = await collections.pessoas.insertOne(novaPessoa);
        result
            ? res.status(201).send(JSON.stringify(`Cadastrado nova pessoa: ${result.insertedId}`))
            : res.status(500).send("Falha ao cadastrar");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});


pessoasRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const newdata: Pessoa = req.body as Pessoa;
        const query = { _id: new ObjectId(id) };
      
        const result = await collections.pessoas.updateOne(query, { $set: newdata });

        result
            ? res.status(200).send(`Atualizado com sucesso o id: ${id}`)
            : res.status(304).send(`ID: ${id} não atualizado`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

pessoasRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    console.log(id);

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.pessoas.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Removido com sucesso id: ${id}`);
        } else if (!result) {
            res.status(400).send(`Falha ao deletar o id: ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`id: ${id} não existe`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
