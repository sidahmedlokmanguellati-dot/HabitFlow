import { useMemo, useState } from 'react'
import { CheckCircle2, Flame, Target, TrendingUp } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import HabitForm from './components/HabitForm'
import HabitItem from './components/HabitItem'
import WeeklyProgress from './components/WeeklyProgress'
import { initialHabits } from './data'

export default function App() {
  const [habits, setHabits] = useState(initialHabits)
  const [menuOpen, setMenuOpen] = useState(false)
  const completed = useMemo(() => habits.filter((habit) => habit.done).length, [habits])
  const progress = habits.length ? Math.round((completed / habits.length) * 100) : 0
  const addHabit = (title) => setHabits((items) => [...items, { id: Date.now(), title, detail: 'A new habit for a better you', icon: Target, color: 'bg-emerald-500/15 text-emerald-300', done: false }])
  const toggleHabit = (id) => setHabits((items) => items.map((habit) => habit.id === id ? { ...habit, done: !habit.done } : habit))
  const deleteHabit = (id) => setHabits((items) => items.filter((habit) => habit.id !== id))
  return <div className="min-h-screen bg-[#090d18] lg:flex">
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)}/>
      <main className="min-w-0 flex-1 px-4 py-5 sm:px-7 sm:py-7 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Header onOpenMenu={() => setMenuOpen(true)}/>
            <section className="py-7">
              <p className="text-sm text-slate-400">Build better habits, one day at a time.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard icon={Flame} iconClass="bg-orange-400/10 text-orange-300" label="Current streak" value="7 days" note="Your personal best: 14 days"/>
                <StatCard icon={CheckCircle2} iconClass="bg-emerald-400/10 text-emerald-300" label="Today's habits" value={`${completed} / ${habits.length}`} note={`${completed} completed today`}/>
                <StatCard icon={TrendingUp} iconClass="bg-violet-400/10 text-violet-300" label="Completion rate" value={`${progress}%`} note="Keep showing up every day"/>
                <StatCard icon={Target} iconClass="bg-sky-400/10 text-sky-300" label="Weekly goal" value="21 / 30" note="9 habits to reach your goal"/>
                </div>
                </section>
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.16fr)_minmax(330px,.84fr)]">
                  <section className="panel p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div><h2 className="font-['Outfit'] text-xl font-semibold">Today's habits</h2>
                      <p className="mt-1 text-sm text-slate-500">Make today count.</p>
                      </div><span className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">{completed} of {habits.length} done</span>
                      </div><HabitForm onAdd={addHabit}/><ul className="mt-5 space-y-2.5">{habits.map((habit) => <HabitItem key={habit.id} habit={habit} onToggle={toggleHabit} onDelete={deleteHabit}/>)}</ul>{habits.length === 0 && <p className="py-10 text-center text-sm text-slate-500">No habits yet — add one above.</p>}
                      <div className="mt-6">
                        <div className="mb-2 flex justify-between text-xs text-slate-400">
                          <span>Daily progress</span><span>{progress}%</span></div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                            <div className="h-full rounded-full bg-emerald-400 transition-all duration-300" style={{width: `${progress}%`}} /></div>
                            </div>
                            </section>
                            <WeeklyProgress/>
                            </div>
                            </div>
                            </main>
                            </div>
}
