import React, { useState } from "react";
import { makeStyles, Tabs, Tab, Typography, Box, Link, useTheme, useMediaQuery } from "@material-ui/core";
import { Language, Facebook, Instagram } from "@material-ui/icons";
import { experienceList } from "../../data";
import IconBtn from "../../components/IconBtn";
import { useTranslation } from "react-i18next";
import "./style.css";

const StyledTabs = () => {

   

    return (
        <div >
             
             <div id="skills" className="skills " >
   
  
    <div  className="container-fluid ">
        <div  className="front mb-2"><span>Front End Tools</span></div>
        <div  className="row  mb-1 f1 pt-1 pb-3">
            <div  className="logo col-xl-2 col-md-6 offset-xl-2  "><img  className="  w-50 img-fluid" src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt=""/><br/>HTML</div>
            <div   className="logo col-xl-2 col-md-6 "><img  className=" w-50 img-fluid" src="https://img.icons8.com/color/480/000000/css3.png" alt=""/><br/>CSS</div>
            <div   className="logo col-xl-2 col-md-6 "><img  className=" w-50  img-fluid" src="https://img.icons8.com/color/480/000000/javascript.png" alt=""/><br/>JS</div>
            <div   className="logo col-xl-2 col-md-6 "><img  className=" w-50  img-fluid" src="https://img.icons8.com/color/480/000000/react-native.png" alt=""/><br/>React</div>
            {/* <div   className="logo col-xl-2 col-md-6 offset-xl-3 mt-5"><img  className="  w-50 img-fluid" src="https://i.ibb.co/zx0Tt9M/bootstrap.png" alt=""/><br/>Bootstrap</div> */}
            <div   className="logo col-xl-2 col-md-6 offset-xl-3 mt-5"><img  className=" w-50 img-fluid" src="https://img.icons8.com/fluent/480/000000/github.png" alt=""/><br/>Github</div>
            <div   className="logo col-xl-2 col-md-6 mt-5 offset-md-3 offset-xl-2"><img  className=" w-50  img-fluid" src="https://img.icons8.com/color/480/000000/npm.png" alt=""/><br/>npm</div>
        </div>
        
    </div>

    <div className="container-fluid  mb-2  pt-4">
    <div className="front  "><span>Back End Tools</span></div> 
        <div className="row f1 pt-3 pb-3 mt-2 mb-5">
            <div   className="logo col-xl-2 offset-xl-3 col-6"><img className=" w-50 img-fluid" src="https://img.icons8.com/color/480/000000/nodejs.png" alt=""/><br/>node</div>
            <div   className="logo col-xl-2 col-6"><img className=" w-50 img-fluid" src="https://i.ibb.co/9smDM6j/pngegg.png" alt=""/><br/>express</div>
            <div   className="logo col-xl-2 col-6"><img className=" w-50 img-fluid" src="https://img.icons8.com/color/48/000000/mongodb.png" alt=""/><br/>MongoDB</div>
            
        </div> </div>
</div>
                    
        </div>
    );
};


export default StyledTabs;
