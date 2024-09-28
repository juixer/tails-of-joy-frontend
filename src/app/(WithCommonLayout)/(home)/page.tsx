import CreatePostSection from "@/components/Home/CreatePost/CreatePostSection";
import Feed from "@/components/Home/Feed/Feed";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <CreatePostSection />
      <Feed />
    </div>
  );
};
export default HomePage;
