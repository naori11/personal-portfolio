import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const reactPlugin = new ReactPlugin();
let appInsights: ApplicationInsights | null = null;

const connectionString =
  process.env.NEXT_PUBLIC_APPINSIGHTS_CONNECTION_STRING?.trim();

if (typeof window !== "undefined" && connectionString) {
  try {
    const keyMatch = connectionString.match(/InstrumentationKey=([a-f0-9-]+)/i);
    const instrumentationKey = keyMatch ? keyMatch[1] : undefined;

    // Only attempt initialization if a non-placeholder connection string/key is found
    if (
      connectionString.includes("InstrumentationKey=") &&
      instrumentationKey !== "00000000-0000-0000-0000-000000000000"
    ) {
      appInsights = new ApplicationInsights({
        config: {
          connectionString,
          instrumentationKey,
          extensions: [reactPlugin],
          enableAutoRouteTracking: true,
          disableAjaxTracking: false,
          autoTrackPageVisitTime: true,
          enableUnhandledPromiseRejectionTracking: true,
        },
      });
      appInsights.loadAppInsights();
    }
  } catch (err) {
    console.warn("Application Insights initialization skipped:", err);
    appInsights = null;
  }
}

export { reactPlugin, appInsights };
