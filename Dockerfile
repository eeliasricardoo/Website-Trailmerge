FROM node:lts-alpine AS runtime
WORKDIR /app

COPY . .

RUN npm install

ARG ASTRO_DB_REMOTE_URL
ARG PUBLIC_HCAPTCHA_SITE_KEY

# Secrets are available during build via --mount=type=secret, avoiding persistence in image layers.
# Runtime secrets will be provided by Cloud Run.

RUN --mount=type=secret,id=CMS_ENCRYPTION_KEY \
    --mount=type=secret,id=ASTRO_DB_APP_TOKEN \
    CMS_ENCRYPTION_KEY="$(cat /run/secrets/CMS_ENCRYPTION_KEY)" \
    ASTRO_DB_APP_TOKEN="$(cat /run/secrets/ASTRO_DB_APP_TOKEN)" \
    npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
