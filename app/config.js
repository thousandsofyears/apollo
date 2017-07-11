'use strict'

exports.heraclesHost = process.env.HERACLES_HOST || '0.0.0.0';
exports.heraclesPort = process.env.HERACLES_PORT || '6239';
exports.hereaclesVersion = process.env.HERACLES_VERSION || 'heracles_v1';

exports.use_https = process.USE_HTTPS || '';
exports.host = process.env.HOST || 'dev.wishstone.in';
exports.port = process.env.PORT || '23901';
