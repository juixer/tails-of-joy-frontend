"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ size: ["small", false, "large", "huge"] }],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  return (
    <>
      <ReactQuill
        style={{
          height: "150px",
          borderRadius: "50px",
        }}
        placeholder="Start writing your thought"
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <div className="flex justify-end mt-16 mb-5">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Publish
        </button>
      </div>
    </>
  );
};
export default QuillEditor;
