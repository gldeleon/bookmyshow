FROM node:14

LABEL MAINTAINER Leonel De Leon <gldeleon@live.com.mx>

RUN mkdir -p /var/www/html

#Like apache :')'
WORKDIR /var/www/html/

#Copy the package.json
COPY package*.json /var/www/html

#Install dependencies
RUN npm install
#For production 
#RUN npm ci --only=production
COPY . .
#Bundle app source

#Mapping the port to docker daemon
#EXPOSE 80

#Run the app
RUN apt-get install -y git

RUN echo "aqui vamos papi"

RUN cd /var/www/html/

#RUN npm run prod
CMD [ "node", "/var/www/html/src/index.js" ]
