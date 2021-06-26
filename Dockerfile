# pegando a imagem que queremos do docker
FROM node

# criando um diretorio de trabalho
WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","dev"]
