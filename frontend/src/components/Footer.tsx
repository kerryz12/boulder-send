import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"; // Example social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-800 text-slate-300 border-t-4 border-blue-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl text-white mb-3">
              <span className="text-blue-500">Boulder</span>Send
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Track. Share. Climb. The ultimate social platform for climbers.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  href: "#",
                  icon: <Instagram className="h-5 w-5" />,
                  label: "Instagram",
                },
                {
                  href: "#",
                  icon: <Twitter className="h-5 w-5" />,
                  label: "Twitter",
                },
                {
                  href: "#",
                  icon: <Facebook className="h-5 w-5" />,
                  label: "Facebook",
                },
                {
                  href: "#",
                  icon: <Linkedin className="h-5 w-5" />,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Product
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Download App", "Gym Partners"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                "Climbing Guide",
                "Training Tips",
                "Community Forums",
                "Blog",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Contact", "Support"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-slate-500">
            &copy; {currentYear} BoulderSend. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
