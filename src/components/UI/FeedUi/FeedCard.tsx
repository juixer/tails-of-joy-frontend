import { IPetTipStory } from "@/types";
import Link from "next/link";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

const FeedCard = ({ post }: { post: IPetTipStory }) => {
  return (
    <div className="flex flex-col gap-2 hover:scale-[1.01] duration-300 border hover:border-gray-400 max-w-xl mx-auto p-2 rounded-md shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={"https://i.ibb.co.com/Xjjd68g/default-user.jpg"}
            alt={post.publisher_name}
          />
          <div className="">
            <div className="text-sm font-semibold">{post.publisher_name}</div>
            <div className="text-xs text-gray-500">{post.publish_date}</div>
          </div>
        </div>
        <div>
          {/* <button className="bg-sky-500 hover:bg-sky-600 text-white p-1 rounded-md">Follow</button> */}
          <button className="bg-red-500 hover:bg-red-900 text-white p-1 rounded-md">
            Unfollow
          </button>
        </div>
      </div>
      <div>
        <span
          className={`${post.category === "tip" && "bg-amber-200"} ${
            post.category === "story" && "bg-emerald-200"
          } underline`}
        >
          #{post.category}
        </span>
      </div>

      <div className="space-y-2">
        <p>{post.story}</p>
        <img
          className="object-cover w-full h-96 rounded-md"
          src={
            "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          }
          alt={post.publisher_name}
        />
      </div>

      <div className="ml-2 grid grid-cols-3 gap-5">
        <div className="flex col-span-1  gap-5">
          <button className="flex items-center text-lg gap-1 btn btn-sm bg-slate-300">
            <FaThumbsUp className="text-blue-500" /> {post.upVote}
          </button>
          <button className="flex items-center text-lg gap-1 btn btn-sm bg-slate-300">
            <FaThumbsDown className="text-red-500" /> {post.downVote}
          </button>
        </div>

        <div className="w-full col-span-2">
          <Link href={`/post/${post._id}`}>
            <button className="btn btn-sm w-full bg-slate-300">
              Check Comments
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
