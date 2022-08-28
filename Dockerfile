FROM denoland/deno:latest as base

WORKDIR /app

COPY . ./

RUN deno cache main.ts

CMD ["run", "-A", "--allow-net", "--allow-env", "--allow-read" "main.ts"]