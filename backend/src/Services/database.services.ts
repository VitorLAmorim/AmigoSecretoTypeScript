import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { pessoas?: mongoDB.Collection } = {}


export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    await applySchemaValidation(db);

   
    const pessoasCollection: mongoDB.Collection = db.collection(process.env.PESSOAS_COLLECTION_NAME);
 
    collections.pessoas = pessoasCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${pessoasCollection.collectionName}`);
 }

 async function applySchemaValidation(db: mongoDB.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email"],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                email: {
                    bsonType: "string",
                    description: "'email' is required and is a string",
                },
               
            },
        },
    };

    // Try applying the modification to the collection, if the collection doesn't exist, create it 
   await db.command({
        collMod: process.env.PESSOAS_COLLECTION_NAME,
        validator: jsonSchema
    }).catch(async (error: mongoDB.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection(process.env.PESSOAS_COLLECTION_NAME, {validator: jsonSchema});
        }
    });
}