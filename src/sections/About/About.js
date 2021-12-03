import React from "react";
import { useTheme, Grid, Typography, makeStyles, Box, useMediaQuery } from "@material-ui/core";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import Avatar from "../../components/Avatar";
import { useTranslation } from "react-i18next";

const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { t } = useTranslation();
    return (
        <SectionContainer id="about"  maxWidth="md" style={{marginTop:"9%",marginBottom:"5%"}}>
            <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
                {isMobile && (
                    <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
                        <Box mb={6}>
                            <Avatar />
                        </Box>
                    </Grid>
                )}
                <Grid
                    item
                    xs={12}
                    md={7}
                    className={classes.gridItemWrapper}
                    style={{ flexDirection: "column", alignItems: "space-around" }}
                >
                    <Box mb={4}>
                        <Typography variant="body1"><div><h1>Hi, I'm Shikha Mishra</h1></div>
                        <div></div>
                        <div>I am Full-Stack Web Developer.
                            I have specialized in JavaScript, Html, CSS, Express JS, and MongoDB.
                             I have built various projects using these languages.
                              I am enthusiastically looking forward to building my career as an SDE and building something that will help in making people's lives better.
                             I also love listening to music, reading novels, and watching movies.</div>
                        </Typography>
                    </Box>
                    <Skills />
                </Grid>
                {!isMobile && (
                    <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
                        <Avatar />
                    </Grid>
                )}
            </Grid>
        </SectionContainer>
    );
};

const useStyles = makeStyles((theme) => ({
    gridItemWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default About;
