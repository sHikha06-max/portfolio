import React, { useState } from "react";
import { Box, Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import Check from "../../assets/images/Check";
import { useTranslation} from "react-i18next"


const MessageBox = () => {
return (
    
    <div>
        <div style={{padding:"120px"}} >
       
       
        <div style={{ margin:"auto",width:"70%" ,fontSize:"30px", textDecoration:"none", color:"white"}} >
    
            <div >
           <div><a  ><img src="https://img.icons8.com/external-gradak-royyan-wijaya/24/ffffff/external-call-gradak-communikatok-solidarity-gradak-royyan-wijaya-4.png"style={{color: "white",marginRight: "3%",color:"1A1C81",marginLeft:"1.5%",width:"4%"}}/>+91-9911419792</a></div> 

           <div 
                ><a  target="_blank" href="mailto:mshikha38@gmail.com"style={{color: "white",marginRight: "3%",marginLeft:"1%",width:"4%"}}><img src="https://img.icons8.com/material-sharp/24/ffffff/new-post.png"style={{color: "white",marginRight: "3%",marginLeft:"1%",width:"4%"}}/>mshikha38@gmail.com</a></div> 
               <div  ><a  target="_blank" href="https://www.linkedin.com/in/shikha-mishra-279868165/"style={{color: "white",marginRight: "3%",marginLeft:"1%",width:"4%"}}><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"style={{color: "white",marginRight: "3%",marginLeft:"1%",width:"4%"}}/>linkedin.com/in/shikha-mishra-279868165/</a></div>
                
               <div ><a  target="_blank" href="https://github.com/sHikha06-max"style={{color: "white",marginRight: "3%",marginLeft:"1%",width:"4%"}}><img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"style={{color: "white",marginRight: "3%",marginLeft:"1%",width:"4%"}}/>github.com/sHikha06-max</a></div>

            </div>
        </div>
    </div>
        
    </div>
)
}

export default MessageBox;
