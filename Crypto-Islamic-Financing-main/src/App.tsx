import { createTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { SnackbarProvider } from 'notistack';
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

import Wallet from './Wallet';

const theme = createTheme({
    palette: {
      primary: {
        main: '#fefefe'
      },
      secondary: {main: '#6859FF'} 
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    }
  })
const App: FC = () => {
  


     return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                       <Route exact path="/">
                        <SnackbarProvider>
                            <Wallet />

                        </SnackbarProvider>
                        </Route>
                        <Route path="/dashboard">
                          <Dashboard />  
                        </Route>
                    </Switch>
                </Layout>
            </Router>

        </ThemeProvider>
    );
};

export default App;
