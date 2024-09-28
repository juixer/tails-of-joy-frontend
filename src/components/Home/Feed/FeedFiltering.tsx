"use client";
const FeedFiltering = () => {
  return (
    <div className="max-w-xl mx-auto space-y-5">
      <div className="flex gap-3 justify-end">
        <span className="p-2 bg-gray-300 rounded-md font-bold hover:bg-gray-400 cursor-pointer duration-300">
          All
        </span>
        <span className="p-2 bg-gray-300 rounded-md font-bold hover:bg-gray-400 cursor-pointer duration-300">
          Tips
        </span>
        <span className="p-2 bg-gray-300 rounded-md font-bold hover:bg-gray-400 cursor-pointer duration-300">
          Story
        </span>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search here..."
          className="input input-bordered w-full"
        />
        <button className="bg-blue-500 btn hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
    </div>
  );
};
export default FeedFiltering;
