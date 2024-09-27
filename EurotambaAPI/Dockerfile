# Dockerfile para API dos serviços Matamba para a Eurofarma
FROM node:18

# Cria um diretório de trabalho
WORKDIR /usr/src/app

# Instala as dependências do projeto
# O arquivo package.json E package-lock.json são copiados
COPY package*.json ./
RUN npm install

# Copia os arquivos do projeto
COPY . .

# Expõe a porta que o container vai escutar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "euroTambaAPI.js"]