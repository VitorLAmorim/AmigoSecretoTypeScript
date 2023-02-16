import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
//import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    index:['./src/index.ts'],
  },
  resolve:{
    extensions: ['.tsx','.ts','.js'],
  },
  output: {
    path: path.resolve(__dirname,'public','dist'),
    filename: '[name].js',
  },
};

export default config;  