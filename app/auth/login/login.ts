"use server";

import API_URL from "@/app/constants/api";
import { FormError } from "../common/form-error.interface";
import { getErrorMessage } from "@/app/util/errors";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export default async function login(_prevState: FormError, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/login`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  setAuthCookie(res);
  redirect("/");
}
const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  console.log(setCookieHeader);
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    console.log(token);
    cookies().set({
      name: "Authentication",
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};
