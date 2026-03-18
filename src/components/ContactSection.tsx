import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().trim().email('Invalid email format').max(255, 'Email is too long'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject is too long'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message is too long'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vierginyou@gmail.com',
    href: 'mailto:hello@developer.com',
    color: 'bg-[#FFD1DC]', // Pastel Rose
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 853 7383 3044',
    href: 'tel:+6281234567890',
    color: 'bg-[#D7BDE2]', // Pastel Purple
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Banda Aceh, Indonesia',
    href: '#',
    color: 'bg-[#FDFD96]', // Pastel Yellow
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: supabaseError } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (supabaseError) throw supabaseError;

      toast({
        title: 'Message Sent! ✨',
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'System error occurred';
      console.error('Submission Error:', errorMessage);
      toast({
        title: 'Failed to Send',
        description: 'Something went wrong. Please try again later or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-br from-[#FFF1F2] via-[#F3E5F5] to-[#FEF9E7] 
                 dark:from-[#0A192F] dark:via-[#0A192F] dark:to-[#0A192F]"
    >
      
      {/* Top Border Decor */}
      <div className="absolute top-0 left-0 w-full h-2 bg-black dark:bg-[#64FFDA]" />
      
      {/* Dark Mode Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ADFF2F] opacity-10 rounded-full blur-[100px] -z-10 hidden dark:block" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-block border-4 border-black dark:border-[#64FFDA] bg-[#FDFD96] dark:bg-[#ADFF2F] px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-xs uppercase tracking-widest text-black flex items-center gap-2">
              <Sparkles size={14} /> Open for Collab
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-black dark:text-white">
            GET IN <span className="text-black dark:text-[#64FFDA] drop-shadow-[4px_4px_0px_#FFD1DC] dark:drop-shadow-[4px_4px_0px_#FF71CE]">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-xl font-bold uppercase italic text-slate-700 dark:text-slate-400 mb-10 leading-tight">
              Have a cool project idea or just want to say hi? Feel free to drop a message!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-6 p-6 bg-white dark:bg-[#112240] border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#64FFDA] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                >
                  <div className={`p-4 border-4 border-black ${info.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <info.icon className="h-6 w-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-50 dark:text-white">{info.label}</p>
                    <p className="font-black text-lg uppercase italic dark:text-white tracking-tighter">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative bg-white dark:bg-[#112240] border-[6px] border-black dark:border-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] dark:shadow-[15px_15px_0px_0px_#64FFDA] p-8 md:p-12">
              
              <div className="absolute -top-6 left-10 bg-black text-white px-4 py-1 border-4 border-black font-black uppercase italic text-xs">
                Send_Message.exe
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase italic dark:text-white">Your Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="SALMA"
                      className={`h-14 border-4 border-black dark:border-white rounded-none font-black uppercase italic focus-visible:ring-0 focus:bg-[#FEF9E7] dark:focus:bg-[#1a3a5a] dark:text-white transition-colors ${errors.name ? 'border-[#FF0000]' : ''}`}
                    />
                    {errors.name && <p className="text-[10px] font-bold text-[#FF0000] flex items-center gap-1 uppercase"><AlertCircle size={10}/> {errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase italic dark:text-white">Your Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="HELLO@DOMAIN.COM"
                      className={`h-14 border-4 border-black dark:border-white rounded-none font-black uppercase italic focus-visible:ring-0 focus:bg-[#FFF1F2] dark:focus:bg-[#1a3a5a] dark:text-white transition-colors ${errors.email ? 'border-[#FF0000]' : ''}`}
                    />
                    {errors.email && <p className="text-[10px] font-bold text-[#FF0000] flex items-center gap-1 uppercase"><AlertCircle size={10}/> {errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase italic dark:text-white">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="COLLABORATION INQUIRY"
                    className={`h-14 border-4 border-black dark:border-white rounded-none font-black uppercase italic focus-visible:ring-0 focus:bg-[#F3E5F5] dark:focus:bg-[#1a3a5a] dark:text-white transition-colors ${errors.subject ? 'border-[#FF0000]' : ''}`}
                  />
                  {errors.subject && <p className="text-[10px] font-bold text-[#FF0000] flex items-center gap-1 uppercase"><AlertCircle size={10}/> {errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase italic dark:text-white">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="HI SALMA, I HAVE A COOL PROJECT..."
                    rows={5}
                    className={`border-4 border-black dark:border-white rounded-none font-black uppercase italic focus-visible:ring-0 focus:bg-[#FFF1F2] dark:focus:bg-[#1a3a5a] dark:text-white transition-colors resize-none ${errors.message ? 'border-[#FF0000]' : ''}`}
                  />
                  {errors.message && <p className="text-[10px] font-bold text-[#FF0000] flex items-center gap-1 uppercase"><AlertCircle size={10}/> {errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 bg-black dark:bg-[#64FFDA] text-white dark:text-black font-black uppercase italic text-xl border-4 border-black shadow-[6px_6px_0px_0px_#FDFD96] dark:shadow-[6px_6px_0px_0px_#ADFF2F] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Loader2 className="h-6 w-6 animate-spin" /> EXECUTING...</span>
                  ) : (
                    <span className="flex items-center gap-3 group-hover:tracking-widest transition-all">
                      SEND TRANSMISSION <Send size={20} strokeWidth={3} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-32 pt-10 border-t-4 border-black dark:border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-black uppercase italic text-xs opacity-50 text-black dark:text-white">
            © 2026 SALMA — BUILT WITH REACT & SUPABASE
          </p>
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-[#FFD1DC] border-2 border-black rounded-full" />
            <div className="w-4 h-4 bg-[#D7BDE2] border-2 border-black rounded-full" />
            <div className="w-4 h-4 bg-[#FDFD96] border-2 border-black rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}