module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      //Criando cores
      colors:{
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      borderRadius: {
        md: '4px'
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
