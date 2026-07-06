function saveProfile(){
  profile = {
    name: document.getElementById('hp-name').value.trim(),
    age: document.getElementById('hp-age').value.trim(),
    blood: document.getElementById('hp-blood').value,
    weight: document.getElementById('hp-weight').value.trim(),
  }

function addAllergy(){
  const input = document.getElementById('hp-allergy-input');
  const val = input.value.trim();
  if(!val) return;
  allergies.push(val); input.value = '';
  saveState(); renderChips();
}

function addCondition(){
  const input = document.getElementById('hp-condition-input');
  const val = input.value.trim();
  if(!val) return;
  conditions.push(val); input.value = '';
  saveState(); renderChips();
}

function addMedRecord(){
  const name = document.getElementById('hp-med-name').value.trim();
  const note = document.getElementById('hp-med-note').value.trim();
  if(!name) return;
  medHistory.unshift({ name, note: note || '—', date: new Date().toLocaleDateString() }