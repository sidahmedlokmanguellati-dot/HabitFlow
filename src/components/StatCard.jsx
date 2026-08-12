export default function StatCard({ icon: Icon, iconClass, label, value, note }) {
  return <article className="panel p-5"><div className="flex items-start justify-between"><div><p className="text-sm text-slate-400">{label}</p><p className="mt-2 font-['Outfit'] text-3xl font-semibold text-white">{value}</p></div><div className={`grid h-11 w-11 place-items-center rounded-xl ${iconClass}`}><Icon size={21}/></div></div><p className="mt-4 text-xs text-slate-500">{note}</p></article>
}
