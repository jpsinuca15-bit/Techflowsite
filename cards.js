const NUM='5531999232730';
const wa=t=>'https://api.whatsapp.com/send?phone='+NUM+'&text='+encodeURIComponent(t);
document.getElementById('hwa').href=wa('Olá, quero uma proposta da TechFlow!');
document.getElementById('hcta').href=wa('Olá, quero uma proposta gratuita da TechFlow!');
document.getElementById('fcta').href=wa('Olá, quero um diagnóstico gratuito com a TechFlow!');
document.getElementById('fwa').href=wa('Olá, tenho interesse em conhecer a TechFlow!');

const G={b:['#1d4ed8','#0ea5e9'],g:['#047857','#19d3a2'],p:['#6d28d9','#ec4899'],o:['#c2410c','#f59e0b'],s:['#334155','#64748b'],r:['#be123c','#fb7185']};

const ROWS=[
{id:'servicos',t:'Serviços',s:'o que a gente entrega',items:[
 {i:'🤖',tag:'Mais procurado',t:'Automação com IA',d:'Chatbot no WhatsApp, automação de processos e sistemas que trabalham 24h por você, sem funcionário extra.',b:['Chatbot WhatsApp personalizado','Automação n8n e integrações','Respostas automáticas inteligentes'],m:'Quero saber mais sobre Automação com IA!',lb:'Quero automatizar'},
 {i:'🎯',t:'Tráfego Pago',d:'Gestão de Google Ads e Meta Ads com foco em ROI. Cada real investido rastreado e otimizado semanalmente.',b:['Google Ads (Search, Display)','Meta Ads (Facebook e Instagram)','Relatórios semanais detalhados'],m:'Quero saber mais sobre Tráfego Pago!',lb:'Quero mais vendas'},
 {i:'💻',t:'Desenvolvimento Web',d:'Sites e landing pages rápidos, responsivos e otimizados para converter visitante em cliente.',b:['Landing pages de alta conversão','Sites institucionais e e-commerce','Integração com WhatsApp e CRM'],m:'Quero saber mais sobre Desenvolvimento Web!',lb:'Quero meu site'},
 {i:'🎬',t:'Vídeos com IA',d:'Conteúdo publicitário gerado com IA em qualidade cinematográfica, sem câmera e sem equipe.',b:['Vídeos para anúncios e redes sociais','Personagens e cenas realistas','Entrega rápida e sob demanda'],m:'Quero saber mais sobre Vídeos com IA!',l:'videos.html',lt:'Ver exemplos',lb:'Quero meu vídeo'},
 {i:'📱',t:'Gestão de Redes Sociais',d:'Presença digital consistente e estratégica. Conteúdo, agendamento e crescimento orgânico com foco em conversão.',b:['Criação de conteúdo mensal','Gestão de Instagram e TikTok','Relatório mensal de crescimento'],m:'Quero saber mais sobre Gestão de Redes Sociais!',lb:'Quero crescer'},
 {i:'⚙️',t:'Sistemas Sob Medida',d:'Software próprio para resolver um problema real do seu negócio: estoque, RH, jurídico ou atendimento com IA.',b:['Sistemas web e desktop personalizados','Painel de controle e relatórios em tempo real','Agentes de IA especializados no seu setor'],l:'#sistemas',lt:'Ver sistemas'}
]},
{id:'sistemas',t:'Sistemas TechFlow',s:'software próprio, não é template',items:[
 {i:'🏭',tag:'Gestão Industrial',t:'TechFlow GestorPRO',d:'Estoque, produção e lucro por lote em um painel só.',x:'Sistema de gestão para fábricas. Controla estoque e insumos, entrada e saída de material, produção em tempo real e apuração de lucro por lote, tudo em um painel só.',b:['Controle de estoque e insumos em tempo real','Registro de entrada e saída de material','Apuração automática de lucro de produção'],p:'A partir de R$1.397,00 de implantação + R$297,00/mês',m:'Quero saber mais sobre o TechFlow GestorPRO!',lb:'Quero para minha fábrica'},
 {i:'⏱️',tag:'Recursos Humanos',t:'TechFlow ControleRH',d:'Ponto digital com a atividade de cada funcionário.',x:'Ponto eletrônico digital com registro de entrada, saída e da atividade específica de cada funcionário. Mostra onde o tempo da equipe é gasto, produtividade e rendimento por pessoa.',b:['Clock-in / clock-out por funcionário','Registro de atividade em tempo real','Relatório de produtividade e rendimento'],p:'Sob consulta, plano de acordo com nº de funcionários',m:'Quero saber mais sobre o TechFlow ControleRH!',lb:'Quero para minha equipe'},
 {i:'⚖️',tag:'Jurídico + IA',t:'TechFlow JurisPRO',d:'Assistente de pesquisa jurídica com IA para advogados e clientes.',x:'Assistente de pesquisa jurídica com IA. Cobre Código Penal, Código de Processo Penal, Direito Civil, Trabalhista, do Consumidor e de Família. Auxilia advogados na pesquisa e também dá suporte direto aos clientes.',b:['Base com toda a legislação brasileira','Pesquisa rápida por artigo e tema','Suporte para advogado e para o cliente final'],p:'A partir de R$997,00 de implantação + R$217,00/mês',m:'Quero saber mais sobre o TechFlow JurisPRO!',lb:'Quero para meu escritório'},
 {i:'🧠',tag:'Agente de IA',t:'TechFlow JptPRO',d:'IA multiuso treinada no seu negócio, disponível 24h.',x:'Agente de inteligência artificial multiuso, treinado para responder com precisão em qualquer área do seu negócio, de dúvidas operacionais a suporte ao cliente 24h.',b:['Respostas precisas em qualquer domínio','Disponível 24h, sem pausa','Treinado com o conhecimento do seu negócio'],p:'Sob consulta, plano mensal por volume de uso',m:'Quero saber mais sobre o TechFlow JptPRO!',lb:'Quero meu agente de IA'},
 {i:'🏗️',tag:'Construção Civil',t:'TechFlow Administrador Civil',d:'Ferramentas, máquinas, RH e produção de construtoras em um sistema.',x:'Sistema completo para grandes construtoras. Controla desde a menor ferramenta, como prego e martelo, até betoneiras e martelete, e também as máquinas pesadas, como pá carregadeira e retroescavadeira.',b:['Controle de ferramentas, da menor à maior, e onde estão sendo usadas','Gestão de máquinas pesadas e estoque','Integra RH, administrativo e produção em um só sistema'],p:'Sob consulta',m:'Quero saber mais sobre o TechFlow Administrador Civil!',lb:'Quero para minha construtora'}
]},
{id:'portfolio',t:'Projetos entregues',s:'projetos reais, clique e veja ao vivo',items:[
 {i:'🏠',tag:'Internacional · EUA',t:'Spotless Home Cleaning',d:'Site + Google Ads para limpeza residencial em Massachusetts.',x:'Site institucional completo para empresa de limpeza residencial em Massachusetts, EUA. Integração com WhatsApp para captação de clientes, rastreamento de conversões via Google Ads e otimização para aparecer nas buscas locais americanas.',r:'Campanha saiu de 93 para 365 impressões e de 4 para 16 cliques/semana',tg:['HTML/CSS','Google Ads','Conversion Tracking','WhatsApp CTA'],q:'O site ficou exatamente como eu queria. Profissional, carregando rápido e já estamos recebendo contatos de clientes pelos EUA. A TechFlow entendeu o que eu precisava logo na primeira conversa.',qc:'Spotless Home Cleaning, Massachusetts',l:'https://spotesshomecleaning.com',lt:'Ver site ao vivo',m:'Vi o portfólio da TechFlow e quero um projeto para meu negócio!',lb:'Quero um projeto assim'},
 {i:'✨',tag:'Internacional · EUA',t:'MD Cleaning Services',d:'Site completo para Boston, Cambridge e Somerville.',x:'Site completo para empresa de limpeza em Boston, Cambridge e Somerville (EUA), com 5 serviços detalhados, formulário de orçamento que envia direto pro WhatsApp, mapa da área de atendimento e SEO local. Indexado no Google Search Console e com Google Business Profile configurado.',tg:['HTML/CSS','Google Search Console','Google Business Profile','WhatsApp Form'],q:'A MD fecha diversas vendas com o site criado pela TechFlow, com a gestão de tráfego e o acompanhamento diário.',qc:'MD Cleaning Services, Boston',l:'https://mdcleaningservicescompany.com',lt:'Ver site ao vivo',m:'Vi o portfólio da TechFlow e quero um projeto para meu negócio!',lb:'Quero um projeto assim'},
 {i:'🛒',tag:'Brasil · MG',t:'LOD Suprimentos',d:'Entrega mensal de suprimentos em Minas Gerais.',x:'Site completo para serviço de entrega mensal de suprimentos em Minas Gerais. Catálogo online, formulário de pedido via Formspree, design mobile-first e integração com WhatsApp para fechamento de pedidos. Deploy na Vercel com domínio personalizado.',tg:['HTML/CSS','Formspree','Vercel','WhatsApp API'],q:'Site entregue dentro do prazo combinado, sem complicação. Fácil de acessar no celular e os clientes já estão entrando em contato pelo WhatsApp direto do site. Ótimo trabalho.',qc:'LOD Suprimentos, Minas Gerais',l:'https://suprimentos-lod.vercel.app',lt:'Ver site ao vivo',m:'Vi o portfólio da TechFlow e quero um projeto para meu negócio!',lb:'Quero um projeto assim'}
]},
{id:'planos',t:'Planos TechFlow',s:'preço claro, sem letra miúda. Precisa combinar planos? Monto sob medida',items:[
 {i:'🚀',tag:'Mais popular',t:'Plano Master',d:'Site, landing page, marketing, tráfego, posts e suporte. A gente cuida de tudo.',x:'Terceirize todo o seu processo digital para a TechFlow: site, landing page, marketing digital, tráfego pago, publicações e suporte técnico. A gente cuida de tudo.',p:'R$1.499,00 por mês',m:'Olá, quero o Plano Master (R$1.499,00/mês) da TechFlow!'},
 {i:'📄',t:'Página de Vendas',d:'Landing page de alta conversão, pronta pra campanha de tráfego pago.',p:'R$597,00 (investimento único)',m:'Olá, quero o plano Página de Vendas (R$597,00) da TechFlow!'},
 {i:'🌐',t:'Website',d:'Site institucional completo, múltiplas páginas e otimizado para buscas.',p:'R$1.997,00 (investimento único)',m:'Olá, quero o plano Website (R$1.997,00) da TechFlow!'},
 {i:'👑',t:'Website Premium',d:'Site premium com automações, integrações e design exclusivo.',p:'R$2.997,00 (investimento único)',m:'Olá, quero o plano Website Premium (R$2.997,00) da TechFlow!'},
 {i:'💬',t:'Atendente TechFlow',d:'Chatbot com IA para o WhatsApp, atendendo e qualificando clientes 24h.',p:'R$1.497,00 (investimento único)',m:'Olá, quero o plano Atendente TechFlow (R$1.497,00) da TechFlow!'},
 {i:'👔',t:'Gerente Administrativo IA',d:'Agente de IA para organizar rotina administrativa, dados e tarefas.',x:'Agente de IA para organizar rotina administrativa, dados e tarefas do negócio.',p:'R$1.797,00 (investimento único)',m:'Olá, quero o plano Gerente Administrativo IA (R$1.797,00) da TechFlow!'},
 {i:'🎯',t:'Marketing Digital',d:'Gestão mensal de tráfego pago com relatórios semanais.',x:'Gestão mensal de tráfego pago (Google Ads e Meta Ads) com relatórios semanais.',p:'R$697,00 por mês',m:'Olá, quero o plano Marketing Digital (R$697,00/mês) da TechFlow!'},
 {i:'🎥',t:'Vídeos com IA',d:'5 vídeos por semana de até 1 minuto, prontos para redes e anúncios.',x:'Criação de vídeos publicitários com IA: 5 vídeos por semana de até 1 minuto, prontos para suas redes e anúncios.',p:'R$797,00 por mês',m:'Olá, quero o plano Vídeos com IA (R$797,00/mês) da TechFlow!'}
]},
{id:'mais',t:'Conheça a TechFlow',s:'processo, diferenciais, dúvidas e quem faz',items:[
 {i:'🧭',t:'Como funciona',d:'Do contato à entrega em 3 etapas. Sem enrolação.',x:'Sem enrolação, sem reuniões intermináveis. Direto ao ponto.',b:['<b>01 Diagnóstico gratuito:</b> você me conta o negócio, o objetivo e o problema. Eu analiso e apresento o que faz mais sentido pra você, sem compromisso e sem enrolação.','<b>02 Proposta clara:</b> escopo definido, prazo real e valor transparente. Nada de surpresa depois. Você aprova e a gente começa.','<b>03 Entrega + suporte:</b> você acompanha cada etapa via WhatsApp. Após a entrega, suporte contínuo incluso, não sumimos depois que o projeto vai ao ar.','Resposta em até 2 horas no horário comercial.'],m:'Olá, quero agendar um diagnóstico gratuito com a TechFlow!',lb:'Agendar diagnóstico gratuito'},
 {i:'🏆',t:'Por que a TechFlow',d:'Tecnologia séria. Resultado concreto.',x:'Não somos uma agência genérica com portfólio inventado. Somos desenvolvedores e gestores de tráfego que entendem de negócio.',b:['<b>Portfólio verificável:</b> cada projeto está ao vivo e pode ser visitado agora mesmo. Sem print fake, sem promessa.','<b>Atendimento no WhatsApp:</b> comunicação direta, sem burocracia. Você fala comigo e eu resolvo, sem intermediários.','<b>Prazo real e respeitado:</b> o combinado é cumprido. Se eu assumi, vai ser entregue. Simples assim.','<b>Suporte após a entrega:</b> não desapareço depois do projeto. Continuo disponível para ajustes, dúvidas e evoluções.','<b>Brasil &amp; EUA</b> (projetos em dois países) · <b>24/7</b> (automações que nunca param) · <b>72h</b> (prazo médio para o primeiro entregável) · <b>100%</b> entregues no prazo.'],m:'Olá, quero conhecer melhor a TechFlow!',lb:'Falar com a TechFlow'},
 {i:'❓',t:'Perguntas frequentes',d:'Prazo, pagamento, EUA, suporte e tráfego pago.',b:['<b>Quanto tempo leva para entregar um site?</b> Para landing pages e sites institucionais, de 3 a 7 dias úteis após aprovação do escopo e conteúdo. Para projetos maiores, o prazo é definido na proposta.','<b>Como funciona o pagamento?</b> Geralmente 50% no início e 50% na entrega. Para serviços recorrentes (tráfego pago, redes sociais), o pagamento é mensal. Aceitamos Pix, transferência e cartão.','<b>Vocês atendem empresas nos EUA?</b> Sim. Já temos projetos rodando em Massachusetts. Toda comunicação é via WhatsApp, sem burocracia, e conseguimos atender em inglês.','<b>O que preciso fornecer para começar?</b> Dados do negócio (nome, serviços, contato), logo se tiver, e o objetivo do projeto. O resto a gente resolve junto durante o diagnóstico gratuito.','<b>Vocês dão suporte após a entrega?</b> Sim, sempre. Ajustes pós-entrega estão inclusos por 30 dias. Depois, oferecemos planos de manutenção mensal para quem prefere suporte contínuo.','<b>Qual o investimento mínimo para tráfego pago?</b> Recomendamos no mínimo R$800/mês em verba de anúncio + taxa de gestão a partir de R$400/mês. Para o mercado americano, os valores são em dólar e variam por nicho.'],m:'Olá, tenho uma dúvida sobre a TechFlow!',lb:'Tirar dúvida'},
 {i:'👨‍💻',tag:'Disponível agora',t:'João Paulo',d:'Desenvolvedor e gestor de tráfego, fundador da TechFlow.',x:'Sou estudante de Engenharia de Software, já com 7 períodos cursados e notas excelentes, e tenho mais de 10 cursos técnicos em linguagens de programação, arquitetura de software e análise e desenvolvimento de sistemas. Toco a TechFlow sozinho, do diagnóstico ao suporte pós-entrega, sem intermediário, sem terceirização. Cada site, automação e sistema que sai daqui passa pela minha mão, do código ao deploy.',im:'joaopaulo.jpg.jpeg',b:['Atendimento remoto para todo o Brasil e EUA'],tg:['Python','Node.js','HTML/CSS/JS','Docker','n8n','Google Ads','Meta Ads'],m:'Olá, vi a página Sobre da TechFlow e quero conversar!',lb:'Falar comigo no WhatsApp'},
 {i:'🎓',t:'TechFlow Academy',d:'Vem aprender com a TechFlow: criar e vender com IA, do vídeo ao website.',b:['Aprenda a criar e vender com IA, do vídeo ao website'],l:'https://techflow-academy-rho.vercel.app/',lt:'Conhecer a Academy'},
 {i:'📝',t:'Peça um orçamento',d:'Me conta sobre o seu projeto e receba a proposta no WhatsApp.',b:['Diagnóstico gratuito, sem compromisso','Resposta em até 2 horas','Brasil e EUA'],l:'#orcamento',lt:'Ir para o formulário'}
]}
];

