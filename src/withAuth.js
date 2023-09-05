import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Assurez-vous que le chemin est correct

const withAuth = (Component) => {
  return (props) => {
    const history = useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          history("/login");
        }
      });

      return () => unsubscribe();
    }, [history]);

    return <Component {...props} />;
  };
};

export default withAuth;
