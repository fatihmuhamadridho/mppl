import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@containers/layout"));

const LoginPage = () => {
  return (
    <Layout>
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <ul className="p-4 bg-[gray] space-y-4">
          <li className="space-x-2">
            <label htmlFor="">id</label>
            <input type="text" />
          </li>
          <li className="space-x-2">
            <label htmlFor="">password</label>
            <input type="text" />
          </li>
          <button className="bg-[white]">Login</button>
        </ul>
      </div>
    </Layout>
  );
};

export default LoginPage;
