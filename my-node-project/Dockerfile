# Use the official Node.js image as the base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the package files first for efficient layer caching
COPY ./my-node-project/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files into the container
COPY ./my-node-project ./

# Expose the port your app listens on
EXPOSE 3000

# Use an environment variable to define the port (default: 3000)
ENV PORT=3000

# Start the app
CMD ["node", "app.js"]
