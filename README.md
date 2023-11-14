# FLOWXT APP STARTER

This is a starter for frontend and backend application using:
- [pNPM](https://pnpm.io/)
- [Vite](https://vitejs.dev/)
- [NestJS](https://nestjs.com/)
- [Swagger](https://docs.nestjs.com/openapi/introduction)
- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/documentation/syntax/cd)
- [Redux](https://redux-toolkit.js.org/)

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

