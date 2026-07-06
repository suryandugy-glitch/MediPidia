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
    return `<div class="cart-item"><span>${m.name}

function placeOrder(){
  const ids = Object.keys(cart);
  if(!ids.length){ toast('Your cart is empty'); return; }