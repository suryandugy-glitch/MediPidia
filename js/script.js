
/* ============================================================
   DATA
   ============================================================ */
const MEDICINES = [
  { id:"m1", name:"Paracip 650", generic:"Paracetamol 650mg", company:"Cipla", salt:"Paracetamol (650mg)", category:"Pain relief / Fever", price:28,
    description:"Used for mild to moderate pain and fever reduction.",
    substitutes:[ {name:"Dolo 650", company:"Micro Labs", price:30}, {name:"Calpol 650", company:"GSK", price:33}, {name:"Crocin 650", company:"GSK", price:29} ],
    genericAlt:{name:"Paracetamol 650mg (Generic)", price:9} },
  { id:"m2", name:"Azithral 500", generic:"Azithromycin 500mg", company:"Alembic", salt:"Azithromycin (500mg)", category:"Antibiotic", price:78,
    description:"Broad spectrum antibiotic for bacterial infections of the respiratory tract, skin and ear.",
    substitutes:[ {name:"Azee 500", company:"Cipla", price:82}, {name:"Zithrocin 500", company:"FDC", price:75}, {name:"Azithral-XL", company:"Alembic", price:120} ],
    genericAlt:{name:"Azithromycin 500mg (Generic)", price:31} },
  { id:"m3", name:"Metfor 500", generic:"Metformin 500mg", company:"Sun Pharma", salt:"Metformin Hydrochloride (500mg)", category:"Diabetes", price:35,
    description:"First-line oral medicine for managing blood sugar in type 2 diabetes.",
    substitutes:[ {name:"Glycomet 500", company:"USV", price:32}, {name:"Glyciphage 500", company:"Franco-Indian", price:34}, {name:"Obimet 500", company:"Emcure", price:36} ],
    genericAlt:{name:"Metformin 500mg (Generic)", price:14} },
  { id:"m4", name:"Atorva 10", generic:"Atorvastatin 10mg", company:"Zydus", salt:"Atorvastatin Calcium (10mg)", category:"Cholesterol", price:66,
    description:"Statin used to lower LDL cholesterol and reduce cardiovascular risk.",
    substitutes:[ {name:"Storvas 10", company:"Sun Pharma", price:70}, {name:"Atorlip 10", company:"Cipla", price:64}, {name:"Tonact 10", company:"Lupin", price:68} ],
    genericAlt:{name:"Atorvastatin 10mg (Generic)", price:22} },
  { id:"m5", name:"Pantocid 40", generic:"Pantoprazole 40mg", company:"Sun Pharma", salt:"Pantoprazole Sodium (40mg)", category:"Acidity / GERD", price:88,
    description:"Proton pump inhibitor for acid reflux, gastritis and ulcers.",
    substitutes:[ {name:"Pan 40", company:"Alkem", price:84}, {name:"Pantop 40", company:"Aristo", price:90}, {name:"Pantodac 40", company:"Zydus", price:86} ],
    genericAlt:{name:"Pantoprazole 40mg (Generic)", price:29} },
  { id:"m6", name:"Augmentin 625", generic:"Amoxicillin + Clavulanic Acid", company:"GSK", salt:"Amoxicillin (500mg) + Clavulanic Acid (125mg)", category:"Antibiotic", price:198,
    description:"Combination antibiotic for tougher bacterial infections resistant to plain amoxicillin.",
    substitutes:[ {name:"Clavam 625", company:"Alkem", price:170}, {name:"Moxikind-CV 625", company:"Mankind", price:165}, {name:"Fightox 625", company:"Alembic", price:160} ],
    genericAlt:{name:"Amoxicillin+Clavulanate 625mg (Generic)", price:68} },
  { id:"m7", name:"Telma 40", generic:"Telmisartan 40mg", company:"Glenmark", salt:"Telmisartan (40mg)", category:"Blood pressure", price:112,
    description:"Angiotensin receptor blocker (ARB) used to treat high blood pressure.",
    substitutes:[ {name:"Telista 40", company:"Mankind", price:105}, {name:"Cresar 40", company:"Torrent", price:108}, {name:"Telsartan 40", company:"IPCA", price:98} ],
    genericAlt:{name:"Telmisartan 40mg (Generic)", price:38} },
  { id:"m8", name:"Montair LC", generic:"Montelukast + Levocetirizine", company:"Cipla", salt:"Montelukast (10mg) + Levocetirizine (5mg)", category:"Allergy / Asthma", price:145,
    description:"Combination therapy for allergic rhinitis and asthma-related symptoms.",
    substitutes:[ {name:"Ozon-LC", company:"Alkem", price:130}, {name:"Levomont", company:"Mankind", price:125}, {name:"Montek LC", company:"Sun Pharma", price:138} ],
    genericAlt:{name:"Montelukast+Levocetirizine (Generic)", price:47} },
  { id:"m9", name:"Ecosprin 75", generic:"Aspirin 75mg", company:"USV", salt:"Aspirin (75mg)", category:"Cardiac / Blood thinner", price:18,
    description:"Low-dose aspirin used for cardiovascular protection and blood clot prevention.",
    substitutes:[ {name:"Delisprin 75", company:"Torrent", price:16}, {name:"Aspispan 75", company:"Panacea Biotec", price:15}, {name:"Loprin 75", company:"IPCA", price:17} ],
    genericAlt:{name:"Aspirin 75mg (Generic)", price:6} },
  { id:"m10", name:"Thyronorm 50", generic:"Levothyroxine 50mcg", company:"Abbott", salt:"Levothyroxine Sodium (50mcg)", category:"Thyroid", price:112,
    description:"Hormone replacement for underactive thyroid (hypothyroidism).",
    substitutes:[ {name:"Eltroxin 50", company:"GSK", price:108}, {name:"Thyrox 50", company:"Macleods", price:95}, {name:"Lethyrox 50", company:"Zydus", price:98} ],
    genericAlt:{name:"Levothyroxine 50mcg (Generic)", price:35} },
  { id:"m11", name:"Cetzine", generic:"Cetirizine 10mg", company:"GSK", salt:"Cetirizine Hydrochloride (10mg)", category:"Allergy", price:20,
    description:"Antihistamine for allergic reactions, hay fever and hives.",
    substitutes:[ {name:"Alerid", company:"Cipla", price:18}, {name:"Okacet", company:"Cipla", price:19}, {name:"Zyrtec", company:"Dr Reddy's", price:24} ],
    genericAlt:{name:"Cetirizine 10mg (Generic)", price:7} },
  { id:"m12", name:"Shelcal 500", generic:"Calcium Carbonate + Vitamin D3", company:"Torrent", salt:"Calcium Carbonate (500mg) + Vitamin D3 (250 IU)", category:"Supplement", price:135,
    description:"Calcium and vitamin D supplement for bone health.",
    substitutes:[ {name:"Calcimax D3", company:"Emcure", price:120}, {name:"Zerodol Cal", company:"IPCA", price:110}, {name:"Ostocalcium", company:"Franco-Indian", price:125} ],
    genericAlt:{name:"Calcium+D3 (Generic)", price:48} },
];
const DOCTORS = [
  { id:"d1", name:"Dr. Ananya Sen", spec:"General Physician", exp:"12 yrs", fee:299, rating:4.8, initial:"AS" },
  { id:"d2", name:"Dr. Rohan Kapoor", spec:"Cardiologist", exp:"18 yrs", fee:599, rating:4.9, initial:"RK" },
  { id:"d3", name:"Dr. Meera Iyer", spec:"Dermatologist", exp:"9 yrs", fee:399, rating:4.7, initial:"MI" },
  { id:"d4", name:"Dr. Farhan Ali", spec:"Pediatrician", exp:"14 yrs", fee:349, rating:4.8, initial:"FA" },
  { id:"d5", name:"Dr. Priya Nair", spec:"Endocrinologist", exp:"11 yrs", fee:499, rating:4.6, initial:"PN" },
  { id:"d6", name:"Dr. Vikram Rathi", spec:"Orthopedic", exp:"16 yrs", fee:449, rating:4.7, initial:"VR" },
];
const ICON = {
  pill: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="9.5" width="17" height="7" rx="3.5" transform="rotate(-35 12 13)"/><line x1="10.5" y1="7.5" x2="15" y2="18.5"/></svg>`,
  shield: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/></svg>`,
  droplet: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 7 6 11.5a6 6 0 0 1-12 0C6 10 12 3 12 3Z"/></svg>`,
  heart: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-9.5-9C.7 7.2 3 4 6.5 4 9 4 11 6 12 7.5 13 6 15 4 17.5 4 21 4 23.3 7.2 21.5 11 19 15.6 12 20 12 20Z"/></svg>`,
  flame: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.4-1.8-1-2.5.6 2-1 3-2 3-1.5 0-1.3-1.7-1.5-3C13.2 5.5 12 3 12 3Z"/></svg>`,
  wind: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5"/><path d="M3 13h15a2.5 2.5 0 1 1-2.5 2.5"/></svg>`,
  leaf: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c0 9-5 15-14 15H4v-2C4 9 10 4 20 4Z"/></svg>`,
  activity: `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2.5-8 4 16 2.5-8H21"/></svg>`,
};
const SPEC_ICON = {
  "General Physician": ICON.activity,
  "Cardiologist": ICON.heart,
  "Dermatologist": ICON.leaf,
  "Pediatrician": ICON.droplet,
  "Endocrinologist": ICON.droplet,
  "Orthopedic": ICON.shield,
};
function categoryIcon(category){
  const c = category.toLowerCase();
  if(c.includes('pain') || c.includes('fever')) return ICON.pill;
  if(c.includes('antibiotic')) return ICON.shield;
  if(c.includes('diabetes')) return ICON.droplet;
  if(c.includes('cholesterol') || c.includes('cardiac') || c.includes('blood pressure')) return ICON.heart;
  if(c.includes('acidity') || c.includes('gerd')) return ICON.flame;
  if(c.includes('allergy') || c.includes('asthma')) return ICON.wind;
  if(c.includes('thyroid')) return ICON.activity;
  if(c.includes('supplement')) return ICON.leaf;
  return ICON.pill;
}
const EMPTY_ART = `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="18" width="32" height="22" rx="4"/><path d="M8 26h32"/><path d="M17 18v-4a7 7 0 0 1 14 0v4"/></svg>`;
/* ============================================================
   STATE
   ============================================================ */
