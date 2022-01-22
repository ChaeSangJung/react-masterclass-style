import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';

const darkTheme = {
  textColor: "whitesmoke",
  bgClr:"#111"
}
const lightTheme = {
  textColor: "#333",
  bgClr:"whitesmoke"
}
const defaultTheme = {
  textColor: "#ddd",
  bgClr:"pink"
}

let storage = "dark";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ 
      storage === "dark" ? darkTheme 
      : storage === "light" ? lightTheme
      : defaultTheme
    }
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);