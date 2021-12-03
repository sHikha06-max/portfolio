import React from "react";
 import SectionContainer from "../../containers/SectionContainer";




export const Projects1 = () =>{
    return(
        <SectionContainer id="projects" title="PROJECTS" maxWidth="sm" padding="120" reverse>
        <div>
             
            <div className="row">
         <div  className=" col-xl-4 offset-xl-1 col-12 mt-3 mb-5 pbox pt-2 pb-3 ">
         <div className=" bord pt-3">
         <a target="_blank" href="https://pepperfrywebsite.herokuapp.com/products/home"><img className="img-fluid p1" src="/pepper.png" alt=""/></a>
         </div>
         <span className="projname">
         <a className="linked redirect" target="_blank" href="https://pepperfrywebsite.herokuapp.com/products/home">Pepperfry Clone  </a>
         {/* <a className="linked1" target="_blank" href=""><AiFillGithub /></a> */}
         <a className="linked1" target="_blank" href="https://github.com/bhaskar0507/pepperfry.com">
         <img style={{paddingLeft:"3px"}} src="https://img.icons8.com/windows/32/4a90e2/external-link.png"/>
         </a>
         </span>
         <br/>
         <span className="info">An online website to purchase Home Decor, Lamps, Furnishings, Homeware, and more at the best prices.</span>
          <br />
          
          <div className="mt-4">
          <div style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr",
            margin:"auto",
            width:"60%",
            fontSize:"13px",
            color:"white",
            fontWeight:"700"
        }}>
        <div style={{
            width:"50px",
            marginLeft:"8px",
            textAlign:"center"
        }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt=""/><br/>HTML</div>
        <div style={{
          width:"50px",
          marginLeft:"8px",
          textAlign:"center"
      }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/css3.png" alt=""/><br/>CSS</div>
      <div style={{
          width:"50px",
          marginLeft:"8px",
          textAlign:"center"
      }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/javascript.png" alt=""/><br/>JS</div>
      </div>
          </div>
          </div>


         <div  className=" col-xl-4 offset-xl-2 pbox col-12 mt-3 pt-2 mb-5">
         <div className=" bord pt-3">
         <a target="_blank" href="https://moo-project.vercel.app/"><img className="img-fluid p1" src="/mOO.png" alt=""/></a>
         </div>
         <span className="projname">
         <a className="linked redirect pr-3" target="_blank" href="https://moo-project.vercel.app/">Moo Clone</a> 
         {/* <a className="linked1 redirect ml-3" target="_blank"  href=""><AiFillGithub className=" ml-3"   /></a> */}
         <a className="linked1" target="_blank" href="https://github.com/sHikha06-max/moo_Project">
         <img style={{paddingLeft:"3px"}} src="https://img.icons8.com/windows/32/4a90e2/external-link.png"/>
         </a>
         </span>
         <br/>
         <span className="info " style={{
          
            // fontSize: "15px",
            // fontWeight: "500",
            letterSpacing: "1px",
        
         }}>A website where people can choose different cards and select the type of design they want on the cards.</span>
          <br/>
          
          <div className="mt-4">
          <div style={{
              display:"grid",
              gridTemplateColumns:"1fr 1fr 1fr 1fr",
              margin:"auto",
              width:"60%",
              fontSize:"13px",
              color:"white",
              fontWeight:"700"
          }}>
          <div style={{
              width:"50px",
              marginLeft:"8px",
              textAlign:"center"
          }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt=""/><br/>HTML</div>
          <div style={{
            width:"50px",
            marginLeft:"8px",
            textAlign:"center"
        }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/css3.png" alt=""/><br/>CSS</div>
        <div style={{
            width:"50px",
            marginLeft:"8px",
            textAlign:"center"
        }}><img className="img-fluid" src="https://img.icons8.com/color/480/000000/javascript.png" alt=""/><br/>JS</div>
       
        </div>
        </div>
         </div>
        
        
         
    </div>
        </div>
        </SectionContainer>
    )
}