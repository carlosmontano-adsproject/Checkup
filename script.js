// =====================================================
// ⚠️  PEGA AQUÍ TU URL DE GOOGLE APPS SCRIPT  ⚠️
// =====================================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw9V0kE2RJ-g5m-sVZQRinl7iZckJcO7gydxklc94wm11UvS7v9VN0IFyGHVkTJADfHwA/exec";
// =====================================================

const CATS={fiscal:{name:"Cumplimiento Fiscal y Control Interno",icon:"🏛️"},estrategia:{name:"Estrategia y Optimización Fiscal",icon:"📊"},legal:{name:"Legal y Contratos",icon:"⚖️"},patrimonio:{name:"Sucesión y Protección Patrimonial",icon:"🛡️"},laboral:{name:"Seguridad Social y Laboral",icon:"👥"},gestion:{name:"Gestión y Servicios",icon:"⚙️"}};
const QS=[
{id:1,cat:"fiscal",short:"Control interno de proveedores",text:"¿En tu proceso de control interno para contratar proveedores y evitar contingencias con el SAT, tienes y conservas en todos los casos los elementos mínimos de ese proveedor: acta constitutiva, constancia de situación fiscal, INE del representante legal, constancia de activos, personal e infraestructura, constancia de pago de contribuciones y cuotas del IMSS?"},
{id:2,cat:"fiscal",short:"Expedientes administrativos",text:"¿En los expedientes administrativos de proveedores, tienen y conservan: solicitud de cotización, minutas de negociación, contratos certificados, elementos por los que conoció al proveedor, entregables del servicio y acta de asamblea con elementos objetivos de expectativa razonable de obtener ingresos?"},
{id:3,cat:"fiscal",short:"Préstamos e inyecciones de capital",text:"En los últimos 5 años, ¿se registraron contablemente los préstamos o inyección de dinero entre socios y empresa, con contratos certificados ante notario, estados de cuenta bancarios de ambas partes, y se verifica el cumplimiento estricto de las cláusulas del contrato?"},
{id:4,cat:"fiscal",short:"Conciliación de depósitos bancarios",text:"¿Qué controles tienen implementados para validar mensualmente que todo el dinero que entra en la cuenta bancaria (empresarial o personal) está facturado o tiene una razón documentada con contratos certificados y soporte?"},
{id:5,cat:"fiscal",short:"Beneficiario controlador",text:'¿Tienen sus expedientes, manuales y avisos de "beneficiario controlador" ante el SAT completos y actualizados, considerando que el incumplimiento implica una multa mínima de $500,000?'},
{id:6,cat:"fiscal",short:"Domicilio fiscal",text:'¿Qué tan actualizado y verificado está su domicilio fiscal? ¿Verifican constantemente que su constancia de situación fiscal esté como "localizado" y que las características del domicilio coincidan con las establecidas en el Código Fiscal?'},
{id:7,cat:"fiscal",short:"Operaciones entre empresas del grupo",text:"Si tienen varias empresas que facturan entre ellas, ¿en qué nivel tienen implementado sistemática y mensualmente la evidencia del cumplimiento de requisitos documentales (cotizaciones, contratos, entregables, estudio de precios de mercado)?"},
{id:8,cat:"estrategia",short:"Claridad sobre carga fiscal",text:"¿Qué tan claro estás sobre tu carga fiscal y estrategias legales para optimizarla sin riesgos?"},
{id:9,cat:"estrategia",short:"Discrepancia fiscal personal",text:"¿Qué tan implementada tienes alguna estrategia que permita blindar fiscalmente los gastos personales de socios y familiares (tarjetas de crédito, compras en tiendas departamentales, depósitos en efectivo) para evitar discrepancia fiscal?"},
{id:10,cat:"legal",short:"Contratos con clientes y proveedores",text:"¿Se tienen contratos modelo, evidencia de contratación, entregables y anexos con todos los clientes y proveedores? ¿Qué tan completos son tus contratos para prevenir conflictos e incumplimientos?"},
{id:11,cat:"legal",short:"Documentación corporativa",text:"¿Qué tan organizada y completa está tu documentación corporativa (digital y físico) respecto de todas tus actuaciones incluyendo actas de asamblea anuales, aportaciones de socios y decisiones corporativas de los últimos 5 años?"},
{id:12,cat:"patrimonio",short:"Plan de sucesión",text:"Un 82% de las empresas que pasan a la siguiente generación se extinguen por no tener un plan de sucesión. ¿Qué tan formalizado está su plan de sucesión?"},
{id:13,cat:"patrimonio",short:"Plan patrimonial",text:"La prevención en eventualidades (divorcio, muerte, adeudos fiscales, y otros contratiempos) es un blindaje esencial: ¿Qué plan patrimonial tienen y qué tan seguro te sientes ante ello?"},
{id:14,cat:"laboral",short:"Coincidencia SAT / IMSS",text:"¿Qué tanto coincide tu objeto social, actividad ante SAT/IMSS, salarios pagados y tus operaciones reales, considerando que las diferencias son la primera causa de auditorías del IMSS?"},
{id:15,cat:"laboral",short:"Inscripción y cuotas IMSS",text:"¿El 100% de tus trabajadores están inscritos ante el IMSS y pagas el 100% de cuotas obrero-patronales correspondientes?"},
{id:16,cat:"laboral",short:"Cumplimiento REPSE",text:"¿Qué tan bien cumples con la normatividad REPSE si subcontratas servicios especializados? ¿Estás seguro de si estás o no sujeto a esta obligación y las consecuencias de su incumplimiento?"},
{id:17,cat:"gestion",short:"Satisfacción con servicios administrativos",text:"¿Qué tan satisfecho te sientes actualmente con tus servicios internos-externos de áreas contable-fiscal-financiera-nóminas-administración, frente a tu crecimiento? ¿Te sientes rebasado o ves que esto conllevará un riesgo?"},
{id:18,cat:"estrategia",short:"Solidez de estrategia fiscal",text:"De tener implementada alguna estrategia fiscal para eficientizar el pago de impuestos, ¿qué tan sólida sientes tu estrategia? ¿Qué tan implementado tienes tu plan de acción para mejorar esa situación?"},
{id:19,cat:"patrimonio",short:"Protección patrimonial del socio",text:"¿Qué tan protegido te sientes como socio, patrimonialmente, en caso de que ocurra algún problema con la empresa?"},
{id:20,cat:"estrategia",short:"Justicia en pago de impuestos",text:"¿Sientes que de acuerdo a tus condiciones de negocio, pagas lo justo de impuestos y has implementado algo al respecto?"}
];
const OPTS=[{v:1,label:"Nada implementado",cls:"c-red"},{v:2,label:"Muy débil / informal",cls:"c-red"},{v:3,label:"Parcial / en proceso",cls:"c-orange"},{v:4,label:"Sólido, áreas por afinar",cls:"c-green"},{v:5,label:"Totalmente implementado",cls:"c-green"}];
const CM={red:"#e2231a",orange:"#F59E0B",green:"#16A34A",gold:"#D97706"};
const TOTAL_Q=QS.length;

