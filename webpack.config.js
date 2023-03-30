import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = {
  index: './src/index.js',
};
export const mode = 'none';
export const devtool = 'inline-source-map';
export const devServer = {
  static: './dist',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const optimization = {
  runtimeChunk: 'single',
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
};
