import logoImage from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[4em] w-[100%]">
      <div className="flex justify-around items-center  w-[20%] h-[100%] pl-[2%]">
        <div className="w-2/4 text-[20px]">Accredian</div>
        <div className="w-2/4 button">Courses</div>
      </div>

      <div className="flex justify-around items-center h-[100%] w-[40%] pr-[2%]">
        <div className="w-1/4 mr-1 ">Refer and Earn</div>
        <div className="w-1/4 mr-1">About Us</div>
        <div className="w-1/4 mr-1 button h-[70%]">Login</div>
        <div className="w-1/4 mr-1 button h-[70%]">Logout</div>
      </div>
    </div>
  );
};
export default Navbar;
