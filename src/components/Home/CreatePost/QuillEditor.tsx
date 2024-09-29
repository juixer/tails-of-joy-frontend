"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ align: [] }],
      [{ header: [1, 2, false] }],
      ["link"],
      [{ 'color': [] }],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  return (
    <>
      <ReactQuill
        style={{
          height: "180px",
          borderRadius: "50px",
        }}
        placeholder="Start writing your thought"
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <div className="flex justify-end mr-1 mb-5">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Publish
        </button>
      </div>
    </>
  );
};
export default QuillEditor;
