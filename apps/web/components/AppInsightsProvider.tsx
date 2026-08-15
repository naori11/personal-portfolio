'use client';

import { useEffect } from 'react';
import { appInsights } from '../lib/appinsights';

export function AppInsightsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // App Insights initialized on module load if connection string is present
  }, []);

  return <>{children}</>;
}
