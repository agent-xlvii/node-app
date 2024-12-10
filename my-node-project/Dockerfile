# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json from your project
# into the container to install dependencies.
COPY ./my-node-project/package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY ./my-node-project .

# Expose the port your app will run on (3000 in this case)
EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]
