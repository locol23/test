import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

ReactDOM.render(
          <MuiThemeProvider>
            <RaisedButton 
              label="push"
              primary={true}
            />
          </MuiThemeProvider>,
  document.getElementById('app')
);