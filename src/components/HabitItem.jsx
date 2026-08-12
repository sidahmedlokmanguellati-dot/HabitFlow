import { Check, Trash2 } from 'lucide-react'

export default function HabitItem({ habit, onToggle, onDelete }) {
  const Icon = habit.icon
  return <li className={`group flex items-center gap-3 rounded-xl border px-3 py-3 transition sm:gap-4 sm:px-4 ${habit.done ? 'border-emerald-400/15 bg-emerald-400/[.035]' : 'border-slate-800 bg-[#101725] hover:border-slate-700'}`}>
    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${habit.color}`}><Icon size={19}/></div>
    <div className="min-w-0 flex-1"><p className={`truncate text-sm font-semibold ${habit.done ? 'text-slate-300 line-through decoration-slate-600' : 'text-white'}`}>{habit.title}</p><p className="truncate text-xs text-slate-500">{habit.detail}</p></div>
    <button aria-label={`Mark ${habit.title} ${habit.done ? 'incomplete' : 'complete'}`} onClick={() => onToggle(habit.id)} className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition ${habit.done ? 'border-emerald-400 bg-emerald-400 text-slate-950' : 'border-slate-600 text-transparent hover:border-emerald-400'}`}><Check size={18} strokeWidth={3}/></button>
    <button aria-label={`Delete ${habit.title}`} onClick={() => onDelete(habit.id)} className="rounded-lg p-2 text-slate-600 transition hover:bg-rose-500/10 hover:text-rose-400 sm:opacity-0 sm:group-hover:opacity-100"><Trash2 size={17}/></button>
  </li>
}
