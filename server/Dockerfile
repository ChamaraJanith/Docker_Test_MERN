FROM node:18-alpine

WORKDIR /app

# package.json files copy කරන්න
COPY package*.json ./

# Dependencies install කරන්න
RUN npm install

# Source code copy කරන්න
COPY . .

# Port expose කරන්න
EXPOSE 5000

# Server start කරන්න
CMD ["npm", "start"]
