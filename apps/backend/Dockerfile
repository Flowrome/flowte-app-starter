FROM node:18-slim AS base

COPY ./apps/backend /app

WORKDIR /app
RUN rm -rf /app/node_modules

FROM base AS prod-deps
RUN npm install --omit=dev

FROM base AS build
RUN npm install
RUN npm run build

FROM base
COPY --from=prod-deps /app/node_modules /prod-app/node_modules
COPY --from=build /app/dist /prod-app/dist
COPY --from=build /app/public /prod-app/public

RUN rm -rf /app

WORKDIR /prod-app

HEALTHCHECK --interval=60s --timeout=10s --retries=3 CMD curl -sS http://0.0.0.0:4322/api || exit 1

CMD node dist/main