const PAL=[['#1d4ed8','#38bdf8'],['#047857','#34d399'],['#6d28d9','#f472b6'],['#c2410c','#fbbf24'],['#be123c','#fb7185'],['#0f766e','#22d3ee'],['#4338ca','#a78bfa'],['#a16207','#facc15'],['#9d174d','#f97316'],['#166534','#a3e635'],['#1e3a8a','#6366f1'],['#7c2d12','#ef4444']];
let N=0;
const rows=document.getElementById('rows'),modal=document.getElementById('modal'),box=document.getElementById('box');
ROWS.forEach((r,ri)=>{
  const sec=document.createElement('section');sec.className='row';sec.id=r.id;
  sec.innerHTML=`<h2>${r.t}<small>${r.s}</small></h2><div class="wrap"><button class="arr l" aria-label="Voltar">‹</button><div class="track"></div><button class="arr r" aria-label="Avançar">›</button></div>`;
  const tr=sec.querySelector('.track');
  r.items.forEach((it,ii)=>{
    const g=it.g=PAL[N++%PAL.length];
    const b=document.createElement('button');b.className='card';
    const pv=it.b&&!it.q&&r.id!=='mais'?`<ul class="pv">${it.b.slice(0,2).map(x=>`<li>${x}</li>`).join('')}</ul>`:'';
    b.innerHTML=`<div class="cover" style="--c1:${g[0]};--c2:${g[1]}"><span>${it.i}</span>${it.tag?`<em>${it.tag}</em>`:''}</div><div class="cbody"><h3>${it.t}</h3><p>${it.d}</p>${pv}${it.p?`<span class="price">${it.p}</span>`:''}</div>`;
    b.onclick=()=>open(it);tr.appendChild(b);
  });
  sec.querySelector('.l').onclick=()=>tr.scrollBy({left:-tr.clientWidth*.8,behavior:'smooth'});
  sec.querySelector('.r').onclick=()=>tr.scrollBy({left:tr.clientWidth*.8,behavior:'smooth'});
  rows.appendChild(sec);
});

