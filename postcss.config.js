module.exports = ({ file }) => {
    return {
        parser: file.extname === '.sss' ? 'sugarss' : false,
        plugins: [
            require('autoprefixer')
        ]
    }
};