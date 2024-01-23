FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY CICD/package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app

# Expose port 3000 to the outside world
EXPOSE 3000

# Define environment variable to set the port
ENV PORT 3000

# Command to run the application
CMD ["node", "app.js"]