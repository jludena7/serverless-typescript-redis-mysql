import type { AWS } from '@serverless/typescript'

import { createToken, createArticle, getArticle } from '@functions/publishing'

const serverlessConfiguration: AWS = {
  service: 'serverless-typescript-redis-mysql',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dotenv-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000'
    }
  },
  // import the function via paths
  functions: { createToken, createArticle, getArticle },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,

      // Add custom
      tsconfig: 'tsconfig.build.json',
      watch: {
        pattern: ['src/**/*.ts'],
        ignore: ['.esbuild', 'dist', 'node_modules', 'tests'],
      }
    }
  }
}

module.exports = serverlessConfiguration
