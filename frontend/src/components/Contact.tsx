import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Message sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      toast.error('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'praveenalva83@gmail.com', link: 'mailto:praveenalva83@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 8374072244', link: 'tel:+918374072244' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Andhra Pradesh, India', link: null }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/praveenalva83' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/praveenalva83' },
    { icon: <ExternalLink size={24} />, url: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4">{info.icon}</div>
                  <div>
                    <p className="text-gray-600 text-sm">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="text-gray-800 font-medium hover:text-blue-600 transition">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow hover:shadow-lg hover:text-blue-600 transition transform hover:scale-105">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="you@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="What's this about?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" rows={6} value={formData.message} onChange={handleInputChange} required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell me about your project or just say hello!" />
              </div>

              <button type="submit" disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 text-white transition
                ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                {loading ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
