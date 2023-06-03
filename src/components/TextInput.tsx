import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = ({ value, ...rest }: TextInputProps) => {
  return (
    <input
      className="border rounded-md p-2 shadow-sm my-5"
      type="text"
      {...rest}
      value={value}
    />
  );
};

export default TextInput;
