FROM node:20-slim AS base
WORKDIR /app

# Install dependencies for native modules (Sharp, SQLite)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build arguments for secrets
ARG CMS_ENCRYPTION_KEY
ARG ASTRO_DB_APP_TOKEN
ARG ASTRO_DB_REMOTE_URL

# Set as environment variables for build
ENV CMS_ENCRYPTION_KEY=$CMS_ENCRYPTION_KEY
ENV ASTRO_DB_APP_TOKEN=$ASTRO_DB_APP_TOKEN
ENV ASTRO_DB_REMOTE_URL=$ASTRO_DB_REMOTE_URL

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim AS runtime
WORKDIR /app

# Copy built application and dependencies
COPY --from=base /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

# Environment variables for runtime
ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the server
CMD ["node", "./dist/server/entry.mjs"]
