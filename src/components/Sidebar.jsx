import { BarChart3, CalendarDays, ChevronLeft, LayoutDashboard, Settings, Target } from 'lucide-react'

const links = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'My Habits', icon: Target },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Insights', icon: BarChart3 },
]

export default function Sidebar({ open, onClose }) {
  return <>
    {open && <button aria-label="Close menu" onClick={onClose} className="fixed inset-0 z-30 bg-slate-950/70 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-800 bg-[#0d1422] px-5 py-7 transition-transform duration-300 lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-12 flex items-center justify-between px-2">
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400 text-lg font-black text-slate-950">✓</div><span className="font-['Outfit'] text-2xl font-semibold tracking-tight">HabitFlow</span></div>
        <button onClick={onClose} className="text-slate-400 lg:hidden"><ChevronLeft /></button>
      </div>
      <nav className="space-y-2">
        {links.map(({ label, icon: Icon }, index) => <button key={label} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${index === 0 ? 'bg-emerald-400 text-slate-950 shadow-glow' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`}>
          <Icon size={19} strokeWidth={index === 0 ? 2.7 : 2} /> {label}
        </button>)}
      </nav>
      <div className="mt-auto rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4">
        <p className="text-sm font-semibold text-emerald-300">Keep it going!</p><p className="mt-1 text-xs leading-5 text-slate-400">Small daily actions make a big difference.</p>
      </div>
      <button className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"><Settings size={19} /> Settings</button>
    </aside>
  </>
}