let cart = {};
let orders = [];
let appointments = [];
let profile = {};
let allergies = [];
let conditions = [];
let medHistory = [];
let reminders = [];
let vitals = { bp:"", sugar:"", hr:"" };
let notifications = [];
let theme = 'light';
const STORAGE_KEY = 'medipidia:state:v2';
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=> t.classList.remove('show'), 2200);
}
function loadState(){
  try{
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if(raw){
      const s = JSON.parse(raw);
      cart = s.cart || {};
      orders = s.orders || [];
      appointments = s.appointments || [];
      profile = s.profile || {};
      allergies = s.allergies || [];
      conditions = s.conditions || [];
      medHistory = s.medHistory || [];
      reminders = s.reminders || [];
      vitals = s.vitals || { bp:"", sugar:"", hr:"" };
      notifications = s.notifications || [];
      theme = s.theme || 'light';
    }
  }catch(e){ console.warn(e); }
  applyTheme();
  renderAll();
}
function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      cart, orders, appointments, profile, allergies, conditions, medHistory,
      reminders, vitals, notifications, theme
    }));
  }catch(e){ console.error(e); }
}
/* ============================================================
   THEME
   ============================================================ */
function applyTheme(){
  document.documentElement.setAttribute('data-theme', theme);
  const lbl = document.getElementById('theme-label');
  if(lbl) lbl.textContent = theme === 'dark' ? 'Dark mode' : 'Light mode';
}
function toggleTheme(){
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme(); saveState();
}
/* ============================================================
   NOTIFICATIONS
   ============================================================ */