// Mensajes motivadores según el avance (sin revelar el total de preguntas)
function progressMessage(answered){
  const p=answered/TOTAL_Q;
  if(answered===0)return"¡Comencemos! 💪";
  if(p<0.25)return"¡Buen comienzo! 🚀";
  if(p<0.5)return"¡Vas muy bien! 👏";
  if(p<0.75)return"¡Más de la mitad! 🔥";
  if(p<1)return"¡Ya casi terminas! 🏁";
  return"¡Último paso! 🎉";
}

function getLevel(s){
if(s<=40)return{level:"CRITICO",color:CM.red,emoji:"🔴",label:"CRÍTICO",msg:"Tu empresa enfrenta riesgos significativos que requieren atención inmediata. Es fundamental actuar ahora para proteger tu patrimonio y operación.",cta:"Además de las áreas evaluadas, existen aspectos como planeación financiera, comercio exterior, protección de datos y gobierno corporativo que también podrían representar un riesgo. Un especialista de Auren puede hacer un diagnóstico integral."};
if(s<=60)return{level:"EN RIESGO",color:CM.orange,emoji:"🟠",label:"EN RIESGO",msg:"Existen áreas importantes de vulnerabilidad que podrían generar problemas a corto plazo si no se atienden.",cta:"Este check-up cubre áreas clave, pero tu empresa puede tener necesidades en temas como comercio exterior, protección de datos, propiedad intelectual o planeación financiera. Nuestros especialistas pueden ampliar el diagnóstico."};
if(s<=75)return{level:"PARCIAL",color:"#CA8A04",emoji:"🟡",label:"PARCIAL",msg:"Tu empresa tiene bases, pero hay oportunidades claras de mejora y fortalecimiento en áreas clave.",cta:"Hay áreas empresariales como gobierno corporativo, gestión de riesgos, cumplimiento regulatorio sectorial y planeación financiera que no están cubiertas en este diagnóstico. Un especialista puede evaluarlas contigo."};
if(s<=90)return{level:"SOLIDO",color:CM.green,emoji:"🟢",label:"SÓLIDO",msg:"Buen nivel de implementación. Con algunos ajustes estratégicos puedes alcanzar la excelencia.",cta:"¡Buen nivel! Pero existen áreas que este check-up no cubre: comercio exterior, propiedad intelectual, protección de datos, entre otras. Un especialista de Auren puede revisar esos frentes contigo."};
return{level:"EXCELENTE",color:CM.gold,emoji:"🌟",label:"EXCELENTE",msg:"",cta:"Impresionante gestión en las áreas evaluadas. Sin embargo, existen temas como comercio exterior, protección de datos, gobierno corporativo y nuevas regulaciones 2026 que podrían requerir atención. Un especialista puede confirmarlo contigo."};
}

