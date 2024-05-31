import { getUserInfo } from "@/services/auth.services";
import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const MyProfile = () => {
  const userInfo = getUserInfo();
  return (
    <>
      {userInfo?.userId ? (
        <Typography component={Link} href="/dashboard">
          My Profile
        </Typography>
      ) : (
        ""
      )}
    </>
  );
};

export default MyProfile;
