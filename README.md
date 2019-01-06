# nuxt-pwa-lambda-sample

> My phenomenal Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```


# PWA

```
npm run pwa-dev
```

# deploy

serverless.ymlのprofileを書き換えたら...
```
npm run deploy:api_gw
```

これでAWSにCloudFormationDesignerTemplateがupされ、APIGatewayやLambdaが作られ、
S3にpackagingされたmoduleがuploadされる。
