const webpack = require("webpack");
const fs = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");

const isProductionModeEnabled = process.argv.includes("-p");

const backend = {
  mode: isProductionModeEnabled ? "production" : "development",
  target: "node",
  watchOptions: {
    poll: true
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.svelte$/,
      use: [{
        loader: "svelte-loader",
        options: {
          generate: "ssr",
          hydratable: true
        }
      }]
    }]
  },
  entry: ["./sources-backend"],
  output: {
    path: __dirname,
    filename: "index.js"
  },
  resolve: {
    alias: {
      "svelte": path.resolve('node_modules', 'svelte'),
      "sources-common": path.resolve(__dirname, "./sources-common")
    },
    extensions: [".js", ".svelte"]
  },
  node: {
    __dirname: false,
    __filename: false
  }
}

const frontend = {
  mode: isProductionModeEnabled ? "production" : "development",
  target: "web",
  watchOptions: {
    poll: true
  },
  plugins: [
    new MiniCssExtractPlugin("[name].css")
  ],
  module: {
    rules: [{
      test: /\.svelte$/,
      use: [{
        loader: "svelte-loader",
        options: {
          generate: "dom",
          hydratable: true
        }
      }]
    }, {
      test: /\.css$/,
      use: [
        isProductionModeEnabled ? MiniCssExtractPlugin.loader : "style-loader",
        "css-loader"
      ]
    }]
  },
  entry: ["./sources-frontend/script", "./sources-frontend/design"],
  output: {
    path: path.join(__dirname, "./www/builds"),
    publicPath: "/builds/",
    filename: "[name].js"
  },
  resolve: {
    alias: {
      "svelte": path.resolve('node_modules', 'svelte'),
      "sources-common": path.resolve(__dirname, "./sources-common")
    },
    extensions: [".js", ".css", ".svelte"]
  }
}

module.exports = [backend, frontend];
