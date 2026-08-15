import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const reactPlugin = new ReactPlugin();
let appInsights: ApplicationInsights | null = null;

if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_APPINSIGHTS_CONNECTION_STRING
) {
  appInsights = new ApplicationInsights({
    config: {
      connectionString: process.env.NEXT_PUBLIC_APPINSIGHTS_CONNECTION_STRING,
      extensions: [reactPlugin],
      enableAutoRouteTracking: true,
      disableAjaxTracking: false,
      autoTrackPageVisitTime: true,
      enableUnhandledPromiseRejectionTracking: true,
    },
  });
  appInsights.loadAppInsights();
}

export { reactPlugin, appInsights };
