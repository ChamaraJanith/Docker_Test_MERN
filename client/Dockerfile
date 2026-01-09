# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# package.json files copy කරන්න
COPY package*.json ./

# Dependencies install කරන්න
RUN npm install

# Source code copy කරන්න
COPY . .

# React app build කරන්න
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Build stage එකේ dist folder copy කරන්න
COPY --from=build /app/dist ./dist

# Serve කරන්න (simple HTTP server)
RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
