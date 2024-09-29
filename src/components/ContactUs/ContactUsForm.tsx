const ContactUsForm = () => {
  return (
    <form className="lg:flex lg:flex-col space-y-5 ">
      <div className="lg:flex lg:justify-between lg:gap-5 space-y-5 lg:space-y-0">
        <input
          type="text"
          name="user_name"
          placeholder="Type your name here"
          className="input input-bordered w-full text-lg"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Type your email here"
          className="input input-bordered w-full text-lg"
        />
      </div>
      <input
        type="text"
        name="user_subject"
        placeholder="Type your subject here"
        className="input input-bordered w-full text-lg"
      />
      <textarea
        name="message"
        className="textarea textarea-bordered w-full h-44 text-lg"
        placeholder="Type your message here"
      ></textarea>
      <button className="bg-sky-600 btn text-white hover:bg-sky-700 duration-300 w-full">
        Submit
      </button>
    </form>
  );
};
export default ContactUsForm;
