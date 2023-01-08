import { state } from "./../../state";

export function initPageWelcome() {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
    <div class="body">
  
      <header-element></header-element> 
  
  <form-element ></form-element>


   <footer-element></footer-element>
   </div>
  
   `;

  style.innerHTML = `
  .body {  display: flex;
      flex-direction: column;
    
    }
      .container{
        display: flex;
        flex-direction: column;  
        gap:25px;
        margin-bottom:1px; 
    }
    
    `;
  div.append(style);
  return div;
}
