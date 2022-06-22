import React, {useEffect} from "react";


//styles
import "../styles/custom.css"

export default function Jumbo({children}) {

    var pathname;

    const isSSR = typeof window === "undefined";
    try{
        if(isSSR){
            console.log(isSSR);
        }
        else{
            if(window.location.pathname === '/about'){
                pathname = 'about-pages';
            }
            else if(window.location.pathname === '/contact'){
                pathname = 'contact-pages';
            }
        } 
    }
    catch(err){
        console.log(err);
    }
    
    useEffect(() => {
        console.log("I am only being executed in the browser");
      }, []);

    return (
        <div>
            {!isSSR && <div className={pathname}>
                {children}    
            </div>}
        </div>
        
    )
}