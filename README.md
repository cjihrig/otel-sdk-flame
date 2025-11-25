
# otel-sdk-flame

This repo is used to create flame graphs of various OTel SDK configurations in a very basic Node.js HTTP server. Each configuration is an npm script that runs 0x, the OTel SDK, and the Node server. View the `scripts` section of the package.json file to see the available configurations.

## Example

To run the Node server without any OTel configuration:

```
npm i
npm run server-only
```

In a separate terminal, generate HTTP load on the server. You can use whatever tool you want:

```
autocannon -c 100 -p 10 -d 10 -W [ -c 100 -d 5] http://localhost:3000
```

Once the load generation phase is complete, kill the original npm script. This will stop the server and cause 0x to generate a flame graph. The name of the flame graph will be logged to the console. It is an HTML file that you can navigate via your browser of choice.

## Acknowledgement

This builds off of the approach used by Platformatic [here](https://github.com/platformatic/async-local-storage-perf-node-24).
