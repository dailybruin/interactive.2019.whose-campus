import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400'],
    },
    {
      name: 'Montserrat',
      styles: ['400', '600'],
    },
  ],
  headerFontFamily: ['Montserrat', 'serif'],
  bodyFontFamily: ['Lato', 'serif'],
})

export default typography
