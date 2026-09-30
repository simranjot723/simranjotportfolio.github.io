const menuBtn=document.getElementById("menuBtn");
const mobileMenu=document.getElementById("mobileMenu");
menuBtn?.addEventListener("click",()=>{
  const open=mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",open);
});
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));

const theme=document.getElementById("themeToggle");
theme?.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  theme.textContent=document.body.classList.contains("light")?"☾":"☼";
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");theme.textContent="☾";}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

const email="simranjotdevops11@gmail.com";
const toast=document.getElementById("toast");
function copyEmail(){
 navigator.clipboard?.writeText(email).then(()=>{
   toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800);
 }).catch(()=>{window.location.href="mailto:"+email});
}
document.getElementById("copyEmail")?.addEventListener("click",copyEmail);
document.getElementById("copyEmail2")?.addEventListener("click",copyEmail);

const filters=document.querySelectorAll(".filter");
const projects=document.querySelectorAll(".project-card");
const count=document.getElementById("projectCount");
filters.forEach(btn=>btn.addEventListener("click",()=>{
 filters.forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;let shown=0;
 projects.forEach(card=>{
   const show=f==="all"||card.dataset.category.split(" ").includes(f);
   card.style.display=show?"flex":"none";if(show)shown++;
 });
 count.textContent=shown+" project"+(shown===1?"":"s");
}));

const data={
 fuzEE:{
  k:"FULL-STACK • E-COMMERCE • AI/ML",title:"FUZEE",
  d:"AI-powered apparel e-commerce platform for clothing and fashion products. The project brings together authentication, product discovery, transactional cart flows, inventory, relational data and machine-learning-oriented recommendations.",
  tech:["Python","Django","Flask","PostgreSQL","JavaScript","AI/ML"],
  note:"Portfolio note: add the actual repository and live demo links once those deployments are available."
 },
 sewa:{
  k:"SOCIAL IMPACT • RESOURCE MATCHING",title:"SEWA-360",
  d:"Community resource-sharing platform designed to connect people with free or low-cost services and resources, with resource matching, location-aware prioritization, verification, alerts and impact tracking.",
  tech:["Python","FastAPI","Flask","PostgreSQL","REST APIs","JavaScript"],
  note:"Portfolio note: the platform should link to the real GitHub repository and a deployed demo when available."
 },
 p2conv:{
  k:"REAL-TIME WEB • PRIVATE COMMUNICATION",title:"P2Conv",
  d:"Person-to-person conversational application focused on private communication, using bidirectional WebSocket communication, session architecture and persistent relational conversation data.",
  tech:["Python","WebSockets","JavaScript","SQL","HTML/CSS"],
  note:"Security claims should match the implemented system. Add encryption details only when they are actually implemented and tested."
 },
 cricket:{
  k:"MACHINE LEARNING • DATA SCIENCE",title:"Cricket Score & Match Outcome Prediction",
  d:"End-to-end predictive modeling workflow using historical sports data, preprocessing, exploratory analysis, feature extraction and model evaluation.",
  tech:["Python","Pandas","NumPy","Scikit-Learn","Matplotlib"],
  note:"Add the verified evaluation metrics and model comparison when they are available."
 },
 billing:{
  k:"WEB APPLICATION • DATABASE",title:"Smart Electricity Billing",
  d:"Flask and MySQL web application for electricity records and billing workflows, with data-processing and decision-support concepts for consumption analysis.",
  tech:["Python","Flask","MySQL","JavaScript"],
  note:"A live demo and repository link will make this project substantially stronger for recruiters."
 }
};
const modal=document.getElementById("projectModal");
const closeModal=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")};
document.querySelectorAll(".case-btn").forEach(btn=>btn.addEventListener("click",()=>{
 const d=data[btn.dataset.project];document.getElementById("modalKicker").textContent=d.k;
 document.getElementById("modalTitle").textContent=d.title;document.getElementById("modalDescription").textContent=d.d;
 document.getElementById("modalTech").innerHTML=d.tech.map(x=>`<span>${x}</span>`).join(" · ");
 document.getElementById("modalNote").textContent=d.note;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
}));
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target.dataset.close)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.getElementById("year").textContent=new Date().getFullYear();
