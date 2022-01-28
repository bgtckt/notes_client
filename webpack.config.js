const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development'; // По умолчанию режим development
let target = 'web'; // в режиме разработки browserslist не используется

// Режим production, если при запуске указано --mode=production
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist'; // в production режиме используем browserslist
}

// Создаем массив плагинов
const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Данный html будет использован как шаблон
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
      }),
    ];

// Используем плагин только если запускаем devServer
if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode: mode,
    target: target,
    plugins: plugins,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут складываться в dist/assets
        clean: true,
    },
    devServer: {
        hot: true,
        port: 9000,
        static: './src'
    },
    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] }, // Добавляем загрузчик для html
            { 
                test: /\.(le|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            }, // Добавляем загрузчики стилей
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
                // изображения размером до 8кб будут инлайнится в код
                // В режиме разработки все изображения будут помещаться в dist/assets
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx?)$/i,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // Использование кэша для избежания рекомпиляции при каждом запуске
                    },
                },
            },
        ],
    }
}