let last;
function open(it){
  last=document.activeElement;const g=it.g;
  const href=it.l&&!it.m?it.l:(it.m?wa(it.m):'#');
  let h=`<div class="cover" style="--c1:${g[0]};--c2:${g[1]}"><span>${it.i}</span>${it.tag?`<em>${it.tag}</em>`:''}</div><button class="x" aria-label="Fechar">✕</button><div class="in"><h3>${it.t}</h3><p class="d">${it.x||it.d}</p>`;
  if(it.im)h+=`<img src="${it.im}" alt="${it.t}" onerror="this.remove()" style="width:100%;max-height:260px;object-fit:cover;border-radius:12px;margin-bottom:14px">`;
  if(it.b)h+='<ul>'+it.b.map(x=>`<li>${x}</li>`).join('')+'</ul>';
  if(it.r)h+=`<div class="pp">📈 ${it.r}</div>`;
  if(it.tg)h+=`<div class="tgs">${it.tg.map(x=>`<span class="tg">${x}</span>`).join('')}</div>`;
  if(it.q)h+=`<blockquote>“${it.q}”${it.qc?`<br><cite>— ${it.qc}</cite>`:''}</blockquote>`;
  if(it.p)h+=`<div class="pp">${it.p}</div>`;
  if(it.l)h+=it.l[0]==='#'?`<a class="btn" href="${it.l}" onclick="closeModal()">${it.lt}</a> `:`<a class="btn" href="${it.l}" target="_blank" rel="noopener">${it.lt||'Abrir'}</a> `;
  if(it.m)h+=`<a class="btn${it.l?' ghost':''}" href="${wa(it.m)}" target="_blank" rel="noopener">${it.lb||(it.p?'Quero esse plano':'Quero saber mais')}</a>`;
  h+='</div>';box.innerHTML=h;modal.classList.add('on');document.body.style.overflow='hidden';
  box.querySelector('.x').onclick=closeModal;box.querySelector('.x').focus();
}
function closeModal(){modal.classList.remove('on');document.body.style.overflow='';if(last)last.focus()}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

