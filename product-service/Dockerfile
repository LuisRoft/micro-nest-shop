# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if you have it)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the app with cache dependencies
FROM node:18-alpine3.15 AS builder

# Reinstall pnpm in the builder stage
RUN npm install -g pnpm

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all files
COPY . .

# Build the application
RUN pnpm build

# Production image, copy all the files and run nest
FROM node:18-alpine3.15 AS runner

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Install production dependencies
RUN pnpm install --prod

# Copy built application
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3002

# Start the application
CMD ["node", "dist/main"]