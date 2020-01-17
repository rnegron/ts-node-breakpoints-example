FROM node:12.13.1-alpine

# Explicitly set the timezone as UTC
ENV TZ="UTC"
RUN apk add --no-cache tzdata
RUN cp /usr/share/zoneinfo/UTC /etc/localtime
RUN echo $TZ > /etc/timezone
RUN apk del tzdata

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

CMD ["yarn", "ls"]
