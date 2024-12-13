# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the development server port
EXPOSE 3000

# Run Next.js in development mode
CMD ["npm","run", "dev"]
