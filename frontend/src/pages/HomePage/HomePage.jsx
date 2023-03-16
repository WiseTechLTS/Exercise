import React from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";



const HomePage = () => {

    const [user, token] = useAuth();


  return (
    <div>
    <header className="text-center">
    <span className="text-center">*Test HomePage*
    </span>
    </header>
    <div className="background-body">
    </div>
    </div>






  )

}

export default HomePage;
