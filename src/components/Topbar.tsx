import Logo from "../assets/zoe-logo.png";

function Topbar() {
  return (
    <div className="px-3 py-2 shadow-md md:py-3">
      <img src={Logo} className="md:h-10" alt="zoe-financial" />
    </div>
  );
}

export default Topbar;
