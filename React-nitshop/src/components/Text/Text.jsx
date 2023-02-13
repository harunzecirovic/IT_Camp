import { fontWeight, letterSpacing } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Text = styled.p`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "300")};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "inherit")};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "none"};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0px"};
    vertical-align: ${(props) => (props.va ? props.va : "middle")};
    margin-top: ${(props) => (props.mt ? props.mt : "0px")};
    margin-left ${(props) => (props.ml ? props.ml : "0px")};
    margin-right ${(props) => (props.mr ? props.mr : "0px")};
    margin-bottom ${(props) => (props.mb ? props.mb : "0px")};
    padding-top ${(props) => (props.pt ? props.pt : "0px")};
    padding-left ${(props) => (props.pl ? props.pl : "0px")};
    padding-right ${(props) => (props.pr ? props.pr : "0px")};
    padding-bottom ${(props) => (props.pb ? props.pb : "0px")};
`;

export default Text;