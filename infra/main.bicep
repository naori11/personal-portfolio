// 1. Define parameters so code is reusable
@description('The region where the resources will be created.')
param location string = 'eastasia'

@description('The name of your Static Web App.')
param appName string = 'portfolio-site'

// 2. Define the cloud resource
resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: appName
  location: location
  
  // 3. Define the pricing tier 
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  
  // 4. Resource properties
  properties: {
    provider: 'GitHub'
  }
}

// 5. Log Analytics Workspace (Required for Application Insights)
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: '${appName}-law'
  location: location
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
  }
}

// 6. Application Insights
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${appName}-appinsights'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
  }
}

// 7. Outputs
output siteUrl string = staticWebApp.properties.defaultHostname
output appInsightsConnectionString string = appInsights.properties.ConnectionString
output appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey
