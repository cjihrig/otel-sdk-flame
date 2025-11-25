'use strict';
const { NodeSDK } = require('@opentelemetry/sdk-node');
const {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} = require('@opentelemetry/sdk-metrics');

const sdk = new NodeSDK({
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
  instrumentations: [],
});

sdk.start();