function pushNotif(title){
  notifications.unshift({ title, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) });
  notifications = notifications.slice(0, 8);
  saveState(); renderNotif();
}
function renderNotif(){
  const list = document.getElementById('notif-list');
  const dot = document.getElementById('notif-dot');
  if(!notifications.length){
    list.innerHTML = `<div class="empty-illustration small">${EMPTY_ART}<span>You're all caught up.</span></div>`;
    dot.style.display = 'none';
    return;
  }
  dot.style.display = 'block';
  list.innerHTML = notifications.map(n =>
    `<div class="notif-item"><div class="n-title">${n.title}</div><div class="n-time">${n.time}</div></div>`
  ).join('');
}
function toggleNotif(e){
  e.stopPropagation();
  document.getElementById('notif-panel').classList.toggle('open');
}
document.addEventListener('click', (e)=>{
  const p = document.getElementById('notif-panel');
  if(p && !p.contains(e.target)) p.classList.remove('open');
});
/* ============================================================
   NAVIGATION
   ============================================================ */
function showSection(name){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-pill').forEach(p=>p.classList.remove('active'));
  const sec = document.getElementById('section-'+name);
  if(sec) sec.classList.add('active');
  const pill = document.querySelector('.nav-pill[data-section="'+name+'"]');
  if(pill) pill.classList.add('active');
  window.scrollTo({ top:0, behavior:'smooth' });
}
/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard(){
  document.getElementById('stat-meds').textContent = medHistory.length;
  document.getElementById('stat-orders').textContent = orders.length;
  document.getElementById('stat-appts').textContent = appointments.length;
  // wellness score: mix of profile completion + logged vitals + adherence
  let score = 0;
  if(profile.name) score += 20;
  if(profile.blood) score += 10;
  if(vitals.bp) score += 15;
  if(vitals.sugar) score += 15;
  if(vitals.hr) score += 10;
  const doneToday = reminders.filter(r=>r.done).length;
  if(reminders.length) score += Math.round((doneToday / reminders.length) * 30);
  document.getElementById('stat-score').textContent = score ? score + '/100' : '—';
  document.getElementById('greet-name').textContent =
    profile.name ? `Hello, ${profile.name.split(' ')[0]}` : 'Your health, at a glance';
  document.getElementById('v-bp').textContent = vitals.bp || '—';
  document.getElementById('v-sugar').textContent = vitals.sugar || '—';
  document.getElementById('v-hr').textContent = vitals.hr || '—';
  // adherence ring
  const pct = reminders.length ? Math.round((doneToday / reminders.length) * 100) : 0;
  const circ = 2 * Math.PI * 26;
  const ring = document.getElementById('ring-fg');
  ring.setAttribute('stroke-dasharray', circ);
  ring.setAttribute('stroke-dashoffset', circ - (circ * pct / 100));
  document.getElementById('ring-val').textContent = pct + '%';
  document.getElementById('ring-sub').textContent = reminders.length
    ? `${doneToday} of ${reminders.length} doses taken`
    : 'No reminders set yet';
  // recent activity
  const activities = [];
  orders.slice(0, 2).forEach(o => activities.push({ title:`Order ${o.id} placed`, meta:`₹${o.total} · ${o.date}` }));
  appointments.slice(0, 2).forEach(a => activities.push({ title:`${a.mode} with ${a.doctor}`, meta:`${a.date}, ${a.time}` }));
  const wrap = document.getElementById('recent-activity');
  if(!activities.length){
    wrap.innerHTML = `<div class="empty-illustration small">${EMPTY_ART}<span>No activity yet.</span></div>`;
  } else {
    wrap.innerHTML = activities.map(a =>
      `<div style="padding:10px 0; border-bottom:1px dashed var(--line-strong);">
        <div style="font-weight:600; font-size:13px; color:var(--ink);">${a.title}</div>
        <div style="font-size:11.5px; color:var(--ink-soft); margin-top:2px;">${a.meta}</div>
      </div>`
    ).join('');
  }
}
function saveVitals(){
  vitals = {
    bp: document.getElementById('i-bp').value.trim() || vitals.bp,
    sugar: document.getElementById('i-sugar').value.trim() || vitals.sugar,
    hr: document.getElementById('i-hr').value.trim() || vitals.hr,
  };
  document.getElementById('i-bp').value = '';
  document.getElementById('i-sugar').value = '';
  document.getElementById('i-hr').value = '';
  saveState(); renderDashboard();
  toast('Vitals logged');
  pushNotif('Vitals updated for today');
}
/* ============================================================
   REMINDERS
   ============================================================ */
