import React, {useState} from 'react'
import './App.css'
import {Button, ButtonGroup} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import {makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {green, orange} from '@material-ui/core/colors'
import "@fontsource/roboto"
import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'


const useStyles = makeStyles({
  root: {
     border: 0,
     borderRadius: 15,
     color: 'white',
     padding: 15,
     background: 'linear-gradient(45deg, #333, #999)',
     marginBottom: 25
  }
})

const ButtonStyled =() => {
  const classes = useStyles();
  return <Button className={classes.root}>Custom Button Style</Button>
}

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: orange[500]
  //   },
  //   secondary: {
  //     main: green[500]
  //   }
  // } 
})

const CheckboxSample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'test'
          }}
        />  
        }
        label="Testing Checkbox"
      /> 
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container> 
      <div className="reactMui">
        <header className="App-header">
          <AppBar color="secondary">
             <Toolbar>
               <IconButton>
                <Menu />
               </IconButton>
              <Typography variant='h6'>
                MUI Theming
              </Typography>
              <Button>
                Login
              </Button>
             </Toolbar>
          </AppBar>
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm={6}> 
              <Paper style={{ height: 75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm ={6}>
              <Paper style={{ height: 75, width: '100%'}} />
            </Grid>
          </Grid>
          <Typography variant="h2">
            Welcome MUI
          </Typography>
          <Typography variant="subtitle1">
            Learning MUI
          </Typography>
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="secondary"
            type="email"
            label="Email"
            placeholder="test@test.com"
          />
          <CheckboxSample />
          <ButtonGroup variant="contained" color="primary">
            <Button startIcon={<SaveIcon />}>Save</Button>
            <Button startIcon={<DeleteIcon />}>Discard</Button>
          </ButtonGroup>
        </header>
      </div>
      </Container>
    </ThemeProvider>
  );
}
 
export default App;
