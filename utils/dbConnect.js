/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const uri = process.env.NEXT_PUBLIC_URI;
  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

  });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
  //   const uri = process.env.MONGO_URI;
  //   console.log('uri', uri);
  //   const db = mongoose.connect(uri, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true,
  //   });

//   const { connection } = mongoose;
//   connection.once('open', () => {
//     console.log('Mongo database connected succelly');
//   });
}

export default dbConnect;
