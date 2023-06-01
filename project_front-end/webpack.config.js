const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    //deve ser criado apos o servidor do webpack
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,                           
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
        
                /*Toda vez que for precisar de um arquivo javascript
                  E esse arquivo nao estiver na pasta node_modules
                  converte ele pra mim usando babel
                */

            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                ]
            },

            {
                test: /.*\.(gif|png|jpe?g)$/i,
                    use: {
                    loader: 'file-loader'
                    }
            }
        ]
    }
}





  //para files instalar
  //yarn add file-loader
