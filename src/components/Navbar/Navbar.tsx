import Image from "next/image";
import Link from "next/link";

const Navbar = ({ marginTop }: { marginTop: string }) => {
  return (
    <nav
      className={`h-[100px] fixed top-[${marginTop}] font-[Urbanist] text-white font-medium w-full bg-dark_01 px-[10vw] flex justify-between items-center`}
    >
      {/* Logo section */}
      <section className="flex justify-start items-center">
        <figure className="w-[45px] h-[45px] mr-[8px] relative">
          <Image src={"/assets/images/Logo-icon.svg"} alt="Logo icon" fill />
        </figure>

        <figure className="w-[80px] h-[30px] mr-[10px] relative">
          <Image src={"/assets/images/Logo-text.svg"} alt="Logo text" fill />
        </figure>
      </section>

      {/*Nav links  */}
      <ul className="flex list-none justify-start items-center">
        <Link href={"/"} className="px-[20px] py-[15px]  rounded-[10px] border-dark_01 hover:bg-dark_02 border-[2px] hover:border-border_01">
          <li>Home</li>
        </Link>

        <Link href={"/"} className="px-[20px] py-[15px]  rounded-[10px] border-dark_01 hover:bg-dark_02 border-[2px] hover:border-border_01">
          <li>About Us</li>
        </Link>

        <Link href={"/"} className="px-[20px] py-[15px]  rounded-[10px] border-dark_01 hover:bg-dark_02 border-[2px] hover:border-border_01">
          <li>Properties</li>
        </Link>
        <Link href={"/"} className="px-[20px] py-[15px]  rounded-[10px] border-dark_01 hover:bg-dark_02 border-[2px] hover:border-border_01">
          <li>Services</li>
        </Link>
      </ul>

      {/* Contact us button */}
      <Link href={"/"}>
        <span className="px-[30px] py-[15px] rounded-[10px] bg-dark_02 border-[2px] border-border_01 hover:border-dark_01">
          Contact Us
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
