import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/db/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email }: { email: string } = req.body;

    try {
      // Conectarse a la base de datos
      const collection = await connectToDatabase();

      // Insertar el correo electrónico en la colección
      await collection.insertOne({ email });

      // Enviar respuesta de éxito
      res.status(200).json({ message: 'Correo electrónico guardado exitosamente' });
    } catch (error) {
      // Enviar respuesta de error
      console.error('Error al guardar el correo electrónico en la base de datos:', error);
      res.status(500).json({ message: 'Error al guardar el correo electrónico' });
    }
  } else {
    // Si no es un método POST, retornar un error de método no permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}