const ENV = {
  dev: {
    apiUrl: "localhost",
    auth0: {
      auth0Domain: "auth.romach-dev.com",
      passwordlessClient: {
        client_id: "ZaaH4jbBvP85SUUyMjomo8pR8hPLSfUi",
        allowedConnections: ["sms"],
        scope: "openid profile read:current_user update:current_user_identities",
        audience: `https://dev-b6oppzho.eu.auth0.com/api/v2/`
      },
    }
  },
  staging: {
    apiUrl: "[your.staging.api.here]"
  },
  prod: {
    apiUrl: "[your.production.api.here]"
  }
};

export default ENV;
