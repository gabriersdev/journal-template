export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 mt-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium tracking-wide">
          <div className="mb-4 md:mb-0">
            The Journal &copy; {new Date().getFullYear()}
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0 text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Data & privacy</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
            <a href="#" className="hover:text-black transition-colors">Contribute</a>
          </div>
          <div>
            Powered by Ghost (Next.js)
          </div>
        </div>
      </div>
    </footer>
  );
}
