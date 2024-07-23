import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useFormik } from "formik";
import axiosInstance from "@/config";
import Card from "./Card";
import Register from "./Register";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      axiosInstance
        .post("/auth/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          if (response.status === 201) {
            toast.success("Login successful");
            localStorage.setItem("accessToken", response.data.data.accessToken);

            router.push("/");
          }
        })
        .catch((error) => {
          const backendErrorResponse = error.response.data;
          toast.error(backendErrorResponse.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="h-screen bg-[#E3E3E3] flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-[800px] flex flex-col gap-5">
        <div className="w-full flex flex-col lg:flex-row border rounded-lg overflow-hidden">
          
            <Card />
          
          <form
            onSubmit={formik.handleSubmit}
            className="w-full lg:w-1/2 bg-[#FFFFFF] p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10"
          >
            <span className="font-dm-sans text-2xl font-black leading-[31.25px] text-center lg:text-left">
              Login
            </span>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="gap-2">
                <label
                  htmlFor="email"
                  className="font-dm-sans text-[10px] sm:text-xs font-semibold leading-[13.02px] text-left"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg  bg-[#0C0C0D0A] pl-10"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <Image
                    src="/asset/email.svg"
                    alt="email"
                    width={16}
                    height={16}
                    className="absolute left-[12px] top-[50%] transform -translate-y-[50%] text-gray-400"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="font-dm-sans text-[10px] sm:text-xs font-semibold leading-[13.02px] text-left"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 rounded-lg  bg-[#0C0C0D0A] pl-10 pr-10"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <Image
                    src="/asset/lock.svg"
                    height={16}
                    width={16}
                    alt="password"
                    className="absolute left-[12px] top-[50%] transform -translate-y-[50%]"
                  />
                  <Image
                    src="/asset/eye.svg"
                    width={16}
                    height={16}
                    alt="view"
                    className="absolute right-10 top-[50%] transform -translate-y-[50%] cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button className="text-sm font-semibold underline text-[#141C24]" type="button">
                Forgot password?
              </button>
              <button
                className="px-8 py-2 bg-[#C1CF16] rounded-sm flex items-center justify-center gap-2"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "..." : "Login"}
                <Image
                  src="/asset/bigArrow.svg"
                  alt="login"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </form>
        </div>
        <Register />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
