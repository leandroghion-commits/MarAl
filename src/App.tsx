import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Instagram, MapPin, Clock, Check, 
  ChevronRight, ChevronLeft, Scissors, Heart, Star, 
  Calendar as CalIcon, User, PlusCircle, MessageCircle, Droplets, Eye, Map, Send 
} from 'lucide-react';

// --- Constants ---
const SERVICES = [
  { id: 'corte', name: 'Corte unisex', price: '$20.000', icon: <Scissors size={24} />, desc: 'Cortes clásicos y modernos.' },
  { id: 'color', name: 'Color (pelo)', price: '$35.000', icon: <PlusCircle size={24} />, desc: 'Tintura, reflejos e iluminación.' },
  { id: 'keratina', name: 'Keratina', price: '$45.000', icon: <Star size={24} />, desc: 'Brillo y suavidad extrema.' },
  { id: 'alisado', name: 'Alisado', price: '$50.000', icon: <Droplets size={24} />, desc: 'Lacio perfecto controlado.' },
  { id: 'botox', name: 'Botox capilar', price: '$38.000', icon: <Droplets size={24} />, desc: 'Tratamiento restaurador.' },
  { id: 'pedicura', name: 'Pedicura', price: '$22.000', icon: <User size={24} />, desc: 'Cuidado integral de pies.' },
  { id: 'manicura', name: 'Manicura', price: '$15.000', icon: <Heart size={24} />, desc: 'Estilo para tus manos.' },
  { id: 'unas', name: 'Uñas esculpidas', price: '$28.000', icon: <Star size={24} />, desc: 'Diseño y esculpido premium.' },
  { id: 'depilacion', name: 'Depilación', price: '$18.000', icon: <Scissors size={24} />, desc: 'Piel suave y cuidada.' },
  { id: 'pestanas', name: 'Permanente de pestañas', price: '$22.000', icon: <Eye size={24} />, desc: 'Mirada impactante natural.' },
];

const PROFESSIONALS = [
  { id: 'norma', name: 'Norma', role: 'Estilista Senior', photo: 'https://placehold.co/120x120/fce7f3/C9A84C?text=N' },
  { id: 'mario', name: 'Mario', role: 'Estilista Senior', photo: 'https://placehold.co/120x120/e0f2fe/1A1A1A?text=M' },
];

const TESTIMONIALS = [
  { name: 'Laura M.', text: 'Norma es una genia, me dejó el cabello hermoso. ¡Ya reservé para el mes que viene!', stars: 5 },
  { name: 'Sebastián G.', text: 'Mario me hizo el mejor corte que tuve en años. Muy recomendable.', stars: 5 },
  { name: 'Valeria T.', text: 'El ambiente es súper cálido y cómodo. Siempre salgo feliz.', stars: 5 },
];

const GALLERY_IMAGES = [
  { url: 'https://placehold.co/600x800/fce7f3/C9A84C?text=Corte+Unisex', label: 'Corte Unisex' },
  { url: 'https://placehold.co/800x600/fce7f3/C9A84C?text=Color', label: 'Color & Reflejos' },
  { url: 'https://placehold.co/600x600/fce7f3/C9A84C?text=Peinado', label: 'Peinado de Fiesta' },
  { url: 'https://placehold.co/800x800/fce7f3/C9A84C?text=Tratamiento', label: 'Tratamientos' },
  { url: 'https://placehold.co/600x800/fce7f3/C9A84C?text=Manicura', label: 'Manicura' },
  { url: 'https://placehold.co/800x600/fce7f3/C9A84C?text=Pedicura', label: 'Pedicura' },
];

// --- Components ---

