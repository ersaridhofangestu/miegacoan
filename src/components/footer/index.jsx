import Logo from "../../assets/logo/logo-full.png"
import Mie from "../../assets/hightlight/ramenColor.png"
import Dimsum from "../../assets/hightlight/dimsumColor.png"
import Minuman from "../../assets/hightlight/poinsettiaColor.png"

import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      className="bg-slate-900 text-center text-slate-500 lg:text-left" name="contact">
      <div className="max-w-[66rem] mx-auto lg:py-16">
        <div
          className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="mr-12 hidden lg:block">
            <span>Hubungi kami untuk informasi lebih lanjut!</span>
          </div>
          {/* <!-- Social network icons container --> */}
          <div className="flex justify-center">
            <a href="https://www.facebook.com/warunkgacoankota/" className="mr-6">
              <FaFacebookF className="fill-slate-500 hover:fill-sky-500" />
            </a>
            <a href="https://www.instagram.com/mie.gacoan/" className="mr-6">
              <FaInstagram className="fill-slate-500 hover:fill-pink-600" />
            </a>
            <a href="https://twitter.com/mie_gacoan" className="mr-6">
              <FaTwitter className="fill-slate-500 hover:fill-blue-500" />
            </a>
            <a href="https://www.tiktok.com/@miegacoan.tiktok" className="mr-6">
              <FaTiktok className="fill-slate-500 hover:fill-white" />
            </a>

          </div>
        </div>

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- TW Elements section --> */}
            <div className="">
              <div
                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <img src={Logo} className="w-16" alt="" />
              </div>
              <p>
                Kami selalu siap mendengar dari Anda! Jangan ragu untuk menghubungi kami dengan pertanyaan, saran, atau pesanan khusus. Kami menantikan kehadiran Anda!
              </p>
            </div>
            {/* <!-- Products section --> */}
            <div className="col-span-2 lg:w-20 lg:mx-auto text-center font-semibold uppercase">
              <h6
                className="mb-4">
                Products
              </h6>
              <Link
                to="galery"
                spy={true}
                smooth={true}
                offset={-99}
                duration={500}
                className="flex items-center gap-2 text-slate-500 dark:text-neutral-200"
              >
                <img src={Mie} className="w-8" alt="" />
                <p>Mie</p>
              </Link>
              <Link to="galery"
                spy={true}
                smooth={true}
                offset={-99}
                className="flex items-center gap-2 text-slate-500 dark:text-neutral-200"
              >
                <img src={Dimsum} className="w-8" alt="" />
                <p>Dimsum</p>
              </Link>
              <Link to="galery"
                spy={true}
                smooth={true}
                offset={-99}
                className="flex items-center gap-2 text-slate-500 dark:text-neutral-200"
              >
                <img src={Minuman} className="w-8" alt="" />
                <p>Minuman</p>
              </Link>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <Link
                to="outlets"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="flex cursor-pointer mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Lokasi
              </Link>
              <p className="mb-4 flex items-center lg:justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                miegacoan.cs@gmail.com
              </p>
              <p className="mb-4 flex items-center lg:justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd" />
                </svg>
                +62 89639345020
              </p>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-slate-900 p-6 text-center">
          <span>© 2023 Copyright: </span>
          <a
            className="font-semibold text-slate-500"
            href="/"
          >MIE GACOAN</a>
        </div>
      </div>
    </footer >
  )
}

export default Footer