import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors } from "../../Util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { fontSize } from "@mui/system";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../Util/helpers";

const TopRow = () => {
  const screenWidth = getScreenWidth();
  console.log(screenWidth);
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      display="flex"
      alignItems="flex-start"
      width="100%"
      height="auto"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6} spacing={0}>
          <CustomDiv display="flex" alignItems="center">
            <PhoneIcon style={{ fontSize: fontSize.normal }} />{" "}
            <Text fontSize={fontSize.small}>+381633333333</Text>
            <CustomDiv
            display="flex" 
            alignItems="center"
            margin='0px 0px 0px 5px'
            >
            <EmailIcon
              style={{fontSize: fontSize.normal,
              }}
            />
            <Text>info@gmail.com</Text>
            <TwitterIcon
              style={{fontSize: fontSize.normal,
              color: colors.gray,
              }}
            />
            <InstagramIcon
              style={{fontSize: fontSize.normal,
              color: colors.gray,
              }}
            />
            <FacebookIcon
              style={{fontSize: fontSize.normal,
              color: colors.gray,
              }}
            />
            </CustomDiv>
          </CustomDiv>
          <CustomDiv width="50%" border="0px" bgColor="inherit"></CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;