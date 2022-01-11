const ENV = {
  dev: {
    apiUrl: 'localhost',
    auth0: {
      auth0Domain: 'dev-bz-00bvk.us.auth0.com',
      passwordlessClient: {
        client_id: 'Ytb0BOT1vRuVBWRpl4KRJaCVQHLYvne9',
        clientId: 'Ytb0BOT1vRuVBWRpl4KRJaCVQHLYvne9',
        allowedConnections: ['sms'],
        scope:
          'openid profile read:current_user update:current_user_identities',
        // response_type:
        // id_token will return a JWT token with the profile as described on the scope
        // token will return access_token to use with further api calls
        response_type: 'token id_token',
        nonce: 'nonce', // ideally, this will be a random value
      },
    },
  },
  staging: {
    apiUrl: '[your.staging.api.here]',
  },
  prod: {
    apiUrl: '[your.production.api.here]',
  },
};

export default ENV;
