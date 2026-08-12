import { week } from '../data'

export default function WeeklyProgress() {
  return <section className="panel p-5 sm:p-6"><div className="flex items-start justify-between"><div><h2 className="font-['Outfit'] text-lg font-semibold">Weekly progress</h2><p className="mt-1 text-sm text-slate-500">You completed 21 habits this week</p></div><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">+12% vs last week</span></div><div className="mt-7 grid grid-cols-7 gap-2 sm:gap-4">{week.map((day, index) => <div key={day.label} className="text-center"><div className="flex h-28 items-end justify-center rounded-xl bg-slate-900/70 px-1 pb-2 sm:h-36"><div className={`w-full max-w-8 rounded-md ${index < 5 ? 'bg-emerald-400' : 'bg-slate-700'}`} style={{height: `${Math.max(day.value, 8)}%`}} /></div><p className={`mt-2 text-xs ${index === 2 ? 'font-semibold text-emerald-300' : 'text-slate-500'}`}>{day.label}</p></div>)}</div></section>
}
