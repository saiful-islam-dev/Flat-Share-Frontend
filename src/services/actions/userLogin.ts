"use server";

import { TFormData } from "@/app/login/page";

export const userLogin = async (data: TFormData) => {
  const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();
  return userInfo;
};
