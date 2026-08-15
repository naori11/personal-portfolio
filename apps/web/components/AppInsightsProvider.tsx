"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { appInsights } from "../lib/appinsights";

export function AppInsightsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (appInsights) {
      const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
      appInsights.trackPageView({
        name: pathname,
        uri: url,
      });
      appInsights.flush();
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
