import React from 'react'
import './App.css'
import Sidemenu from './components/Sidemenu'
import Header from './components/Header'
import {createMuiTheme, CssBaseline, makeStyles, ThemeProvider} from '@material-ui/core'
import PageHeader from './components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#f57c00',
  //     light: '#ffcccb'
  //   },
  //   secondary: {
  //      main: '#008000',
  //      light: '#90ee90'
  //   },
  //   background: {
  //     default: '#f4f5fd'
  //   }
  // },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})


const useStyles = makeStyles ({
  appMain: {
    paddingLeft: 320,
    width: '100%'
  }
})

console.log(theme)

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Sidemenu />
        <div class={classes.appMain}>
          <Header />
          <PageHeader
            title='New Employee'
            subtitle='Form design with validation'
            icon={<PeopleOutlineIcon fontSize='large' />}
          />
        </div>
        <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
