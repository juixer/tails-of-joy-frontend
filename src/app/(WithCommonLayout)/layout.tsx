import Navbar from "@/components/UI/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:flex max-w-screen-2xl mx-auto">
      <div className="lg:w-80 static top-0">
        <Navbar />
      </div>
      <div className="lg:w-[calc(100%-320px)] my-5">{children}</div>
    </div>
  );
};
export default layout;
