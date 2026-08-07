import { useState } from 'react'

const shops = [
  { name: "Mama Gold Rice", owner: "Adebayo F.", market: "Bodija", revenue: "₦1.2M", status: "Active" },
  { name: "Lagos Fabrics Hub", owner: "Chioma O.", market: "Balogun", revenue: "₦890K", status: "Active" },
  { name: "TechPlug NG", owner: "Emeka J.", market: "Computer Village", revenue: "₦2.4M", status: "Active" },
  { name: "Fresh Farm Produce", owner: "Tolu A.", market: "Mile 12", revenue: "₦560K", status: "Pending" },
]

const agents = [
  { name: "Seyi Lawal", region: "Lagos Mainland", shops: 34, status: "On Field" },
  { name: "Ngozi Eze", region: "Oyo - Ibadan", shops: 28, status: "On Field" },
  { name: "Ahmed Musa", region: "Lagos Island", shops: 41, status: "Offline" },
]

export default function App() {
  const [active, setActive] = useState("Dashboard")

  const tabs = ["Dashboard", "Shops", "Agents", "Revenue", "Plans", "Markets"]

  return (
    <div className="oj-container">
      <header className="oj-header">
        <div className="oj-logo"><span>OJ</span> OjaTrack V3 PRO</div>
        <div style={{display:'flex', gap:'16px', alignItems:'center', fontSize:'13px', color:'#888'}}>
          <span>super.ojatrack.com.ng</span>
          <span style={{display:'flex', gap:'6px', alignItems:'center', color:'#00FF88', fontWeight:600}}>
            <i className="live-dot"></i> LIVE
          </span>
        </div>
      </header>

      <div className="oj-stats">
        <div className="oj-card"><h3>Total Revenue</h3><div className="val">₦4.2M</div><div className="sub">↑ 12.4% vs last month</div></div>
        <div className="oj-card"><h3>Active Shops</h3><div className="val">1,284</div><div className="sub">+86 new today</div></div>
        <div className="oj-card"><h3>Field Agents</h3><div className="val">42</div><div className="sub">3 on leave</div></div>
        <div className="oj-card"><h3>Market Coverage</h3><div className="val">18 Markets</div><div className="sub">Lagos + Oyo</div></div>
      </div>

      <nav className="oj-nav">
        {tabs.map(t => (
          <button key={t} className={active === t ? "active" : ""} onClick={() => setActive(t)}>{t}</button>
        ))}
      </nav>

      {active === "Dashboard" && (
        <div className="oj-table">
          <div className="row" style={{fontWeight:700, background:'#0a0a0f', color:'#888', fontSize:'12px'}}><span>METRIC</span><span>VALUE</span></div>
          <div className="row"><span>Today's Sales</span><strong>₦342,000</strong></div>
          <div className="row"><span>Pending Verifications</span><strong>12 shops</strong></div>
          <div className="row"><span>Active Subscriptions</span><strong>1,102 / 1,284</strong></div>
          <div className="row" style={{borderBottom:'none'}}><span>System Health</span><strong style={{color:'#00FF88'}}>● Operational</strong></div>
        </div>
      )}

      {active === "Shops" && (
        <div className="oj-table">
          <div className="row" style={{fontWeight:700, background:'#0a0a0f', color:'#888', fontSize:'12px'}}><span>SHOP / OWNER</span><span>REVENUE</span></div>
          {shops.map(s => (
            <div key={s.name} className="row">
              <span><strong>{s.name}</strong> <small style={{color:'#666'}}> • {s.owner} • {s.market}</small></span>
              <span>{s.revenue} <small style={{color: s.status==='Active'?'#00FF88':'#FFB800'}}> • {s.status}</small></span>
            </div>
          ))}
        </div>
      )}

      {active === "Agents" && (
        <div className="oj-table">
          {agents.map(a => (
            <div key={a.name} className="row">
              <span><strong>{a.name}</strong> <small style={{color:'#666'}}> • {a.region}</small></span>
              <span>{a.shops} shops <small style={{color: a.status==='On Field'?'#00FF88':'#888'}}> • {a.status}</small></span>
            </div>
          ))}
        </div>
      )}

      {active === "Revenue" && (
        <div className="oj-table">
          <div className="row"><span>Monthly Recurring (MRR)</span><strong>₦4.2M</strong></div>
          <div className="row"><span>Commission (5%)</span><strong>₦210K</strong></div>
          <div className="row"><span>Pro Plans (₦5k/mo)</span><strong>842 active</strong></div>
          <div className="row" style={{borderBottom:'none'}}><span>Enterprise</span><strong>12 accounts</strong></div>
        </div>
      )}

      {active === "Plans" && (
        <div className="oj-table">
          <div className="row"><span>Starter - Free</span><strong>382 shops</strong></div>
          <div className="row"><span>Pro - ₦5,000/mo</span><strong>842 shops • Most Popular</strong></div>
          <div className="row" style={{borderBottom:'none'}}><span>Enterprise - Custom</span><strong>60 shops</strong></div>
        </div>
      )}

      {active === "Markets" && (
        <div className="oj-table">
          <div className="row"><span>Bodija Market, Ibadan</span><strong>312 shops</strong></div>
          <div className="row"><span>Balogun Market, Lagos</span><strong>428 shops</strong></div>
          <div className="row"><span>Computer Village, Ikeja</span><strong>210 shops</strong></div>
          <div className="row" style={{borderBottom:'none'}}><span>Mile 12, Ketu</span><strong>334 shops</strong></div>
        </div>
      )}

      <div style={{marginTop:'24px', color:'#444', fontSize:'12px', textAlign:'center'}}>OjaTrack Super Admin V3.1 • No Tailwind • 100% CSS Bug Fixed</div>
    </div>
  )
}
