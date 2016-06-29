const staticHost = 'https://addons-admin.cdn.mozilla.net';

module.exports = {
  staticHost,

  CSP: {
    directives: {
      scriptSrc: [
        staticHost,
      ],
      styleSrc: [staticHost],
      imgSrc: [
        "'self'",
        staticHost,
        'data:',
      ],
    },
  },
};
