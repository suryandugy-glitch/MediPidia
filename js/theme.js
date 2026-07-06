function toggleTheme(){
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme(); saveState();
}