FROM node:20.0.0-alpine
COPY . /app
WORKDIR /app
RUN npm install -g esbuild
RUN npm install
EXPOSE 8000
CMD npm run build && npm run preview
