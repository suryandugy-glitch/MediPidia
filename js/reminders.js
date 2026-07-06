function addReminder(){
  const name = document.getElementById('rem-name').value.trim();
  const time = document.getElementById('rem-time').value;
  if(!name){ toast('Enter a medicine name'); return; }

function renderReminders(){
  const wrap = document.getElementById('reminders-list');
  const tag = document.getElementById('rem-count-tag');
  const pending = reminders.filter(r=>!r.done).length;
  if(tag) tag.textContent = pending;
  if(!reminders.length){
    wrap.innerHTML = `<div class="card"><div class="empty-illustration"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="26" r="16"/><path d="M24 20v6l4 3"/><path d="M18 6h12"/></svg><span>No reminders yet. Add your first dose above.</span></div></div>`;
    return;
  }