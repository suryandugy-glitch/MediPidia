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
    profile.name ? `Hello, ${profile.name.split(' ')[0]}

function saveVitals(){
  vitals = {
    bp: document.getElementById('i-bp').value.trim() || vitals.bp,
    sugar: document.getElementById('i-sugar').value.trim() || vitals.sugar,
    hr: document.getElementById('i-hr').value.trim() || vitals.hr,
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

function cancelAppt(id){
  appointments = appointments.filter(a=>a.id!==id);
  saveState(); renderAppointments(); renderDashboard();
  toast('Appointment cancelled');
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