"use client";
import React, { useContext } from "react";
import { UserDetailContext } from "../_context/UserDetailContext";

function GenerateLogo() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    console.log(userDetail);
    return <div>Generate</div>;
}

export default GenerateLogo;
