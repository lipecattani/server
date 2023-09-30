import mongoose from 'mongoose';
const { Schema } = mongoose;
import Database from '../configs/Database';

// configure jwt
import jwt from 'jsonwebtoken';

const secret = 'your_secret_key';

const userschema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userschema);

const database = new Database();

class Auth {
  //  register a user via username and password
  public register = async (username: string, password: string) => {
    const user = new User({ username, password });
    await user.save();
  };

  //  login
  //  check if user exists on database
  // checks if password is correct
  // generate a token with jwt
  // return token
  public login = async (username: string, password: string) => {
    const user = await User.findOne({ username });
    if (!user) {
      return { message: 'User not found' };
    } else {
      if (user.password === password) {
        const token = jwt.sign({ username }, secret);
        return { token };
      } else {
        return { message: 'Incorrect password' };
      }
    }
  };
}

export default Auth;
