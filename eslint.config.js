import jsdoc from 'eslint-plugin-jsdoc';

const config = [
    // configuration included in plugin
    jsdoc.configs['flat/recommended'],
    // other configuration objects...
    {
        files: [
            '**/src/*.js',
            '**/src/*.ts'
        ],
        plugins: {
            jsdoc,
        },
        rules: {
            'jsdoc/require-description': 'error'
        }
    }
];

export default config;