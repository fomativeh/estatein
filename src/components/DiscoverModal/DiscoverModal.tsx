import Image from "next/image";
import styles from "./DiscoverModal.module.scss";

type myProps = {
  setModalClicked: (data: boolean) => void;
};

const DiscoverModal = ({ setModalClicked }: myProps) => {
  return (
    <section
      className={`w-full text-white h-[50px] fixed top-0 left-0 bg-cover ${styles.modalWrap}`}
    >
      {/* Content wrapper */}
      <section className="font-[Urbanist]font-medium w-full h-full relative flex justify-center items-center">
        {/* Modal text */}
        <span>✨Discover Your Dream Property with Estatein.</span>
        {/* Modal Link */}
        <span className="underline ml-[10px] cursor-pointer">Learn more</span>

        {/* Close modal button */}
        <button
          className="border-none absolute right-[50px] w-[27px] h-[27px]"
          onClick={() => setModalClicked(true)}
        >
          <figure className="relative w-full h-full">
            <Image
              src="/assets/images/Close-Banner.png"
              alt="Close Banner icon"
              fill
            />
          </figure>
        </button>
      </section>
    </section>
  );
};

export default DiscoverModal;
