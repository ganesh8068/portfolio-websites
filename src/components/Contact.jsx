import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            setStatus({ type: 'success', message: 'Message sent successfully!' });
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        })
        .finally(() => {
            setLoading(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        });
    };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <Mail size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:ganeshlokhande2707@gmail.com" className="text-gray-400 hover:text-white transition-colors">graphlolkhande2707@gmail.com</a>
                </div>
            </div>
            
            <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    <Phone size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+918779182514" className="text-gray-400 hover:text-white transition-colors">+91 87791 82514</a>
                </div>
            </div>
            
            <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                    <MapPin size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                </div>
            </div>
        </motion.div>

        <motion.form
            ref={form}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-2 gap-4">
                <input 
                    type="text" 
                    name="user_name"
                    placeholder="Name" 
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg border border-white/10 focus:border-blue-500 focus:outline-none text-white transition-colors"
                    required
                />
                <input 
                    type="email" 
                    name="user_email"
                    placeholder="Email" 
                    className="w-full px-4 py-3 bg-slate-800/50 rounded-lg border border-white/10 focus:border-blue-500 focus:outline-none text-white transition-colors"
                    required
                />
            </div>
            <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="w-full px-4 py-3 bg-slate-800/50 rounded-lg border border-white/10 focus:border-blue-500 focus:outline-none text-white transition-colors"
                required
            />
            <textarea 
                name="message"
                placeholder="Message" 
                rows="4"
                className="w-full px-4 py-3 bg-slate-800/50 rounded-lg border border-white/10 focus:border-blue-500 focus:outline-none text-white transition-colors resize-none"
                required
            ></textarea>
            
            {status.message && (
                <div className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {status.message}
                </div>
            )}

            <button 
                type="submit" 
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    'Sending...'
                ) : (
                    <>
                        <Send size={18} />
                        Send Message
                    </>
                )}
            </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
