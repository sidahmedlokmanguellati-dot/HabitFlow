import { Plus } from 'lucide-react'
import { useState } from 'react'

export default function HabitForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const submit = (e) => { e.preventDefault(); if (!title.trim()) return; onAdd(title.trim()); setTitle('') }
  return <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row"><input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What habit do you want to build?" className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-[#0d1422] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400"/><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"><Plus size={18} strokeWidth={3}/> Add habit</button></form>
}
