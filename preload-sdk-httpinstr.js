'use strict';
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');

const sdk = new NodeSDK({
  instrumentations: [
    new HttpInstrumentation(),
  ],
});

sdk.start();
