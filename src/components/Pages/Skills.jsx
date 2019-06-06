import React from 'react';
import styled from 'styled-components' 

const SkilsWrapper=styled.ul`
    display:flex;
    color:#F8F8F2;
    list-style:none;
    flex-direction:column;
    

`

const Skills = () => {
    return (<>
    
            <SkilsWrapper>
                <li><i style={{color:"#e34f26"}} className="fab fa-html5"></i>index.html </li>
                <li><i style={{color:"#0099e5"}} className="fab fa-css3-alt"></i> style.css</li>
                <li><i style={{color:"#f7df1e"}} className="fab fa-js"></i>script.js</li>
                <li><i style={{color:"#9933CC"}} className="fab fa-bootstrap"></i>bootstrap.css</li>
                <li><i style={{color:"#6cc24a"}} className="fab fa-node"></i>node.js</li>
                <li><i style={{color:"#c51162"}} className="fab fa-sass"></i>style.sass</li>
                <li><i style={{color:"#00d8ff"}} className="fab fa-react"></i>React.jsx</li>
                <li><i style={{color:"#F1502F"}} className="fab fa-git-alt"></i>.git</li>

        </SkilsWrapper>
        </>
    );
}
 
export default Skills;