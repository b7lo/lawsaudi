import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, Landmark, BookOpen, ArrowLeft, Star, Quote, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'المنازعات الإدارية',
      desc: 'تمثيل احترافي في قضايا إلغاء القرارات الإدارية، والمطالبات بالتعويض، ومنازعات العقود الحكومية أمام ديوان المظالم.',
      icon: <Shield className="text-secondary" size={32} />
    },
    {
      title: 'صياغة الأنظمة',
      desc: 'إعداد اللوائح الداخلية ومراجعة العقود النوعية بما يتوافق مع أحدث الأنظمة التشريعية لضمان الامتثال التام.',
      icon: <BookOpen className="text-secondary" size={32} />
    },
    {
      title: 'التحكيم المؤسسي',
      desc: 'إدارة قضايا التحكيم التجاري والإداري بأعلى درجات السرية والاحترافية لضمان سرعة الإجراءات وحفظ الحقوق.',
      icon: <Landmark className="text-secondary" size={32} />
    }
  ];

  const stats = [
    { label: 'قضية ناجحة', value: '٥٠٠+' },
    { label: 'سنة خبرة', value: '١٥+' },
    { label: 'استشارات نوعية', value: '٢٠٠٠+' },
    { label: 'نسبة الرضا', value: '٩٨٪' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary-container font-bold tracking-[0.3em] uppercase text-xs mb-4 block">نخبة المحاماة في المملكة</span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 text-white">
              الصرح للخدمات <span className="text-secondary">القانونية</span>
            </h1>
            <p className="text-lg text-outline-variant mb-10 max-w-lg leading-relaxed">
              نلتزم بتقديم أدق الاستشارات والخدمات القانونية أمام الجهات الإدارية والقضائية، بمهنية تتسم بالدقة والالتزام التام بمعايير العدالة السعودية في مكتبنا الخاص بالرياض.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-secondary py-4 px-8">
                حجز استشارة فورية
              </Link>
              <Link to="/services" className="flex items-center gap-2 font-bold hover:text-secondary transition-colors">
                استعراض كافة الخدمات <ArrowLeft size={18} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block relative"
          >
            <div className="aspect-[4/5] bg-primary-container rounded-sm overflow-hidden shadow-2xl relative">
              <img 
                src="/hero-office.png" 
                alt="Law Office" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-8 border border-white/20">
                <span className="text-4xl font-black text-secondary block mb-1">١٥+</span>
                <span className="text-xs uppercase tracking-widest text-white">عاماً من التميز القانوني</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              شريككم الاستراتيجي في فك تعقيدات <span className="text-secondary">الأنظمة الإدارية</span>
            </h2>
            <p className="text-on-background/70 mb-8 leading-relaxed text-lg">
              تأسس الصرح ليكون كياناً قانونياً يجمع بين الأصالة والحداثة. نحن لا نكتفي بتمثيل الموكلين، بل نصيغ معهم استراتيجيات قانونية استباقية تضمن استدامة أعمالهم وحماية حقوقهم في ظل التحولات التنظيمية المتسارعة في المملكة العربية السعودية.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-primary">{stat.value}</span>
                  <span className="text-xs text-secondary font-extrabold uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary">
              تعرف على المحامي
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="no-border-card p-0 overflow-hidden relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Law Advisory" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-surface">
        <div className="container text-center mb-20">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">مجالات التخصص</span>
          <h2 className="text-5xl font-extrabold mb-6">حلول قانونية <span className="text-secondary">رفيعة المستوى</span></h2>
          <p className="max-w-2xl mx-auto text-on-background/60">
            نقدم حزمة متكاملة من الخدمات القانونية المصممة بعناية لمواجهة التحديات التنظيمية المعاصرة.
          </p>
        </div>
        
        <div className="container grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="no-border-card flex flex-col items-start gap-6 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-background flex items-center justify-center rounded-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-on-background/60 text-sm leading-relaxed">
                {service.desc}
              </p>
              <Link to="/services" className="text-sm font-bold flex items-center gap-2 text-primary hover:text-secondary">
                اكتشف المزيد <ArrowLeft size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container grid md:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h4 className="text-secondary font-bold mb-2">الدقة التشريعية</h4>
              <p className="text-outline-variant text-sm">تحليل عميق لكافة الثغرات والفرص القانونية في كل ملف.</p>
            </div>
            <div>
              <h4 className="text-secondary font-bold mb-2">السرية المهنية</h4>
              <p className="text-outline-variant text-sm">نظام أمني صارم للتعامل مع كافة البيانات والمعلومات الحساسة.</p>
            </div>
            <div>
              <h4 className="text-secondary font-bold mb-2">الشفافية المطلقة</h4>
              <p className="text-outline-variant text-sm">تقارير دورية ووضوح تام في تقييم الموقف القانوني للقضايا.</p>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-black mb-8 leading-tight">المهنية هي المعيار الوحيد <span className="text-secondary">للنجاح</span> في الصرح</h2>
            <p className="text-outline-variant mb-10">
              نلتزم بمعايير ملكية في الدفاع القانوني، حيث يتم التعامل مع كل قضية كبناء معماري يتطلب الدقة في كل حجر زاوية.
            </p>
            <Link to="/contact" className="btn-secondary">استشارة تخصصية</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute -left-20 top-0 opacity-5">
          <Quote size={400} />
        </div>
        <div className="container relative z-10 text-center mb-16">
          <h2 className="text-4xl font-extrabold pb-8">ثقة <span className="text-secondary">شركائنا</span></h2>
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="var(--secondary)" color="var(--secondary)" />)}
          </div>
        </div>
        
        <div className="container grid md:grid-cols-2 gap-10">
          <div className="no-border-card italic">
            <p className="mb-6 text-on-background/70 leading-relaxed">
              "لقد كان الصرح هو البوصلة القانونية التي أرشدتنا في قضية إدارية بالغة التعقيد، مهنية الفريق تتجاوز التوقعات."
            </p>
            <div>
              <p className="font-bold text-primary">مؤسسة تنموية كبرى</p>
              <p className="text-xs text-secondary-container font-black">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
          <div className="no-border-card italic">
            <p className="mb-6 text-on-background/70 leading-relaxed">
              "الدقة في صياغة العقود الاستثمارية والالتزام بالمواعيد جعلت من الصرح شريكاً لا غنى عنه في أعمالنا."
            </p>
            <div>
              <p className="font-bold text-primary">مجموعة استثمارية قابضة</p>
              <p className="text-xs text-secondary-container font-black">جدة، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-low border-t border-surface-high">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-4">هل تواجه تحدياً قانونياً؟</h2>
          <p className="text-lg text-on-background/60 mb-10">تواصلوا معنا اليوم لمناقشة قضيتكم مباشرة مع المحامي والحصول على استشارة تخصصية.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:96690021234" className="btn-primary py-4 px-10">
              <Phone size={20} /> اتصل الآن
            </a>
            <Link to="/contact" className="btn-secondary py-4 px-10">احجز موعداً</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
