import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
    body, html {
      margin: 0;
      padding: 0;
	  overflow: hidden;
      font-family: 'Roboto Mono', monospace !important; 
    }
	
	* {
	  z-index: 2;
	  margin: 0;
	  padding: 0;
	}
	
	p {
      margin: 0;
    }
`