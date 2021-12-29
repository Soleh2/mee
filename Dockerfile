FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install
RUN npm install npm -g install npm@6.14.10
RUN npm install ytdl-core@latest
RUN npm install yt-search@latest

COPY . .

EXPOSE 5000

CMD ["node", "."]
