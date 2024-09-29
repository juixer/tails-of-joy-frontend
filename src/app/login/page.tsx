import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div className="bg-sky-200 h-screen flex justify-center items-center">
      <div className="bg-white rounded-md h-[62vh] w-[90vw] lg:h-[57vh] lg:w-[35vw] flex justify-center shadow-lg">
        <div className="max-w-xl my-10 w-full">
          <h1 className="text-5xl text-center">Login</h1>
          <form className="w-full my-5 p-5 space-y-3">
            {/* email */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="emaill"
                id="email"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="password">
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <button className="w-full btn bg-sky-500 text-white hover:bg-sky-600 duration-300">
              Login
            </button>
            <p className="text-center font-bold">OR</p>
            <button className="w-full bg-gray-300 btn duration-300 flex items-center">
              <FaGoogle /> Login with Google
            </button>

            <p className="text-center text-sm">
              Do not have an account?{" "}
              <Link
                href="/register"
                className="text-sky-600 font-bold underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
