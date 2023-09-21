# Serverless Typescript, Redis and MySQL

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).


## Template features

This template has been generated using the following command
```
serverless create --template aws-nodejs-typescript --path project-name
```

## Installation in docker
- Create application image
  - ```docker build -t api-container-tree .```
- Initialize containers
  - ```docker-compose up -d```
## Execute Unit Test
```
npm run test
```

## Test Endpoints
- Create token
  - Request:
  ```
  POST /dev/token HTTP/1.1
  Host: 0.0.0.0:5000
  Content-Type: application/json
  {
  "email": "admin@gmail.com",
  "password": "password"
  }
  ```
  - Response:
  ```
  {
      "status": 201,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1Mjc4Njc5LCJleHAiOjE2OTUyODA0Nzl9.8P5G_SjJ30ejlD9flv3dAuGLhsOjiDcIN4Asnid0oAY"
  }
  ```
- Create Article
  - Request:
  ```
  POST /dev/article HTTP/1.1
  Host: 0.0.0.0:5000
  Content-Type: application/json
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1Mjc4Njc5LCJleHAiOjE2OTUyODA0Nzl9.8P5G_SjJ30ejlD9flv3dAuGLhsOjiDcIN4Asnid0oAY
  Content-Length: 234
  
  {
  "title": "How Coco Gauff Embodies the Biggest Story in Sports",
  "content": "As our Sports of The Times columnist moves to a new assignment, he reflects on a recurring theme from his tenure: the rise of female athletes."
  }
  ```
- Get Article
  - Request:
  ```
  GET /dev/article/lFTLtA3diYaWSQz7zij6VRtJDdEpWtcw HTTP/1.1
  Host: 0.0.0.0:5000
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1Mjc4Njc5LCJleHAiOjE2OTUyODA0Nzl9.8P5G_SjJ30ejlD9flv3dAuGLhsOjiDcIN4Asnid0oAY
  ```

## Template features

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file
