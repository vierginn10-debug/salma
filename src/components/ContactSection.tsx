import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

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
    value: 'vierginn10@gmail.com',
    href: 'mailto:vierginn10@gmail.com',
    color: 'bg-[#C2FFFA]', 
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 853 7383 3044',
    href: 'tel:+6285373833044',
    color: 'bg-[#70B5FF]', 
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Banda Aceh, Indonesia',
    href: '#',
    color: 'bg-[#D1A3FF]', 
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
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
      toast({
        title: 'Failed to Send',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-32 pb-24 md:pb-40 relative overflow-hidden transition-colors duration-1000
                 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                 border-t-[6px] border-black dark:border-white"
    >
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none transform-gpu z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="inline-block border-[3px] border-black dark:border-[#64FFDA] bg-[#ADFF2F] px-5 py-1.5 mb-8 shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_#64FFDA] -rotate-1"
          >
            <span className="font-black text-[10px] md:text-xs uppercase tracking-widest text-black flex items-center gap-2 italic">
              <Sparkles size={14} fill="black" /> LET'S CREATE SOMETHING
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none transition-all duration-500 flex flex-wrap justify-center gap-x-4 mb-6">
            <span className="text-black dark:text-white">Get In</span>
            <span className="text-[#FF71CE] dark:text-[#64FFDA]">Touch</span>
          </h2>

          <p className="max-w-xl text-sm md:text-lg font-bold italic mt-8 md:mt-12 opacity-80 dark:text-slate-300">
            "Have a cool project idea or just want to say hi? Feel free to drop a message!"
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start justify-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 order-2 lg:order-1"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-5 p-5 bg-white/60 dark:bg-[#112240]/60 backdrop-blur-md border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#64FFDA] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group active:scale-[0.98]"
              >
                <div className={`p-4 border-[3px] border-black ${info.color} shadow-[3px_3px_0px_0px_black] flex-shrink-0`}>
                  <info.icon className="h-6 w-6 text-black" strokeWidth={3} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 dark:text-slate-400">{info.label}</p>
                  <p className="font-black text-sm md:text-xl dark:text-white truncate italic">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="relative bg-white dark:bg-[#050A30]/90 border-[6px] border-black dark:border-white shadow-[12px_12px_0px_0px_black] dark:shadow-[12px_12px_0px_0px_#64FFDA] p-6 md:p-10">
              <div className="absolute -top-5 left-6 bg-[#01CDFE] dark:bg-[#64FFDA] text-black px-4 py-1 border-[3px] border-black font-black uppercase italic text-[10px]">
                transmission.log
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase italic dark:text-white">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="h-12 border-[3px] border-black dark:border-white rounded-none font-bold focus:bg-[#E0FFFB] dark:focus:bg-[#1B1464] dark:text-white transition-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase italic dark:text-white">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@world.com"
                      className="h-12 border-[3px] border-black dark:border-white rounded-none font-bold focus:bg-[#8EC5FC] dark:focus:bg-[#1B1464] dark:text-white transition-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase italic dark:text-white">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="h-12 border-[3px] border-black dark:border-white rounded-none font-bold focus:bg-[#E0C3FC] dark:focus:bg-[#1B1464] dark:text-white transition-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  {errors.subject && <p className="text-[10px] font-bold text-red-500 uppercase flex items-center gap-1"><AlertCircle size={12}/> {errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase italic dark:text-white">Message Body</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your transmission..."
                    rows={4}
                    className="border-[3px] border-black dark:border-white rounded-none font-bold focus:bg-[#ADFF2F] dark:focus:bg-[#1B1464] dark:text-white transition-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 bg-black dark:bg-[#64FFDA] text-white dark:text-black font-black uppercase italic text-xl border-[3px] border-black shadow-[6px_6px_0px_0px_#B967FF] dark:shadow-[6px_6px_0px_0px_#FF71CE] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-[0.97] disabled:opacity-70 rounded-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Loader2 className="h-6 w-6 animate-spin" /> SENDING...</span>
                  ) : (
                    <span className="flex items-center gap-3 tracking-tighter">
                      SEND TRANSMISSION <Send size={20} strokeWidth={3} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}