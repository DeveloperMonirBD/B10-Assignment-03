/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                greenYello: '#ABEF5F',
                greenLight: '#ABEF5F80'
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif']
            }
        }
    },
    plugins: [require('daisyui')]
};
