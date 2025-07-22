import React from "react";
import SignInForm from "@/components/forms/signin-form";

const SignIn = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
