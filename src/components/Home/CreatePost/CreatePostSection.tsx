"use client";
import Headline from "@/components/UI/Headline";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(() => import("./QuillEditor"), { ssr: false });

const CreatePostSection = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto px-1">
        <Headline text="What is on your mind?" />
        <QuillEditor />
      </div>
    </div>
  );
};
export default CreatePostSection;