function addReminder(){
  const name = document.getElementById('rem-name').value.trim();
  const time = document.getElementById('rem-time').value;
  if(!name){ toast('Enter a medicine name'); return; }
  reminders.push({ id:'r'+Date.now(), name, time, done:false });
  document.getElementById('rem-name').value = '';
  saveState(); renderReminders(); renderDashboard();
  toast('Reminder added');
  pushNotif(`Reminder set: ${name} at ${time}`);
}
function addQuickReminder(){
  document.getElementById('rem-name').focus();
}
function toggleReminder(id){
  const r = reminders.find(x=>x.id===id);
  if(!r) return;
  r.done = !r.done;
  saveState(); renderReminders(); renderDashboard();
  if(r.done) toast('Nice — dose logged');
}
function removeReminder(id){
  reminders = reminders.filter(x=>x.id!==id);
  saveState(); renderReminders(); renderDashboard();
}
function renderReminders(){
  const wrap = document.getElementById('reminders-list');
  const tag = document.getElementById('rem-count-tag');
  const pending = reminders.filter(r=>!r.done).length;
  if(tag) tag.textContent = pending;
  if(!reminders.length){
    wrap.innerHTML = `<div class="card"><div class="empty-illustration"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="26" r="16"/><path d="M24 20v6l4 3"/><path d="M18 6h12"/></svg><span>No reminders yet. Add your first dose above.</span></div></div>`;
    return;
  }
  const sorted = [...reminders].sort((a,b)=> a.time.localeCompare(b.time));
  wrap.innerHTML = sorted.map(r=>`
    <div class="reminder ${r.done?'done':''}">
      <div class="r-check ${r.done?'checked':''}" onclick="toggleReminder('${r.id}')"></div>
      <div class="r-body">
        <div class="r-name">${r.name}</div>
        <div class="r-time">${r.time}</div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="removeReminder('${r.id}')">Remove</button>
    </div>
  `).join('');
}
/* ============================================================
   MEDIPEDIA
   ============================================================ */
