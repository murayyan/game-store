interface InputProps {
  label: string;
  type: "text" | "password" | "email" | "tel";
  placeholder: string;
}
export default function Input(props: InputProps) {
  const { label, type, placeholder, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
