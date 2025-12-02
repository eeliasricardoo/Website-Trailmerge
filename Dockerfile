FROM node:lts-alpine AS runtime
WORKDIR /app

COPY . .

RUN npm install

ARG CMS_ENCRYPTION_KEY
ARG ASTRO_DB_REMOTE_URL
ARG ASTRO_DB_APP_TOKEN
ARG PUBLIC_HCAPTCHA_SITE_KEY

# Secrets are available during build via ARG, but not persisted in the image ENV.
# Runtime secrets will be provided by Cloud Run.

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
