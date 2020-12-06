FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
ENV MONGODB_URI mongodb://localhost:27017/e-commerce-cefalo
RUN npm run buildprod
EXPOSE 3000
CMD [ "npm", "start" ]
