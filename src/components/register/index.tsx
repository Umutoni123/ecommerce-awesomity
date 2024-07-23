import React, { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import axiosInstance from "@/config";
import Card from "./Card";
import Redirect from "./Redirect";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      axiosInstance
        .post("auth/signup", {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log({ real_response: response.data });
          alert(JSON.stringify(response.data));
        })
        .catch((error) => {
          const backendErrorResponse = error.response.data;
          alert(backendErrorResponse.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="bg-[#E3E3E3] flex flex-col gap-5 justify-center items-center p-[8px]">
      <div className="lg:w-[800px] lg:flex">
        <Card />
        <div className="lg:w-[800px]- border rounded-2xl flex">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-[#FFFFFF] w-[400px] p-10 flex flex-col gap-10"
          >
            <span className="font-dm-sans text-2xl font-black leading-[31.25px] text-left">
              Register
            </span>
            <div className="w-[320px] flex flex-col gap-5">
              <div className="w-[320px] gap-2">
                <label
                  htmlFor="firstName"
                  className="font-dm-sans text-[10px] font-semibold leading-[13.02px] text-left"
                >
                  First name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="w-[320px] h-[48px] px-4 py-2 rounded-lg bg-[#0C0C0D0A] pl-10"
                    placeholder="Enter your first name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </div>
              </div>
              <div className="w-[320px] gap-2">
                <label
                  htmlFor="lastName"
                  className="font-dm-sans text-[10px] font-semibold leading-[13.02px] text-left"
                >
                  Last name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="w-[320px] px-4 py-2 rounded-2 bg-[#0C0C0D0A] pl-10"
                    placeholder="Enter your last name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </div>
              </div>
              <div className="w-[320px] gap-2">
                <label
                  htmlFor="phoneNumber"
                  className="font-dm-sans text-[10px] font-semibold leading-[13.02px] text-left"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="w-[320px] px-4 py-2 rounded-2 bg-[#0C0C0D0A] pl-10"
                    placeholder="Enter your phone number"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                </div>
              </div>
              <div className="w-[320px] gap-2">
                <label
                  htmlFor="email"
                  className="font-dm-sans text-[10px] font-semibold leading-[13.02px] text-left"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-[320px] px-4 py-2 rounded-2 bg-[#0C0C0D0A] pl-10"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
              </div>
              <div className="w-[320px] gap-2">
                <label
                  htmlFor="password"
                  className="font-dm-sans text-[10px] font-semibold leading-[13.02px] text-left"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-[320px] px-4 py-2 rounded-[8px] bg-[#0C0C0D0A] pl-10 pr-10"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />

                  <Image
                    src={showPassword ? "/asset/eye-off.svg" : "/asset/eye.svg"}
                    width={16}
                    height={16}
                    alt="toggle visibility"
                    className="absolute right-[12px] top-[50%] transform -translate-y-[50%] cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
            </div>
            <div className="w-[320px] h-[48px] px-4 py-2 rounded-lg opacity-100 flex items-center gap-4">
              <button className="w-[119px] px-0 py-2 flex gap-2" type="button">
                <span className="font-dm-sans text-sm font-semibold leading-[18.23px] underline text-[#141C24]">
                  Forgot password?
                </span>
              </button>
              <button
                className="w-[125px] px-8 py-2 gap-2 rounded-2 bg-[#C1CF16] flex items-center justify-center"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Register
                <Image
                  src="/asset/bigArrow.svg"
                  alt="register"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Redirect />
    </div>
  );
};

export default Register;
