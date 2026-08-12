import { BookOpen, Dumbbell, Droplets, Sparkles, Brain } from 'lucide-react'

export const initialHabits = [
  { id: 1, title: 'Morning workout', detail: 'Move your body for 30 minutes', icon: Dumbbell, color: 'bg-orange-500/15 text-orange-300', done: true },
  { id: 2, title: 'Read a book', detail: 'Read at least 20 pages', icon: BookOpen, color: 'bg-violet-500/15 text-violet-300', done: true },
  { id: 3, title: 'Drink water', detail: 'Stay hydrated — 8 glasses today', icon: Droplets, color: 'bg-sky-500/15 text-sky-300', done: true },
  { id: 4, title: 'Meditate', detail: 'Take 10 minutes for yourself', icon: Brain, color: 'bg-fuchsia-500/15 text-fuchsia-300', done: false },
  { id: 5, title: 'Learn something new', detail: 'Spend 20 minutes learning', icon: Sparkles, color: 'bg-emerald-500/15 text-emerald-300', done: false },
]

export const week = [
  { label: 'Mon', value: 100 }, { label: 'Tue', value: 80 }, { label: 'Wed', value: 100 },
  { label: 'Thu', value: 60 }, { label: 'Fri', value: 80 }, { label: 'Sat', value: 20 }, { label: 'Sun', value: 0 },
]
