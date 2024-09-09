import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react"

const Welcome=()=>{
    const [showWelcome, setShowWelcome] = useState();
useEffect(()=>{
 const data = localStorage.getItem("show-intro")
setShowWelcome(JSON.parse(data) ?? true)
},[])
    const hideWelcome = () => {
        setShowWelcome(false);
        localStorage.setItem("show-intro" , JSON.stringify(false))
    }
    return(
        <>
        {showWelcome && (
            <div className="container">
                <div className="bg-primary text-white my-3">
                    <FontAwesomeIcon
                        icon={faClose}
                        style={{ float: "right", margin: "5px" }}
                        onClick={hideWelcome}
                    />
                    <div className="p-4">Welcome to Organic Shop</div>
                </div>
            </div>
        )}
    </>
    )
}
export default Welcome

