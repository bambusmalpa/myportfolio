import React from 'react';
import styled from "styled-components"
import logo from "./logopath.svg"
const LogoSvg=styled.div`

  width:100%;
  
   >.home__logo{

   >.logo__path{
      stroke:#F8F8F2;

      stroke-dashoffset:0;
      stroke-width:3;
      fill:transparent;
     }
     >#left{
      stroke-dasharray:1102;
      animation-name:loadLogoLeft,fillLogo;
      animation-delay:0s, 1s;
      animation-duration:1s;
      animation-fill-mode: forwards,forwards;
     }
     >#M{
      stroke-dasharray:3000;
      animation-name:loadLogoM,fillLogo;
      animation-delay:0s, 1s;
      animation-duration:1s;
      animation-fill-mode: forwards,forwards;
     }
    
     >#slash{
      stroke-dasharray:942
      animation-name:loadLogoSlash,fillLogo;
      animation-delay:0s, 1s;
      animation-duration:1s;
      animation-fill-mode: forwards,forwards;
     }
     >#right{
      stroke-dasharray:1102
      animation-name:loadLogoRight,fillLogo;
      animation-delay:0s, 1s;
      animation-duration:1s;
      animation-fill-mode: forwards,forwards;
     }
     @keyframes loadLogoLeft {
      from{stroke-dashoffset:1102}
          to{stroke-dashoffset:0}}
          @keyframes loadLogoM {
      from{stroke-dashoffset:3000}
          to{stroke-dashoffset:0}}
     
          @keyframes loadLogoSlash {
      from{stroke-dashoffset:942}
          to{stroke-dashoffset:0}}
          @keyframes loadLogoRight {
      from{stroke-dashoffset:1102}
          to{stroke-dashoffset:0}}
            @keyframes fillLogo{
               from{fill:transparent}
               to{fill:#F8F8F2}
            }
  }
  @media(min-width:767px){
    
    margin-top:25%;
  }
}  

`

const Logo = () => {
    return ( 
      <LogoSvg className="logo__container">
      {/* <img src={logo} alt=""/> */}
      <svg className="home__logo"xmlns="http://www.w3.org/2000/svg"
   width="100%" height="100%"
   viewBox="0 0 1150 500">

 <path className="logo__path" id="left"
      fill="none" stroke="black" strokeWidth="1"
      d="M 271.67,446.00
         C 271.67,446.00 18.00,334.33 18.00,334.33
           18.00,334.33 17.67,297.67 17.67,297.67
           17.67,297.67 271.82,171.00 271.82,171.00
           271.82,171.00 271.88,231.88 271.88,231.88
           271.88,231.88 96.64,313.64 96.64,313.64
           96.64,313.64 272.00,385.91 272.00,385.91
           272.00,385.91 271.67,446.00 271.67,446.00 Z
         M 342.94,498.94" />

 <path className="logo__path" id="M"
      fill="none" stroke="black" strokeWidth="1"
      d="M 278.00,491.96
         C 278.00,491.96 278.00,116.04 278.00,116.04
           278.00,116.04 384.88,116.12 384.88,116.12
           384.88,116.12 475.45,403.91 475.45,403.91
           475.45,403.91 571.33,116.33 571.33,116.33
           571.33,116.33 677.67,116.33 677.67,116.33
           677.67,116.33 677.67,491.67 677.67,491.67
           677.67,491.67 604.67,491.67 604.67,491.67
           604.67,491.67 607.67,195.67 607.67,195.67
           607.67,195.67 509.00,491.67 509.00,491.67
           509.00,491.67 436.33,491.67 436.33,491.67
           436.33,491.67 344.67,195.33 344.67,195.33
           344.67,195.33 348.00,491.67 348.00,491.67
           348.00,491.67 278.00,491.96 278.00,491.96 Z"/>

 <path className="logo__path" id="slash"
      fill="none" stroke="black" strokeWidth="1"
      d="M 684.25,491.50
         C 684.25,491.50 824.00,116.12 824.00,116.12
           824.00,116.12 894.00,115.91 894.00,115.91
           894.00,115.91 754.33,491.33 754.33,491.33
           754.33,491.33 684.25,491.50 684.25,491.50 Z"/>

<path className="logo__path"id="right"
      fill="none" stroke="black" strokeWidth="1"
      d="M 881.50,386.00
         C 881.50,386.00 881.00,447.00 881.00,447.00
           881.00,447.00 1134.67,335.67 1134.67,335.67
           1134.67,335.67 1134.82,299.18 1134.82,299.18
           1134.82,299.18 881.12,172.00 881.12,172.00
           881.12,172.00 881.00,232.75 881.00,232.75
           881.00,232.75 1056.62,314.44 1056.62,314.44
           1056.62,314.44 881.50,386.00 881.50,386.00 Z"/>

 
         
      
</svg>
</LogoSvg>



     );
}
 
export default Logo;