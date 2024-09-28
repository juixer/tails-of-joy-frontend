"use client";

import { IComment } from "@/types";
import { comment } from "postcss";
import { FaX } from "react-icons/fa6";

const FeedCommentModal = ({ comments }: { comments: IComment[] }) => {
  console.log(comments);
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm w-full bg-slate-300"
        
      >
        Check Comments
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box border space-y-3">
          <div className="flex justify-end">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="rounded-full bg-red-600 p-1 text-white">
                <FaX />
              </button>
            </form>
          </div>
          <div className="space-y-1">
            {comments.map((comment) => {
              return (
                <div key={comment._id} className="flex items-center p-2">
                  <img
                    className="rounded-full w-8 h-8 mr-2"
                    src={comment.img}
                    alt={comment.name}
                  />
                  <p>
                    <span className="font-bold">{comment.name}</span>:{" "}
                    {comment.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <form className="space-y-2">
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Enter your comment"
              ></textarea>
              <div className="flex justify-end">
                <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default FeedCommentModal;
