import { Router } from 'express';
import cors from 'cors';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const middleware = Router();

// Setup debug logger
const debug = require('debug')('welcome-api');

// Setup cors
middleware.use(cors());
middleware.use('/quote',
    createProxyMiddleware(
        { target: 'https://zenquotes.io/api/today',         
         logLevel : 'debug',
         changeOrigin: true,
         secure: false
        }));



export default middleware;
