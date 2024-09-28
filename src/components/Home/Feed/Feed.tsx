import FeedCard from "@/components/UI/FeedUi/FeedCard";

const fakeDate = [
  {
    _id: "1",
    title: "5 Tips for a Happy Dog",
    story:
      "Keeping your dog happy requires attention to their needs, regular exercise, and a healthy diet. Here are five tips to ensure your furry friend leads a joyful life.",
    publish_date: "2023-09-20",
    image: "https://example.com/images/happy-dog.jpg",
    publisher_name: "Jane Doe",
    publisher_email: "janedoe@example.com",
    publisher_img: "https://example.com/images/jane-doe.jpg",
    upVote: 120,
    downVote: 5,
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
  },
  {
    _id: "2",
    title: "Understanding Cat Behavior",
    story:
      "Cats can be mysterious creatures. Understanding their behavior can help strengthen your bond with your feline friend. Learn about their body language and needs.",
    publish_date: "2023-09-18",
    image: "https://example.com/images/cat-behavior.jpg",
    publisher_name: "Tom Johnson",
    publisher_email: "tomjohnson@example.com",
    publisher_img: "https://example.com/images/tom-johnson.jpg",
    upVote: 85,
    downVote: 2,
    comments: [
      {
        _id: "c3",
        name: "Emma Brown",
        img: "https://i.ibb.co.com/424JzNn/person10.png",
        text: "Very informative! I never knew that twitching tail meant anger.",
        date: "2023-09-19",
      },
    ],
  },
  {
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
    comments: [],
  },
  {
    _id: "4",
    title: "Creating a Safe Space for Your Pet",
    story:
      "Every pet needs a safe and comfortable space to relax. Here are some tips on how to create a cozy nook for your furry friend.",
    publish_date: "2023-09-10",
    image: "https://example.com/images/safe-space.jpg",
    publisher_name: "Robert White",
    publisher_email: "robertwhite@example.com",
    publisher_img: "https://example.com/images/robert-white.jpg",
    upVote: 95,
    downVote: 3,
    comments: [
      {
        _id: "c4",
        name: "Laura Wilson",
        img: "https://i.ibb.co.com/424JzNn/person10.png",
        text: "Love this! My dog has a special corner now.",
        date: "2023-09-11",
      },
      {
        _id: "c5",
        name: "James Lee",
        img: "https://i.ibb.co.com/424JzNn/person10.png",
        text: "Great suggestions! I will implement these soon.",
        date: "2023-09-12",
      },
    ],
  },
];

const Feed = () => {
  return (
    <div className="mx-5 space-y-5">
      {fakeDate.map((post ) => (
        <FeedCard key={post._id} post={post} />
      ))}
    </div>
  );
};
export default Feed;
