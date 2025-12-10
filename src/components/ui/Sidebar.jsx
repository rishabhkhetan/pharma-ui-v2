// import { Link, useLocation } from "react-router-dom";
// import NavItem from "./NavItem.jsx";

// export default function Sidebar() {
//   const { pathname } = useLocation();

//   return (
//     <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-cyan-400/40 dark:border-cyan-700/40 p-6 flex flex-col">
//       <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
//         Pharma Admin
//       </h1>

//       <nav className="space-y-4">
//         <NavItem to="/" label="Inventory" active={pathname === "/"} />
//         <NavItem to="/orders" label="Orders" active={pathname === "/orders"} />
//       </nav>
//     </aside>
//   );
// }

// import { useLocation } from "react-router-dom";
// import NavItem from "./NavItem.jsx";

// export default function Sidebar() {
//   const { pathname } = useLocation();

//   return (
//     <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-cyan-400/40 dark:border-cyan-700/40 p-6 flex flex-col">
//       <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
//         Hello Data From API
//       </h1>

//       <nav className="space-y-4">
//         <NavItem to="/" label="Inventory" active={pathname === "/"} />
//         <NavItem to="/orders" label="Orders" active={pathname === "/orders"} />
//         <NavItem
//           to="/requests"
//           label="Requests"
//           active={pathname === "/requests"}
//         />
//       </nav>
//     </aside>
//   );
// }

import { useLocation } from "react-router-dom";
import NavItem from "./NavItem.jsx";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-cyan-400/40 dark:border-cyan-700/40 p-6 flex flex-col justify-between">

      {/* Top Section */}
      <div>
        <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Hello, Pharma Admin <br />(Name from API)
        </h1>

        <nav className="space-y-4">
          <NavItem to="/" label="Inventory" active={pathname === "/"} />
          <NavItem to="/orders" label="Orders" active={pathname === "/orders"} />
          <NavItem to="/requests" label="Requests" active={pathname === "/requests"} />
        </nav>
      </div>
<button
  onClick={() => alert("Logout clicked")}
  className="mt-auto px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-md 
             hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 
             transition-all duration-300"
>
  Logout
</button>


    </aside>
  );
}