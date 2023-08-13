# ベースイメージ
FROM arm32v7/node:14-buster

# Create app directory
WORKDIR /app

# Install app dependencies (package.json and package-lock.json)
RUN apt-get update && apt-get install -y curl
RUN apt-get install lsof
COPY package*.json ./
#RUN npm install

# Install Vue 2 and other dependencies
RUN npm install vue@2
RUN npm install -g @vue/cli
RUN npm install vuex
RUN npm install axios
RUN npm install vue-select@latest
RUN npm install vue-router@2.6.0
# Bundle app source (server.js)
COPY . .

# Listen port
EXPOSE 8080
