function loadState(){
  try{
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if(raw){
      const s = JSON.parse(raw);
      cart = s.cart || {}

function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      cart, orders, appointments, profile, allergies, conditions, medHistory,
      reminders, vitals, notifications, theme
    }