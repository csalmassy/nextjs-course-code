import { MongoClient } from 'mongodb';

export async function connectDataBase() {
  const client = await MongoClient.connect(
    'mongodb+srv://csalmassy:7ZVrM08n1LHGCsbu@cluster0.flnrc5o.mongodb.net/?retryWrites=true&w=majority'
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort) // sort in descending order by _id
    .toArray(); // get all

  return documents;
}