function renderMedipedia(){
  const q = (document.getElementById('medipedia-search').value || '').toLowerCase().trim();
  const grid = document.getElementById('medipedia-grid');
  const list = MEDICINES.filter(m =>
    !q || m.name.toLowerCase().includes(q) || m.salt.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q) || m.generic.toLowerCase().includes(q)
  );
  grid.innerHTML = list.map(m => `
    <div class="card hover med-tag" onclick="openMedDetail('${m.id}')">
      <span class="pill-label">${categoryIcon(m.category)}${m.category}</span>
      <div class="name" style="margin-top:8px;">${m.name}</div>
      <div class="salt">${m.salt}</div>
      <div class="price">₹${m.price}</div>
    </div>
  `).join('') || `<div class="empty-illustration">${EMPTY_ART}<span>No medicines match "${q}".</span></div>`;
}
function openMedDetail(id){
  const m = MEDICINES.find(x=>x.id===id);
  if(!m) return;
  const panel = document.getElementById('medipedia-detail');
  panel.innerHTML = `
    <div class="card detail-panel">
      <div class="detail-head">
        <div>
          <span class="pill-label">${categoryIcon(m.category)}${m.category}</span>
          <div class="detail-name" style="margin-top:8px;">${m.name}</div>
          <div class="detail-company">Manufactured by ${m.company}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:24px; font-weight:700; color:var(--amber-deep); font-family:'Fraunces',serif;">₹${m.price}</div>
          <div style="font-size:11.5px; color:var(--ink-soft);">MRP, strip of 10</div>
        </div>
      </div>
      <div class="comp-strip">℞ ${m.salt}</div>
      <p style="font-size:13.5px; color:var(--ink-soft); margin-top:-4px;">${m.description}</p>
      <div class="detail-grid">
        <div>
          <h4>Brand substitutes</h4>
          ${m.substitutes.map(s=>`
            <div class="sub-row">
              <span>${s.name} <span style="color:var(--ink-soft); font-weight:400;">— ${s.company}</span></span>
              <span class="comp-price">₹${s.price}</span>
            </div>`).join('')}
        </div>
        <div>
          <h4>Generic substitute</h4>
          <div class="sub-row">
            <span>${m.genericAlt.name}</span>
            <span class="comp-price">₹${m.genericAlt.price}</span>
          </div>
          <p style="font-size:12px; color:var(--ink-soft); margin-top:10px;">Generic versions contain the same salt composition at a lower price point.</p>
          <button class="btn btn-amber btn-sm" style="margin-top:10px;" onclick="addToCart('${m.id}'); showSection('pharmacy');">Order this medicine</button>
        </div>
      </div>
    </div>
  `;
}
/* ============================================================
   PHARMACY
   ============================================================ */
