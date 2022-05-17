const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // or production; development is about finding eroors and building your project whereas production is about shrinking down all the files and ensuring preformance
  entry: {
    main: path.resolve(__dirname, "src/public/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "[name].js",
    //publicPath: "./dist/public",
    assetModuleFilename: "[name][ext]",
    clean: true,
    //this empteys the dist folder "output folder", that way when we run build it doesn't hold on to old versions of our code, instead we have only the new code
  },
  devtool: "inline-source-map",
  // to aid in debugging; this slow builds but optomizes for bugs
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 5550 || 8010,
    compress: true,
    open: true,
    //lauch the browser
    hot: true,
    //hot reload

    //change struff inside src and reload inside of dist
  },
  //loader:  webpack understands js and json but doesn't understand css or html or csv or svg; loaders turn these files into modules that can be understood by javascript
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //testing against all files that end in .css; these are read from left to right, first the css -loader finds the css files and injects them into the js files then style-laoder injects it into our html
      //both of these sytle-loader and css loader; as are all loaders are dev depencdecies and will need to be downloaded
      { test: /\.(svg|ico|png|webp|jpg|gif)$/, type: "asset/resource" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  //plugins:
  plugins: [
    new HtmlWebpackPlugin({
      title: "Just a Demo",
      filename: "index.html",
      template: path.resolve(__dirname, "src/public/temp.html"),
    }),
    new HtmlWebpackPlugin({
      title: "other",
      filename: "other.html",
      template: path.resolve(__dirname, "src/public/other.html"),
    }),
  ],

}