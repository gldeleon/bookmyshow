FROM node:14

LABEL MAINTAINER Leonel De Leon <gldeleon@live.com.mx>

#Like apache :')'
WORKDIR /var/www/html

#Copy the package.json
#COPY package*.json ./

#Install dependencies
RUN npm install
#For production 
#RUN npm ci --only=production

#Bundle app source

#COPY . .

#Mapping the port to docker daemon
#EXPOSE 8080

#Run the app
CMD [ "node", "app.js" ]


RUN pwd

RUN apt-get install -y git

RUN rm -r /var/www/html/*


#.......instalar vue y vue cli

RUN npm install vue

RUN npm install --global vue-cli
