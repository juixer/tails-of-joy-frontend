import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="bg-sky-200 h-screen flex justify-center items-center">
      <div className="bg-white rounded-md h-[90vh] w-[90vw] lg:h-[85vh] lg:w-[35vw] flex justify-center shadow-lg">
        <div className="max-w-xl my-10 w-full">
          <h1 className="text-5xl text-center">Register</h1>
          <form className="w-full my-5 p-5 space-y-3">
            {/* name */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="name">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
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
                type="text"
                id="password"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* phone */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* address */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            {/* ProfilePic */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="image">
                Profile Picture
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </div>
            <button className="w-full btn bg-sky-500 text-white hover:bg-sky-600 duration-300">
              Register
            </button>
            <p className="text-center text-sm">
              Already have an account? <Link href="/login" className="text-sky-600 font-bold underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
