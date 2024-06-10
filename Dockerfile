# This file is intended for development purposes only. It is not suitable for production.

FROM node:20.11.1-slim

# Create and set the working directory

WORKDIR /react-project

# Copy the package.json and package-lock.json files to the working directory

COPY package.json .

# Install the dependencies

RUN npm install

# Copy the remaining files to the working directory

COPY . .

# Expose the port (not necessary for development purposes it will handle by the docker-compose file)

EXPOSE 5173

# Command to start the application (Dev mode)

CMD ["npm", "run", "dev"]