function renderPharmacy(){
  const q = (document.getElementById('pharmacy-search').value || '').toLowerCase().trim();
  const grid = document.getElementById('pharmacy-grid');
  const list = MEDICINES.filter(m => !q || m.name.toLowerCase().includes(q) || m.salt.toLowerCase().includes(q));
  grid.innerHTML = list.map(m => {
    const qty = cart[m.id] || 0;
    return `
    <div class="card hover rx-card">
      <div>
        <div class="name">${m.name}</div>
        <div class="meta">${m.salt}</div>
      </div>
      <div class="rx-foot">
        <span class="rx-price">₹${m.price}</span>
        ${qty === 0
          ? `<button class="btn btn-ghost btn-sm" onclick="addToCart('${m.id}')">Add</button>`
          : `<div class="qty-stepper">
               <button onclick="changeQty('${m.id}', -1)">−</button>
               <span class="mono">${qty}</span>
               <button onclick="changeQty('${m.id}', 1)">+</button>
             </div>`
        }
      </div>
    </div>`;
  }).join('') || `<div class="empty-illustration">${EMPTY_ART}<span>No medicines match "${q}".</span></div>`;
  renderCart(); renderOrderHistory();
}
function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveState(); renderPharmacy(); updateCartTag();
  toast('Added to cart');
}
function changeQty(id, delta){
  cart[id] = (cart[id] || 0) + delta;
  if(cart[id] <= 0) delete cart[id];
  saveState(); renderPharmacy(); updateCartTag();
}
function updateCartTag(){
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  document.getElementById('cart-count-tag').textContent = count;
}
function renderCart(){
  const wrap = document.getElementById('cart-items');
  const ids = Object.keys(cart);
  document.getElementById('cart-empty').style.display = ids.length ? 'none':'flex';
  document.getElementById('cart-total-row').style.display = ids.length ? 'flex':'none';
  let total = 0;
  wrap.innerHTML = ids.map(id=>{
    const m = MEDICINES.find(x=>x.id===id);
    const lineTotal = m.price * cart[id];
    total += lineTotal;
    return `<div class="cart-item"><span>${m.name} × ${cart[id]}</span><span class="mono">₹${lineTotal}</span></div>`;
  }).join('');
  document.getElementById('cart-total-amount').textContent = '₹' + total;
}
function placeOrder(){
  const ids = Object.keys(cart);
  if(!ids.length){ toast('Your cart is empty'); return; }
  let total = 0;
  const items = ids.map(id=>{
    const m = MEDICINES.find(x=>x.id===id);
    total += m.price * cart[id];
    return { name:m.name, qty:cart[id], price:m.price };
  });
  const order = { id:'ORD-'+Date.now().toString().slice(-6), date:new Date().toLocaleDateString(), items, total };
  orders.unshift(order);
  items.forEach(it=> medHistory.unshift({ name:it.name, note:`Ordered ×${it.qty} via Pharmacy`, date:order.date }) );
  cart = {};
  saveState();
  renderPharmacy(); renderMedHistory(); updateCartTag(); renderDashboard();
  toast('Order placed — ' + order.id);
  pushNotif(`Order ${order.id} confirmed`);
}
function renderOrderHistory(){
  const wrap = document.getElementById('order-history');
  if(!orders.length){ wrap.innerHTML = `<div class="empty-illustration small">${EMPTY_ART}<span>No orders yet.</span></div>`; return; }
  wrap.innerHTML = orders.slice(0,5).map(o=>`
    <div style="font-size:12.5px; padding:10px 0; border-bottom:1px dashed var(--line-strong);">
      <div style="display:flex; justify-content:space-between; font-weight:600;"><span>${o.id}</span><span class="mono">₹${o.total}</span></div>
      <div style="color:var(--ink-soft);">${o.items.map(i=>i.name+' ×'+i.qty).join(', ')} · ${o.date}</div>
    </div>
  `).join('');
}
/* ============================================================
   DOCTOR
   ============================================================ */
