export const resolve = {
    alias: {
        // Alias for using source of BootstrapVue
        'bootstrap-vue$': 'bootstrap-vue/src/index.js'
    }
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
};