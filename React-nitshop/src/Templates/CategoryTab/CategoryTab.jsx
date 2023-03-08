import React from "react";
import SimplifedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors } from "@mui/material";

const CategoryTab = () => {
    const styles = {
        container:{
            width: '100%',
            borderWidth: "0.5px" ,
            borderColor: colors.lightGray,
            borderRadius: '5px',
            textAlign: "left",
        },
    }
    return(
        <SimplifedDiv style={styles.container}></SimplifedDiv>
    )
}

export default CategoryTab