module.exports = {
  purge: {
    enabled: false, //Set to true to use active classes from tailwind
    content: [
      './templates/*.twig',
      './templates/components/*.twig',
      './templates/layouts/*.twig',
      '/templates/pages/*.twig',
      '/templates/partial/*.twig'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ['Montserrat'],
      primary: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
