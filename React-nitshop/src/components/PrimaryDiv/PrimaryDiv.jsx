import React from "react";
import styled from "styled-components";


const PrimaryDiv = styled.div`
border: 5px;
color: ${(props)=>(props.primary ? 'white' : 'gray')};
background-color: ${(props)=>(props.primary ? 'white' : 'gray')};
width: 150px;
hight: 100px;
color: white;
padding : 20px;
border-color:${(props)=>(props.primary ? 'black' : 'blue')};
`

export default PrimaryDiv;