function renderDoctors(){
  const grid = document.getElementById('doctor-grid');
  grid.innerHTML = DOCTORS.map(d=>`
    <div class="card hover doc-card">
      <div class="doc-top">
        <div class="avatar">${d.initial}<span class="spec-badge">${SPEC_ICON[d.spec] || ICON.activity}</span></div>
        <div>
          <div class="doc-name">${d.name}</div>
          <div class="doc-spec">${d.spec}</div>
        </div>
      </div>
      <div class="doc-meta"><span>${d.exp} experience</span><span>★ ${d.rating}</span></div>
      <div class="doc-meta" style="margin-top:2px;"><span>Consult fee</span><span class="mono">₹${d.fee}</span></div>
      <div class="doc-actions">
        <button class="btn btn-ghost btn-sm" onclick="bookAppointment('${d.id}','visit')">Book visit</button>
        <button class="btn btn-amber btn-sm" onclick="bookAppointment('${d.id}','chat')">Chat / Video</button>
      </div>
    </div>
  `).join('');
}
function bookAppointment(id, mode){
  const d = DOCTORS.find(x=>x.id===id);
  const slot = new Date(Date.now() + 24*60*60*1000);
  const appt = {
    id:'APT-'+Date.now().toString().slice(-6),
    doctor:d.name, spec:d.spec, fee:d.fee,
    mode: mode === 'chat' ? 'Chat / Video consult' : 'In-clinic visit',
    date: slot.toLocaleDateString(),
    time: mode === 'chat' ? 'Available now' : '10:30 AM'
  };
  appointments.unshift(appt);
  saveState(); renderAppointments(); renderDashboard();
  toast((mode==='chat' ? 'Consult requested with ' : 'Appointment booked with ') + d.name);
  pushNotif(`${appt.mode} with ${d.name}`);
}
function renderAppointments(){
  const wrap = document.getElementById('appt-list');
  if(!appointments.length){
    wrap.innerHTML = `<div class="empty-illustration"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="34" height="30" rx="4"/><path d="M7 18h34"/><path d="M15 6v8M33 6v8"/></svg><span>No appointments yet. Book one above.</span></div>`;
    return;
  }
  wrap.innerHTML = appointments.map(a=>`
    <div class="card">
      <div>
        <div style="font-weight:600; font-size:14px;">${a.doctor} <span style="color:var(--ink-soft); font-weight:400;">· ${a.spec}</span></div>
        <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">${a.mode} · ${a.date}, ${a.time}</div>
      </div>
      <div style="text-align:right;">
        <div class="mono" style="font-weight:600;">₹${a.fee}</div>
        <button class="btn btn-ghost btn-sm" style="margin-top:6px;" onclick="cancelAppt('${a.id}')">Cancel</button>
      </div>
    </div>
  `).join('');
}
function cancelAppt(id){
  appointments = appointments.filter(a=>a.id!==id);
  saveState(); renderAppointments(); renderDashboard();
  toast('Appointment cancelled');
}
/* ============================================================
   HEALTH RECORD
   ============================================================ */
