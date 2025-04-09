const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-600">
                Fleet Details
              </button>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-600">
                Contact Us
              </button>
            </div>
            <div className="text-center md:text-left">
              <img
                src="https://www.chellship.com/wp-content/themes/chellship/images/logo.png"
                alt="Chellship Logo"
                className="w-32 mx-auto md:mx-0"
              />
              <p className="mt-2 max-w-sm">
                Chellaram Shipping can trace its roots back to Chennai, India
                where in 1916 the late Kishinchand Chellaram, founder of the Group
                established a textile business.
              </p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">About Us</span>
              </li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Our Team</span>
              </li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Social Responsibility</span>
              </li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Environmental Impact</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Our Fleet</span>
              </li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Safety & Quality</span>
              </li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Fleet News</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Training</span>
              </li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center">
                &gt; <span className="ml-2">Career Opportunities</span>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="bg-gray-900 text-gray-500 text-center py-4 text-xs flex flex-col md:flex-row justify-between px-6">
          <p>© 2022 Chellship. All Rights Reserved.</p>
          <p className="text-white">Web Development by Solminds</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  