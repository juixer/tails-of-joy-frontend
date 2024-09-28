export type TInput = {
  type: string;
  required?: boolean;
  placeholder: string;
};

const PetInput = ({ type, placeholder, required = false }: TInput) => {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="input border-b border-b-black rounded-none focus:outline-none focus-visible:border-b focus-visible:border-b-violet-500 focus-visible:border-l-0 focus-visible:border-r-0 focus-visible:border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-3/4 lg:w-1/4 focus-visible:font-semibold"
    />
  );
};
export default PetInput;