(function(){
  const A=[40,55,75,100,130,160,195,230,265,295,315,330],B=[30,34,38,43,47,52,56,60,63,66,67,68],M=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  const W=640,H=270,L=40,R=14,T=14,Bt=30,x=i=>L+i*(W-L-R)/11,y=v=>T+(H-T-Bt)*(1-v/350);
  const P=a=>a.map((v,i)=>(i?'L':'M')+x(i).toFixed(1)+' '+y(v).toFixed(1)).join('');
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Clientes por mês: 330 com tecnologia contra 68 sem tecnologia">`;
  [0,70,140,210,280,350].forEach(v=>s+=`<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="#1c2533"/><text x="${L-6}" y="${y(v)+4}" fill="#9aa4b5" font-size="11" text-anchor="end">${v}</text>`);
  M.forEach((m,i)=>s+=`<text x="${x(i)}" y="${H-8}" fill="#9aa4b5" font-size="11" text-anchor="middle">${m}</text>`);
  s+=`<path d="${P(A)} L${x(11)} ${y(0)} L${x(0)} ${y(0)}Z" fill="rgba(0,212,255,.13)"/><path d="${P(A)}" fill="none" stroke="#00d4ff" stroke-width="3"/><path d="${P(B)}" fill="none" stroke="#9aa4b5" stroke-width="3" stroke-dasharray="6 5"/>`;
  s+=`<text x="${x(11)-6}" y="${y(330)-9}" fill="#00d4ff" font-size="12" font-weight="600" text-anchor="end">330 clientes/mês</text><text x="${x(11)-6}" y="${y(68)-9}" fill="#9aa4b5" font-size="12" text-anchor="end">68 clientes/mês</text></svg>`;
  document.getElementById('chart').innerHTML=s;
})();

document.getElementById('fm').addEventListener('submit',e=>{
  e.preventDefault();const f=new FormData(e.target);
  window.open(wa(`Olá, vim pelo site da TechFlow.\nNome: ${f.get('n')}\nEmpresa: ${f.get('e')}\nContato: ${f.get('c')}\nServiço: ${f.get('s')}\nProjeto: ${f.get('d')}`),'_blank');
});