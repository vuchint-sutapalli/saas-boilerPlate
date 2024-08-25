import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import authService from "../appWrite/auth";
import { authState } from "../Atoms";
import { useSetRecoilState } from "recoil";

const AppLayout = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await authService.getCurrentUser();
    console.log("current user", response);
    setAuth({
      status: true,
      userData: response,
    });
  };
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
