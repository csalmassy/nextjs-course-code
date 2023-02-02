import { MongoClient } from 'mongodb';
import {
  connectDataBase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDataBase();
  } catch (e) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'POST') {
    // server side validation
    const { email, name, text } = req.body;
    if (
      !email.includes('@') ||
      !name ||
      name.trim === '' ||
      !text ||
      text.trim === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      client.close();
      return;
    }

    // data is valid
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment.', comment: newComment });
    } catch (e) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(
        client,
        'comments',
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (e) {
      res.status(500).json({ message: 'Getting comments failed!' });
      return;
    }
  }
}
