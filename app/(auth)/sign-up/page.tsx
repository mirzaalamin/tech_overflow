"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
import { SignUpSchema } from "@/lib/validations";

/* eslint-disable react/react-in-jsx-scope */
const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ name: "", username: "", email: "", password: "" }}
        onSubmit={signUpWithCredentials}
      />
    </div>
  );
};

export default SignUp;
