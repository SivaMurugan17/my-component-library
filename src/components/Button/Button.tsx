import "./Button.scss";

const Button = ({ variant }: { variant: string }) => {
  return <button className={`button button-${variant}`}>Click</button>;
};

export default Button;
