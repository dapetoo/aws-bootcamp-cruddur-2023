FROM node:16.18 as builder

ENV PORT=80
WORKDIR /frontend-react-js
COPY package.json /frontend-react-js
RUN npm install
COPY . /frontend-react-js/
RUN npm run build

#Production Environment
FROM nginx:1.23.3-alpine
COPY --from=builder /frontend-react-js/build /usr/share/nginx/html
EXPOSE ${PORT}
# CMD ["npm", "start"]
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]