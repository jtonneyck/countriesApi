FROM node:6.11.5

WORKDIR /usr/src/app
ENV client_origins='["http://localhost:3000"]'
COPY package.json .
RUN npm install    
COPY . .

CMD [ "npm", "start" ]    