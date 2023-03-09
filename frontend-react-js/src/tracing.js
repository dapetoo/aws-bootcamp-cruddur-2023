// tracing.js
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { WebTracerProvider, BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Resource }  from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { UserInteractionInstrumentation } from '@opentelemetry/instrumentation-user-interaction';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';

const { getWebAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-web');

const exporter = new OTLPTraceExporter({
  url: 'https://api.honeycomb.io:443/v1/traces'
});
const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'browser',
  }),
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager()
});


registerInstrumentations({
  instrumentations: [
    new XMLHttpRequestInstrumentation({
      propagateTraceHeaderCorsUrls: ['https://4567-dapetoo-awsbootcampcrud-l8ej919vuci.ws-eu89b.gitpod.io/'

        //  /.+/g, //Regex to match your backend urls. This should be updated.
      ]
    }),
    new FetchInstrumentation({
      propagateTraceHeaderCorsUrls: ['https://4567-dapetoo-awsbootcampcrud-l8ej919vuci.ws-eu89b.gitpod.io/',
        //  /.+/g, //Regex to match your backend urls. This should be updated.
      ]
    }),
  ],
});

registerInstrumentations({
  instrumentations: [
    getWebAutoInstrumentations({
      // load custom configuration for xml-http-request instrumentation
      '@opentelemetry/instrumentation-xml-http-request': {
        propagateTraceHeaderCorsUrls: [ 'https://4567-dapetoo-awsbootcampcrud-l8ej919vuci.ws-eu89b.gitpod.io/',
            // /.+/g, //Regex to match your backend urls. This should be updated.
          ],
      },
      '@opentelemetry/instrumentation-fetch': {
        propagateTraceHeaderCorsUrls: ['https://4567-dapetoo-awsbootcampcrud-l8ej919vuci.ws-eu89b.gitpod.io/',
            // /.+/g, //Regex to match your backend urls. This should be updated.
          ],
      },
    }),
  ],
 });
 

registerInstrumentations({
  instrumentations: [
    new DocumentLoadInstrumentation(),
  ],
});

registerInstrumentations({
  instrumentations: [
    new UserInteractionInstrumentation(),
  ],
});

registerInstrumentations({
  instrumentations: [
    new UserInteractionInstrumentation({
      eventNames: ['submit', 'click', 'keypress'],
    }),
  ],
});


export default function TraceProvider({ children }) {
  return (
    <>
      {children}
    </>
  );
}
