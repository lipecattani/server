// Import dependencies
import express from 'express';
import cors from 'cors';

// Import routes
import testRouter from './routes/testRoute';

// Informs if server is running on devmode or server mode
if (process.env.NODE_ENV === 'development') {
  console.log(`Running on development mode!`);
  require('dotenv').config();
} else if (process.env.NODE_ENV === 'production') {
  console.log(`Running on production mode`);
}

// Set up Express app
const app = express();

const PORT =
  process.env.NODE_ENV === 'development'
    ? process.env.PORT
    : process.env.PORT || 3000;

// FIXME Allows request from all origins
app.use(
  cors({
    origin: '*',
  }),
);

// Handle JSON payloads in HTTP requests and make the data accessible in your application's routes and middleware
app.use(express.json());

// Test routes
if (process.env.NODE_ENV === 'development') {
  app.use('/api/v1/test', testRouter);
}

// Append routes to the server

const server = app.listen(PORT, () => {
  console.log(
    `Server up and running on http://${
      (process.env.NODE_ENV === 'development' && 'localhost') || '127.0.0.1'
    }:${PORT}`,
  );
});

export default server;