let formData={},answers={},currentQ=0,leadId='',quizCompletado=false;

// ===== Tracking Meta Pixel (seguro si fbq aún no cargó) =====
function fbqt(){ if(window.fbq){ try{ fbq.apply(null,arguments) }catch(e){} } }

// Logos
function injectLogo(id,cls){const t=document.getElementById('tpl-logo');const s=t.content.querySelector('svg').cloneNode(true);s.classList.add(cls);document.getElementById(id).appendChild(s)}
injectLogo('logo-welcome','logo-main');injectLogo('logo-quiz','logo-sm');injectLogo('logo-gate','logo-main');

function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById('screen-'+id).classList.add('active');window.scrollTo(0,0)}

// ===== Resaltado que sigue al cursor sobre botones y opciones =====
(function(){
  var glow=document.getElementById('cursor-glow');
  if(!glow)return;
  var INTERACTIVE='.btn, .opt, .feat, .green-tag';
  document.addEventListener('pointermove',function(e){
    var el=e.target.closest(INTERACTIVE);
    if(el){
      var r=el.getBoundingClientRect();
      el.style.setProperty('--mx',(e.clientX-r.left)+'px');
      el.style.setProperty('--my',(e.clientY-r.top)+'px');
      glow.style.opacity='1';
      glow.style.transform='translate('+(e.clientX-glow.offsetWidth/2)+'px,'+(e.clientY-glow.offsetHeight/2)+'px)';
    }else{
      glow.style.opacity='0';
    }
  },{passive:true});
  document.addEventListener('pointerleave',function(){glow.style.opacity='0'});
})();

