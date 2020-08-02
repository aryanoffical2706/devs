module.exports = {
  apps : [{
    name: 'bm_marketing',
    script: 'npx',
    interpreter: 'none',
    port: '8000',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'node serve.js',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      ref  : 'origin/master',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
