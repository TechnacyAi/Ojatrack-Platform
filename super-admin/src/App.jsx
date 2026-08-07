import { useState } from 'react'

const tabs = ['Dashboard', 'Shops', 'Agents', 'Revenue', 'Plans', 'Markets']

const stats = [
  { label: 'Total Revenue', value: '₦4.2M', sub: '+12.4% vs last month', accent: true },
  { label: 'Active Shops', value: '1,284', sub: '86 new today' },
  { label: 'Field Agents', value: '42', sub: '3 on leave' },
  { label: 'Market Coverage', value: '18', sub: 'Lagos + Oyo' },
]

const shops = [
  { name: 'Mama Gold Stores', market: 'Oja Oba, Ibadan', owner: 'Adebayo K.', status: 'Active', plan: 'PRO', rev: '₦84,500' },
  { name: 'Chinedu Electronics', market: 'Computer Village', owner: 'Chinedu O.', status: 'Active', plan: 'Basic', rev: '₦120,000' },
  { name: 'Alhaja Fabrics', market: 'Gbagi Market', owner: 'Fatimah L.', status: 'Suspended', plan: 'PRO', rev: '₦45,000' },
]

const agents = [
  { name: 'Tunde A.', shops: 34, verified: 28, area: 'Bodija' },
  { name: 'Emeka P.', shops: 52, verified: 49, area: 'Dugbe' },
  { name: 'Sade M.', shops: 21, verified: 18, area: 'Ojoo' },
]

export default function App() {
  const [active, setActive] = useState('Dashboard')

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Topbar */}
      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#050507]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00FF88] font-bold text-black">OJ</div>
            <div>
              <p className="text-[13px] font-bold leading-none tracking-tight">OjaTrack V3 PROD</p>
              <p className="text-[11px] text-white/50">super.ojatrack.com.ng</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex rounded-full bg-[#00FF88]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#00FF88]">LIVE</span>
            <div className="h-8 w-8 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1200px] px-4 py-6 md:px-6 md:py-8">
        {active === 'Dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[20px] border border-white/10 bg-[#0E0E10] p-4">
                  <p className="text-[11px] uppercase tracking-widest text-white/40">{s.label}</p>
                  <p className="mt-2 text-[22px] font-bold tracking-tight md:text-[28px]">{s.value}</p>
                  <p className={`mt-1 text-[11px] ${s.accent ? 'text-[#00FF88]' : 'text-white/40'}`}>{s.sub}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[24px] border border-white/10 bg-[#0E0E10] p-5">
              <p className="text-sm font-bold">Revenue Overview</p>
              <div className="mt-6 flex h-[120px] items-end gap-2">
                {[40,70,45,90,60,85,55,75].map((h,i) => (
                  <div key={i} className="flex-1 rounded-t-lg bg-white/10" style={{height: `${h}%`}}>
                    <div className="h-full w-full rounded-t-lg bg-[#00FF88] opacity-20" style={{height: i===3 ? '100%' : '0%'}} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {active === 'Shops' && (
          <div className="rounded-[24px] border border-white/10 bg-[#0E0E10] overflow-hidden">
            <div className="p-5"><p className="font-bold">Shops ({shops.length})</p></div>
            {shops.map((shop) => (
              <div key={shop.name} className="flex items-center justify-between border-t border-white/5 px-5 py-4">
                <div><p className="text-sm font-medium">{shop.name}</p><p className="text-[11px] text-white/40">{shop.market} • {shop.owner}</p></div>
                <div className="text-right"><p className="text-sm font-bold">{shop.rev}</p><p className="text-[10px] text-white/40">{shop.plan}</p></div>
              </div>
            ))}
          </div>
        )}

        {active === 'Agents' && (
          <div className="grid gap-3">
            {agents.map((a) => (
              <div key={a.name} className="rounded-[20px] border border-white/10 bg-[#0E0E10] p-4 flex justify-between">
                <div><p className="text-sm font-bold">{a.name}</p><p className="text-[11px] text-white/40">{a.area} • {a.shops} shops</p></div>
                <p className="text-sm font-bold text-[#00FF88]">{a.verified} verified</p>
              </div>
            ))}
          </div>
        )}

        {active === 'Revenue' && (
          <div className="rounded-[24px] border border-white/10 bg-[#0E0E10] p-6">
            <p className="text-sm font-bold">Revenue Streams</p>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm"><span className="text-white/50">Subscriptions</span><span className="font-bold">₦2.8M</span></div>
              <div className="flex justify-between text-sm"><span className="text-white/50">Transaction Fees</span><span className="font-bold">₦1.1M</span></div>
              <div className="flex justify-between text-sm"><span className="text-white/50">Agent Commissions</span><span className="font-bold text-[#00FF88]">₦320K</span></div>
            </div>
          </div>
        )}

        {active === 'Plans' && (
          <div className="grid gap-3 md:grid-cols-3">
            {[{name:'Basic', price:'₦2,500/mo', feat:'50 products'}, {name:'PRO', price:'₦7,500/mo', feat:'Unlimited + Analytics', popular:true}, {name:'Enterprise', price:'₦25,000/mo', feat:'Multi-branch'}].map((p) => (
              <div key={p.name} className={`rounded-[24px] border p-5 ${p.popular ? 'border-[#00FF88]/30 bg-[#00FF88]/5' : 'border-white/10 bg-[#0E0E10]'}`}>
                <p className="font-bold">{p.name}</p><p className="mt-2 text-xl font-bold">{p.price}</p><p className="mt-2 text-[11px] text-white/40">{p.feat}</p>
              </div>
            ))}
          </div>
        )}

        {active === 'Markets' && (
          <div className="rounded-[24px] border border-white/10 bg-[#0E0E10] p-5">
            <p className="font-bold">Markets</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Oja Oba','Gbagi','Bodija','Dugbe','Computer Village','Ojoo'].map(m => (
                <span key={m} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">{m}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#050507]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[600px] justify-between px-2 py-2">
          {tabs.map((t) => (
            <button key={t} onClick={() => setActive(t)} className={`rounded-full px-3 py-2 text-[11px] font-medium transition ${active===t ? 'bg-white text-black' : 'text-white/40'}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="h-[72px]" />
    </div>
  )
}
