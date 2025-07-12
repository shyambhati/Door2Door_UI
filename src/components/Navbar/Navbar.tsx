export default function Navbar() {
  return (
     <header className="h-14 md:h-16 w-full bg-white  fixed top-0 left-0 z-10 flex items-center justify-between px-6">

        <div className="text-lg font-bold text-indigo-600">Door~2~Door</div>

        <div className="hidden md:flex flex-1 justify-center px-4">
          <input type="text" placeholder="Search..." className="w-full max-w-md px-4 py-1.5 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div className="relative flex items-center gap-4">
          <button className="relative text-gray-600 hover:text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 py-0.5 text-[10px] transform translate-x-1/2 -translate-y-1/2">3</span>
          </button>
        </div>
    </header>

  );
}