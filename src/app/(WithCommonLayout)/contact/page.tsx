import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import Headline from "@/components/UI/Headline";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <Headline text="Contact Us" />

      <p className="text-lg">
        We love hearing from fellow pet lovers! Whether you have questions,
        feedback, or just want to share your pet's story, we’re here for you.
        Please reach out using the information below.
      </p>

      <Headline text="Get in Touch" />

      <ul className="space-y-5 text-lg">
        <li>
          <span className="font-bold">Email:</span>{" "}
          <span className="text-sky-500">info@tailsofjoy.com</span>
        </li>
        <li>
          <span className="font-bold">Phone:</span> (555) 123-4567
        </li>
        <li>
          <span className="font-bold">Address:</span> Tails of Joy 123 Pet Lane
          Furrytown, ST 12345
        </li>
      </ul>

      <Headline text="Connect with Us on Social Media" />

      <p className="text-lg">
        Stay updated with the latest pet tips and heartwarming stories by
        following us on social media:
      </p>

      <ul className="space-y-5 text-lg">
        <li>
          <span className="font-bold">Facebook:</span>{" "}
          <span className="text-sky-500 underline cursor-pointer">
            facebook.com/TailsofJoy
          </span>
        </li>
        <li>
          <span className="font-bold">Instagram:</span>{" "}
          <span className="text-sky-500 underline cursor-pointer">
            instagram.com/TailsofJoy
          </span>
        </li>
        <li>
          <span className="font-bold">Twitter:</span>{" "}
          <span className="text-sky-500 underline cursor-pointer">
            twitter.com/TailsofJoy
          </span>
        </li>
      </ul>

      <Headline text="Send Us a Message" />

      <p className="text-lg">
        For inquiries, please fill out the form below, and we’ll get back to you
        as soon as possible!
      </p>

      <>
        <ContactUsForm/>
      </>
    </div>
  );
};
export default ContactPage;
