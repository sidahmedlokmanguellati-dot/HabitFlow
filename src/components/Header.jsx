import { Bell, Menu, Search } from 'lucide-react'

export default function Header({ onOpenMenu }) {
  return <header className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
    <div className="flex items-center gap-3"><button onClick={onOpenMenu} className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 lg:hidden"><Menu /></button><div><p className="text-sm text-slate-400">Wednesday, October 23</p><h1 className="font-['Outfit'] text-xl font-semibold text-white sm:text-2xl">Good morning, Lokmen <span>👋</span></h1></div></div>
    <div className="flex items-center gap-2 sm:gap-4"><button className="hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-slate-500 sm:flex"><Search size={17}/><span className="text-sm">Search</span></button><button aria-label="Notifications" className="relative rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-300"><Bell size={18}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400" /></button><div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 font-semibold text-white">L</div></div>
  </header>
}
