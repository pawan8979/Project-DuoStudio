import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="nav">
      <img id="nav-img" src="/logo.svg" alt="" />
      <div id="nav-part2">
        <h4 className="nav-h4">Home</h4>
        <h4 className="nav-h4">Work</h4>
        <h4 className="nav-h4">Studio</h4>
        <h4 className="nav-h4">Contact</h4>
      </div>
      <div id="nav-part3">
        <div id="circle"></div>
      </div>
    </div>
  );
};
export default Navbar;
