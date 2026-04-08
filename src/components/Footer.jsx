import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
              <Scale color="#001F3F" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-primary leading-tight tracking-tight">الصرح</span>
            <span className="text-[10px] text-secondary font-bold uppercase tracking-widest leading-none">للمحـاماة والاستشـارات</span>
            </div>
          </Link>
          <p className="text-sm text-outline-variant leading-relaxed">
            مكتب متخصص يقدم استشارات قانونية نوعية وترافعاً مهنياً أمام الجهات الإدارية والتجارية في المملكة، تحت إشراف نخبة من الكفاءات الوطنية.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-primary-container rounded-sm hover:bg-secondary transition-colors text-white">
              <Globe size={20} />
            </a>
            <a href="#" className="p-2 bg-primary-container rounded-sm hover:bg-secondary transition-colors text-white">
              <Share2 size={20} />
            </a>
            <a href="https://wa.me/96690021234" className="p-2 bg-primary-container rounded-sm hover:bg-secondary transition-colors text-white">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-wide">روابط سريعة</h4>
          <ul className="flex flex-col gap-4 text-sm text-outline-variant">
            <li><Link to="/about" className="hover:text-secondary">من نحن</Link></li>
            <li><Link to="/services" className="hover:text-secondary">الخدمات الإدارية</Link></li>
            <li><Link to="/blog" className="hover:text-secondary">المركز المعرفي</Link></li>
            <li><Link to="/careers" className="hover:text-secondary">الوظائف</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-wide">تواصل معنا</h4>
          <ul className="flex flex-col gap-6 text-sm text-outline-variant">
            <li className="flex items-start gap-3">
              <MapPin className="text-secondary shrink-0" size={18} />
              <span>برج المملكة، الرياض، السعودية</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-secondary shrink-0" size={18} />
              <span dir="ltr">+966 9002 1234</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-secondary shrink-0" size={18} />
              <span>info@alsarh.sa</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-wide">النشرة المعرفية</h4>
          <p className="text-xs text-outline-variant mb-4">
            اشترك لتصلك أحدث المستجدات التنظيمية والقانونية في المملكة.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="البريد الإلكتروني" 
              className="bg-primary-container border-none p-3 text-sm flex-1 outline-none text-white rounded-r-sm"
            />
            <button className="bg-secondary text-white p-3 rounded-l-sm hover:bg-opacity-90 transition-opacity">
              اشتراك
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mt-20 pt-8 border-t border-primary-container text-center">
        <p className="text-[10px] text-outline-variant uppercase tracking-[0.2em]">
          جميع الحقوق محفوظة © {new Date().getFullYear()} لمكتب الصرح للمحاماة والاستشارات القانونية
        </p>
      </div>
    </footer>
  );
};

export default Footer;
