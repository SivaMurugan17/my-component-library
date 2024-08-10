import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Brand</h1>
      <nav>
        <ul className="navigation">
          <li>
            <a>link1</a>
          </li>
          <li>
            <a>link2</a>
          </li>
          <li>
            <a>link3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
