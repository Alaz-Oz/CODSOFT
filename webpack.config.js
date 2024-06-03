const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
    entry: {
        portfolio: "./src/portfolio/index.jsx",
        landing: "./src/landing/index.jsx",
        calculator: "./src/calculator/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    mangle: true,
                    output: {
                        comments: false,
                    },
                    compress: {
                        drop_console: true,
                    },
                },
            }),
            new HtmlMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "portfolio.html",
            title: "Made by Afroz Alam",
            chunks: ["portfolio"],
        }),
        new HtmlWebpackPlugin({
            filename: "calculator.html",
            title: "Made by Afroz Alam",
            chunks: ["calculator"],
        }),
        new HtmlWebpackPlugin({
            filename: "landing.html",
            title: "Made by Afroz Alam",
            chunks: ["landing"],
        }),
    ],
};
