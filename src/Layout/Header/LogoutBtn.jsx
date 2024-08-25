import React from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../../Atoms";
import authService from "../../appWrite/auth";
import { Button } from "@/components/ui/button";

const LogoutBtn = () => {
  const setAuth = useSetRecoilState(authState);

  const logOutHandler = () => {
    console.log("logging out");

    authService.logOut().then(() => {
      setAuth({
        status: false,
        userData: null,
      });
    });
  };

  return <Button onClick={logOutHandler}>Log out</Button>;
};

export default LogoutBtn;
