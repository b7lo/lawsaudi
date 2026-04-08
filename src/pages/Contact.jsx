import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pb-20">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-extrabold mb-6">تواصل معنا</h1>
            <p className="text-xl text-outline-variant max-w-3xl leading-relaxed">
              نلتزم في الصرح بتقديم استشارات قانونية تتسم بالدقة والسرية. تواصل معنا لمناقشة احتياجاتكم القانونية مع نخبة من المستشارين.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding container">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-extrabold mb-8">معلومات <span className="text-secondary">الاتصال</span></h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-sm shrink-0 shadow-sm border border-surface-high">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">المقر الرئيسي</h4>
                    <p className="text-on-background/60 text-sm leading-relaxed">
                      برج المملكة، الدور ٤٢، طريق الملك فهد<br />
                      حي العليا، الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-sm shrink-0 shadow-sm border border-surface-high">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">رقم الهاتف</h4>
                    <p className="text-on-background/60 text-sm" dir="ltr">+966 9002 1234</p>
                    <p className="text-on-background/60 text-sm" dir="ltr">+966 11 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-sm shrink-0 shadow-sm border border-surface-high">
                    <Mail className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">البريد الإلكتروني</h4>
                    <p className="text-on-background/60 text-sm">info@alsarh.sa</p>
                    <p className="text-on-background/60 text-sm">legal@alsarh.sa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-sm shrink-0 shadow-sm border border-surface-high">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">ساعات العمل</h4>
                    <p className="text-on-background/60 text-sm">الأحد - الخميس: ٩ص - ٦م</p>
                    <p className="text-on-background/60 text-sm">الجمعة - السبت: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="no-border-card bg-primary text-white p-8">
              <MessageSquare className="text-secondary mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">تواصل فوري عبر واتساب</h4>
              <p className="text-outline-variant text-sm mb-6">للاستفسارات العاجلة، فريقنا متاح للرد الفوري على مدار الساعة.</p>
              <a 
                href="https://wa.me/96690021234" 
                className="btn-secondary w-full justify-center"
              >
                مراسلة الآن
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <div className="no-border-card bg-white p-10">
              <h3 className="text-2xl font-extrabold mb-8">أرسل لنا <span className="text-secondary">استفسارك</span></h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">الاسم الكامل</label>
                    <input 
                      type="text" 
                      placeholder="أدخل اسمك" 
                      className="bg-background border-none p-4 rounded-sm outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      placeholder="email@example.sa" 
                      className="bg-background border-none p-4 rounded-sm outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">رقم الجوال</label>
                    <input 
                      type="tel" 
                      placeholder="+966" 
                      className="bg-background border-none p-4 rounded-sm outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">نوع الخدمة</label>
                    <select className="bg-background border-none p-4 rounded-sm outline-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none cursor-pointer">
                      <option>اختر الخدمة</option>
                      <option>تقاضي إداري</option>
                      <option>صياغة عقود</option>
                      <option>استشارات قانونية</option>
                      <option>تحكيم تجاري</option>
                      <option>أخرى</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest">تفاصيل الرسالة</label>
                  <textarea 
                    rows="5" 
                    placeholder="كيف يمكننا مساعدتك؟" 
                    className="bg-background border-none p-4 rounded-sm outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="btn-primary w-full py-5 justify-center text-lg mt-4 group">
                  إرسال الطلب <Send size={20} className="group-hover:translate-x-[-4px] transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-surface-high relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grayscale contrast-125 opacity-30">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Map" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-full mx-auto mb-4 animate-bounce">
            <MapPin color="white" size={32} />
          </div>
          <h4 className="font-extrabold text-primary">الموقع على الخريطة</h4>
          <p className="text-sm text-on-background/60">الرياض، المملكة العربية السعودية</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
