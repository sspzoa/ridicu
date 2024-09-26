FROM oven/bun:latest
WORKDIR /app

COPY package.json ./
RUN bun install

ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

COPY . .
RUN bun run build

EXPOSE 3001
CMD [ "bun", "run", "start" ]