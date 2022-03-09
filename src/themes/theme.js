import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#10504F',
      dark: '#186e6d',
      light: '#F4F0F7',
    },
    secondary: {
      light: '#95C8D2',
      main: '#82B9C3',
      dark: '#69A1AC'
    },
    auxDark: {
      light: '#2F3676',
      main: '#262D69',
      dark: '#1B1A52'
    },
    auxLight: {
      light: '#FFFFFF',
      main: '#F5F8F9',
      dark: '#E8EDF2'
    },
    text: {
      primary: '#303030'
    },
    background: {
      default: '#FFFFFF',
      smoke: '#F5F8F9'
    }
  },
  typography: {
    fontFamily: '"Lato"',
    h0: {
      fontWeight: '500',
      fontSize: '2.5rem',
      lineHeight: '3.25rem',
      marginBottom: '3rem'
    },
    h1: {
      fontSize: '48px',
      lineHeight: '110%',
      letterSpacing: '-1px',
      marginBottom: '1rem',
      fontFamily: 'Pacifico'
    },
    h2: {
      fontSize: '40px',
      lineHeight: '110%',
      letterSpacing: '-0.5px',
      marginBottom: '1rem',
      fontFamily: 'Pacifico'
    },
    h3: {
      fontSize: '36px',
      lineHeight: '110%',
      letterSpacing: '0px',
      marginBottom: '1rem'
    },
    h4: {
      fontSize: '24px',
      lineHeight: '110%',
      letterSpacing: '0.25px',
      fontFamily: 'Pacifico'
    },
    h5: {
      fontSize: '18px',
      lineHeight: '115%',
      letterSpacing: '0px',
      fontFamily: 'Lato',
      marginBottom: '0.25rem'
    },
    h6: {
      fontWeight: '400',
      fontSize: '1.125rem'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0px',
      fontFamily: 'Lato'
    },
    body2: {
      fontSize: '14px',
      lineHeight: '143%',
      letterSpacing: '0px',
      fontFamily: 'Pacifico'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '266%',
      letterSpacing: '1px',
      fontFamily: 'Pacifico'
    }
  },
  sizing: {
    button: {
      height: '56px',
      minWidth: '160px'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        fontFamily: 'Lato'
      }
    }
  }
})

export default theme
