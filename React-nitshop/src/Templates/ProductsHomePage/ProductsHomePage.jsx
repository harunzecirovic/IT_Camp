import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";

const ProductsHomePage = () => {
    return(<CustomDiv>
        <Grid container direction='row'>
        <Grid item lg={3} md={3} xs={3}>
            <Text>Div3</Text>
        </Grid>
        <Grid item lg={9} md={9} xs={9}>
            <Grid>
                <Text>Div9</Text>
            </Grid>
            <Grid>
                <Text>Div9</Text>
            </Grid>
            <Grid>
                <Text>Div9</Text>
            </Grid>
        </Grid>
        </Grid>
    </CustomDiv>
)}

export default ProductsHomePage