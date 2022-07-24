FROM node:16.15.1-alpine

# ENV NODE_PATH /app/node_modules
# ENV PATH="/app/node_modules/.bin:${PATH}"

WORKDIR /app

# Check .dockerignore
COPY . /app

RUN cd /app && npm install

# Add script in package json to call [vite --host]
CMD ["npm", "run", "dev-host"]