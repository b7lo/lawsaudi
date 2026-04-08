import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Search, Tag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'تطور القضاء الإداري في المملكة في ظل رؤية ٢٠٣٠',
      excerpt: 'استعراض للتحولات الهيكلية في ديوان المظالم وكيف ساهمت الأنظمة الجديدة في تسريع وتيرة العدالة وحفظ حقوق المتقاضين أمام الجهات الحكومية.',
      date: '١٨ أبريل ٢٠٢٤',
      category: 'أنظمة وقوانين',
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'دليل عملي للتعامل مع منازعات العقود الحكومية',
      excerpt: 'خطوات استراتيجية للمقاولين والموردين عند مواجهة تحديات في تنفيذ العقود الإدارية، وكيفية اللجوء للتظلم القضائي بالطرق الصحيحة.',
      date: '١٢ أبريل ٢٠٢٤',
      category: 'عقود إدارية',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'نظام الإثبات الجديد: جودة نوعية في مسار القضايا التجارية',
      excerpt: 'تحليل دقيق لأهم ملامح نظام الإثبات الجديد وكيف ساهم في تقليص أمد التقاضي وتعزيز الثقة في البيئة الاستثمارية السعودية.',
      date: '٥ أبريل ٢٠٢٤',
      category: 'القضاء التجاري',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const popular = [
    'حقوق الموظف في ضوء تعديلات نظام العمل الجديدة',
    'كيف تختار الوسيط التجاري المناسب لفض النزاعات؟',
    'دليل تأسيس الشركات للرواد في المنطقة الاقتصادية'
  ];

  return (
    <div className="pb-20">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-white relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-extrabold mb-6">المركز المعرفي</h1>
            <p className="text-xl text-outline-variant max-w-3xl leading-relaxed">
              تحليلات تشريعية ورؤى قانونية عميقة تهدف إلى نشر الوعي بالمنظومة العدلية السعودية المتطورة.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-secondary/5 blur-[120px] rounded-full -z-0"></div>
      </section>

      <section className="section-padding container">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="md:col-span-8">
            <div className="space-y-16">
              {posts.map((post, i) => (
                <motion.article 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="group border-b border-surface-high pb-16 last:border-0"
                >
                  <div className="aspect-[16/9] overflow-hidden mb-8 bg-surface-high rounded-sm shadow-sm">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-6 mb-4 text-xs font-bold text-secondary uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Tag size={14} /> {post.category}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                  </div>
                  <h2 className="text-3xl font-extrabold mb-4 group-hover:text-secondary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-on-background/60 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${i}`} className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    قراءة المقال كاملاً <ArrowLeft size={18} />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-12">
            {/* Search */}
            <div className="no-border-card p-8">
              <h3 className="text-xl font-bold mb-6">البحث المعرفي</h3>
              <div className="flex bg-background p-2 rounded-sm border border-surface-high">
                <input 
                  type="text" 
                  placeholder="ابحث عن نظام أو مادة..." 
                  className="bg-transparent border-none flex-1 p-2 text-sm outline-none"
                />
                <button className="p-2 text-primary">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="no-border-card p-8 bg-surface-low border-r-4 border-secondary">
              <h3 className="text-xl font-bold mb-6">الأكثر تفاعلاً</h3>
              <ul className="space-y-6">
                {popular.map((title, i) => (
                  <li key={i} className="group">
                    <Link to="#" className="flex gap-4 items-start">
                      <span className="text-secondary font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                      <p className="text-sm font-bold leading-relaxed group-hover:text-secondary transition-colors">{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expert Advice CTA */}
            <div className="no-border-card bg-primary text-white p-8 overflow-hidden relative">
              <BookOpen className="absolute -bottom-4 -left-4 text-white/5" size={120} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">تحتاج مشورة مخصصة؟</h3>
                <p className="text-outline-variant text-xs mb-8 leading-relaxed">
                  المدونة توفر وعياً عاماً، لكن لكل قضية تفاصيلها الفريدة. احجز جلستك الآن لمناقشة ملفك بدقة.
                </p>
                <Link to="/contact" className="btn-secondary w-full justify-center">حجز جلسة استشارية</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
