import { connectDataBase, insertDocument } from '../../helpers/db-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;

    try {
      client = await connectDataBase();
    } catch (e) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    try {
      await insertDocument(client, 'emails', { email: userEmail });
    } catch (e) {
      res.status(500).json({ message: 'Inserting data failed!' });
      client.close();
      return;
    }

    res.status(201).json({ message: userEmail });
  }
}
