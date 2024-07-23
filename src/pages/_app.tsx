import { Contact } from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/layout/Navbar";
import Login from "@/components/login";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Register from "@/components/register";

export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    accessToken && setToken(accessToken);
  }, []);
  const router = useRouter();
  const isAuthPage =
    router.pathname === "/login" || router.pathname === "/register";
  return (
    <main className="font-dm-sans">
      {token ? (
        <>
          <div className="content-wrapper">
            {!isAuthPage && <Navbar />}
            <Component {...pageProps} />
            {!isAuthPage && <Contact />}
          </div>

          {!isAuthPage && <Footer />}
        </>
      ) : router.pathname === "/register" ? (
        <Register />
      ) : (
        <Login />
      )}
    </main>
  );
}
