// 1. Define parameters so code is reusable
@description('The region where the resources will be created.')
param location string = 'eastasia'

@description('The name of your Static Web App.')
param appName string = 'portfolio-monorepo-site'

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

// 5. Output the auto-generated URL
output siteUrl string = staticWebApp.properties.defaultHostname
