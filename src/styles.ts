import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#4361ee',
  primaryDark: '#3a0ca3',
  secondary: '#f72585',
  background: '#f8f9fa',
  surface: '#ffffff',
  surfaceHover: '#f0f4ff',
  text: '#212529',
  textMuted: '#6c757d',
  border: '#dee2e6',
  danger: '#e63946',
  dangerHover: '#c1121f',
  success: '#2ec4b6',
  warning: '#ff9f1c'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.text};
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    outline: none;
  }
`
