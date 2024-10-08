"use server";

import { redirect } from "next/navigation";
import { post } from "@/app/util/fetch";
import { FormError } from "../common/form-error.interface";

export default async function createUser(
  _prevState: FormError,
  formData: FormData
) {
  const { error } = await post("auth/signup", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
