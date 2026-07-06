function renderDoctors(){
  const grid = document.getElementById('doctor-grid');
  grid.innerHTML = DOCTORS.map(d=>`
    <div class="card hover doc-card">
      <div class="doc-top">
        <div class="avatar">${d.initial}

function bookAppointment(id, mode){
  const d = DOCTORS.find(x=>x.id===id);
  const slot = new Date(Date.now() + 24*60*60*1000);
  const appt = {
    id:'APT-'+Date.now().toString().slice(-6),
    doctor:d.name, spec:d.spec, fee:d.fee,
    mode: mode === 'chat' ? 'Chat / Video consult' : 'In-clinic visit',
    date: slot.toLocaleDateString(),
    time: mode === 'chat' ? 'Available now' : '10:30 AM'
  }