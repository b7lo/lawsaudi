import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, User, Award, Book, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-20">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-extrabold mb-6">عن المحامي</h1>
            <p className="text-xl text-outline-variant max-w-3xl leading-relaxed">
              خبرة قانونية ممتدة في صياغة الحلول النوعية وحماية الحقوق أمام ديوان المظالم والمحاكم السعودية، بروح مهنية تكرس العدالة والنزاهة.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary blur-[100px] rounded-full"></div>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="section-padding container">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 relative">
            <div className="no-border-card p-0 overflow-hidden shadow-2xl relative z-10 aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97dee2dcb341?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Lawyer Mohammed" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-8 z-20 shadow-xl">
              <span className="text-4xl font-black block">١٥+</span>
              <span className="text-xs uppercase tracking-widest font-bold">عاماً من الخبرة</span>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="md:col-span-7">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">السيرة المهنية</span>
            <h2 className="text-4xl font-extrabold mb-8 italic">المسيرة والمؤهلات</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center shrink-0 rounded-sm">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">الخلفية الأكاديمية</h4>
                  <p className="text-on-background/60 leading-relaxed text-sm">
                    حاصل على درجات قانونية عليا متخصصة في السياسة الشرعية والقانون الإداري من أعرق الجامعات السعودية، مع دبلومات متقدمة في التحكيم التجاري.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center shrink-0 rounded-sm">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">الخبرات العملية</h4>
                  <p className="text-on-background/60 leading-relaxed text-sm">
                    سنوات من الترافع الناجح أمام المحاكم الإدارية (ديوان المظالم) في قضايا التعويض والقرارات الإدارية، وعقود المشاريع الضخمة.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center shrink-0 rounded-sm">
                  <Book className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">الفلسفة المهنية</h4>
                  <p className="text-on-background/60 leading-relaxed text-sm">
                    نؤمن بأن المحاماة هي رسالة عدلية قبل أن تكون مهنة، لذا نحرص على تقديم النصح الصادق والشفافية التامة في كل خطوة قانونية.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 border border-surface-high rounded-sm bg-white shadow-sm flex items-center gap-6">
              <Award className="text-secondary" size={48} />
              <div>
                <p className="text-sm font-bold text-primary mb-1">محامي مرخص من وزارة العدل السعودية</p>
                <p className="text-xs text-on-background/50">ترخيص رقم: XXXX/XX/XX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-primary text-white py-24">
        <div className="container grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Shield className="text-secondary mb-6" size={48} />
            <h3 className="text-xl font-bold mb-4">العدالة الناجزة</h3>
            <p className="text-outline-variant text-sm">نسعى لتحقيق أسرع النتائج القانونية الممكنة دون المساس بجودة الدفاع.</p>
          </div>
          <div className="flex flex-col items-center">
            <Target className="text-secondary mb-6" size={48} />
            <h3 className="text-xl font-bold mb-4">التركيز النوعي</h3>
            <p className="text-outline-variant text-sm">تخصصنا العميق في القضاء الإداري يمنحنا أفضلية في كسب القضايا الصعبة.</p>
          </div>
          <div className="flex flex-col items-center">
            <User className="text-secondary mb-6" size={48} />
            <h3 className="text-xl font-bold mb-4">التواصل المباشر</h3>
            <p className="text-outline-variant text-sm">ستتعامل مباشرة مع المحامي المسؤول عن ملفك لضمان أعلى مستويات الفهم والسرية.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
