import { Router } from 'express';
import cors from 'cors';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const middleware = Router();

// Setup debug logger
const debug = require('debug')('welcome-api');

// Setup cors
middleware.use(cors());


middleware.use('/api/quote',
    createProxyMiddleware(
        { target: 'https://zenquotes.io',         
         logLevel : 'debug',
         changeOrigin: true,
         secure: false,
         pathRewrite: function (path, req) { return path.replace('/quote', '') }
        }));


export default middleware;
