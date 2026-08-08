export function StatsPanel({ total }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="rounded-lg bg-[#0a0a0a] border border-[#00ff88]/20 p-3">
        <div className="text-[10px] text-zinc-500">TOTAL COLLECTED</div>
        <div className="text-xl font-bold text-[#00ff88]">{total}</div>
      </div>
      <div className="rounded-lg bg-[#0a0a0a] border border-white/10 p-3">
        <div className="text-[10px] text-zinc-500">MARKETS</div>
        <div className="text-xl font-bold">3</div>
      </div>
      <div className="rounded-lg bg-[#0a0a0a] border border-white/10 p-3">
        <div className="text-[10px] text-zinc-500">UPTIME</div>
        <div className="text-xl font-bold">98.4%</div>
      </div>
    </div>
  );
}