function saveProfile(){
  profile = {
    name: document.getElementById('hp-name').value.trim(),
    age: document.getElementById('hp-age').value.trim(),
    blood: document.getElementById('hp-blood').value,
    weight: document.getElementById('hp-weight').value.trim(),
  };
  saveState(); renderProfileView(); renderDashboard();
  toast('Profile saved');
}
function renderProfileView(){
  document.getElementById('hp-name').value = profile.name || '';
  document.getElementById('hp-age').value = profile.age || '';
  document.getElementById('hp-blood').value = profile.blood || '';
  document.getElementById('hp-weight').value = profile.weight || '';
  const view = document.getElementById('profile-saved-view');
  view.innerHTML = profile.name
    ? `<span class="pill-label">Saved</span> <span style="font-size:12.5px; color:var(--ink-soft); margin-left:6px;">${profile.name}, ${profile.age||'—'} yrs, ${profile.blood||'blood group —'}</span>`
    : '';
}
function addAllergy(){
  const input = document.getElementById('hp-allergy-input');
  const val = input.value.trim();
  if(!val) return;
  allergies.push(val); input.value = '';
  saveState(); renderChips();
}
function removeAllergy(i){ allergies.splice(i,1); saveState(); renderChips(); }
function addCondition(){
  const input = document.getElementById('hp-condition-input');
  const val = input.value.trim();
  if(!val) return;
  conditions.push(val); input.value = '';
  saveState(); renderChips();
}
function removeCondition(i){ conditions.splice(i,1); saveState(); renderChips(); }
function renderChips(){
  const aWrap = document.getElementById('allergy-chips');
  aWrap.innerHTML = allergies.length
    ? allergies.map((a,i)=>`<span class="chip">${a} <button onclick="removeAllergy(${i})">×</button></span>`).join('')
    : `<span style="font-size:12.5px; color:var(--ink-soft);">No allergies recorded.</span>`;
  const cWrap = document.getElementById('condition-chips');
  cWrap.innerHTML = conditions.length
    ? conditions.map((c,i)=>`<span class="chip neutral">${c} <button onclick="removeCondition(${i})">×</button></span>`).join('')
    : `<span style="font-size:12.5px; color:var(--ink-soft);">No conditions recorded.</span>`;
}
function addMedRecord(){
  const name = document.getElementById('hp-med-name').value.trim();
  const note = document.getElementById('hp-med-note').value.trim();
  if(!name) return;
  medHistory.unshift({ name, note: note || '—', date: new Date().toLocaleDateString() });
  document.getElementById('hp-med-name').value = '';
  document.getElementById('hp-med-note').value = '';
  saveState(); renderMedHistory(); renderDashboard();
}
function renderMedHistory(){
  const wrap = document.getElementById('med-history-list');
  if(!medHistory.length){ wrap.innerHTML = `<div class="empty-illustration small">${ICON.pill}<span>No medicine history yet.</span></div>`; return; }
  wrap.innerHTML = medHistory.map(m=>`
    <div class="med-history-row">
      <span><strong>${m.name}</strong> <span style="color:var(--ink-soft);">— ${m.note}</span></span>
      <span class="mono" style="color:var(--ink-soft);">${m.date}</span>
    </div>
  `).join('');
}
function renderAll(){
  renderMedipedia();
  renderPharmacy();
  renderDoctors();
  renderAppointments();
  renderProfileView();
  renderChips();
  renderMedHistory();
  renderReminders();
  renderNotif();
  renderDashboard();
  updateCartTag();
}
loadState();
