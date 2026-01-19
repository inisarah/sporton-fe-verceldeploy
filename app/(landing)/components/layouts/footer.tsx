import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        {/* Logo & description */}
        <div className="w-[187px]">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-7">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
          </div>

          <div className="flex flex-col gap-7">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/15">
        <div className="container mx-auto flex justify-between items-center py-6">
          <div>SportsOn © 2025 All Rights Reserved</div>

          <div className="grid grid-cols-2 w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
