import mongoose from 'mongoose';
const username = 'dev';
const password = 'oPqxYLolwkPLVcy7';
/**
 * @abstract Class for dealing with database connection
 */
class Database {
  constructor() {
    this._connect();
  }

  public _connect = () => {
    mongoose
      .connect(
        `mongodb+srv://${username}:${password}@cluster0.jcowwwi.mongodb.net/`,
      )
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error');
      });
  };
}

export default Database;
