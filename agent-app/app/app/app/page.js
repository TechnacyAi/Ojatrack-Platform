'use client';
import { useState } from 'react';
import { agents } from '../lib/data';

export default function AgentPortal() {
  const [activeAgent, setActiveAgent] = useState(agents[0]);
  const [collections, setCollections] = useState([]);

  const handleCollect = (item) => {
    setCollections(prev => [...prev, {
      id: Date.now(),
      agent: activeAgent.name,
      item: item.name,
      price: item.price,
      market: activeAgent.market,
      timestamp: new Date().toISOString()
    }]);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center border border-[#00ff88]/20 rounded-xl p-4 mb-6 bg-[#111]">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#00ff88]">OJATRACK</h1>
          <p className="text-xs text-zinc-400">AGENT PORTAL v1.0 • {agents.length} ACTIVE AGENTS</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-[#00ff88] text-black grid place-items-center font-bold">
          {activeAgent.name[0]}
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Agents */}
        <section className="lg:col-span-1 space-y-3">
          <h2 className="text-sm text-[#00ff88] tracking-widest">FIELD AGENTS</h2>
          {agents.map(a => (
            <button
              key={a.id}
              onClick={() => setActiveAgent(a)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${activeAgent.id===a.id ? 'bg-[#00ff88] text-black border-[#00ff88]' : 'bg-[#141414] border-white/10 hover:border-[#00ff88]/40'}`}
            >
              <div className="flex justify-between">
                <span className="font-bold">{a.name}</span>
                <span className="text-xs opacity-60">{a.market}</span>
              </div>
              <div className="text-xs mt-1 opacity-70">{a.status} • {a.items} items tracked</div>
            </button>
          ))}
        </section>

        {/* Market Board */}
        <section className="lg:col-span-2">
          <div className="rounded-xl border border-[#00ff88]/20 bg-[#111] p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">{activeAgent.market} • TODAY</h2>
              <span className="text-xs px-2 py-1 rounded bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30">LIVE</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {activeAgent.inventory.map(item => (
                <div key={item.name} className="p-3 rounded-lg bg-[#0a0a0a] border border-white/5">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-[#00ff88] font-bold">₦{item.price.toLocaleString()}</div>
                  <div className="text-[10px] text-zinc-500 mt-1">{item.trend > 0 ? '↗' : '↘'} {Math.abs(item.trend)}%</div>
                  <button onClick={() => handleCollect(item)} className="mt-3 w-full text-xs py-1.5 rounded bg-white text-black font-bold hover:bg-[#00ff88] transition-colors">
                    COLLECT
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Collections Log */}
          <div className="mt-6 rounded-xl border border-white/10 bg-[#111] p-4">
            <h3 className="text-xs tracking-widest text-zinc-400 mb-3">COLLECTION LOG • {collections.length}</h3>
            {collections.length===0 ? (
              <p className="text-sm text-zinc-500 py-6 text-center">No collections yet. Start tracking prices.</p>
            ) : (
              <div className="space-y-2 max-h-48 overflow-auto">
                {collections.map(c => (
                  <div key={c.id} className="flex justify-between text-xs p-2 rounded bg-black/50 border border-white/5">
                    <span>{c.item} @ ₦{c.price}</span>
                    <span className="text-zinc-500">{c.agent} • {new Date(c.timestamp).toLocaleTimeString()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
