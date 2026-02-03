import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import OdishaPattern from "./OdishaPattern";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/vssut-main-logo.png"
                alt="VSSUT Logo"
                width={50}
                height={50}
                priority
                unoptimized
                className="rounded-full"
              />
              <span className="text-xl font-bold">VSSUT Marathon</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The inaugural JSW VSSUT Burla Marathon 2026. Running for a cause,
              uniting alumni, and empowering youth.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/virtual-run"
                  className="hover:text-white transition-colors"
                >
                  Virtual Run
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="hover:text-white transition-colors"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Event Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">
              Event Info
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Sunday, 11 Jan 2026</li>
              <li>5:30 AM IST</li>
              <li>VSSUT Main Gate, Burla</li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Veer Surendra Sai University of Technology</li>
              <li>Burla, Sambalpur, Odisha 768018</li>
              <li className="pt-2">
                <a
                  href="mailto:marathon@vssut.ac.in"
                  className="hover:text-white"
                >
                  marathon@vssut.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Map */}
          <div className="h-[200px] w-full rounded-lg overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.282992984635!2d83.90186177505105!3d21.49255738574971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da4ec28af2d%3A0xb33a5cc9af8c33c7!2sVeer%20Surendra%20Sai%20University%20of%20Technology%20(VSSUT)%2C%20Burla!5e0!3m2!1sen!2sin!4v1706600000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=""
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>© 2026 VSSUT Burla Marathon. All rights reserved.</p>
          <p className="mt-2 text-xs">Developed by <Link href="https://www.instagram.com/gyanpatra.dev/" target="_blank" className="hover:text-white transition-colors">Gyanaranjan Patra</Link> (IT 2027)</p>
          <p className="mt-1 text-xs">Designed with Pride in Vssut Burla.</p>
        </div>
      </div>
      <div className="mt-8 opacity-20"></div>
    </footer>
  );
}
