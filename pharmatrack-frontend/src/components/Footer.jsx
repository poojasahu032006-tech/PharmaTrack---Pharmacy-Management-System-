export default function Footer() {
  return (
    <footer className="bg-blue-700 text-blue-100 mt-auto w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl">💊</span>
            <h2 className="text-xl font-semibold text-white">PharmaTrack</h2>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 
                5.373-12 12c0 5.99 4.388 10.954 10.125 
                11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
                1.792-4.669 4.533-4.669 1.312 0 
                2.686.235 2.686.235v2.953H15.83c-1.491 
                0-1.956.925-1.956 1.874v2.25h3.328l-.532 
                3.47h-2.796v8.385C19.612 23.027 
                24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 
                3.584.012 4.85.07 1.17.054 
                1.97.24 2.427.403a4.92 4.92 0 
                011.75 1.145 4.92 4.92 0 011.145 
                1.75c.163.457.349 1.257.403 
                2.427.058 1.266.07 1.646.07 
                4.85s-.012 3.584-.07 
                4.85c-.054 1.17-.24 1.97-.403 
                2.427a4.92 4.92 0 01-1.145 
                1.75 4.92 4.92 0 01-1.75 
                1.145c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 
                01-1.75-1.145 4.92 4.92 0 
                01-1.145-1.75c-.163-.457-.349-1.257-.403-2.427C2.175 
                15.787 2.163 15.407 2.163 
                12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 
                4.92 0 011.145-1.75 4.92 4.92 
                0 011.75-1.145c.457-.163 
                1.257-.349 2.427-.403C8.416 
                2.175 8.796 2.163 12 
                2.163zm0 1.837c-3.155 0-3.523.012-4.767.069-1.02.047-1.57.217-1.938.363-.488.19-.84.416-1.207.783a3.09 
                3.09 0 00-.783 1.207c-.146.368-.316.918-.363 
                1.938-.057 1.244-.069 1.612-.069 
                4.767s.012 3.523.069 
                4.767c.047 1.02.217 1.57.363 
                1.938.19.488.416.84.783 
                1.207.367.367.719.593 
                1.207.783.368.146.918.316 
                1.938.363 1.244.057 1.612.069 
                4.767.069s3.523-.012 
                4.767-.069c1.02-.047 1.57-.217 
                1.938-.363a3.09 3.09 0 
                001.207-.783 3.09 3.09 0 
                00.783-1.207c.146-.368.316-.918.363-1.938.057-1.244.069-1.612.069-4.767s-.012-3.523-.069-4.767c-.047-1.02-.217-1.57-.363-1.938a3.09 
                3.09 0 00-.783-1.207 3.09 
                3.09 0 00-1.207-.783c-.368-.146-.918-.316-1.938-.363-1.244-.057-1.612-.069-4.767-.069zm0 
                3.905a5.932 5.932 0 110 
                11.864 5.932 5.932 0 
                010-11.864zm0 9.8a3.868 
                3.868 0 100-7.736 3.868 
                3.868 0 000 7.736zm7.406-10.845a1.44 
                1.44 0 11-2.88 0 1.44 
                1.44 0 012.88 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
                7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
                2.063-2.063 1.14 0 2.064.925 2.064 2.063 
                0 1.139-.925 2.065-2.064 2.065zm1.782
                13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 
                0 0 .774 0 1.729v20.542C0 23.227.792 
                24 1.771 24h20.451C23.2 24 24 23.227 
                24 22.271V1.729C24 .774 23.2 0 
                22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-blue-600 mt-4 pt-4 text-center text-sm text-blue-100/70">
          © 2025 PharmaTrack | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
