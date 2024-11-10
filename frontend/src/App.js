import React from 'react';
import Resources from './pages/Resources'; // assuming Resources.js is in a "pages" folder
import Logo from './assets/logo-no-text.png';
import ProfilePic from './assets/profile-pic.jpg';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-6 py-4 bg-gray-200 shadow-md">
        {/* Left Side: Logo and Title */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold text-[#402909]">CareCompass</span>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <Resources />
      </div>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Chat from './pages/Chat';
// import Resources from './pages/Resources';
// import Logo from './assets/logo-no-text.png';
// import ProfilePic from './assets/profile-pic.jpg';

// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-50 min-h-screen">
//         {/* Navbar */}
//         <nav className="relative flex items-center justify-between px-6 py-4 bg-gray-200 shadow-md">
//           {/* Left Side: Logo and Title */}
//           <div className="flex items-center space-x-3">
//             {/* Logo */}
//             <img src={Logo} alt="Logo" className="w-8 h-8" />
//             <span className="text-xl font-semibold text-[#402909]">CareCompass</span>
//           </div>

//           {/* Centered Menu Options */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#80a536] font-medium underline"
//                   : "text-[#402909] font-medium hover:text-[#80a536]"
//               }
//             >
//               Chat
//             </NavLink>
//             <NavLink
//               to="/resources"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-[#80a536] font-medium underline"
//                   : "text-[#402909] font-medium hover:text-[#80a536]"
//               }
//             >
//               Resources
//             </NavLink>
//           </div>

//           {/* Right Side: Profile Picture */}
//           <div className="w-10 h-10 rounded-full overflow-hidden">
//             <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover" />
//           </div>
//         </nav>

//         {/* Main Content */}
//         <div className="container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<Resources />} />
//             <Route path="/resources" element={<Resources />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
