FROM node:16.13.1

WORKDIR /Telivery_FE
COPY . /Telivery_FE
RUN npm install
RUN npm install react-scripts
COPY . ./

CMD ["npm", "start"]
