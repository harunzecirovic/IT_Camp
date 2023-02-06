import React from "react";
import styled from "styled-components";
import { pink } from "@mui/material/colors";


const PrimaryButton = styled.button`
border: 2px solid black;
color: ${(props)=>(props.primary ? 'white' : 'pink')};
background-color: ${(props)=>(props.primary ? 'white' : 'pink')};
padding : 20px;
color: white;

`;
export default PrimaryButton;
