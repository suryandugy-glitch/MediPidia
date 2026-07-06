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

function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=> t.classList.remove('show'), 2200);
}

function applyTheme(){
  document.documentElement.setAttribute('data-theme', theme);
  const lbl = document.getElementById('theme-label');
  if(lbl) lbl.textContent = theme === 'dark' ? 'Dark mode' : 'Light mode';
}

function pushNotif(title){
  notifications.unshift({ title, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}

function renderNotif(){
  const list = document.getElementById('notif-list');
  const dot = document.getElementById('notif-dot');
  if(!notifications.length){
    list.innerHTML = `<div class="empty-illustration small">${EMPTY_ART}

function toggleNotif(e){
  e.stopPropagation();
  document.getElementById('notif-panel').classList.toggle('open');
}

function showSection(name){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-pill').forEach(p=>p.classList.remove('active'));
  const sec = document.getElementById('section-'+name);
  if(sec) sec.classList.add('active');
  const pill = document.querySelector('.nav-pill[data-section="'+name+'"]');
  if(pill) pill.classList.add('active');
  window.scrollTo({ top:0, behavior:'smooth' }

const activities = [];

function addQuickReminder(){
  document.getElementById('rem-name').focus();
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

function updateCartTag(){
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  document.getElementById('cart-count-tag').textContent = count;
}

const order = { id:'ORD-'+Date.now().toString().slice(-6), date:new Date().toLocaleDateString(), items, total };

function renderOrderHistory(){
  const wrap = document.getElementById('order-history');
  if(!orders.length){ wrap.innerHTML = `<div class="empty-illustration small">${EMPTY_ART}

function renderAppointments(){
  const wrap = document.getElementById('appt-list');
  if(!appointments.length){
    wrap.innerHTML = `<div class="empty-illustration"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="34" height="30" rx="4"/><path d="M7 18h34"/><path d="M15 6v8M33 6v8"/></svg><span>No appointments yet. Book one above.</span></div>`;
    return;
  }

function renderProfileView(){
  document.getElementById('hp-name').value = profile.name || '';
  document.getElementById('hp-age').value = profile.age || '';
  document.getElementById('hp-blood').value = profile.blood || '';
  document.getElementById('hp-weight').value = profile.weight || '';
  const view = document.getElementById('profile-saved-view');
  view.innerHTML = profile.name
    ? `<span class="pill-label">Saved</span> <span style="font-size:12.5px; color:var(--ink-soft); margin-left:6px;">${profile.name}

function removeAllergy(i){ allergies.splice(i,1); saveState(); renderChips(); }

function removeCondition(i){ conditions.splice(i,1); saveState(); renderChips(); }

function renderChips(){
  const aWrap = document.getElementById('allergy-chips');
  aWrap.innerHTML = allergies.length
    ? allergies.map((a,i)=>`<span class="chip">${a}

function renderMedHistory(){
  const wrap = document.getElementById('med-history-list');
  if(!medHistory.length){ wrap.innerHTML = `<div class="empty-illustration small">${ICON.pill}