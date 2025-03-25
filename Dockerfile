FROM node:22-alpine as production-build

WORKDIR /frontend-app

ADD package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine

WORKDIR /etc/nginx
COPY --from=production-build /frontend-app/config/zvonok.conf ./conf.d/default.conf

WORKDIR /var/www/zvonok
COPY --from=production-build /frontend-app/dist/ ./zvonok-source

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
