import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../Atoms";

const Protected = ({ children, authentication = true }) => {
  const [Loader, setLoader] = useState(true);
  const authStatus = useRecoilValue(authState)?.status;

  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      //login, signup pages
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return Loader ? <div>Loading...</div> : <>{children}</>;
};

export default Protected;
