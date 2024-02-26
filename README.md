# FLOWXT APP STARTER

This is a starter for frontend and backend application using:

- [pNPM](https://pnpm.io/)
- [Vite](https://vitejs.dev/)
- [NestJS](https://nestjs.com/)
- [Swagger](https://docs.nestjs.com/openapi/introduction)
- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/documentation/syntax/cd)
- [Redux](https://redux-toolkit.js.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Nginx](https://www.nginx.com/)

## Getting started

- Clone the repo
- Rename the project however is needed
- Initialize the project by running `pnpm pinit` in the project root
- Start the dev server with `pnpm start:dev`

### Frontend

- **Env variables**:
  - You can change the env variables inside the `apps/frontend/envs/.env.[environment]`, you can change the HOST and the PORT from here
- **API calls**:
  - You should use [Redux RTK](https://redux-toolkit.js.org/tutorials/rtk-query) for your api calls, is more convenient and it keeps an automatic caching system

### Backend

- **Env variables**:
  - You can change the env variables inside the `apps/backend/envs/.env.[environment]`, you can change the HOST and the PORT from here
- **Swagger**:
  - you can consult the API's swagger [here](http://localhost:4322/swagger) (server must be running)

## Deploy with docker

- **Env variables**
  - It is possible to change env variables for the docker images here: `./docker-envs/.env.[environment]`
- **HTTPS certificates**
  - if you want to use https you have to create three files in the folder: `./nginx/certs`
    - `server.crt`, to create a ssl certificate file run: `openssl x509 -req -days 365 -in ./nginx/certs/server.csr -signkey ./nginx/certs/server.key -out ./nginx/certs/server.crt`
    - `server.csr`, to create a ssl certificate file run: `openssl req -new -key ./nginx/certs/server.key -out server.csr`
    - `server.key`, to create a ssl certificate file run: `openssl genpkey -algorithm RSA -out ./nginx/certs/server.key`
- **Deploying**
  - Run `docker compose -f docker-compose.[environment].yaml up -d` in the project root folder, this will deploy backend available at port `3080 [http]` or `3443 [https]`:
    - frontend available at `http[s]://localhost:[3080/3443]`
    - frontend available at `http[s]://localhost:[3080/3443]/api`
