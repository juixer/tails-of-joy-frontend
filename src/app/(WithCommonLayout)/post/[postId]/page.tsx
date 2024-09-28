import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

const ViewPostPage = ({ params }: { params: string }) => {
  const post = {
    _id: "3",
    title: "The Importance of Regular Vet Visits",
    story:
      "Regular veterinary check-ups are essential for your pet's health. Learn why these visits are crucial and what to expect during a vet appointment.",
    publish_date: "2023-09-15",
    image: "https://example.com/images/vet-visit.jpg",
    publisher_name: "Samantha Green",
    publisher_email: "samanthagreen@example.com",
    publisher_img: "https://example.com/images/samantha-green.jpg",
    upVote: 60,
    downVote: 0,
    comments: [
      {
        _id: "c1",
        name: "Mark Smith",
        img: "https://i.ibb.co.com/424JzNn/person10.png",
        text: "Great tips! My dog loves the extra walks.",
        date: "2023-09-21",
      },
      {
        _id: "c2",
        name: "Lisa Ray",
        img: "https://i.ibb.co.com/424JzNn/person10.png",
        text: "Thanks for sharing! I'll try these out.",
        date: "2023-09-22",
      },
    ],
  };
  return (
    <div className="flex flex-col gap-2 border border-gray-400 max-w-xl mx-auto p-2 rounded-md shadow-lg">
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

      <div className="grid grid-cols-2  gap-5">
        <button className="flex items-center text-lg gap-1 btn btn-sm bg-slate-300">
          <FaThumbsUp className="text-blue-500" /> {post.upVote}
        </button>
        <button className="flex items-center text-lg gap-1 btn btn-sm bg-slate-300">
          <FaThumbsDown className="text-red-500" /> {post.downVote}
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Comments</h2>
        <div className="space-y-2">
          {post.comments.map((comment) => (
            <div
              key={comment._id}
              className="flex flex-col gap-1 border rounded-md border-gray-300 p-1"
            >
              <div className="flex items-center gap-1">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={"https://i.ibb.co.com/Xjjd68g/default-user.jpg"}
                  alt={comment.name}
                />
                <div>
                  <div className="text-sm font-semibold">{comment.name}</div>
                  <div className="text-xs text-gray-500">{comment.date}</div>
                </div>
              </div>
              <div>
                <div>{comment.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ViewPostPage;
