# react_vite_swagger
Manage swagger for [react_vite_sample](https://github.com/nyaomaru/react_vite_sample) repository

## generate server with swagger_codegen

Clone the [swagger_codegen](https://github.com/swagger-api/swagger-codegen) github and run below code.

```sh
./run-in-docker.sh mvn package
./run-in-docker.sh generate -i nyaomaru.yml -l nodejs-server -o /gen/out/test-server -DpackageName=test-server
```

## get started

Run below command

```sh
pnpm start
```
