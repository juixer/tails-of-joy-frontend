import Headline from "@/components/UI/Headline";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <Headline text="Welcome to Tails of Joy" />

      <p>
        At Tails of Joy, we believe that every pet brings a unique spark of
        happiness into our lives. Our mission is to celebrate the bond between
        pets and their humans by sharing invaluable tips, heartwarming stories,
        and expert advice to help you nurture that connection.
      </p>

      <Headline text="Our Story" />

      <p>
        Founded by a group of passionate pet lovers, Tails of Joy began as a
        small blog sharing our personal experiences and insights. We wanted to
        create a community where pet owners could come together to share their
        joys, challenges, and everything in between. Over time, our little
        corner of the internet has blossomed into a vibrant resource for anyone
        who adores their furry, feathered, or scaly friends.
      </p>

      <Headline text="Our Team" />

      <p>
        At Tails of Joy, we are a dedicated group of pet enthusiasts, writers,
        and animal welfare advocates who share a common passion: celebrating the
        joy that pets bring into our lives. Our diverse backgrounds—from
        veterinarians and trainers to storytellers and graphic designers—allow
        us to provide well-rounded and insightful content for our community.
        Together, we strive to create a welcoming space where pet lovers can
        connect, learn, and share their experiences.
      </p>

      <Headline text="Our Mission" />

      <p>
        Our mission is simple: to enrich the lives of pets and their owners
        through education, inspiration, and community support. We aim to empower
        pet parents with practical tips, heartwarming stories, and valuable
        resources that enhance the bond between humans and animals. We believe
        that every pet deserves love, care, and a happy home.
      </p>

      <Headline text="Our Vision" />

      <p>
        At Tails of Joy, we envision a world where every pet is cherished and
        every owner feels equipped to provide the best care possible. We aim to
        foster a community that prioritizes animal welfare, promotes responsible
        pet ownership, and celebrates the unique stories that each pet brings
        into our lives. Through our shared experiences, we hope to inspire
        compassion, understanding, and joy in every pet relationship.
      </p>

      <Headline text="What We Offer" />

      <ul className="space-y-5">
        <li>
          <span className="font-bold">Expert Tips:</span> From training and
          nutrition to health and wellness, our articles are designed to help
          you provide the best care for your beloved companions.
        </li>
        <li>
          <span className="font-bold">Heartwarming Stories:</span> Discover
          tales of rescue, recovery, and the incredible bonds that form between
          pets and their families. We love sharing stories from our community
          and encourage you to share yours!
        </li>
        <li>
          <span className="font-bold">Community Connection:</span> Join our
          forums and social media platforms to connect with other pet lovers,
          share advice, and celebrate the joy that pets bring into our lives.
        </li>
      </ul>

      <Headline text="Join Us on This Journey" />

      <p>
        We invite you to be a part of our mission. Whether you’re seeking
        advice, looking to share your pet’s story, or simply wanting to connect
        with fellow animal lovers, Tails of Joy is here for you. Together, let’s
        create a world filled with wagging tails and joyful purrs!
      </p>

      <p className="font-bold text-center">Thank you for being a vital part of our community!</p>
    </div>
  );
};
export default AboutPage;
