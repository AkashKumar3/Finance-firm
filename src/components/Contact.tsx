import { Mail, Phone, MapPin, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center space-y-4"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100"
      >
        <Icon className="h-8 w-8 text-pink-600" />
      </motion.div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      {children}
    </motion.div>
  );
};

interface PageTitleProps {
  title: string;
  highlightedWord: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, highlightedWord }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold">
        {title} <span className="text-pink-600">{highlightedWord}</span>
      </h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '6rem' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 bg-gray-200 mx-auto mt-6"
      />
    </motion.div>
  );
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Get in" highlightedWord="Touch" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
      <a href="https://www.google.com/maps/place/Shree+investment+solution/@23.7305105,85.5057077,15z/data=!4m14!1m7!3m6!1s0x39f48d7e248412df:0xc7d9ec8f3d252ec8!2sShree+investment+solution!8m2!3d23.7305105!4d85.5057077!16s%2Fg%2F11wr4p1hc6!3m5!1s0x39f48d7e248412df:0xc7d9ec8f3d252ec8!8m2!3d23.7305105!4d85.5057077!16s%2Fg%2F11wr4p1hc6?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
        <ContactCard icon={MapPin} title="Visit Us" delay={0.2}>
          <p className="text-gray-600 max-w-xs">
           Shree Investment soltion, Kuju, Jharkhand, 825316
          </p>
        </ContactCard>
        </a>

      <a href="tel: +91 8340782324">
        <ContactCard icon={Phone} title="Call Us" delay={0.4}>
          <div className="space-y-1">
            <p className="text-gray-600">+91 8340782324</p>
          </div>
        </ContactCard>
        </a>

      <a href="mailto: rohan7645820204@gmail.com">
        <ContactCard icon={Mail} title="Email Us" delay={0.6}>
          <div className="space-y-1">
            <p className="text-gray-600">rohan7645820204@gmail.com</p>
          </div>
        </ContactCard>
        </a>
      </div>
    </div>
  </motion.div>
  );
};

export default Contact;