const Logo = ({ className = "" }) => (
  <span className={`font-logo text-brand-gold logo-shadow hover:scale-105 transition-transform cursor-pointer ${className}`}>
    MarAl
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-pink shadow-md h-20 px-8 md:px-12 flex items-center justify-between">
      <a href="#inicio">
        <Logo className="text-4xl md:text-5xl" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white font-semibold hover:text-brand-gold transition-colors text-lg"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="hidden lg:block">
        <a
          href="#reservas"
          className="bg-brand-gold text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-sm text-lg"
        >
          Reservar turno
        </a>
      </div>

      {/* Tablet/Mobile Hamburger */}
      <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-pink flex flex-col items-center py-8 gap-6 border-t border-white/20 shadow-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-medium hover:text-brand-gold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setIsOpen(false)}
              className="bg-brand-gold text-white px-10 py-3 rounded-full font-bold text-xl"
            >
              Reservar turno
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BookingWidget = () => {
  const [formData, setFormData] = useState({
    professional: null,
    service: null,
    date: null,
    time: null,
    name: '',
    phone: '',
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) days.push(new Date(year, month, i));
    return days;
  }, [currentMonth]);

  const handleDateSelect = (date: Date | null) => {
    if (!date) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today || date.getDay() === 0) return;
    setFormData({ ...formData, date });
  };

  const confirmReservation = () => {
    const dateStr = formData.date?.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    const message = `Hola MarAl! 💇 Quiero reservar un turno:
👤 Profesional: ${formData.professional?.name}
✂️ Servicio: ${formData.service?.name}
📅 Fecha: ${dateStr}
🕐 Horario: ${formData.time}
😊 Cliente: ${formData.name}
📱 WhatsApp: ${formData.phone}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5491100000000?text=${encoded}`, '_blank');
  };

  return (
    <div id="reservas" className="bento-card p-6 md:p-8 h-full flex flex-col space-y-6">
      <h2 className="font-display text-2xl font-bold">Reserva tu turno</h2>
      
      <div className="space-y-6 text-sm">
        {/* Step 1: Professional Selector (Inline) */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">1. Elegí quién te atiende</p>
          <div className="grid grid-cols-2 gap-3">
            {PROFESSIONALS.map((p) => (
              <button
                key={p.id}
                onClick={() => setFormData({ ...formData, professional: p })}
                className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left
                  ${formData.professional?.id === p.id ? 'border-brand-gold bg-brand-light-pink/10 shadow-sm' : 'border-gray-50 bg-white'}`}
              >
                <img src={p.photo} alt={p.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                <span className="font-bold text-xs">{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Calendar (Always visible below professional) */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">2. Seleccioná el día ({currentMonth.toLocaleDateString('es-ES', { month: 'long' })})</p>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                className="p-1 hover:bg-brand-light-pink rounded-full transition-colors"
                title="Mes anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                className="p-1 hover:bg-brand-light-pink rounded-full transition-colors"
                title="Próximo mes"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100">
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {['D','L','M','M','J','V','S'].map(d => <div key={d} className="text-[9px] font-black text-gray-300">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {daysInMonth.map((date, i) => {
                if (!date) return <div key={i} />;
                const isSunday = date.getDay() === 0;
                const isSelected = formData.date?.toDateString() === date.toDateString();
                const isPast = date < new Date(new Date().setHours(0,0,0,0));
                
                return (
                  <button
                    key={i}
                    disabled={isSunday || isPast}
                    onClick={() => handleDateSelect(date)}
                    className={`h-8 w-full flex items-center justify-center rounded-lg text-xs font-bold transition-all
                      ${isSunday || isPast ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-white text-gray-600'}
                      ${isSelected ? 'bg-brand-pink text-white shadow-md' : ''}`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service and Details Form */}
        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">3. Servicio y Horario</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select 
                onChange={(e) => setFormData({ ...formData, service: SERVICES.find(s => s.id === e.target.value) || null })}
                className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs focus:ring-2 focus:ring-brand-pink outline-none cursor-pointer"
              >
                <option value="">Elegí un servicio...</option>
                {SERVICES.map(s => <option key={s.id} value={s.id}>{s.name} ({s.price})</option>)}
              </select>
              <select
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs focus:ring-2 focus:ring-brand-pink outline-none cursor-pointer"
              >
                <option value="">Elegí horario...</option>
                {Array.from({ length: 17 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 12;
                  const min = i % 2 === 0 ? '00' : '30';
                  const timeStr = `${hour}:${min}`;
                  if (hour === 20 && min === '30') return null;
                  return <option key={timeStr} value={timeStr}>{timeStr} hs</option>;
                })}
              </select>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">4. Tus Datos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs focus:ring-2 focus:ring-brand-pink outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="WhatsApp (ej: 1123456789)"
                className="w-full bg-slate-50 border-none rounded-xl p-3 text-xs focus:ring-2 focus:ring-brand-pink outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={confirmReservation}
        disabled={!formData.professional || !formData.service || !formData.date || !formData.time || !formData.name || !formData.phone}
        className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-40 transition-all hover:scale-[1.02] active:scale-95 mt-auto"
      >
        <MessageCircle size={20} /> Agendar Turno por WhatsApp
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- BENTO GRID HERO & BOOKING --- */}
      <section id="inicio" className="pt-32 pb-20 px-8 md:px-12 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Hero Bento Tile */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bento-card p-10 flex-1 relative flex flex-col"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-light-pink rounded-full opacity-50"></div>
              <h1 className="font-display text-5xl md:text-6xl leading-tight mb-4 z-10 relative">
                Tu belleza,<br/>en buenas manos
              </h1>
              <p className="text-gray-500 text-lg mb-8 z-10 relative leading-relaxed">
                Peluquería unisex · Norma & Mario<br/>
                Tu barrio de siempre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 z-10 relative mb-6">
                <a href="#reservas" className="bg-brand-pink text-white px-8 py-3 rounded-2xl font-bold shadow-md hover:-translate-y-0.5 transition-transform text-center">
                  Reservar turno →
                </a>
              </div>
            </motion.div>

            {/* Quick Info Grid within Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">📞</div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-0.5">WhatsApp</p>
                  <p className="font-bold text-xs">+54 11 0000-0000</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-brand-pink text-2xl">📍</div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-0.5">Ubicación</p>
                  <p className="font-bold text-xs uppercase">Monroe 2449, CABA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Bento Tile */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-full"
            >
              <BookingWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS SECTION --- */}
      <section id="servicios" className="py-24 px-8 md:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Nuestros servicios</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bento-card p-8 flex flex-col items-start transition-all group"
              >
                <div className="text-brand-pink mb-6 bg-brand-light-pink w-16 h-16 flex items-center justify-center rounded-2xl group-hover:rotate-12 transition-all">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="mt-auto text-brand-gold font-black text-lg">{s.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOBRE NOSOTROS SECTION --- */}
      <section id="nosotros" className="py-24 px-8 md:px-12 bg-slate-50">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold">Conocenos</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                MarAl es una peluquería de barrio donde cada cliente es tratado con dedicación. 
                <span className="text-brand-pink font-bold"> Norma y Mario</span> llevan años transformando looks y generando sonrisas en nuestra comunidad en Monroe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROFESSIONALS.map((p, i) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bento-card p-10 text-center flex flex-col items-center"
                >
                  <img src={p.photo} alt={p.name} className="w-28 h-28 rounded-full mb-6 border-4 border-white shadow-md" />
                  <h3 className="text-2xl font-display font-bold text-brand-gold mb-1">{p.name}</h3>
                  <p className="text-xs text-gray-400 font-black uppercase tracking-widest">{p.id === 'norma' ? 'Colorista' : 'Estilista'}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- GALERIA SECTION --- */}
      <section id="galeria" className="py-24 px-8 md:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Nuestros trabajos</h2>
              <p className="text-gray-400">Arte y estilo capturados en cada detalle.</p>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-pink"></span>
              <span className="w-3 h-3 rounded-full bg-brand-gold"></span>
              <span className="w-3 h-3 rounded-full bg-brand-light-pink"></span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="overflow-hidden rounded-[32px] shadow-sm relative group aspect-[4/5]"
              >
                <img src={img.url} alt={img.label} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
                  <p className="text-white font-bold text-sm tracking-widest uppercase">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 px-8 md:px-12 bg-slate-50">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16 italic">"Lo que dicen de nosotros"</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm flex flex-col h-full"
              >
                <div className="flex gap-1 text-brand-gold mb-6">
                  {Array.from({ length: t.stars }).map((_, starI) => <Star key={starI} size={16} fill="#C9A84C" />)}
                </div>
                <p className="text-gray-600 font-medium mb-10 flex-1 leading-relaxed text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 bg-brand-light-pink rounded-full flex items-center justify-center font-bold text-brand-pink text-xs uppercase">
                    {t.name[0]}
                  </div>
                  <span className="font-black text-brand-dark text-xs uppercase tracking-widest">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACTO SECTION --- */}
      <section id="contacto" className="py-24 px-8 md:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9 bento-card p-10 bg-slate-50 flex flex-col sm:flex-row gap-10">
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-display font-bold">Contactanos</h2>
                <div className="space-y-4">
                  <a href="https://wa.me/5491100000000" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Phone size={18}/></div>
                    <span className="font-bold text-sm">+54 (11) 0000-0000</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink"><Instagram size={18}/></div>
                    <span className="font-bold text-sm">@maral.peluqueria</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold"><MapPin size={18}/></div>
                    <span className="font-bold text-sm">Monroe 2449, CABA</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-[32px] border border-brand-pink/10 flex flex-col justify-center">
                 <Clock className="text-brand-pink mb-2" size={24} />
                 <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">Horario de atención</p>
                 <p className="font-bold text-lg">Lunes a Sábado</p>
                 <p className="text-brand-pink font-black text-xl">12:00 - 20:00 hs</p>
              </div>
            </div>

            <a 
              href="https://wa.me/5491100000000" 
              className="lg:col-span-3 bento-card bg-[#25D366] text-white p-8 flex flex-col items-center justify-center text-center group hover:scale-[1.02] transition-transform"
            >
              <MessageCircle size={32} className="mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Escribinos</h3>
              <p className="text-[10px] opacity-80 font-black uppercase tracking-widest">WhatsApp</p>
            </a>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="pb-24 px-8 md:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto overflow-hidden rounded-[40px] border-4 border-white shadow-xl h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.082717326857!2d-58.4688172!3d-34.551468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6882670e30d%3A0xc3311e3b62788e0c!2sAv.%20Monroe%202449%2C%20C1428BKC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713456789012!5m2!1ses-419!2sar" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-pink pt-20 pb-10 px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <Logo className="text-6xl md:text-7xl" />
            <div className="flex flex-wrap justify-center gap-8">
               {['Inicio', 'Servicios', 'Nosotros', 'Galería', 'Contacto'].map(link => (
                 <a key={link} href={`#${link.toLowerCase()}`} className="text-white font-bold opacity-80 hover:opacity-100 transition-opacity">{link}</a>
               ))}
            </div>
          </div>
          <div className="h-px bg-white/20 w-full mb-10" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-white/60 uppercase tracking-widest">
            <p>Monroe 2449, CABA</p>
            <p>© 2026 MarAl Peluquería</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
