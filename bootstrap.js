import webpack from 'webpack';
import webpackDevConfig from './src/configs/webpack-dev-config';

import {PRODUCTION} from './src/configs/enviroment';
import wepackBuildDataHandler from './src/configs/build-handlers';

if (process.env.NODE_ENV !== PRODUCTION) {
  webpack(webpackDevConfig).run(wepackBuildDataHandler);
}
