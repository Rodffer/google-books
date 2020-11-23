import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  --blue: #2755ff;
  --gray: #444b54;
  --orange: #fa784a;
  --red: #c53030;
  --white: #f0f0f0;

}

body {
  background: var(--blue);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root{
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

`;
