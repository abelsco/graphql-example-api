FROM node:latest
LABEL Name=sampleapi Version=0.0.1

WORKDIR /code

COPY package.json .
RUN yarn install

COPY . .
RUN chmod +x wait-for-it.sh
CMD [ "./wait-for-it.sh", "db:27017", "--strict", "--timeout=300", "--"]
