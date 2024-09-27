import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm my-5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold">Ghazali Hussain</a>
            <div className="-mr-2 -my-2 md:hidden">
                <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Open menu</span>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            <nav className="hidden md:flex space-x-10">
                <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
                <a href="#experience" className="text-base font-medium text-gray-500 hover:text-gray-900">Experience</a>
                <a href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">Projects</a>
                <a href="#skills" className="text-base font-medium text-gray-500 hover:text-gray-900">Skills</a>
                <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
        </div>
    </div>
</header>
  );
};

export default Header;
