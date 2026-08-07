import {useState} from 'react'
function App(){
const [tab,setTab]=useState('Dashboard')
return (
<div className="oj-app">
  <div className="oj-header">
    <div className="oj-logo-wrap">
      <div className="oj-logo-box">OJ</div>
      <div><div className="oj-brand">OjaTrack<br/>V4 PRO</div></div>
      <span className="oj-domain">super.ojatrack.com.ng</span>
    </div>
    <div className="oj-live"><span className="oj-dot"></span>LIVE</div>
  </div>

  <div className="oj-stats">
    <div className="oj-card"><div className="oj-card-label">Total Revenue</div><div className="oj-card-val">₦4.2M</div><div className="oj-card-sub">↑ 12.4% vs last month</div></div>
    <div className="oj-card"><div className="oj-card-label">Active Shops</div><div className="oj-card-val">1,284</div><div className="oj-card-sub">+86 new today</div></div>
    <div className="oj-card"><div className="oj-card-label">Field Agents</div><div className="oj-card-val">42</div><div className="oj-card-sub">3 on leave</div></div>
    <div className="oj-card"><div className="oj-card-label">Market Coverage</div><div className="oj-card-val">18 Markets</div><div className="oj-card-sub">Lagos + Oyo</div></div>
  </div>

  <div className="oj-tabs">
    {['Dashboard','Shops','Agents','Revenue','Plans','Markets'].map(t=>(
      <button key={t} className={`oj-tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>
    ))}
  </div>

  {tab==='Dashboard' && (
    <div className="oj-section">
      <div className="oj-row"><span>Today's Sales</span><b>₦342,000</b></div>
      <div className="oj-row"><span>Pending Verifications</span><b>12 shops</b></div>
      <div className="oj-row"><span>Active Subscriptions</span><b>1,102 / 1,284</b></div>
      <div className="oj-row"><span>System Health</span><b style={{color:'#00FF88'}}>● Operational</b></div>
    </div>
  )}
  {tab==='Shops' && (
    <div className="oj-section">
      <div className="oj-row"><div><b>Mama Gold Rice</b><br/><small style={{color:'#888'}}>Adebayo F. • Bodija</small></div><b>₦1.2M <span style={{color:'#00FF88',fontSize:'12px'}}>• Active</span></b></div>
      <div className="oj-row"><div><b>Lagos Fabrics Hub</b><br/><small style={{color:'#888'}}>Chioma O. • Balogun</small></div><b>₦890K <span style={{color:'#00FF88',fontSize:'12px'}}>• Active</span></b></div>
      <div className="oj-row"><div><b>TechPlug NG</b><br/><small style={{color:'#888'}}>Emeka J. • Computer Village</small></div><b>₦2.4M <span style={{color:'#00FF88',fontSize:'12px'}}>• Active</span></b></div>
      <div className="oj-row"><div><b>Fresh Farm Produce</b><br/><small style={{color:'#888'}}>Tolu A. • Mile 12</small></div><b>₦560K <span style={{color:'#f59e0b',fontSize:'12px'}}>• Pending</span></b></div>
    </div>
  )}
  {tab!=='Dashboard' && tab!=='Shops' && (
    <div className="oj-section"><div className="oj-row"><span>{tab} features loading...</span><span style={{color:'#00FF88'}}>V4 PRO</span></div></div>
  )}

  <div className="oj-footer">OjaTrack Super Admin V5 Ultimate • Black Forced • No White Bug • Built on Phone</div>
</div>
)
}
export default App
