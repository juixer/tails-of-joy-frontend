import Navbar from "@/components/UI/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:flex max-w-screen-2xl mx-auto">
      <div className="lg:w-80">
        <Navbar />
      </div>
      <div className="lg:w-[calc(100%-320px)] my-5 mx-5">{children}</div>
    </div>
  );
};
export default layout;
