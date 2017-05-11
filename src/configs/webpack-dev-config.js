import fs from 'fs';
import path from 'path';

const WEBPACK_CONFIG = {
  context: path.join(__dirname),
  entry: getEntries,
  output: {
    path: path.join(__dirname, '../../build') ,
    publicPath: '/build/'
  },
  devtool: 'eval-source-map',
};

function getEntries() {
  const pathEntries = path.join(__dirname, '../entries');
  const entries = fs.readdirSync(pathEntries);

  return entries.filter(
    (entry) => /js?x/.test(entry)
  );
}

export default WEBPACK_CONFIG;
