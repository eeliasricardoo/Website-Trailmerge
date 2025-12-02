FROM node:lts-alpine AS runtime
WORKDIR /app

COPY . .

RUN npm install

ARG CMS_ENCRYPTION_KEY
ENV CMS_ENCRYPTION_KEY=$CMS_ENCRYPTION_KEY

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
