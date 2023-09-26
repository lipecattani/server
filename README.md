# Hackathon Viasoft README
GitHub license
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Overview
Welcome to the Server repository! This server is designed to serve as the backend for an application, providing various functionalities and routes. Below, you'll find information on how to set up and use this server.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributors](#contributors)
- [License](#license)

## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (Node.js version 10.0.0 or higher)
- Git installed
- A .env file containing the necessary environment variables. Ensure to set the PORT variable for testing purposes.

## Installation
To get started with the Server, follow these steps:

1. Clone the repository:

```bash
git clone git@github.com:equipe-hack-viasoft/server.git
```
2. Navigate to the project directory:

```bash
cd server
```
3. Install the project dependencies:

```bash
npm install
```

## Usage

To start the server in production mode, run the following command:

```bash
npm start
```
This will start the server using the NODE_ENV=production environment variable.

To build the server for production, you can run:

```bash
npm run build
```
For development purposes, you can use the following command:

```bash
npm run dev
```
This will start the server in development mode with TypeScript auto-compilation.

## Test Route
A test route is available for development purposes. You can access it at:

```bash
http://localhost:{PORT}/api/v1/test/example
```
Replace {PORT} with the port you have specified in your .env file. The test route will return the following JSON response:

```json
{
  "message": "Ok"
}
```
Please note that the test route only works in development mode.

## Testing
To run the tests, execute the following command:

```bash
npm run test
```
This will run the tests using Jest with the specified configuration.

## Contributors
This project is maintained by:

- Satil Pereira dos Santos Neto
  - Email: satil.prog@gmail.com
  - GitHub: Satil's GitHub
  - Website: https://satil.dev
- Bruno Guerreira
- Eduardo Palhano
- Matheus Cadamuro
- Felipe Cattani

## License
This project is UNLICENSED.
