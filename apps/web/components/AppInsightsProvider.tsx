"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { appInsights } from "../lib/appinsights";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (appInsights) {
      const query = searchParams?.toString();
      const url = `${pathname}${query ? `?${query}` : ""}`;
      appInsights.trackPageView({
        name: pathname,
        uri: url,
      });
      appInsights.flush();
    }
  }, [pathname, searchParams]);

  return null;
}

export function AppInsightsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </>
  );
}
