const ENV = {
  dev: {
    apiUrl: "localhost",
    auth0: {
      auth0Domain: "",
      passwordlessClient: {
        client_id: "",
        scope: "openid profile read:current_user update:current_user_identities",
        audience: `https://XXXX.auth0.com/api/v2/`
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
