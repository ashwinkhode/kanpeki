# FullStack React Project Starter with Docker (HMR Supported)

## Prerequisites
- Node.js LTS
- npm / yarn
- Docker
- [mkcert](https://github.com/FiloSottile/mkcert)

## Getting Started
1. Install the dependencies in both `web` & `api` folder by running following command
```bash
yarn
#or
npm install
``` 
2. Make a `.env` file and set the environment variables for the project (Refer `.env.example`) 
3. Start Docker if not already running. Then run `docker-compose up` in your terminal to start the development server

`Note: Dont forget to specify environment variables in .env else you may face errors` 

## How to sign TLS Certificate manually?
This is where `mkcert` comes into the picture. Follow the steps given below:
1. Install `mkcert` in your system manually
2. Run below given commands in your terminal 
```bash
mkcert -install
```
3. Make a folder named `certs` inside `config` and run the following command inside the `certs` directory
```bash
mkcert -cert-file myapp-cert.crt -key-file myapp-key.pem
``` 

`Note: If you dont want to sign TLS Certificate. Set your PROXY as http in .env file to avoid any errors`


## Working but still under development

## Author
Ashwin Khode <br/>
<small>Feel free to connect on [Twitter](https://twitter.com/ashwin4real)</small>