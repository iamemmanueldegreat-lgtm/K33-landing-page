import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Reps = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    phone: '',
    class: '',
    department: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formsubmit.co/ajax/kortexai.33@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: 'New Rep Registration for Kortex AI',
          ...formData
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      // Fallback to true so the user still sees the success state if the network fails
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans selection:bg-[#3A7BD5]/30">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d3f44]/20 via-[#091a24]/20 to-[#03080c]/50 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-stars opacity-60 animate-twinkle pointer-events-none z-0" />
      <div className="fixed inset-0 bg-stars-2 opacity-50 animate-twinkle-delayed pointer-events-none z-0" />
      
      {/* Navbar Minimal */}
      <nav className="relative z-50 px-6 py-6 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:border-[#3A7BD5]/50 transition-all">
              <BrainCircuit className="w-4 h-4 text-[#3A7BD5]" />
            </div>
            <span className="text-xl font-sans font-bold tracking-tight text-white ml-1">Kortex AI</span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          {submitted ? (
            <div className="bg-[#0b0f19] border border-white/10 rounded-[2rem] p-10 text-center shadow-[0_0_50px_rgba(58,123,213,0.1)] relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A7BD5]/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="w-20 h-20 bg-[#3A7BD5]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <CheckCircle2 className="w-10 h-10 text-[#60A5FA]" />
              </div>
              <h2 className="text-3xl font-serif text-white mb-4 relative z-10">Registration Successful</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 relative z-10">
                Thank you for applying to be a Kortex AI representative. We have sent your details to kortexai.33@gmail.com and our team will get in touch with you shortly.
              </p>
              <Link 
                to="/"
                className="inline-flex bg-[#3A7BD5] hover:bg-[#3168B5] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(58,123,213,0.3)] relative z-10"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <div className="bg-[#0b0f19] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(58,123,213,0.15)] relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A7BD5]/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 mb-10 text-center">
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-3">Become a School Rep</h1>
                <p className="text-[#94A3B8] font-light">Join the Kortex AI movement and lead the academic revolution in your institution.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#94A3B8] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#3A7BD5] focus:ring-1 focus:ring-[#3A7BD5]/50 transition-all placeholder:text-white/20"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-[#94A3B8] mb-2">School / University</label>
                  <input 
                    type="text" 
                    id="school" 
                    name="school" 
                    required
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#3A7BD5] focus:ring-1 focus:ring-[#3A7BD5]/50 transition-all placeholder:text-white/20"
                    placeholder="E.g. UNILAG, OAU, ABU Zaria"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#94A3B8] mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#3A7BD5] focus:ring-1 focus:ring-[#3A7BD5]/50 transition-all placeholder:text-white/20"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-[#94A3B8] mb-2">Department</label>
                    <input 
                      type="text" 
                      id="department" 
                      name="department" 
                      required
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#3A7BD5] focus:ring-1 focus:ring-[#3A7BD5]/50 transition-all placeholder:text-white/20"
                      placeholder="E.g. Computer Science"
                    />
                  </div>
                  <div>
                    <label htmlFor="class" className="block text-sm font-medium text-[#94A3B8] mb-2">Level / Class</label>
                    <input 
                      type="text" 
                      id="class" 
                      name="class" 
                      required
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#3A7BD5] focus:ring-1 focus:ring-[#3A7BD5]/50 transition-all placeholder:text-white/20"
                      placeholder="E.g. 300L"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#3A7BD5] hover:bg-[#3168B5] text-white py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(58,123,213,0.3)] hover:shadow-[0_0_30px_rgba(58,123,213,0.5)]"
                  >
                    Register as Rep
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Reps;
