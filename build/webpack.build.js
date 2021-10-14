﻿const path = require('path');

module.exports = {
  entry: {
    parse: './src/parse.ts',
    renderReact: './src/render/index.tsx'
  },
  //devtool: 'cheap-module-source-map',
  //devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
        // exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.nmd(?=\.less)$/gi,
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // },
      {
        test: /\.less$/i,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:5]'
              }
            }
          },
          {loader: 'less-loader'}
        ]
      },
    ]
  },
  externals: [{
    '@mybricks/rxui': '@mybricks/rxui',
    'React': {commonjs: "React", commonjs2: "React", amd: "React", root: "React"},
    'react': {commonjs: "React", commonjs2: "React", amd: "React", root: "React"},
    'react-dom': {commonjs: "ReactDOM", commonjs2: "ReactDOM", amd: "ReactDOM", root: "ReactDOM"},
    'lodash': {commonjs: "lodash", commonjs2: "lodash", amd: "lodash", root: "_"},
    'moment': 'moment',
    '@ant-design/icons': '@ant-design',
  }],
  resolve: {
    extensions: ['.tsx', '.ts'],
    alias: {
      '@mybricks/compiler-js': require('path').resolve(__dirname, '../../compiler-js/index.ts'),
    }
  },
  output: {
    globalObject: 'this',
    filename: '[name].js',
    path: path.resolve(__dirname, '../'),
    libraryTarget: 'umd'
  }
}
