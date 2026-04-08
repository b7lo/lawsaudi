import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, FileText, Landmark, Gavel, Scale as ScaleIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      title: 'التقاضي الإداري',
      desc: 'تمثيل الموكلين أمام ديوان المظالم في كافة المنازعات الإدارية، بما في ذلك دعاوى إلغاء القرارات الإدارية ودعاوى التعويض ومنازعات العقود التي تكون الإدارة طرفاً فيها.',
      details: 'نمتلك صيتًا قويًا في كسب القضايا المعقدة ضد الجهات الحكومية، مع التركيز على استعادة الحقوق وفق الأصول القانونية.',
      icon: <Gavel className="text-secondary" size={32} />
    },
    {
      title: 'صياغة العقود الإدارية',
      desc: 'إعداد ومراجعة العقود الإدارية وفقاً لنظام المنافسات والمشتريات الحكومية، وضمان حماية مصالح الأطراف في مواجهة الجهات الإدارية.',
      details: 'نضمن صياغة محكمة تمنع الثغرات النظامية وتؤمن مسار المشروع الاستثماري من البداية حتى النهاية.',
      icon: <FileText className="text-secondary" size={32} />
    },
    {
      title: 'الاستشارات الإدارية',
      desc: 'تقديم الرأي والمشورة القانونية المتخصصة في الأنظمة واللوائح الإدارية، وتوجيه المنشآت نحو الامتثال الكامل للمعايير التنظيمية.',
      details: 'حلول وقائية تساعدك على تجنب الأخطاء الإدارية قبل تحولها إلى نزاعات قضائية مكلفة.',
      icon: <ScaleIcon className="text-secondary" size={32} />
    },
    {
      title: 'التظلمات الإدارية',
      desc: 'إعداد صياغة التظلمات الإدارية وتقديمها أمام الجهات المختصة قبل اللجوء للقضاء، وهي خطوة جوهرية تتطلب صياغة قانونية محكمة.',
      details: 'نعرف "مفاتيح" البيروقراطية ونعرف كيف نوجه التظلم للنقطة التي تضمن الاستجابة السريعة.',
      icon: <ShieldCheck className="text-secondary" size={32} />
    },
    {
      title: 'التحكيم التجاري',
      desc: 'فض النزاعات التجارية والتعاقدية عبر هيئات تحكيم مرخصة، مما يضمن السرعة والسرية التامة.',
      details: 'خبراء في التحكيم المؤسسي والحر، نوفر بدائل فعالة للمحاكم التقليدية.',
      icon: <Landmark className="text-secondary" size={32} />
    }
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
            <h1 className="text-5xl font-extrabold mb-6">خدماتنا القانونية</h1>
            <p className="text-xl text-outline-variant max-w-3xl leading-relaxed">
              نقدم حلولاً قانونية متخصصة نجمع فيها بين الخبرة العميقة والفهم الدقيق للأنظمة القضائية في المملكة العربية السعودية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="section-padding container">
        <div className="grid grid-cols-1 gap-12">
          {allServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="no-border-card grid md:grid-cols-12 gap-10 items-center overflow-hidden group"
            >
              <div className="md:col-span-1 flex justify-center">
                <div className="w-20 h-20 bg-primary-container flex items-center justify-center rounded-sm">
                  {service.icon}
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-on-background/80 mb-4 text-lg font-medium leading-relaxed">{service.desc}</p>
                <p className="text-on-background/50 text-sm italic">{service.details}</p>
              </div>
              <div className="md:col-span-3 flex justify-end">
                <Link to="/contact" className="btn-primary w-full md:w-auto justify-center">
                  طلب استشارة <ArrowLeft size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="bg-primary py-20 text-white">
        <div className="container grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-secondary font-bold mb-2">الخبرة النوعية</h4>
            <p className="text-outline-variant text-sm">فريقنا يضم مستشارين سابقين في جهات قضائية وإدارية عليا.</p>
          </div>
          <div>
            <h4 className="text-secondary font-bold mb-2">النهج الاستراتيجي</h4>
            <p className="text-outline-variant text-sm">لا نكتفي بحل المشكلات القائمة، بل نعمل على تحليل المخاطر واستباقها.</p>
          </div>
          <div>
            <h4 className="text-secondary font-bold mb-2">العدالة الناجزة</h4>
            <p className="text-outline-variant text-sm">نعمل وفق رؤية المملكة 2030 لتعزيز البيئة القانونية بمهنية عالية.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding container">
        <div className="no-border-card bg-secondary text-white text-center py-20">
          <h2 className="text-4xl font-extrabold mb-6">نحن هنا لحماية حقوقكم</h2>
          <p className="mb-10 text-white/80 max-w-xl mx-auto">
            تواصل مع مكتبنا اليوم لجدولة جلسة استشارية مع نخبة من الخبراء القانونيين في القانون الإداري السعودي.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary py-4 px-10 rounded-sm font-bold hover:bg-opacity-90 transition-all">تواصل الآن</Link>
            <a href="tel:96690021234" className="border-2 border-white text-white py-4 px-10 rounded-sm font-bold hover:bg-white hover:text-primary transition-all">اتصال مباشر</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
