import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
import cookies from 'js-cookie';

const Layout = dynamic(() => import("@containers/layout"));

const LoginPage = () => {
  const router = useRouter();
  const [inputUser, setInputUser] = useState({
    username: "",
    password: "",
  });

  const userHandleChange = (e: any) => {
    setInputUser((prevState: any) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const userHandleSubmit = (e: any) => {
    e.preventDefault();

    cookies.set("token", "abcdefgh")

    router.push("/")
  }

  return (
    <Layout>
      <form className="h-[100vh] flex flex-col items-center justify-center" onSubmit={userHandleSubmit}>
        <ul className="p-[64px] w-[581px] h-[471px] flex flex-col items-center justify-center bg-[gray] space-y-4">
          <h1 className="text-[32px] font-bold">Login</h1>
          <li className="flex flex-col space-y-2">
            <label htmlFor="">Username</label>
            <input
              className="p-2 h-[32px]"
              type="text"
              placeholder="username..."
              name="username"
              onChange={userHandleChange}
              value={inputUser.username}
            />
          </li>
          <li className="flex flex-col space-y-2">
            <label htmlFor="">Password</label>
            <input
              className="p-2 h-[32px]"
              type="password"
              placeholder="password..."
              name="password"
              onChange={userHandleChange}
              value={inputUser.password}
            />
          </li>
          <button className="mt-9 w-full h-[36px] bg-[white]">Login</button>
          {/* <a className="font-bold" href="" onClick={() => router.push("/register")}>
            Register
          </a> */}
        </ul>
      </form>
    </Layout>
  );
};

export default LoginPage;
