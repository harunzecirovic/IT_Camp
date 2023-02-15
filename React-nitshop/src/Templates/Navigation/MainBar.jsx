import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv"
import Grid from "@mui/material/Grid";
import Logo from '../../assets/images/logo.png.png'
import { colors } from "../../Util/theme";
import { getScreenWidth } from "../../Util/helpers";

const MainBar = () => {
    return(
    <CustomDiv
    bgColor='white'
    display="flex"
    alignItems="flex-start"
    width="100%"
    height="auto"
    padding="0px 5%"
    border="0px"
    >
    <Grid container direction="row">
        <Grid item md={6} lg={6}>
        <img src={Logo} alt='Logo'/>
        </Grid>
        <Grid item md={6} lg={6} ></Grid>
    </Grid>
    </CustomDiv>
    )
}
export default MainBar