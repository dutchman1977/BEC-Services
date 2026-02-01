(function(){
  const yearEl = document.querySelector('[data-year]');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const fileInput = document.querySelector('input[type="file"][data-files]');
  const fileList  = document.querySelector('[data-file-list]');
  if(fileInput && fileList){
    fileInput.addEventListener('change', () => {
      const names = Array.from(fileInput.files || []).map(f => f.name);
      fileList.textContent = names.length ? names.join(', ') : 'No files selected';
    });
  }

  // Close other dropdowns when one opens; close on outside click or Escape
  const dropdowns = Array.from(document.querySelectorAll('details.dropdown'));
  if(dropdowns.length){
    dropdowns.forEach(d => {
      d.addEventListener('toggle', () => {
        if(d.open){
          dropdowns.forEach(o => { if(o !== d) o.removeAttribute('open'); });
        }
      });
    });
    document.addEventListener('click', (e) => {
      dropdowns.forEach(d => {
        if(!d.contains(e.target)) d.removeAttribute('open');
      });
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        dropdowns.forEach(d => d.removeAttribute('open'));
      }
    });
  }

})();
