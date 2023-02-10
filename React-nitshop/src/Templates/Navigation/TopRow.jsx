import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors } from "../../Util/theme";
import PhoneIcon from "@mui/icons-material/Phone";

const TopRow = () => {
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width="100%"
      height="auto"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <CustomDiv width="50%" border="0px" bgColor="inherit" display="flex">
          <PhoneIcon /> <p>+381633333333</p>
        </CustomDiv>
        <CustomDiv width="50%" border="0px" bgColor="inherit"></CustomDiv>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