// ===== ENVIAR A GOOGLE SHEETS VÍA FORMULARIO OCULTO =====
function sendToGoogleSheets(data){
  if(!GOOGLE_SCRIPT_URL||GOOGLE_SCRIPT_URL==='PEGAR_TU_URL_AQUI'){
    console.warn('⚠️ Configura GOOGLE_SCRIPT_URL con tu URL de Apps Script');
    return;
  }
  var form=document.createElement('form');
  form.method='POST';
  form.action=GOOGLE_SCRIPT_URL;
  form.target='gsheet-iframe';
  Object.keys(data).forEach(function(key){
    var input=document.createElement('input');
    input.type='hidden';input.name=key;input.value=(data[key]===undefined||data[key]===null)?'':String(data[key]);
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  setTimeout(function(){document.body.removeChild(form)},1000);
}

// ===== GUARDAR LEAD APENAS DEJA SU NOMBRE (Solo Lead / Incompleto) =====
function guardarLeadInicial(){
  sendToGoogleSheets({
    id:leadId,
    timestamp:new Date().toISOString(),
    fecha:new Date().toLocaleDateString('es-MX'),
    nombre:formData.nombre,empresa:'',email:'',telefono:'',cargo:'',
    estado:'Incompleto',
    tipo:'Solo Lead',
    preguntasRespondidas:0
  });
}

// Payload con el avance parcial del quiz (hasta dónde llegó)
function payloadParcial(){
  var d={
    id:leadId,
    timestamp:new Date().toISOString(),
    fecha:new Date().toLocaleDateString('es-MX'),
    nombre:formData.nombre,empresa:formData.empresa||'',email:formData.email||'',
    telefono:formData.telefono||'',cargo:formData.cargo||'',
    estado:'Incompleto',
    tipo:'Solo Lead',
    preguntasRespondidas:Object.keys(answers).length
  };
  for(var i=0;i<TOTAL_Q;i++){d['p'+(i+1)]=answers[i]||''}
  return d;
}

// Envío confiable al cerrar o cambiar de pestaña (no bloquea la salida)
function enviarBeacon(data){
  if(!GOOGLE_SCRIPT_URL||GOOGLE_SCRIPT_URL==='PEGAR_TU_URL_AQUI')return;
  try{
    var fd=new FormData();
    Object.keys(data).forEach(function(k){
      fd.append(k,(data[k]===undefined||data[k]===null)?'':String(data[k]));
    });
    navigator.sendBeacon(GOOGLE_SCRIPT_URL,fd);
  }catch(e){}
}

// Si abandona sin terminar, guarda hasta dónde llegó
document.addEventListener('visibilitychange',function(){
  if(document.visibilityState==='hidden' && leadId && !quizCompletado){
    var enQuiz=document.getElementById('screen-quiz').classList.contains('active');
    var enGate=document.getElementById('screen-gate').classList.contains('active');
    if(enQuiz||enGate) enviarBeacon(payloadParcial());
  }
});

// ===== WELCOME: solo pide el nombre =====
document.getElementById('welcomeForm').addEventListener('submit',function(e){
  e.preventDefault();const f=this;const input=f.querySelector('[name="nombre"]');
  const ok=input.value.trim().length>0;
  document.getElementById('f-nombre').classList.toggle('has-error',!ok);
  input.classList.toggle('err',!ok);
  if(!ok)return;
  formData={nombre:f.nombre.value.trim(),empresa:'',email:'',telefono:'',cargo:''};
  leadId='L'+Date.now()+'-'+Math.random().toString(36).substr(2,6);
  quizCompletado=false;answers={};currentQ=0;
  guardarLeadInicial();
  fbqt('trackCustom','CheckUpInicio',{content_name:'CheckUp Empresarial'});
  document.getElementById('quiz-greet').textContent='Hola, '+formData.nombre.split(' ')[0]+' 👋';
  renderQuestion();showScreen('quiz');
});

// ===== QUIZ =====
function renderQuestion(){
  const q=QS[currentQ],cat=CATS[q.cat];
  document.getElementById('qCatBadge').innerHTML=cat.icon+' <span style="font-weight:600;color:var(--red)">'+cat.name+'</span>';
  document.getElementById('qText').textContent=q.text;
  const cont=document.getElementById('optionsContainer');cont.innerHTML='';
  OPTS.forEach((o,idx)=>{
    const btn=document.createElement('button');
    btn.className='opt opt-in'+(answers[currentQ]===o.v?' sel '+o.cls:'');
    btn.style.animationDelay=(idx*45)+'ms';
    btn.innerHTML='<div class="num">'+o.v+'</div><span>'+o.label+'</span><span class="check">✓</span>';
    btn.onclick=()=>selectAnswer(o.v,o.cls);
    cont.appendChild(btn);
  });
  updateProgress();updateNav();
  document.getElementById('btnPrev').style.opacity=currentQ===0?'0.35':'1';
  document.getElementById('btnPrev').style.pointerEvents=currentQ===0?'none':'auto';
}
function selectAnswer(v,cls){
  answers[currentQ]=v;
  document.querySelectorAll('.opt').forEach((b,i)=>{b.className='opt'+(OPTS[i].v===v?' sel '+cls:'')});
  updateProgress();
  fbqt('trackCustom','CheckUpPregunta',{paso:currentQ+1});
  if(currentQ<TOTAL_Q-1){
    const c=document.getElementById('questionCard');
    setTimeout(()=>{c.classList.add('slide-out-next');setTimeout(()=>{currentQ++;renderQuestion();c.classList.remove('slide-out-next')},200)},260);
  } else {
    updateNav();
  }
}
function goBack(){if(currentQ<=0)return;const c=document.getElementById('questionCard');c.classList.add('slide-out-prev');setTimeout(()=>{currentQ--;renderQuestion();c.classList.remove('slide-out-prev')},200)}
function updateProgress(){
  const answered=Object.keys(answers).length;
  const p=Math.round((answered/TOTAL_Q)*100);
  document.getElementById('progressBar').style.width=p+'%';
  document.getElementById('progressMsg').textContent=progressMessage(answered);
  document.getElementById('progressPct').textContent=p+'%';
}
function updateNav(){
  const answered=Object.keys(answers).length;
  const ready=currentQ===TOTAL_Q-1 && answered===TOTAL_Q;
  document.getElementById('btnFinish').style.display=ready?'inline-flex':'none';
  document.getElementById('finishHint').style.display=(currentQ===TOTAL_Q-1 && !ready)?'inline':'none';
}

// ===== GATE: al terminar, pide datos para desbloquear el resultado =====
function goToGate(){
  document.getElementById('gate-title').textContent='¡Tu diagnóstico está listo, '+formData.nombre.split(' ')[0]+'!';
  fbqt('trackCustom','CheckUpFormulario',{content_name:'CheckUp Empresarial'});
  showScreen('gate');
}

document.getElementById('gateForm').addEventListener('submit',function(e){
  e.preventDefault();let valid=true;const f=this;
  ['email','telefono','empresa'].forEach(k=>{
    const field=document.getElementById('f-'+k),input=f.querySelector('[name="'+k+'"]');let ok=true;
    if(k==='email')ok=/\S+@\S+\.\S+/.test(input.value.trim());
    else if(k==='telefono')ok=input.value.replace(/\D/g,'').length>=10;
    else ok=input.value.trim().length>0;
    field.classList.toggle('has-error',!ok);input.classList.toggle('err',!ok);if(!ok)valid=false;
  });
  if(!valid)return;
  formData.email=f.email.value.trim();
  formData.telefono=f.telefono.value.trim();
  formData.empresa=f.empresa.value.trim();
  formData.cargo=f.cargo.value.trim();
  fbqt('track','Lead',{content_name:'CheckUp Empresarial',content_category:'Autodiagnostico'});
  finishQuiz();
});

// ===== RESULTADOS =====
function finishQuiz(){
  quizCompletado=true;
  const total=Object.values(answers).reduce((a,b)=>a+b,0);
  const info=getLevel(total);
  const reds=QS.filter((_,i)=>answers[i]<=2);
  const yellows=QS.filter((_,i)=>answers[i]===3);
  const greens=QS.filter((_,i)=>answers[i]>=4);
  const isExc=total>=91;
  const pct=Math.round((total/100)*100);

  // ===== ENVIAR A GOOGLE SHEETS (lead completo) =====
  sendToGoogleSheets({
    id:leadId,
    timestamp:new Date().toISOString(),
    fecha:new Date().toLocaleDateString('es-MX'),
    estado:'Completo',
    tipo:'Lead Completo',
    preguntasRespondidas:Object.keys(answers).length,
    nombre:formData.nombre,empresa:formData.empresa,email:formData.email,telefono:formData.telefono,cargo:formData.cargo,
    p1:answers[0]||'',p2:answers[1]||'',p3:answers[2]||'',p4:answers[3]||'',p5:answers[4]||'',
    p6:answers[5]||'',p7:answers[6]||'',p8:answers[7]||'',p9:answers[8]||'',p10:answers[9]||'',
    p11:answers[10]||'',p12:answers[11]||'',p13:answers[12]||'',p14:answers[13]||'',p15:answers[14]||'',
    p16:answers[15]||'',p17:answers[16]||'',p18:answers[17]||'',p19:answers[18]||'',p20:answers[19]||'',
    scoreTotal:total,nivel:info.level,
    alertasRojas:reds.map(q=>'P'+q.id+': '+q.short).join('; '),
    alertasAmarillas:yellows.map(q=>'P'+q.id+': '+q.short).join('; ')
  });
  fbqt('trackCustom','CheckUpCompletado',{content_name:'CheckUp Empresarial',score:total,nivel:info.level});

  const catScores=Object.entries(CATS).map(([k,cat])=>{const qs=QS.filter(q=>q.cat===k);const avg=qs.reduce((s,q)=>s+(answers[QS.indexOf(q)]||0),0)/qs.length;return{...cat,key:k,avg:Math.round(avg*10)/10,pct:Math.round((avg/5)*100)}});
  const r=72,circ=2*Math.PI*r,dash=(pct/100)*circ,gc=info.color;
  const logoHTML=document.getElementById('tpl-logo').content.querySelector('svg').outerHTML.replace('<svg ','<svg class="logo-sm" ');

  let h=`<div style="text-align:center;margin-bottom:18px">${logoHTML}
    <h1 style="font-size:24px;font-weight:800;margin:10px 0 4px">Resultados de tu Check-Up Empresarial</h1>
    <p style="color:var(--text-l);font-size:14px">${formData.empresa} · ${formData.nombre}</p></div>`;
  h+=`<div class="card" style="text-align:center;margin-bottom:14px"><div class="score-top">
    <div class="gauge-wrap"><svg viewBox="0 0 160 160"><circle cx="80" cy="80" r="${r}" fill="none" stroke="#F3F4F6" stroke-width="20"/><circle cx="80" cy="80" r="${r}" fill="none" stroke="${gc}" stroke-width="20" stroke-dasharray="${dash} ${circ}" stroke-linecap="round" transform="rotate(-90 80 80)" style="transition:stroke-dasharray 1.5s ease"/></svg>
    <div class="gauge-center"><div class="gauge-score" style="color:${gc}" id="scoreAnim">0</div><div class="gauge-label">de 100</div></div></div>
    <div class="score-info"><div class="level-badge" style="background:${gc}12;border:1.5px solid ${gc}44;color:${gc}">${info.emoji} ${info.label}</div>`;
  h+=isExc?`<p class="score-msg">¡Felicidades! Tu empresa muestra un nivel sobresaliente. Sin embargo, en 2026 han entrado en vigor <strong style="color:var(--red)">nuevas regulaciones y reformas</strong> que podrían impactar incluso a las empresas mejor preparadas.</p>`:`<p class="score-msg">${info.msg}</p>`;
  h+=`</div></div>`;
  if(isExc)h+=`<div class="alert-box" style="background:#FFFBEB;border:1.5px solid #FDE68A"><p class="alert-title" style="color:${CM.gold}">📧 Importante</p><p>Un especialista de Auren revisará tu diagnóstico y se comunicará contigo para asegurarte de que estés al día con los últimos cambios normativos. <strong style="color:var(--text)">Mantente pendiente de tu correo electrónico (${formData.email}).</strong></p></div>`;
  h+=`</div>`;
  h+=`<div class="card" style="margin-bottom:14px"><h3 style="font-size:16px;font-weight:700;margin-bottom:16px">📊 Diagnóstico por Área</h3>`;
  catScores.forEach(c=>{const bc=c.avg<=2?CM.red:c.avg<=3?CM.orange:CM.green;h+=`<div class="cat-row"><div class="cat-head"><span class="cat-name">${c.icon} ${c.name}</span><span class="cat-score" style="color:${bc}">${c.avg}/5</span></div><div class="cat-bar"><div class="cat-fill" style="background:${bc};width:${c.pct}%"></div></div></div>`});
  h+=`</div>`;
  if(reds.length){h+=`<div class="card card--flat alert-section" style="border-color:${CM.red}33;margin-bottom:14px"><div class="alert-header"><div class="alert-icon" style="background:var(--red-light)">🔴</div><div><h3 style="color:var(--red)">Alertas Críticas — Acción Inmediata</h3><p class="sub">${reds.length} área${reds.length>1?'s':''} con riesgo alto</p></div></div>`;reds.forEach(q=>{const i=QS.indexOf(q);h+=`<div class="alert-item" style="background:var(--red-light);border-left:4px solid var(--red)"><div class="left"><div class="cat" style="color:var(--red)">P${q.id} · ${CATS[q.cat].name}</div><div class="name">${q.short}</div></div><div class="score-badge" style="background:var(--red)">${answers[i]}/5</div></div>`});h+=`</div>`}
  if(yellows.length){h+=`<div class="card card--flat alert-section" style="border-color:${CM.orange}33;margin-bottom:14px"><div class="alert-header"><div class="alert-icon" style="background:var(--orange-light)">🟡</div><div><h3 style="color:var(--orange)">Áreas de Oportunidad</h3><p class="sub">${yellows.length} área${yellows.length>1?'s':''} parcial${yellows.length>1?'es':''}</p></div></div>`;yellows.forEach(q=>{const i=QS.indexOf(q);h+=`<div class="alert-item" style="background:var(--orange-light);border-left:4px solid var(--orange)"><div class="left"><div class="cat" style="color:var(--orange)">P${q.id} · ${CATS[q.cat].name}</div><div class="name">${q.short}</div></div><div class="score-badge" style="background:var(--orange)">${answers[i]}/5</div></div>`});h+=`</div>`}
  if(greens.length){h+=`<div class="card card--flat alert-section" style="border-color:${CM.green}33;margin-bottom:14px"><div class="alert-header"><div class="alert-icon" style="background:var(--green-light)">🟢</div><h3 style="color:var(--green)">Áreas Bien Implementadas (${greens.length})</h3></div><div class="green-tags">${greens.map(q=>`<div class="green-tag">P${q.id}: ${q.short}</div>`).join('')}</div></div>`}
  const ctaMsg=isExc?"Impresionante gestión en las áreas evaluadas. Sin embargo, existen temas como comercio exterior, protección de datos, gobierno corporativo y nuevas regulaciones 2026 que podrían requerir atención. Un especialista puede confirmarlo contigo.":info.cta;
  h+=`<div class="card cta-card" style="margin-bottom:14px"><h3>¿Quieres diagnosticar otras áreas empresariales no incluidas aquí?</h3><p class="cta-msg">${ctaMsg}</p><a href="https://auren.com/mx/contacto/" target="_blank" rel="noopener" class="btn" style="width:auto;padding:16px 40px;text-decoration:none">Quiero que un especialista de Auren me contacte</a><p class="fine">Sin costo y sin compromiso. Nuestro equipo analizará tu diagnóstico y te orientará en las áreas que necesites.</p></div>`;
  h+=`<div style="text-align:center;margin:14px 0"><button class="btn btn--ghost" onclick="resetAll()">🔄 Realizar nuevo diagnóstico</button></div>`;
  h+=`<div class="footer"><p>En <strong style="color:var(--red)">Auren</strong>, ayudamos a empresas como la tuya a estar protegidas, en cumplimiento y listas para crecer.</p><div class="copy">Auren © 2026 — Consultoría | Auditoría | Asesoría Empresarial</div></div>`;

  document.getElementById('resultsContent').innerHTML=h;showScreen('results');
  setTimeout(()=>{document.getElementById('resultsContent').classList.add('show');let cur=0;const step=total/(1500/16);const timer=setInterval(()=>{cur+=step;if(cur>=total){cur=total;clearInterval(timer)}document.getElementById('scoreAnim').textContent=Math.round(cur)},16)},100);
}

function resetAll(){formData={};answers={};currentQ=0;exitShown=false;document.getElementById('welcomeForm').reset();document.getElementById('gateForm').reset();showScreen('welcome')}

// ===== EXIT INTENT: alerta al intentar salir para evitar abandono =====
let exitShown=false;
const exitModal=document.getElementById('exit-modal');

function buildExitMsg(){
  const enGate=document.getElementById('screen-gate').classList.contains('active');
  if(enGate){
    return 'Tu diagnóstico ya está <strong>100% listo</strong> 🎉. Solo falta un paso: deja tus datos para verlo al instante.';
  }
  const answered=Object.keys(answers).length;
  const remaining=Math.max(0,TOTAL_Q-answered);
  if(remaining===0){
    return 'Ya respondiste todo. ¡Solo falta un clic para ver el diagnóstico de tu empresa!';
  }
  const mins=Math.max(1,Math.ceil((remaining*10)/60));
  const nombre=formData.nombre?(', '+formData.nombre.split(' ')[0]):'';
  return 'Te faltan solo <strong>'+remaining+' pregunta'+(remaining>1?'s':'')+'</strong> (menos de '+mins+' minuto'+(mins>1?'s':'')+') para conocer el estado de salud de tu empresa'+nombre+'. ¡No lo dejes a medias!';
}

function showExitModal(){
  if(!exitModal)return;
  document.getElementById('exit-msg').innerHTML=buildExitMsg();
  exitModal.style.display='flex';
  exitModal.classList.add('show');
  exitModal.setAttribute('aria-hidden','false');
  exitShown=true;
  fbqt('trackCustom','CheckUpExitIntent',{paso:Object.keys(answers).length});
}
function closeExitModal(){
  if(!exitModal)return;
  exitModal.style.display='none';
  exitModal.classList.remove('show');
  exitModal.setAttribute('aria-hidden','true');
}

// Detecta cuando el cursor sale por la parte superior de la ventana (intención de cerrar)
document.addEventListener('mouseout',function(e){
  if(exitShown)return;
  if(e.relatedTarget||e.toElement)return;      // sigue dentro de la página
  if((e.clientY||0)>8)return;                   // solo borde superior
  if(!leadId||quizCompletado)return;            // solo durante el check-up activo
  const enQuiz=document.getElementById('screen-quiz').classList.contains('active');
  const enGate=document.getElementById('screen-gate').classList.contains('active');
  if(enQuiz||enGate)showExitModal();
});

document.getElementById('exit-continue').addEventListener('click',closeExitModal);
document.getElementById('exit-close').addEventListener('click',closeExitModal);
document.getElementById('exit-leave').addEventListener('click',closeExitModal);
exitModal.addEventListener('click',function(e){if(e.target===exitModal)closeExitModal()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeExitModal()});
