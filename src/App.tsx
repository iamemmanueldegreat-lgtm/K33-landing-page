import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Flame, BookOpen, PenTool, TrendingUp, 
  ChevronRight, ArrowRight, Play, Target, Library, Sparkles, Building2, BrainCircuit,
  MessageSquare, FileText, Check, Plus, Minus, Mic, Upload, Shield, Zap, Globe, Lock, PlayCircle, Users, X, Star, Instagram
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Chinedu Okafor",
    role: "Computer Science",
    text: "Kortex AI changed how I study for exams. The AI tutor breaks down algorithms into simple bits. It's like having a senior developer next to me.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Amina Yusuf",
    role: "Medical Student",
    text: "The practice quizzes are phenomenal. They don't just tell me what I got wrong, but explain why. My retention has improved drastically.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Olamide Babatunde",
    role: "Engineering Major",
    text: "As a user of other tools, I can confidently say Kortex AI is on another level. The personalized curriculum hub keeps me on track.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Ngozi Eze",
    role: "Law Student",
    text: "The notes feature and the cognitive vault are lifesavers. I can easily organize case studies and have the AI quiz me on precedents.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Emeka Uba",
    role: "Economics Student",
    text: "I was struggling with macroeconomics until I started using the AI tutors. It patiently guided me through the concepts without judging.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Zainab Abubakar",
    role: "Pharmacy Student",
    text: "The library gave me access to all the materials I needed. The interface is clean, dark mode is easy on the eyes during late-night studies.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Tolu Ojo",
    role: "Architecture",
    text: "Joining the platform was the best decision for my practicals. The way it structures knowledge is just brilliant. Highly recommended.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Blessing Adebayo",
    role: "Business Admin",
    text: "Kortex is the best study companion I've ever used. The interactive discussions make learning so much more engaging than reading text.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "David Nwachukwu",
    role: "Physics Student",
    text: "The explanations provided by the AI are incredibly detailed. It helped me master quantum mechanics concepts I previously found impossible.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Fatima Bello",
    role: "Nursing Student",
    text: "I love how it organizes my academic roadmap. I know exactly what I need to study and when. The practice quizzes are perfect.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const FlashcardDemo = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex-1 flex px-3 pt-4 pb-4 items-center justify-center relative z-20" style={{ perspective: '1000px' }}>
      <div 
        className="w-full max-w-[280px] h-[75%] max-h-[170px] relative transition-transform duration-700 cursor-pointer"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Paperclip (Shared between front and back visually by sitting outside or duplicated) */}
        <svg className="absolute -top-4 left-8 w-5 h-10 z-40 drop-shadow-md" viewBox="0 0 24 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
          <path d="M12 56C16 56 19 53 19 49V15C19 9 14 4 8 4C2 4 -3 9 -3 15V43C-3 47 0 50 4 50C8 50 11 47 11 43V20" stroke="#b0b0b0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Front of Card */}
        <div className="absolute inset-0 bg-white rounded-[1.25rem] shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#4dd0e1] rounded-l-[1.25rem] z-20" />
          
          <div className="flex-1 px-6 py-3 flex flex-col pt-5 relative z-10">
            <div className="flex items-center justify-between mb-2">
              <div className="bg-[#e0f7fa] text-[#00bcd4] font-bold text-[8px] px-2 py-0.5 rounded-full flex gap-1 items-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                0:11
              </div>
              <div className="text-gray-400 text-[8px] font-bold bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">2 / 10 <span className="text-gray-300 ml-1">★</span></div>
            </div>
            
            <div className="flex-1 flex items-center justify-center text-center pb-2">
              <h4 className="text-[0.95rem] leading-[1.3] text-gray-800 font-medium tracking-tight">"Can you explain the Uncertainty Principle with a real-world example from our syllabus?"</h4>
            </div>

            <div className="flex justify-between items-center mt-auto pb-1 px-1">
              <button className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-sm font-medium shadow-sm transition-colors">?</button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
                className="w-12 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 shadow-sm transition-colors"
                title="Flip Card"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
              </button>
              <button className="w-7 h-7 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-sm shadow-sm transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 17 5-5-5-5M6 17l5-5-5-5"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 bg-white rounded-[1.25rem] shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#4dd0e1] z-20" />
          
          {/* Lined Paper Background covering whole card */}
          <div className="absolute inset-0 pointer-events-none z-0 mt-[2.5rem]" style={{ backgroundImage: 'linear-gradient(transparent 23px, #e2e8f0 23px)', backgroundSize: '100% 24px' }} />
          
          {/* Vertical Red Line */}
          <div className="absolute top-0 bottom-0 left-[1.5rem] w-[2px] bg-red-100 pointer-events-none z-10" />

          <div className="flex-1 px-6 py-4 flex flex-col pt-8 relative z-20">
            <div className="flex-1 text-left relative pl-2">
              <h4 className="text-[0.8rem] leading-[24px] text-gray-800 font-medium font-sans tracking-tight">Certainly! Imagine taking a photo of a moving car. A fast shutter speed shows its <b>position</b> precisely, but hides its speed. A slow shutter shows speed, but loses exact position.</h4>
            </div>

            <div className="flex justify-between items-center mt-auto pb-1 px-1 relative z-30">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                className="w-8 h-7 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center justify-center bg-white shadow-sm transition-colors"
                title="Mark Incorrect"
              >
                <X className="w-3 h-3" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                className="w-10 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 shadow-sm transition-colors"
                title="Flip Card Back"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14l5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"/></svg>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                className="w-8 h-7 rounded-xl bg-[#00e5ff] text-white hover:bg-[#00bcd4] flex items-center justify-center shadow-sm transition-colors"
                title="Mark Correct"
              >
                <Check className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ q: string; a: string; isOpen: boolean; onToggle: () => void }> = ({ q, a, isOpen, onToggle }) => {
  return (
    <div 
      onClick={onToggle}
      className={`bg-[#020617] border ${isOpen ? 'border-[#3A7BD5]/50 bg-gradient-to-b from-[#1E293B]/50 to-[#020617]' : 'border-white/5 hover:border-white/20'} rounded-[1.25rem] p-6 transition-colors shadow-lg cursor-pointer`}
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="text-white font-medium text-[1.05rem] leading-snug">{q}</h4>
        <div className="shrink-0 text-white/50 font-medium">
          {isOpen ? <Minus className="w-5 h-5 transition-transform" /> : <Plus className="w-5 h-5 transition-transform" />}
        </div>
      </div>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-2 text-[#94A3B8] text-sm leading-relaxed pr-6">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ERROR MANAGEMENT & FALLBACK PAGES
// ==========================================

const NotFoundPage = ({ onGoHome }: { onGoHome: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d3f44] via-[#091a24] to-[#03080c] flex flex-col items-center justify-center p-4 animate-fade-in select-none overflow-hidden">
      {/* Background Star Overlay */}
      <div className="absolute inset-0 bg-stars opacity-30 animate-twinkle pointer-events-none" />
      <div className="absolute inset-0 bg-stars-2 opacity-20 animate-twinkle-delayed pointer-events-none" />
      
      {/* Background glowing particles for atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* Floating Space Mockup Phone/Card */}
      <div className="relative w-full max-w-[340px] md:max-w-[360px] h-[640px] rounded-[3rem] p-6 flex flex-col items-center justify-between border border-white/10 overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.9)] bg-[#040a0f]/90 backdrop-blur-md select-none transform hover:scale-[1.01] transition-transform duration-500">
        
        {/* Subtle Inner Star field within card */}
        <div className="absolute inset-0 bg-stars opacity-40 animate-twinkle pointer-events-none" />
        <div className="absolute inset-0 bg-stars-2 opacity-30 animate-twinkle-delayed pointer-events-none" />

        {/* High-Fidelity Top Phone Status Bar */}
        <div className="w-full flex items-center justify-between px-6 py-2 select-none relative z-10 text-[10px] font-medium text-white/30 tracking-tight font-mono">
          <span>12:48</span>
          {/* Dynamic Notch / Island */}
          <div className="w-20 h-4 bg-black/80 rounded-b-xl border-x border-b border-white/5 absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 20h.01M8 16h.01M16 16h.01M5 11h.01M19 11h.01M2 6h.01M22 6h.01" />
            </svg>
            <span>84%</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center flex-1 w-full relative z-10 mt-12">
          {/* Huge centered 404 text */}
          <h1 className="text-[110px] font-black tracking-tight text-white/95 text-center leading-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] select-text">
            404
          </h1>

          {/* Curved Crescent Swoosh pill badge */}
          <div className="relative mt-6 mb-2 flex flex-col items-center">
            {/* The elegant text Pill */}
            <div className="px-5 py-1.5 rounded-xl bg-teal-950/40 border border-teal-500/20 text-[11px] font-extrabold text-[#4ade80] tracking-widest uppercase relative overflow-hidden shadow-inner">
              Lost in Space
            </div>
            {/* Crescent curved underline SVG matching reference screenshot */}
            <svg className="w-28 h-3.5 text-teal-400 opacity-90 mt-1.5 filter drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" viewBox="0 0 100 15" fill="none">
              <path d="M5 2 Q50 12 95 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Subtitle description */}
          <p className="text-xs font-light text-slate-300 max-w-[200px] text-center mt-4 leading-relaxed tracking-wide select-text">
            Oops! Looks like you are headed the wrong way!
          </p>
        </div>

        {/* Action Button at bottom */}
        <div className="w-full flex justify-center pb-6 relative z-10">
          <button
            onClick={onGoHome}
            className="w-full max-w-[190px] py-3.5 rounded-full bg-gradient-to-r from-[#174F56] to-[#0D363B] text-[11px] font-extrabold text-white tracking-[0.2em] transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer shadow-[0_12px_25px_rgba(23,79,86,0.5)] border border-teal-400/40 hover:border-teal-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)] select-none uppercase hover:shadow-[0_15px_30px_rgba(23,79,86,0.7)]"
          >
            Go Home
          </button>
        </div>

      </div>

      {/* Styled watermark layout exactly matching BANGKANDAR | 2019 reference styling */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2.5 text-[10px] font-extrabold text-white/30 tracking-[0.3em] uppercase pointer-events-none md:bottom-12 select-none">
        <Instagram className="w-4 h-4 text-white/30" strokeWidth={2.5} />
        <span>Kortex AI | 2026</span>
      </div>
    </div>
  );
};

const ServerErrorPage = ({ onGoHome }: { onGoHome: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d3f44] via-[#091a24] to-[#03080c] flex flex-col items-center justify-center p-4 animate-fade-in select-none overflow-hidden">
      {/* Background Star Overlay */}
      <div className="absolute inset-0 bg-stars opacity-30 animate-twinkle pointer-events-none" />
      <div className="absolute inset-0 bg-stars-2 opacity-20 animate-twinkle-delayed pointer-events-none" />
      
      {/* Background glowing particles for atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      {/* Floating Space Mockup Phone/Card */}
      <div className="relative w-full max-w-[340px] md:max-w-[360px] h-[640px] rounded-[3rem] p-6 flex flex-col items-center justify-between border border-white/10 overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.9)] bg-[#040a0f]/90 backdrop-blur-md select-none transform hover:scale-[1.01] transition-transform duration-500">
        
        {/* Subtle Inner Star field within card */}
        <div className="absolute inset-0 bg-stars opacity-40 animate-twinkle pointer-events-none" />
        <div className="absolute inset-0 bg-stars-2 opacity-30 animate-twinkle-delayed pointer-events-none" />

        {/* High-Fidelity Top Phone Status Bar */}
        <div className="w-full flex items-center justify-between px-6 py-2 select-none relative z-10 text-[10px] font-medium text-white/30 tracking-tight font-mono">
          <span>03:14</span>
          {/* Dynamic Notch / Island */}
          <div className="w-20 h-4 bg-black/80 rounded-b-xl border-x border-b border-white/5 absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 20h.01M8 16h.01M16 16h.01M5 11h.01M19 11h.01M2 6h.01M22 6h.01" />
            </svg>
            <span>ERROR</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center flex-1 w-full relative z-10 mt-12">
          {/* Huge centered 500 text */}
          <h1 className="text-[110px] font-black tracking-tight text-white/95 text-center leading-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] select-text">
            500
          </h1>

          {/* Curved Crescent Swoosh pill badge */}
          <div className="relative mt-6 mb-2 flex flex-col items-center">
            {/* The elegant text Pill (utilizing high-contrast amber/yellow for server failure warnings) */}
            <div className="px-5 py-1.5 rounded-xl bg-amber-950/40 border border-amber-500/20 text-[11px] font-extrabold text-[#f59e0b] tracking-widest uppercase relative overflow-hidden shadow-inner">
              Core Offline
            </div>
            {/* Crescent curved underline SVG matching reference screenshot */}
            <svg className="w-28 h-3.5 text-amber-500 opacity-90 mt-1.5 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" viewBox="0 0 100 15" fill="none">
              <path d="M5 2 Q50 12 95 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Subtitle description */}
          <p className="text-xs font-light text-slate-300 max-w-[200px] text-center mt-4 leading-relaxed tracking-wide select-text">
            Oops! Looks like the neural core dropped a connection!
          </p>
        </div>

        {/* Action Button at bottom */}
        <div className="w-full flex justify-center pb-6 relative z-10">
          <button
            onClick={onGoHome}
            className="w-full max-w-[190px] py-3.5 rounded-full bg-gradient-to-r from-[#564217] to-[#3b2b0d] text-[11px] font-extrabold text-white tracking-[0.2em] transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer shadow-[0_12px_25px_rgba(86,66,23,0.5)] border border-amber-400/40 hover:border-amber-300 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] select-none uppercase hover:shadow-[0_15px_30px_rgba(86,66,23,0.7)]"
          >
            Go Home
          </button>
        </div>

      </div>

      {/* Styled watermark layout exactly matching BANGKANDAR | 2019 reference styling */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2.5 text-[10px] font-extrabold text-white/30 tracking-[0.3em] uppercase pointer-events-none md:bottom-12 select-none">
        <Instagram className="w-4 h-4 text-white/30" strokeWidth={2.5} />
        <span>Kortex AI | 2026</span>
      </div>
    </div>
  );
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'invalid'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactStatus('invalid');
      setTimeout(() => setContactStatus('idle'), 3000);
      return;
    }
    setContactStatus('sending');
    setTimeout(() => {
      setContactStatus('success');
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setTimeout(() => {
        setContactStatus('idle');
      }, 4000);
    }, 1500);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      window.location.href = `https://app.kortexai.online?q=${encodeURIComponent(searchQuery.trim())}`;
    } else {
      window.location.href = 'https://app.kortexai.online';
    }
  };

  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTimeoutRef = useRef<number | null>(null);

  // Pre-calculate card positions on mount/resize to avoid layout thrashing during scroll
  const cardPositionsRef = useRef<number[]>([]);
  
  useEffect(() => {
    const updatePositions = () => {
      const container = document.querySelector('.feature-cards-container');
      const cards = document.querySelectorAll('.feature-card-wrapper');
      if (!container || !cards.length) return;
      
      const positions: number[] = [];
      cards.forEach((card) => {
        const el = card as HTMLElement;
        positions.push(el.offsetLeft + el.clientWidth / 2);
      });
      cardPositionsRef.current = positions;
    };
    
    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (scrollTimeoutRef.current !== null) return;
    
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    
    scrollTimeoutRef.current = window.setTimeout(() => {
      scrollTimeoutRef.current = null;
      
      if (!cardPositionsRef.current.length) return;
      
      const containerCenter = scrollLeft + clientWidth / 2;
      
      let minDist = Infinity;
      let minIndex = activeFeature;
      
      cardPositionsRef.current.forEach((cardCenter, i) => {
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < minDist) {
          minDist = dist;
          minIndex = i;
        }
      });

      if (activeFeature !== minIndex) {
        setActiveFeature(minIndex);
      }
    }, 50);
  };

  const show404 = currentPath !== '/' && currentPath !== '/500' && currentPath !== '/reps';
  const show500 = currentPath === '/500';

  return (
    <div className="min-h-screen bg-[#0F172A] selection:bg-[#3A7BD5]/30 relative overflow-x-hidden font-sans">
      {/* Dynamic Background Elements */}
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      
      {/* Animated Stars Layers */}
      <div className="fixed inset-0 bg-stars opacity-60 animate-twinkle pointer-events-none z-0" />
      <div className="fixed inset-0 bg-stars-2 opacity-50 animate-twinkle-delayed pointer-events-none z-0" />
      
      {/* Light Arch matching reference */}
      <div className="light-arch" />
      
      {/* Strategic Ambient Glows */}
      <div className="glow-effect top-[5%] left-[-10%]" />
      <div className="glow-effect top-[35%] right-[-15%] opacity-50" />
      <div className="glow-effect top-[80%] left-[15%] opacity-40" />

      {/* Main Content Wrapper (brings content above background) */}
      {show404 ? (
        <NotFoundPage onGoHome={() => navigateTo('/')} />
      ) : show500 ? (
        <ServerErrorPage onGoHome={() => navigateTo('/')} />
      ) : (
        <div className="relative z-10">

      {/* Navbar - Floating Glass Bar */}
      <nav className="fixed top-6 left-0 w-full z-50 px-2 lg:px-4 flex flex-col items-center pointer-events-none">
        <div className="w-full max-w-[1920px] pointer-events-auto">
          <div className="floating-nav px-6 md:px-10 py-4 flex items-center justify-between shadow-2xl">
            <div onClick={() => navigateTo('/')} className="flex items-center gap-2 md:gap-3 w-auto md:w-56 group cursor-pointer">
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:border-[#3A7BD5]/50 group-hover:bg-[#3A7BD5]/10 transition-all overflow-hidden">
                <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-[#3A7BD5] group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-lg md:text-xl font-sans font-bold tracking-tighter text-white uppercase">Kortex Ai</span>
            </div>
            
            <div className="hidden md:flex items-center justify-center gap-10 text-[13px] font-semibold tracking-wide uppercase">
              <a href="#product" className="nav-link">Product</a>
              <a href="#docs" className="nav-link">Docs</a>
              <a href="#resources" className="nav-link">Resources</a>
              <a href="#contact" className="nav-link">Contact</a>
              <Link to="/reps" className="nav-link whitespace-nowrap">Reps</Link>
            </div>
            
            <div className="hidden md:flex justify-end w-48">
              <a 
                href="https://app.kortexai.online"
                className="bg-white/5 border border-white/10 text-white px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Launch App
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex md:hidden items-center justify-end">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-white/70 transition-all p-1.5 focus:outline-none cursor-pointer" 
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 animate-fade-in" />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8h14M8 16h11" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Settings / Menu Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[#050505]/70 backdrop-blur-md z-[90] md:hidden pointer-events-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Bottom Sheet Menu */}
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.5 }}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 100 || info.velocity.y > 500) {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="fixed bottom-0 left-0 right-0 z-[100] md:hidden pointer-events-auto"
              >
                <div className="bg-[#0b0f19] border-t border-white/10 rounded-t-[2.5rem] p-6 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col gap-2 w-full relative">
                  
                  {/* Drag Handle aesthetic */}
                  <div className="w-16 h-1.5 bg-white/20 rounded-full mx-auto mb-6 mt-1" />
                  
                  <div className="flex flex-col px-2">
                    <a 
                      href="#product" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-[#3A7BD5] py-4 text-left text-lg font-medium transition-colors border-b border-white/5"
                    >
                      Product
                    </a>
                    <a 
                      href="#docs" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-[#3A7BD5] py-4 text-left text-lg font-medium transition-colors border-b border-white/5"
                    >
                      Docs
                    </a>
                    <a 
                      href="#resources" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-[#3A7BD5] py-4 text-left text-lg font-medium transition-colors border-b border-white/5"
                    >
                      Resources
                    </a>
                    <a 
                      href="#contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-[#3A7BD5] py-4 text-left text-lg font-medium transition-colors border-b border-white/5"
                    >
                      Contact
                    </a>
                    
                    <Link 
                      to="/reps" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-[#3A7BD5] py-4 text-left text-lg font-medium transition-colors mb-4"
                    >
                      Reps
                    </Link>
                    
                    <a 
                      href="https://app.kortexai.online"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-[#3A7BD5] hover:bg-[#3168B5] text-white text-center py-4 rounded-xl text-sm font-semibold uppercase tracking-widest transition-all w-full flex items-center justify-center cursor-pointer mt-2 shadow-[0_0_20px_rgba(58,123,213,0.3)]"
                    >
                      Launch App
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-12 overflow-hidden flex flex-col items-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <h1 className="text-[1.8rem] min-[350px]:text-[2rem] min-[400px]:text-[2.3rem] sm:text-6xl md:text-7xl font-serif tracking-tight max-w-[100vw] sm:max-w-4xl mx-auto leading-[1.3] sm:leading-[1.2] mb-6 text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="whitespace-nowrap sm:whitespace-normal">Personalized AI Learning</span><br/>
              <span className="whitespace-nowrap sm:whitespace-normal pt-1 sm:pt-0 inline-block">For Academic Success</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-[#94A3B8] font-light leading-relaxed">
              Learn faster with AI that understands your subjects, adapts to your level, and helps you pass exams with confidence.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex justify-center mb-16">
            <a 
              href="https://app.kortexai.online"
              className="group relative px-12 py-5 bg-[#3A7BD5] text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(58,123,213,0.4)] border border-white/20 flex items-center justify-center cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Learning
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
              />
            </a>
          </FadeIn>

          {/* Input Component matching reference */}
          <FadeIn delay={0.4} className="mt-8 relative max-w-3xl mx-auto z-20 w-full pb-10">
            <motion.div 
              className="bg-[#111113] rounded-2xl border border-white/10 p-2 shadow-[0_0_80px_rgba(58,123,213,0.15)] relative overflow-hidden"
            >
              <div className="bg-[#18181A] rounded-xl flex flex-col relative border border-white/5">
                <div className="p-4 flex gap-3 text-[#94A3B8]">
                  <BrainCircuit className="w-5 h-5 mt-1 opacity-70" />
                  <textarea 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSearchSubmit();
                      }
                    }}
                    className="w-full bg-transparent border-none outline-none resize-none text-base text-white placeholder-white/40 h-28" 
                    placeholder="Enter your course topic, or paste concepts to start learning..."
                  />
                </div>
                <div className="flex justify-between items-center px-4 pb-4 mt-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 transition-colors cursor-pointer">
                    <Library className="w-5 h-5" />
                  </div>
                  <button 
                    onClick={handleSearchSubmit}
                    className="bg-[#3A7BD5] hover:bg-[#3168B5] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer shadow-[0_0_15px_rgba(58,123,213,0.4)]"
                  >
                    Start
                  </button>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Institutional Trust Section */}
      <section className="py-8 md:py-12 relative z-10 w-full overflow-hidden border-y border-white/5 bg-transparent">
        <div className="w-full overflow-hidden flex relative before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#020617] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#020617] after:to-transparent after:z-10">
          <div className="animate-marquee flex gap-12 md:gap-20 items-center w-max opacity-60 px-8 hover:opacity-100 transition-opacity duration-300">
            {[1, 2, 3].map((set) => (
              <React.Fragment key={set}>
                <div className="flex items-center font-serif text-2xl font-bold tracking-widest uppercase text-white whitespace-nowrap">AUCHI POLY</div>
                <div className="flex items-center font-display text-2xl font-bold tracking-tight text-white whitespace-nowrap">UNILAG</div>
                <div className="flex items-center font-sans text-3xl font-black italic text-white whitespace-nowrap">UI</div>
                <div className="flex items-center font-serif text-2xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 whitespace-nowrap">O.A.U.</div>
                <div className="flex items-center gap-2 font-display text-2xl font-semibold tracking-tighter text-white whitespace-nowrap"><Building2 className="w-6 h-6" /> ABU ZARIA</div>
                <div className="flex items-center font-display text-2xl font-bold tracking-tight text-white whitespace-nowrap">UNN</div>
                <div className="flex items-center font-serif text-2xl font-bold uppercase text-white whitespace-nowrap">UNIBEN</div>
                <div className="flex items-center font-sans text-2xl font-semibold italic text-white whitespace-nowrap">FUTA</div>
                <div className="flex items-center font-display text-2xl font-bold text-white whitespace-nowrap">UNILORIN</div>
                <div className="flex items-center font-serif text-2xl font-bold uppercase tracking-widest text-white whitespace-nowrap">YABA TECH</div>
                <div className="flex items-center font-sans text-2xl font-bold italic text-white whitespace-nowrap">KAD POLY</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Your Intelligent Study Ecosystem</h2>
              <p className="text-lg text-[#94A3B8] font-light">Four core pillars designed to transform your academic performance through personalized AI integration.</p>
            </div>
          </FadeIn>
          
          <div onScroll={handleScroll} className="feature-cards-container flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 md:gap-8 px-[7.5vw] md:px-[calc(50vw-225px)] pb-12 hide-scrollbar w-full [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] relative pointer-events-auto">
            
            {/* Card 1 - Practice Quizzes */}
            <FadeIn delay={0.1} className="feature-card-wrapper w-[85vw] md:w-[450px] shrink-0 snap-center snap-always">
              <div className={`w-full dark-card p-0 relative overflow-hidden group flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] border transition-all duration-700 h-[480px] md:h-[500px] origin-center ${activeFeature === 0 ? 'border-[#3A7BD5]/50 scale-100 opacity-100 z-10' : 'border-white/5 scale-[0.93] opacity-55 shadow-none'}`}>
               <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/10 to-transparent pointer-events-none" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A7BD5]/10 blur-[60px] rounded-full group-hover:bg-[#3A7BD5]/20 transition-all pointer-events-none transform-gpu" />
               
               <div className="p-8 md:p-10 flex flex-col flex-1 z-10 relative">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm group-hover:bg-[#3A7BD5]/20 transition-colors text-[#3A7BD5]">
                   <Target className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#60A5FA] transition-colors">Practice Quizzes</h3>
                 <p className="text-[#a1a1aa] leading-relaxed">Master every topic with post-study quizzes that don't just correct you—they provide deep, logical explanations for every answer, ensuring you never make the same mistake twice.</p>
               </div>
               
               <div className="relative w-full h-[200px] mt-auto overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)]">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                    alt="Practice Quizzes" 
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-90 mix-blend-screen"
                    referrerPolicy="no-referrer"
                  />
               </div>
              </div>
            </FadeIn>

            {/* Card 2 - AI Tutors */}
            <FadeIn delay={0.2} className="feature-card-wrapper w-[85vw] md:w-[450px] shrink-0 snap-center snap-always">
              <div className={`w-full dark-card p-0 relative overflow-hidden group flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] border transition-all duration-700 h-[480px] md:h-[500px] origin-center ${activeFeature === 1 ? 'border-[#3A7BD5]/50 scale-100 opacity-100 z-10' : 'border-white/5 scale-[0.93] opacity-55 shadow-none'}`}>
               <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/10 to-transparent pointer-events-none" />
               <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#3A7BD5]/10 blur-[50px] rounded-full group-hover:bg-[#3A7BD5]/20 transition-all pointer-events-none transform-gpu" />
               
               <div className="p-8 md:p-10 flex flex-col flex-1 z-10 relative">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm group-hover:bg-[#3A7BD5]/20 transition-colors text-[#3A7BD5]">
                   <BrainCircuit className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#60A5FA] transition-colors">AI Tutors</h3>
                 <p className="text-[#a1a1aa] leading-relaxed">Engage with an AI that truly teaches. Explore any subject with detailed, multi-layered explanations and the freedom to ask as many follow-up questions as you need to reach full clarity.</p>
               </div>
               
               <div className="relative w-full h-[200px] mt-auto overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)]">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" 
                    alt="AI Tutors" 
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-90 mix-blend-screen"
                    referrerPolicy="no-referrer"
                  />
               </div>
              </div>
            </FadeIn>

            {/* Card 3 - Notes */}
            <FadeIn delay={0.3} className="feature-card-wrapper w-[85vw] md:w-[450px] shrink-0 snap-center snap-always">
              <div className={`w-full dark-card p-0 relative overflow-hidden group flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] border transition-all duration-700 h-[480px] md:h-[500px] origin-center ${activeFeature === 2 ? 'border-[#3A7BD5]/50 scale-100 opacity-100 z-10' : 'border-white/5 scale-[0.93] opacity-55 shadow-none'}`}>
               <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/10 to-transparent pointer-events-none" />
               <div className="absolute top-0 right-0 w-48 h-48 bg-[#3A7BD5]/10 blur-[50px] rounded-full group-hover:bg-[#3A7BD5]/20 transition-all pointer-events-none transform-gpu" />
               <div className="p-8 md:p-10 flex flex-col flex-1 z-10 relative">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm group-hover:bg-[#3A7BD5]/20 transition-colors text-[#3A7BD5]">
                   <PenTool className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#60A5FA] transition-colors">Notes</h3>
                 <p className="text-[#a1a1aa] leading-relaxed">A specialized digital space for your thoughts. Jot down critical concepts, formulas, or sudden insights to assure important knowledge is organized and always within reach.</p>
               </div>
               <div className="relative w-full h-[200px] mt-auto overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)]">
                  <img 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80" 
                    alt="Notes" 
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-80 mix-blend-screen"
                    referrerPolicy="no-referrer"
                  />
               </div>
              </div>
            </FadeIn>

            {/* Card 4 - Library */}
            <FadeIn delay={0.4} className="feature-card-wrapper w-[85vw] md:w-[450px] shrink-0 snap-center snap-always">
              <div className={`w-full dark-card p-0 relative overflow-hidden group flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] border transition-all duration-700 h-[480px] md:h-[500px] origin-center ${activeFeature === 3 ? 'border-[#3A7BD5]/50 scale-100 opacity-100 z-10' : 'border-white/5 scale-[0.93] opacity-55 shadow-none'}`}>
               <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/10 to-transparent pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3A7BD5]/10 blur-[50px] rounded-full group-hover:bg-[#3A7BD5]/20 transition-all pointer-events-none transform-gpu" />
               <div className="p-8 md:p-10 flex flex-col flex-1 z-10 relative">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm group-hover:bg-[#3A7BD5]/20 transition-colors text-[#3A7BD5]">
                   <Library className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#60A5FA] transition-colors">Library</h3>
                 <p className="text-[#a1a1aa] leading-relaxed">Your entire academic roadmap in one glance. Access every course and topic tailored to your specific goals making it easy to dive directly into your next breakthrough session.</p>
               </div>
               <div className="relative w-full h-[200px] mt-auto overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)]">
                  <img 
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80" 
                    alt="Library" 
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-80 mix-blend-screen"
                    referrerPolicy="no-referrer"
                  />
               </div>
              </div>
            </FadeIn>
          </div>

          <div className="flex justify-center items-center gap-3 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                aria-label={`Scroll to feature ${i + 1}`}
                onClick={() => {
                   const container = document.querySelector('.feature-cards-container');
                   const cards = document.querySelectorAll('.feature-card-wrapper');
                   const card = cards[i] as HTMLElement;
                   if (container && card) {
                     const targetScroll = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
                     container.scrollTo({ left: targetScroll, behavior: 'smooth' });
                     setActiveFeature(i);
                   }
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeFeature === i ? 'bg-[#3A7BD5] w-8 animate-pulse' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative z-10 w-full bg-gradient-to-b from-transparent via-[#101328]/30 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#1E293B]/50 border border-[#3A7BD5]/30 text-[#60A5FA] px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-[0_0_20px_rgba(58,123,213,0.1)] backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                How it Works
              </div>
              <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Steps to Academic Excellence</h2>
              <p className="text-lg text-[#94A3B8] font-light">Get started quickly and effortlessly with our intuitive process. Follow these easy steps to maximize your learning.</p>
            </FadeIn>
          </div>

          <div className="relative max-w-4xl mx-auto py-8">
            {/* Central Line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#3A7BD5]/30 to-transparent -translate-x-1/2" />
            {/* Left Line for mobile */}
            <div className="md:hidden absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#3A7BD5]/30 to-transparent" />

            <div className="space-y-16 md:space-y-0 relative">
              {[
                {
                  title: "Sign up",
                  desc: "Creating your account is quick and easy. Start by providing your basic information to get access to personalized learning tools.",
                  icon: <Users className="w-6 h-6 text-white" />
                },
                {
                  title: "Choose your department and level",
                  desc: "Tell us what you're studying. We customize the experience to match your exact academic curriculum and year of study.",
                  icon: <Building2 className="w-6 h-6 text-white" />
                },
                {
                  title: "Get your course library",
                  desc: "Instantly unlock a curated library containing all the courses and materials you need to study for your specific level.",
                  icon: <Library className="w-6 h-6 text-white" />
                },
                {
                  title: "Start learning with AI",
                  desc: "Dive into your courses using AI tutors, practice quizzes, and all other features designed to boost your grades and retention.",
                  icon: <BrainCircuit className="w-6 h-6 text-white" />
                }
              ].map((step, i) => (
                <div key={i} className={`relative flex items-center md:justify-between md:odd:flex-row-reverse group ${i !== 0 ? 'md:-mt-8 lg:-mt-12' : ''}`}>
                  
                  {/* The Text Content */}
                  <div className="ml-24 md:ml-0 md:w-[45%] py-4">
                    <FadeIn delay={0.1 * i}>
                      <div className="bg-[#0B0F19] p-8 rounded-[1.5rem] border border-white/5 relative overflow-hidden group-hover:border-[#3A7BD5]/30 transition-colors shadow-lg">
                        {/* Subtle glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/0 to-transparent group-hover:from-[#3A7BD5]/5 transition-colors pointer-events-none" />
                        
                        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                          <span className="text-[#3A7BD5] font-serif text-3xl font-bold leading-none">{i + 1}.</span> 
                          <span>{step.title}</span>
                        </h3>
                        <p className="text-[#a1a1aa] leading-relaxed text-sm md:text-base">
                          {step.desc}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* The Icon Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0B0F19] border border-white/10 text-white z-10 shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:border-[#3A7BD5]/50 group-hover:text-[#3A7BD5] transition-all group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/10 to-transparent rounded-2xl transition-colors" />
                    {step.icon}
                  </div>

                  {/* Empty Space for the other side on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative z-10 w-full overflow-hidden">
        <div className="absolute inset-0 bg-transparent -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#3A7BD5]/5 blur-[120px] rounded-full pointer-events-none transform-gpu" />

        <div className="max-w-6xl mx-auto px-6 mb-16 relative">
          <div className="text-center max-w-2xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#1E293B]/50 border border-[#3A7BD5]/30 text-[#60A5FA] px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-[0_0_20px_rgba(58,123,213,0.1)] backdrop-blur-sm">
                <Star className="w-4 h-4 fill-current" />
                Student Reviews
              </div>
              <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Loved by students globally</h2>
              <p className="text-lg text-[#94A3B8] font-light">Join thousands of students who are achieving academic excellence with Kortex AI.</p>
            </FadeIn>
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Row 1 - Now moving Right (Reverse) */}
          <div className="animate-marquee-reverse flex gap-6 shrink-0 w-max">
            {[...testimonials.slice(0, 5), ...testimonials.slice(0, 5), ...testimonials.slice(0, 5), ...testimonials.slice(0, 5)].map((t, i) => (
              <div key={`row1-${i}`} className="glass-card hover:bg-white/10 rounded-[1.5rem] p-8 w-[400px] shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:border-[#3A7BD5]/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex text-[#3A7BD5] mb-5 gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'fill-current' : 'text-white/20'}`} />
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-8 font-light">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(t.name)}`;
                    }}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#3A7BD5]/30 p-0.5 bg-slate-900/50" 
                  />
                  <div>
                    <h4 className="text-white text-sm font-medium">{t.name}</h4>
                    <p className="text-[#60A5FA] text-xs mt-0.5 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Now moving Left */}
          <div className="animate-marquee flex gap-6 shrink-0 w-max">
            {[...testimonials.slice(5, 10), ...testimonials.slice(5, 10), ...testimonials.slice(5, 10), ...testimonials.slice(5, 10)].map((t, i) => (
               <div key={`row2-${i}`} className="glass-card hover:bg-white/10 rounded-[1.5rem] p-8 w-[400px] shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:border-[#3A7BD5]/40 hover:-translate-y-1 transition-all duration-300">
               <div className="flex text-[#3A7BD5] mb-5 gap-1">
                 {[...Array(5)].map((_, j) => (
                   <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'fill-current' : 'text-white/20'}`} />
                 ))}
               </div>
               <p className="text-slate-200 text-sm leading-relaxed mb-8 font-light">"{t.text}"</p>
               <div className="flex items-center gap-4 mt-auto">
                 <img 
                   src={t.avatar} 
                   alt={t.name} 
                   referrerPolicy="no-referrer"
                   onError={(e) => {
                     e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(t.name)}`;
                   }}
                   className="w-12 h-12 rounded-full object-cover ring-2 ring-[#3A7BD5]/30 p-0.5 bg-slate-900/50" 
                 />
                 <div>
                   <h4 className="text-white text-sm font-medium">{t.name}</h4>
                   <p className="text-[#60A5FA] text-xs mt-0.5 font-medium">{t.role}</p>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10 w-full mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#0B0F19] border border-white/5 rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(58,123,213,0.05)]">
            {/* Grid Background inside the box */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20" 
              style={{ 
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `, 
                backgroundSize: '48px 48px' 
              }} 
            />
            {/* Subtle glow in the center top */}
            <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3A7BD5]/10 blur-[100px] pointer-events-none rounded-full transform-gpu" />

            <div className="flex flex-col items-center text-center mb-16 relative z-10">
              <div className="flex items-center gap-2 bg-[#1E293B]/50 border border-[#3A7BD5]/30 text-[#60A5FA] px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-[0_0_20px_rgba(58,123,213,0.1)] backdrop-blur-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white tracking-tight">Frequently Asked Question</h2>
              <p className="text-[#a1a1aa] text-lg font-light max-w-2xl">Find quick answers to common questions about KortexAi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 items-start">
              <div className="space-y-4">
                {[
                  { q: "How does KortexAi teach me my courses?", a: "KortexAi acts as your personal AI tutor. It reads your course materials and breaks them down into interactive lessons, continually checking your understanding and explaining complex topics in unique ways." },
                  { q: "Can I get immediate feedback after studying?", a: "Yes. After completing a study session, the AI gives you targeted practice questions to solidify what you just learned, ensuring long-term retention." },
                  { q: "Can I converse directly with the AI?", a: "Absolutely. You can talk to KortexAi at any time. Ask it to explain a confusing concept, verify your answers, or provide real-world examples specifically tailored to your syllabus." },
                  { q: "Is the AI feedback accurate?", a: "Our AI is strictly grounded in the materials you and your professors provide. It will only verify and teach based on the official curriculum of your course to prevent hallucinations." }
                ].map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === faq.q} onToggle={() => setOpenFaq(openFaq === faq.q ? null : faq.q)} />
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { q: "What happens if I answer practice questions incorrectly?", a: "KortexAi doesn't just mark it wrong. It will re-explain the concept using a different approach and guide you to discover the correct answer on your own." },
                  { q: "Can KortexAi grade my essays and assignments?", a: "Yes! You can paste your drafts into KortexAi, and it will provide detailed, actionable feedback, highlight areas of improvement, and verify your arguments." },
                  { q: "How do I get started?", a: "Simply sign up for an account, create a new course folder, and start uploading your materials or pasting your notes. The AI will guide you from there!" }
                ].map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === faq.q} onToggle={() => setOpenFaq(openFaq === faq.q ? null : faq.q)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#101328]/20 to-[#050505] z-0" />
         
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <FadeIn delay={0.1}>
                 <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white text-shadow-sm">Get in Touch With Us</h2>
                 <p className="text-[#a1a1aa] mb-12 max-w-md text-lg font-light">Whether you're exploring student features, organizing a group study, or need school rep partnership, our team is here to help.</p>
                 
                 <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm text-[#a1a1aa] mb-2 font-medium">Name</label>
                      <input 
                        type="text" 
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-[#121218] border border-white/10 rounded-lg px-4 py-3 placeholder-white/30 text-white focus:outline-none focus:border-[#3A7BD5]/50 transition-colors" 
                        placeholder="Enter your name" 
                        disabled={contactStatus === 'sending'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#a1a1aa] mb-2 font-medium">Email Address</label>
                      <input 
                        type="email" 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-[#121218] border border-white/10 rounded-lg px-4 py-3 placeholder-white/30 text-white focus:outline-none focus:border-[#3A7BD5]/50 transition-colors" 
                        placeholder="Enter your email" 
                        disabled={contactStatus === 'sending'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#a1a1aa] mb-2 font-medium">Message</label>
                      <textarea 
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full bg-[#121218] border border-white/10 rounded-lg px-4 py-3 placeholder-white/30 text-white focus:outline-none focus:border-[#3A7BD5]/50 transition-colors min-h-[120px] resize-none" 
                        placeholder="Write your message" 
                        disabled={contactStatus === 'sending'}
                      />
                    </div>
                    {contactStatus === 'invalid' && (
                      <p className="text-red-400 text-sm font-semibold animate-pulse">Please fill out all fields before submitting.</p>
                    )}
                    {contactStatus === 'success' && (
                      <p className="text-green-400 text-sm font-semibold flex items-center gap-2"><Check className="w-5 h-5 text-green-400 animate-bounce" /> Thank you! Your message has been sent successfully.</p>
                    )}
                    <button 
                      type="submit" 
                      disabled={contactStatus === 'sending'}
                      className="bg-[#3A7BD5] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3168B5] transition-colors w-auto shadow-[0_0_15px_rgba(58,123,213,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                    >
                      {contactStatus === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : contactStatus === 'success' ? (
                        'Message Sent!'
                      ) : (
                        'Send Message'
                      )}
                    </button>
                 </form>
               </FadeIn>

               <FadeIn delay={0.2} className="relative hidden lg:flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3A7BD5]/10 via-[#00D2FF]/5 to-transparent rounded-3xl blur-[40px] transform-gpu" />
                  <div className="dark-card h-full w-full max-h-[500px] overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#3A7BD5]/5" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
                    <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent">
                      <div className="flex items-center gap-3 w-48 mb-6">
                        <div className="w-2 h-6 bg-white rounded-[2px]" />
                        <div className="flex gap-1 opacity-80">
                          <div className="w-1 h-4 bg-white/60 rounded-[1px] mt-1" />
                          <div className="w-1 h-5 bg-white/70 rounded-[1px] mt-0.5" />
                          <div className="w-1 h-3 bg-white/50 rounded-[1px] mt-1.5" />
                        </div>
                        <span className="text-xl font-sans font-semibold tracking-tight text-white ml-1">Kortex AI</span>
                      </div>
                      <p className="text-2xl font-serif text-white font-medium drop-shadow-md">Let's create something unforgettable together. Reach out to start your project.</p>
                    </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0c0c0e] pt-12 pb-8 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="col-span-1 md:col-span-4 pr-8">
              <FadeIn>
                <div className="flex items-center gap-2 md:gap-3 w-48 mb-6 group cursor-pointer">
                  <div className="relative w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:border-[#3A7BD5]/50 transition-all">
                    <BrainCircuit className="w-4 h-4 text-[#3A7BD5]" />
                  </div>
                  <span className="text-xl font-sans font-bold tracking-tight text-white ml-1">Kortex AI</span>
                </div>
                <p className="text-[#a1a1aa] font-light text-sm max-w-[280px] mb-4 leading-relaxed">Empowering Your Projects, Enhancing Your Success, Every Step of the Way.</p>
                <div className="text-xs text-[#a1a1aa] mb-8 space-y-2">
                  <p className="flex items-center gap-2 hover:text-white transition-colors"><MessageSquare className="w-3.5 h-3.5 text-[#3A7BD5]" /> WhatsApp: +1 (343) 512-8553</p>
                  <p className="flex items-center gap-2 hover:text-white transition-colors"><FileText className="w-3.5 h-3.5 text-[#3A7BD5]" /> email: kortexai.33@gmail.com</p>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#18181A] flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-[#a1a1aa] hover:text-white font-medium text-sm">f</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#18181A] flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-[#a1a1aa] hover:text-white font-medium text-sm">in</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#18181A] flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-[#a1a1aa] hover:text-white font-medium text-sm">ig</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#18181A] flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-[#a1a1aa] hover:text-white font-medium text-sm">X</a>
                </div>
              </FadeIn>
            </div>
            
            <div className="col-span-1 md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h5 className="font-semibold text-white mb-6 text-sm">Home</h5>
                <ul className="space-y-3">
                  <li><a href="#features" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Product Features</a></li>
                  <li><a href="#features" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Benefits</a></li>
                  <li><a href="#how-it-works" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">How To Use</a></li>
                  <li><a href="#features" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Key Features</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="font-semibold text-white mb-6 text-sm">About</h5>
                <ul className="space-y-3">
                  <li><a href="#" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Mobile App</a></li>
                  <li><a href="#" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Desktop App</a></li>
                  <li><a href="#how-it-works" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">How To Use</a></li>
                  <li><a href="#testimonials" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="font-semibold text-white mb-6 text-sm">All Pages</h5>
                <ul className="space-y-3 p-0 list-none m-0">
                  <li><button onClick={() => navigateTo('/')} className="text-[#a1a1aa] text-sm hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left">Home</button></li>
                  <li><a href="https://app.kortexai.online" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">App</a></li>
                  <li><a href="#contact" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Contact</a></li>
                  <li><Link to="/reps" className="text-[#a1a1aa] text-sm hover:text-white transition-colors">Reps</Link></li>
                </ul>
              </div>
              
              <div className="space-y-4 lg:col-span-1 col-span-2">
                 <h5 className="font-semibold text-white mb-6 text-sm">Download our App</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#121218] border border-white/5 opacity-60 relative group cursor-not-allowed">
                       <Play className="w-5 h-5 text-white/40" />
                       <div className="text-left">
                          <div className="text-[10px] text-[#a1a1aa] leading-tight">Get It On</div>
                          <div className="text-sm font-semibold text-white/50 leading-tight">Google Play</div>
                       </div>
                       <span className="absolute top-2 right-2 text-[8px] uppercase font-bold text-[#3A7BD5] bg-[#3A7BD5]/10 px-1.5 py-0.5 rounded border border-[#3A7BD5]/20">Coming Soon</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#121218] border border-white/5 opacity-60 relative group cursor-not-allowed">
                       <Shield className="w-5 h-5 text-white/40" />
                       <div className="text-left">
                          <div className="text-[10px] text-[#a1a1aa] leading-tight">Download on the</div>
                          <div className="text-sm font-semibold text-white/50 leading-tight">App Store</div>
                       </div>
                       <span className="absolute top-2 right-2 text-[8px] uppercase font-bold text-[#3A7BD5] bg-[#3A7BD5]/10 px-1.5 py-0.5 rounded border border-[#3A7BD5]/20">Coming Soon</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a1a1aa]">
             <p>© 2026 Kortex AI. All rights reserved.</p>
             <div className="flex gap-8">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Services</a>
             </div>
          </div>
        </div>
      </footer>
        </div>
      )}
    </div>
  );
}

