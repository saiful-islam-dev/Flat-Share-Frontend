"use server";

import { TFormData } from "@/app/register/page";

export const userRegister = async (data: TFormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};
