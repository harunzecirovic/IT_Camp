import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import girl1 from "../../assets/images/home/girl1.jpg";
import girl2 from "../../assets/images/home/girl2.jpg";
import girl3 from "../../assets/images/home/girl3.jpg";
import SimplifedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import { getScreenWidth } from "../../Util/helpers";

const sliders = [
  {
    imgSrc: girl1,
    imgText: "Zaova 1",
  },
  {
    imgSrc: girl2,
    imgText: "Svekrva 2",
  },
  {
    imgSrc: girl3,
    imgText: "Snaha 3",
  },
];

const Slider = () => {
  const deviceWidth = getScreenWidth();

  const setSliderMargin =
    deviceWidth === "SM"
      ? "0px"
      : deviceWidth === "MD"
      ? "0px 10px"
      : "0px 10%";

  const setPaddingTop =
    deviceWidth === "SM" ? "10px" : deviceWidth === "MD" ? "20px" : "30px";

  const styles = {
    sliderContainer: {
      width: "80%",
      height: "200px",
      paddingTop: setPaddingTop,
      margin: setSliderMargin,
    },
  };

  return (
    <Grid container direction='row'>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SimplifedDiv style={styles.sliderContainer}>
          <Carousel data={sliders} />
        </SimplifedDiv>
      </Grid>
    </Grid>
  );
};

export default Slider;