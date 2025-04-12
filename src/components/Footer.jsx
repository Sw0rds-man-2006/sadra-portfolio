import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-1000px w-full rounded-t-15px bg-neutral-900 py-8 mt-12">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Contact Information */}
          <div className="flex flex-col bg-neutral-800 rounded-lg border border-neutral-700 p-6 w-full sm:w-[48%]">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">
              Contact
            </h3>
            <ul className="text-white text-sm space-y-2">
              <li>
                <span className="text-yellow-400 font-semibold">Phone:</span>{" "}
                +98 903 925 7150
              </li>
              <li>
                <span className="text-yellow-400 font-semibold">Gmail:</span>{" "}
                sadraizadi@gmail.com
              </li>
              <li>
                <span className="text-yellow-400 font-semibold">Address:</span>{" "}
                Mashhad, Iran
              </li>
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:w-[48%] sm:items-center">
            <h3 className="text-yellow-400 text-lg font-semibold mb-3">
              Social
            </h3>
            <ul className="text-white text-sm space-y-2">
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/username"
                  className="text-yellow-400 hover:underline"
                >
                  https://github.com/Err0rGuy/
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a
                  href="https://linkedin.com/in/username"
                  className="text-yellow-400 hover:underline"
                >
                  @SadraIzadi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-white text-sm">
          <p>&copy; 2025 Sadra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
