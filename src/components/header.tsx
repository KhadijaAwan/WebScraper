import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-[60px] bg-slate-500 py-2 px-5 flex justify-between items-center">

            <div className="flex items-center">
                <Image src={logo} width={25} height={25} alt="header-image" style={{ borderRadius: "35px" }} />
                <h2 className="text-white text-base md:text-lg ml-[8px] md:ml-[12px]">Web Scrapper</h2>
            </div>

            <Link className="text-white bg-blue-600 py-1 px-3 font-medium rounded-md" href="https://careerfoundry.com/en/blog/data-analytics/web-scraping-guide/">Online Scrap</Link>
        </div>
    );
}