# Create image based on the Skaffolder Node ES6 image
FROM node:alpine


# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app


# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Set env vars
ENV DB_HOST localhost
ENV NODE_PORT 3000
ENV NODE_API /api

# Expose port
EXPOSE 3000

CMD ["npm", "start"]