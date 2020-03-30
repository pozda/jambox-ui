import React, { Component } from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import {Button, Dutton} from 'jambox';


const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});
export default class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>

        <Button type={'button'}>Some button, huh!?</Button>
        <Dutton type={'button'}>Some dutton, huh!?</Dutton>

      </ThemeProvider>
    )
  }
}
