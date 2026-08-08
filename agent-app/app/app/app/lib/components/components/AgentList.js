'use client';
export function AgentList({ agents, activeId, onSelect }) {
  return (
    <div className="space-y-2">
      {agents.map(agent => (
        <div key={agent.id} onClick={() => onSelect(agent)} className="cursor-pointer p-3 rounded-lg border border-white/10 hover:border-[#00ff88]/50 bg-[#141414]">
          <div className="flex justify-between">
            <span className="font-bold text-sm">{agent.name}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${agent.status==='ONLINE'?'bg-[#00ff88] text-black':'bg-zinc-700'}`}>{agent.status}</span>
          </div>
          <div className="text-xs text-zinc-400">{agent.market}</div>
        </div>
      ))}
    </div>
  );
}
