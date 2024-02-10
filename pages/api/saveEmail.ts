// pages/api/saveEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'emails.txt');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  try {
    fs.appendFileSync(filePath, email + '\n');
    res.status(200).json({ message: 'Email saved successfully.' });
  } catch (error: any) { // Especifica el tipo de 'error' como 'any'
    console.log('Ruta del archivo:', filePath);
    console.error(error.message);
    res.status(500).json({ message: 'Error saving email: ' + error.message });
  }
}