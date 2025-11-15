// PAGE SWITCHING
const links=document.querySelectorAll('.link');
const pages=document.querySelectorAll('.page');
links.forEach(l=>{
 l.addEventListener('click',()=>{
  links.forEach(x=>x.classList.remove('active'));
  l.classList.add('active');
  const pg=l.getAttribute('data-page');
  pages.forEach(p=>{
   p.classList.remove('active');
   if(p.id===pg)p.classList.add('active');
  });
 });
});

// PROFILE FORM
function saveProfile(){
 const n=document.getElementById('name').value;
 const e=document.getElementById('email').value;
 alert('PROFILE UPDATED:\nNAME: '+n+'\nEMAIL: '+e);
}
