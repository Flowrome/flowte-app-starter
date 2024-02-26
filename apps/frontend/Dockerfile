FROM node:18-slim AS base

COPY ./apps/backend /backend
COPY ./apps/frontend /app

ARG ENV_FILE=./apps/frontend/envs/.env.prod
COPY ${ENV_FILE} ./.env-base

WORKDIR /app
RUN rm -rf /app/node_modules

RUN chmod +x runup.sh && ./runup.sh

FROM base AS build
RUN npm install
RUN npm run build

FROM base
COPY --from=build /app/dist /prod-app

WORKDIR /prod-app

RUN rm -rf /app
RUN rm -rf /backend
RUN rm /.env-base

RUN npm i -g http-server

HEALTHCHECK --interval=60s --timeout=10s --retries=3 CMD curl -sS http://0.0.0.0:4321 || exit 1

CMD http-server --a 0.0.0.0 --port 4321 --proxy http://0.0.0.0:4321?