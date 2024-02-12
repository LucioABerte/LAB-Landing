import { MongoClient, Db, Collection } from 'mongodb';

// Cadena de conexión a tu clúster MongoDB Atlas
const uri: string = 'mongodb+srv://lucioaberte:Kp7Iy19xbDstKLlp@labemails.cwcapbx.mongodb.net/';

// Nombre de la base de datos y colección que utilizarás
const dbName: string = 'LABemails';
const collectionName: string = 'emails';

// Conectar al servidor de MongoDB Atlas
const client: MongoClient = new MongoClient(uri);

async function connectToDatabase(): Promise<Collection<any>> {
  try {
    // Conectar al servidor
    await client.connect();
    console.log('Conexión a MongoDB Atlas exitosa');

    // Seleccionar la base de datos y la colección
    const database: Db = client.db(dbName);
    const collection: Collection<any> = database.collection(collectionName);

    return collection;
  } catch (error) {
    console.error('Error al conectar a MongoDB Atlas:', error);
    throw error;
  }
}

export { connectToDatabase };