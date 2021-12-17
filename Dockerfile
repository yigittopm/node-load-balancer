FROM node:12
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY app /home/node/app/
RUN npm install
CMD ["npm", "run", "app"]