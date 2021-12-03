import React from "react";
import { motion } from "framer-motion";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Experience from "../../sections/Experience";
import {Projects1} from "../../sections/Projects1/Projects1";
import Contact from "../../sections/Contact";
import Background3d from "../../components/Background3d.js/Background3d";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Navbar from "../../components/Navbar";

const MainHome = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
           
            {/* <Home /> */}
            <About />
            <Experience />
            <Projects1 />
            <Contact />
            {/* {!isMobile && <Background3d />} */}
        </motion.main>
    );
};

export default MainHome;
