import "./Header.scss";

const Header = () => {
  const links: string[] = ["first link", "second link"];

  return (
    <div className="header">
      <h1 className="title">Heading</h1>
      {links.map((link) => (
        <a>{link}</a>
      ))}
    </div>
  );
};

export default Header;
