// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fefb4f332443561afab6324546f2ce61@o4511941789024256.ingest.us.sentry.io/4511941792825344",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  // Lowered from 1 to 0.2 to capture 20% of traffic for performance monitoring
  tracesSampleRate: 0.2,

  // Stop recording healthy sessions, only record on errors
  replaysSessionSampleRate: 0,

  // Record replays on error
  replaysOnErrorSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});
