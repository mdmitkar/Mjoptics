import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white font-sans selection:bg-blue-500/30">
      <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="space-y-4">
          <h1 className="text-6xl font-black tracking-tight bg-gradient-to-br from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
            Mjoptics
          </h1>
          <p className="text-xl text-slate-400 font-medium tracking-wide">
            Vite + <span className="text-blue-400">React</span> + <span className="text-emerald-400">Tailwind v4</span>
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl space-y-6">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-3 mx-auto"
            >
              <span className="text-2xl">⚡</span>
              Counter is {count}
            </button>
            <p className="text-slate-500 text-sm font-medium">
              Edit <code className="text-emerald-400 font-mono bg-emerald-400/10 px-1.5 py-0.5 rounded">src/App.jsx</code> to test HMR
            </p>
          </div>
        </div>

        <div className="flex gap-6 justify-center pt-4">
          {['Fast', 'Modern', 'Type-Safe'].map((label) => (
            <span key={label} className="text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-800 px-3 py-1 rounded-full bg-slate-900/50">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
