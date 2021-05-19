FROM node:14

LABEL MAINTAINER Leonel De Leon <gldeleon@live.com.mx>

RUN mkdir -p /var/www/html

RUN echo "antes del WORKDIR 6hrt54hrt6+54hrt56rht456+hrt4+56htr4+56hrt45+6hert4h5ert+4h5r6the4r+6hr+456+456hret+r6ht5"
#Like apache :')'
WORKDIR /var/www/html/

#Copy the package.json
COPY package*.json /var/www/html

#Install dependencies
RUN npm install
#For production 
#RUN npm ci --only=production
COPY . /var/www/html
#Bundle app source

#Mapping the port to docker daemon
#EXPOSE 80

#Run the app
RUN apt-get install -y git

#.......instalar vue y vue cli

RUN npm install vue

RUN npm install --global vue-cli

RUN chmod -R 776 /var/www/html/

RUN echo "aqui vamos papi"

CMD [ "node", "/var/www/html/src/index.js" ]
