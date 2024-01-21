/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        white: '#fff',
        grey: '#f1f0f0',
        black: '#222222',
        lightBlue: '#552FFF',
        skyBlue: '#007aff',
        blue: '#230b5b',
        light: '#EDF6FF',
      },
      backgroundColor: {
        white: '#fff',
        grey: '#f1f0f0',
        black: '#222222',
        lightBlue: '#552FFF',
        skyBlue: '#007aff',
        blue: '#230b5b',
        light: '#EDF6FF',
      },
    },
  },
  plugins: [],
};
