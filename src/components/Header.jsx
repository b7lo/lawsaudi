import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, Phone, Mail, MapPin, Search } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'المركز المعرفي', path: '/blog' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header className="glass fixed top-0 w-full z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm group-hover:bg-secondary transition-colors">
            <Scale color="white" size={28} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-primary leading-tight tracking-tight">الصرح</span>
            <span className="text-[10px] text-secondary font-bold uppercase tracking-widest leading-none">للمحـاماة والاستشـارات</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold hover:text-secondary tracking-wide ${
                location.pathname === link.path ? 'text-secondary' : 'text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            حجز استشارة
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-surface-high p-6 flex flex-col gap-4 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg font-bold text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary justify-center" onClick={() => setIsOpen(false)}>
            حجز استشارة
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
