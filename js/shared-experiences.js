// CACTUS V115.9 — Nos défis & Jardin secret

const dashboardDaresBtn = document.getElementById("dashboardDaresBtn");
const dashboardDaresStatus = document.getElementById("dashboardDaresStatus");
const dashboardDaresCount = document.getElementById("dashboardDaresCount");
const backFromCoupleDaresHubBtn = document.getElementById("backFromCoupleDaresHubBtn");
const randomDareBtn = document.getElementById("randomDareBtn");
const randomDareSpotlight = document.getElementById("randomDareSpotlight");
const openCustomDareBtn = document.getElementById("openCustomDareBtn");
const closeCustomDareBtn = document.getElementById("closeCustomDareBtn");
const customDareComposer = document.getElementById("customDareComposer");
const customDareForm = document.getElementById("customDareForm");
const customDareTitle = document.getElementById("customDareTitle");
const customDareDescription = document.getElementById("customDareDescription");
const customDareCategory = document.getElementById("customDareCategory");
const customDareDate = document.getElementById("customDareDate");
const dareSavedCount = document.getElementById("dareSavedCount");
const dareInProgressCount = document.getElementById("dareInProgressCount");
const dareCompletedCount = document.getElementById("dareCompletedCount");
const dareViewButtons = document.querySelectorAll("[data-dare-view]");
const dareSearchInput = document.getElementById("dareSearchInput");
const dareCategoryFilter = document.getElementById("dareCategoryFilter");
const coupleDaresHubList = document.getElementById("coupleDaresHubList");
const coupleDaresHubEmpty = document.getElementById("coupleDaresHubEmpty");
const completeDareSheet = document.getElementById("completeDareSheet");
const closeCompleteDareBtn = document.getElementById("closeCompleteDareBtn");
const completeDareForm = document.getElementById("completeDareForm");
const completeDareName = document.getElementById("completeDareName");
const completeDareNote = document.getElementById("completeDareNote");
const completeDarePhoto = document.getElementById("completeDarePhoto");
const completeDareCreateMemory = document.getElementById("completeDareCreateMemory");
const confirmCompleteDareBtn = document.getElementById("confirmCompleteDareBtn");

const dashboardSecretGardenBtn = document.getElementById("dashboardSecretGardenBtn");
const dashboardSecretGardenStatus = document.getElementById("dashboardSecretGardenStatus");
const dashboardSecretGardenCount = document.getElementById("dashboardSecretGardenCount");
const backFromSecretGardenBtn = document.getElementById("backFromSecretGardenBtn");
const openSecretComposerBtn = document.getElementById("openSecretComposerBtn");
const secretGardenDepositBtn = document.getElementById("secretGardenDepositBtn");
const closeSecretComposerBtn = document.getElementById("closeSecretComposerBtn");
const secretComposer = document.getElementById("secretComposer");
const secretComposerForm = document.getElementById("secretComposerForm");
const secretTypeInput = document.getElementById("secretTypeInput");
const secretModeInput = document.getElementById("secretModeInput");
const secretHintInput = document.getElementById("secretHintInput");
const secretContentInput = document.getElementById("secretContentInput");
const saveSecretBtn = document.getElementById("saveSecretBtn");
const secretWaitingCount = document.getElementById("secretWaitingCount");
const secretMineCount = document.getElementById("secretMineCount");
const secretExchangeCount = document.getElementById("secretExchangeCount");
const secretViewButtons = document.querySelectorAll("[data-secret-view]");
const secretGardenList = document.getElementById("secretGardenList");
const secretGardenEmpty = document.getElementById("secretGardenEmpty");
const secretRevealSheet = document.getElementById("secretRevealSheet");
const closeSecretRevealBtn = document.getElementById("closeSecretRevealBtn");
const secretRevealKicker = document.getElementById("secretRevealKicker");
const secretRevealTitle = document.getElementById("secretRevealTitle");
const secretRevealContent = document.getElementById("secretRevealContent");
const secretReactionChoices = document.getElementById("secretReactionChoices");
const secretReactionButtons = document.querySelectorAll("[data-secret-reaction]");
const secretExchangeResponseSheet = document.getElementById("secretExchangeResponseSheet");
const closeSecretExchangeResponseBtn = document.getElementById("closeSecretExchangeResponseBtn");
const secretExchangeResponseForm = document.getElementById("secretExchangeResponseForm");
const secretExchangeHint = document.getElementById("secretExchangeHint");
const secretExchangeResponseInput = document.getElementById("secretExchangeResponseInput");

const DARE_CATEGORIES = { tendre:"🥹 Tendre", fun:"😂 Fun", "créatif":"🎨 Créatif", complicité:"🤝 Complicité", quotidien:"🏡 Quotidien", aventure:"🧭 Aventure", communication:"💬 Communication", distance:"🚆 À distance", souvenirs:"📸 Souvenirs", surprise:"🎁 Surprise", futur:"✨ Futur", confiance:"🫶 Confiance", personnel:"💚 Personnel" };
const SECRET_TYPES = { secret:["🤫","Un secret"], unsaid:["💭","Quelque chose que je n'ose pas dire"], discover:["✨","Une chose à découvrir sur moi"], confession:["🫣","Une confession"], desire:["💌","Une envie que je n'ai jamais osé exprimer"], thought:["🧠","Une pensée que je garde pour moi"], question:["❓","Une question que je n'ose pas poser"] };
const SECRET_REACTIONS = { thanks:"💚 Merci de me l'avoir dit", touched:"🥹 Ça me touche", surprised:"😳 Je ne m'y attendais pas", laugh:"😂 Mais t'es sérieuse ?", discuss:"💬 J'aimerais qu'on en parle" };

let activeDareView = "discover";
let activeDareCompletionId = null;
let activeSecretView = "inbox";
let activeSecretRevealId = null;
let activeSecretExchangeId = null;

function sharedPartner(space = currentSpaceData) {
    if (!space || !currentUser) return null;
    if (space.player1?.uid && space.player1.uid !== currentUser.uid) return space.player1;
    if (space.player2?.uid && space.player2.uid !== currentUser.uid) return space.player2;
    return null;
}
function sharedDares(space = currentSpaceData) { return Object.entries(space?.sharedDares || {}).map(([id, value]) => ({ id, ...(value || {}) })); }
function secretEntries(space = currentSpaceData) { return Object.entries(space?.secretGarden?.entries || {}).map(([id, value]) => ({ id, ...(value || {}) })); }
function normalText(value) { return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
function niceDate(ts) { return ts ? new Intl.DateTimeFormat("fr-FR", { day:"numeric", month:"short", year:"numeric" }).format(new Date(ts)) : ""; }
function btn(label, className, handler) { const b=document.createElement("button"); b.type="button"; b.textContent=label; if(className)b.className=className; b.addEventListener("click",handler); return b; }

function darePayload(item, status) {
    return { sourceId:item.id || null, title:String(item.title||"Défi à deux").slice(0,100), description:String(item.description||"").slice(0,1000), category:item.category||"personnel", difficulty:item.difficulty||"", custom:Boolean(item.custom), plannedDate:item.plannedDate||"", status, createdAt:Date.now(), createdByUid:currentUser.uid, createdByPseudo:pseudo||"Partenaire" };
}
function addBuiltInDare(item, status="saved") {
    const id="builtin_"+String(item.id).replace(/[^a-zA-Z0-9_-]/g,"_");
    return database.ref(`spaces/${currentSpaceCode}/sharedDares/${id}`).transaction(v=>v||darePayload(item,status)).then(()=>showToast(status==="inprogress"?"⏳ Défi lancé":"📌 Défi ajouté")).catch(e=>showToast(getFriendlyFirebaseError(e)));
}
function setDareStatus(id,status) {
    const update={status,updatedAt:Date.now(),updatedByUid:currentUser.uid,updatedByPseudo:pseudo||"Partenaire"}; if(status==="inprogress")update.startedAt=Date.now();
    database.ref(`spaces/${currentSpaceCode}/sharedDares/${id}`).update(update).then(()=>showToast(status==="inprogress"?"⏳ Défi en cours":"📌 Défi remis à faire")).catch(e=>showToast(getFriendlyFirebaseError(e)));
}
function removeDare(id) { if(confirm("Retirer ce défi de votre liste ?")) database.ref(`spaces/${currentSpaceCode}/sharedDares/${id}`).remove(); }
function planDare(id,date) { database.ref(`spaces/${currentSpaceCode}/sharedDares/${id}`).update({plannedDate:date||"",updatedAt:Date.now(),updatedByUid:currentUser.uid}); }

function dareCard(item, record=null) {
    const a=document.createElement("article"); a.className="shared-dare-card"+(record?.status==="completed"?" is-completed":"");
    const h=document.createElement("header"), meta=document.createElement("div"), cat=document.createElement("span"), diff=document.createElement("small"); cat.className="shared-dare-category"; cat.textContent=DARE_CATEGORIES[item.category]||item.category||"✨ Défi"; diff.textContent=item.difficulty||""; meta.append(cat,diff); h.append(meta);
    if(record){const state=document.createElement("b");state.className="shared-dare-state";state.textContent=record.status==="saved"?"À faire":record.status==="inprogress"?"En cours":"Réalisé";h.append(state);} a.append(h);
    const title=document.createElement("h2");title.textContent=item.title||"Défi à deux";const desc=document.createElement("p");desc.textContent=item.description||"";a.append(title,desc);
    if(record?.plannedDate&&record.status!=="completed"){const d=document.createElement("p");d.className="shared-dare-date";d.textContent="📅 Prévu le "+new Intl.DateTimeFormat("fr-FR",{day:"numeric",month:"long",year:"numeric"}).format(new Date(record.plannedDate+"T12:00:00"));a.append(d);}
    if(record?.status==="completed"){const done=document.createElement("div");done.className="shared-dare-completed-note";done.textContent="✅ Réalisé"+(record.completedAt?" le "+niceDate(record.completedAt):"")+(record.completedByPseudo?" · par "+record.completedByPseudo:"");a.append(done);if(record.memoryNote){const q=document.createElement("blockquote");q.textContent=record.memoryNote;a.append(q);}if(record.photoData){const img=document.createElement("img");img.className="shared-dare-memory-photo";img.src=record.photoData;img.alt="Souvenir du défi";a.append(img);}}
    const f=document.createElement("footer");
    if(!record){f.append(btn("📌 Ajouter","secondary",()=>addBuiltInDare(item,"saved")),btn("✨ Commencer","",()=>addBuiltInDare(item,"inprogress")));}
    else if(record.status==="saved"||record.status==="inprogress"){
        const lab=document.createElement("label");lab.className="shared-dare-plan";lab.textContent="📅 ";const input=document.createElement("input");input.type="date";input.value=record.plannedDate||"";input.setAttribute("aria-label","Planifier ce défi");input.addEventListener("change",()=>planDare(record.id,input.value));lab.append(input);f.append(lab);
        if(record.status==="saved")f.append(btn("▶ Commencer","",()=>setDareStatus(record.id,"inprogress")),btn("Retirer","secondary",()=>removeDare(record.id)));
        else f.append(btn("✅ Défi réalisé","",()=>openCompleteDare(record.id)),btn("↩ Remettre à faire","secondary",()=>setDareStatus(record.id,"saved")));
    }
    if(f.children.length)a.append(f);return a;
}
function fillDareCategories(){if(dareCategoryFilter.options.length>1)return;[...new Set((coupleDares||[]).map(x=>x.category).filter(Boolean))].sort().forEach(v=>{const o=document.createElement("option");o.value=v;o.textContent=DARE_CATEGORIES[v]||v;dareCategoryFilter.append(o);});}
function renderCoupleDaresHub(space=currentSpaceData){
    if(!coupleDaresHubList)return;fillDareCategories();const records=sharedDares(space), saved=records.filter(x=>x.status==="saved"), running=records.filter(x=>x.status==="inprogress"), completed=records.filter(x=>x.status==="completed");dareSavedCount.textContent=saved.length;dareInProgressCount.textContent=running.length;dareCompletedCount.textContent=completed.length;
    const q=normalText(dareSearchInput.value), category=dareCategoryFilter.value;let rows;
    if(activeDareView==="discover"){const used=new Set(records.map(x=>x.sourceId).filter(Boolean));rows=(coupleDares||[]).filter(x=>!used.has(x.id)).map(x=>[x,null]);}else rows=records.filter(x=>x.status===activeDareView).map(x=>[x,x]);
    rows=rows.filter(([x])=>(category==="all"||x.category===category)&&(!q||normalText([x.title,x.description,x.category,x.difficulty].join(" ")).includes(q)));if(activeDareView==="completed")rows.sort((a,b)=>(b[1].completedAt||0)-(a[1].completedAt||0));
    coupleDaresHubList.replaceChildren(...rows.slice(0,300).map(([x,r])=>dareCard(x,r)));coupleDaresHubEmpty.style.display=rows.length?"none":"grid";renderSharedExperiencesDashboard(space);
}
function randomDare(){randomDareSpotlight.style.display="block";randomDareSpotlight.replaceChildren();if(!(coupleDares||[]).length){const p=document.createElement("p");p.textContent="Le catalogue de défis est encore en train de charger 🌵";randomDareSpotlight.append(p);if(typeof loadNewGamesData==="function")loadNewGamesData().then(()=>renderCoupleDaresHub(currentSpaceData)).catch(()=>{});return;}const used=new Set(sharedDares().map(x=>x.sourceId).filter(Boolean)),choices=(coupleDares||[]).filter(x=>!used.has(x.id));if(!choices.length){const p=document.createElement("p");p.textContent="Vous avez déjà exploré tous les défis disponibles 🌵";randomDareSpotlight.append(p);return;}randomDareSpotlight.append(dareCard(choices[Math.floor(Math.random()*choices.length)]));randomDareSpotlight.scrollIntoView({behavior:"smooth",block:"nearest"});}
function showCustomDare(){customDareForm.reset();customDareComposer.style.display="block";document.body.classList.add("shared-feature-sheet-open");setTimeout(()=>customDareTitle.focus(),100);}
function hideCustomDare(){customDareComposer.style.display="none";document.body.classList.remove("shared-feature-sheet-open");}
function saveCustomDare(e){e.preventDefault();const title=customDareTitle.value.trim(),description=customDareDescription.value.trim();if(!title||!description)return;const ref=database.ref(`spaces/${currentSpaceCode}/sharedDares`).push(),payload=darePayload({title,description,category:customDareCategory.value,difficulty:"Créé par vous",custom:true,plannedDate:customDareDate.value},"saved");payload.sourceId="custom_"+ref.key;ref.set(payload).then(()=>{hideCustomDare();activeDareView="saved";dareViewButtons.forEach(b=>b.classList.toggle("is-active",b.dataset.dareView==="saved"));showToast("💚 Votre défi a été ajouté");}).catch(err=>showToast(getFriendlyFirebaseError(err)));}
function openCompleteDare(id){const r=currentSpaceData?.sharedDares?.[id];if(!r)return;activeDareCompletionId=id;completeDareName.textContent=r.title||"Défi à deux";completeDareNote.value="";completeDarePhoto.value="";completeDareCreateMemory.checked=true;completeDareSheet.style.display="block";document.body.classList.add("shared-feature-sheet-open");}
function closeCompleteDare(){activeDareCompletionId=null;completeDareSheet.style.display="none";document.body.classList.remove("shared-feature-sheet-open");}
function rewardDare(id){return database.ref(`spaces/${currentSpaceCode}/stats`).transaction(stats=>{stats=stats||{};stats.sharedDareRewards=stats.sharedDareRewards||{};const key=String(id).replace(/[.#$\[\]\/]/g,"_");if(stats.sharedDareRewards[key])return;stats.sharedDareRewards[key]=true;stats.seeds=(Number(stats.seeds)||0)+4;stats.xp=(Number(stats.xp)||0)+8;if(typeof getCactusLevelFromXp==="function")stats.level=getCactusLevelFromXp(stats.xp);return stats;});}
async function completeDare(e){e.preventDefault();const id=activeDareCompletionId,r=currentSpaceData?.sharedDares?.[id];if(!r||r.status==="completed")return;confirmCompleteDareBtn.disabled=true;try{let photoData="";const file=completeDarePhoto.files?.[0];if(file)photoData=await compressMemoryPhoto(file);const note=completeDareNote.value.trim(),now=Date.now();await database.ref(`spaces/${currentSpaceCode}/sharedDares/${id}`).update({status:"completed",completedAt:now,completedByUid:currentUser.uid,completedByPseudo:pseudo||"Partenaire",memoryNote:note,photoData,updatedAt:now,updatedByUid:currentUser.uid});if(completeDareCreateMemory.checked){const d=new Date(now),date=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;await database.ref(`spaces/${currentSpaceCode}/memories`).push({emoji:"🏆",memoryDate:date,category:"moment",title:"Défi : "+(r.title||"Mission accomplie"),text:note||r.description||"Un défi réalisé ensemble.",photoData,createdAt:now,createdByUid:currentUser.uid,createdByPseudo:pseudo||"Partenaire"});}await rewardDare(id);closeCompleteDare();showToast("🏆 Défi réalisé : +8 XP et +4 graines");}catch(err){showToast(getFriendlyFirebaseError(err));}finally{confirmCompleteDareBtn.disabled=false;}}

function secretNeedsAttention(entry){const uid=currentUser?.uid;if(!uid)return false;if(entry.mode==="exchange"){if(entry.createdByUid!==uid&&!entry.exchangeResponse)return true;return Boolean(entry.exchangeResponse&&!entry.revealedBy?.[uid]);}return entry.createdByUid!==uid&&!entry.revealedBy?.[uid];}
function renderSharedExperiencesDashboard(space=currentSpaceData){
    const dares=sharedDares(space),active=dares.filter(x=>x.status==="saved"||x.status==="inprogress"),running=active.filter(x=>x.status==="inprogress").length;dashboardDaresCount.textContent=active.length;dashboardDaresCount.classList.toggle("is-empty",!active.length);dashboardDaresStatus.textContent=running?`${running} défi${running>1?"s":""} en cours`:active.length?`${active.length} idée${active.length>1?"s":""} dans votre liste`:`${coupleDares?.length||300} idées à découvrir`;
    const attention=secretEntries(space).filter(secretNeedsAttention).length;dashboardSecretGardenCount.textContent=attention;dashboardSecretGardenCount.classList.toggle("is-empty",!attention);dashboardSecretGardenStatus.textContent=attention?`${attention} chose${attention>1?"s":""} t'attend${attention>1?"ent":""}`:"Un espace rien qu'à vous deux";
}
function showSecretComposer(){secretComposerForm.reset();secretComposer.style.display="block";document.body.classList.add("shared-feature-sheet-open");setTimeout(()=>secretContentInput.focus(),100);}
function hideSecretComposer(){secretComposer.style.display="none";document.body.classList.remove("shared-feature-sheet-open");}
function saveSecret(e){e.preventDefault();const content=secretContentInput.value.trim();if(!content)return;saveSecretBtn.disabled=true;database.ref(`spaces/${currentSpaceCode}/secretGarden/entries`).push({type:SECRET_TYPES[secretTypeInput.value]?secretTypeInput.value:"secret",mode:secretModeInput.value==="exchange"?"exchange":"direct",hint:secretHintInput.value.trim().slice(0,100),content:content.slice(0,2500),createdAt:Date.now(),createdByUid:currentUser.uid,createdByPseudo:pseudo||"Partenaire"}).then(()=>{hideSecretComposer();showToast(secretModeInput.value==="exchange"?"🤝 Échange secret scellé":"🔐 Confidence déposée");}).catch(err=>showToast(getFriendlyFirebaseError(err))).finally(()=>saveSecretBtn.disabled=false);}
function secretType(entry){return SECRET_TYPES[entry?.type]||SECRET_TYPES.secret;}
function secretCard(entry){
    const own=entry.createdByUid===currentUser.uid,type=secretType(entry),partner=sharedPartner(),card=document.createElement("article");card.className="secret-entry-card"+(secretNeedsAttention(entry)?" needs-attention":"");const h=document.createElement("header"),left=document.createElement("div"),ico=document.createElement("span"),labels=document.createElement("div"),title=document.createElement("strong"),meta=document.createElement("small"),mode=document.createElement("span");ico.textContent=type[0];title.textContent=type[1];meta.textContent=(own?"Déposé par toi":"Déposé par "+(entry.createdByPseudo||partner?.pseudo||"ton/ta partenaire"))+" · "+niceDate(entry.createdAt);labels.append(title,meta);left.append(ico,labels);mode.className="secret-mode-badge";mode.textContent=entry.mode==="exchange"?"🤝 Échange":"🔐 Confidence";h.append(left,mode);card.append(h);if(entry.hint){const p=document.createElement("p");p.className="secret-entry-hint";p.textContent='Indice : “'+entry.hint+'”';card.append(p);}const body=document.createElement("div");body.className="secret-entry-body";
    if(entry.mode==="exchange"){const p=document.createElement("p");p.textContent=!entry.exchangeResponse?(own?`Ton secret attend que ${partner?.pseudo||"ton/ta partenaire"} dépose quelque chose en retour.`:"Pour découvrir ce secret, dépose toi aussi quelque chose. Vos deux confidences seront ensuite révélées."):(entry.revealedBy?.[currentUser.uid]?"Votre échange est ouvert. Vous pouvez le relire.":"Vos deux confidences sont prêtes à être découvertes.");body.append(p);}else if(own||entry.revealedBy?.[currentUser.uid]){const q=document.createElement("blockquote");q.textContent=entry.content||"";body.append(q);if(own){const s=document.createElement("small"),pid=partner?.uid;s.textContent=pid&&entry.revealedBy?.[pid]?`✓ Découvert par ${partner?.pseudo||"ton/ta partenaire"}`:"Encore scellé de l'autre côté";body.append(s);}}else{const p=document.createElement("p");p.textContent="Le contenu est encore scellé. Ouvre-le seulement quand tu te sens prêt(e).";body.append(p);}card.append(body);
    const f=document.createElement("footer");if(entry.mode==="exchange"){if(!entry.exchangeResponse&&!own)f.append(btn("🤝 Déposer quelque chose pour ouvrir","",()=>openExchangeResponse(entry.id)));else if(entry.exchangeResponse)f.append(btn(entry.revealedBy?.[currentUser.uid]?"Relire l'échange":"🔓 Découvrir l'échange","",()=>openSecretReveal(entry.id)));}else if(!own)f.append(btn(entry.revealedBy?.[currentUser.uid]?"Relire":"🔓 Découvrir","",()=>openSecretReveal(entry.id)));const partnerReaction=partner?.uid?entry.reactions?.[partner.uid]:null,myReaction=entry.reactions?.[currentUser.uid],reaction=partnerReaction||myReaction;if(reaction){const r=document.createElement("span");r.className="secret-reaction-summary";const reactionLabel=SECRET_REACTIONS[reaction.type]||reaction.label||"";r.textContent=partnerReaction?`${partner?.pseudo||"Partenaire"} : ${reactionLabel}`:`Ta réaction : ${reactionLabel}`;f.append(r);}if(own&&((entry.mode!=="exchange"&&!Object.keys(entry.revealedBy||{}).length)||(entry.mode==="exchange"&&!entry.exchangeResponse)))f.append(btn("Retirer","secondary",()=>{if(confirm("Retirer cette confidence ?"))database.ref(`spaces/${currentSpaceCode}/secretGarden/entries/${entry.id}`).remove();}));if(f.children.length)card.append(f);return card;
}
function renderSecretGarden(space=currentSpaceData){if(!secretGardenList||!currentUser)return;const all=secretEntries(space),uid=currentUser.uid,waiting=all.filter(secretNeedsAttention),mine=all.filter(x=>x.createdByUid===uid),exchanges=all.filter(x=>x.mode==="exchange");secretWaitingCount.textContent=waiting.length;secretMineCount.textContent=mine.length;secretExchangeCount.textContent=exchanges.length;let rows=activeSecretView==="mine"?mine:activeSecretView==="exchanges"?exchanges:all.filter(x=>x.createdByUid!==uid||(x.mode==="exchange"&&x.exchangeResponse));rows.sort((a,b)=>(b.readyAt||b.createdAt||0)-(a.readyAt||a.createdAt||0));secretGardenList.replaceChildren(...rows.map(secretCard));secretGardenEmpty.style.display=rows.length?"none":"grid";renderSharedExperiencesDashboard(space);}
function revealBlock(label,name,content){const s=document.createElement("section");s.className="secret-reveal-message";const a=document.createElement("small"),b=document.createElement("strong"),p=document.createElement("p");a.textContent=label;b.textContent=name||"Partenaire";p.textContent=content||"";s.append(a,b,p);return s;}
function openSecretReveal(id){const entry=currentSpaceData?.secretGarden?.entries?.[id];if(!entry||entry.mode==="exchange"&&!entry.exchangeResponse)return;activeSecretRevealId=id;const type=secretType(entry);secretRevealKicker.textContent=type[0]+" "+type[1];secretRevealTitle.textContent=entry.mode==="exchange"?"Votre échange secret":"Une confidence pour toi";secretRevealContent.replaceChildren();if(entry.mode==="exchange")secretRevealContent.append(revealBlock("Premier dépôt",entry.createdByPseudo,entry.content),revealBlock("En retour",entry.exchangeResponse?.createdByPseudo,entry.exchangeResponse?.content));else secretRevealContent.append(revealBlock(type[1],entry.createdByPseudo,entry.content));secretReactionChoices.style.display="grid";secretReactionButtons.forEach(b=>b.classList.toggle("is-active",b.dataset.secretReaction===entry.reactions?.[currentUser.uid]?.type));secretRevealSheet.style.display="block";document.body.classList.add("shared-feature-sheet-open");database.ref(`spaces/${currentSpaceCode}/secretGarden/entries/${id}/revealedBy/${currentUser.uid}`).set(Date.now());}
function closeSecretReveal(){activeSecretRevealId=null;secretRevealSheet.style.display="none";document.body.classList.remove("shared-feature-sheet-open");}
function openExchangeResponse(id){const entry=currentSpaceData?.secretGarden?.entries?.[id];if(!entry||entry.createdByUid===currentUser.uid||entry.exchangeResponse)return;activeSecretExchangeId=id;secretExchangeHint.textContent=entry.hint?'Indice laissé : “'+entry.hint+'”':"Le secret de l'autre restera caché jusqu'à ce que tu aies déposé le tien.";secretExchangeResponseInput.value="";secretExchangeResponseSheet.style.display="block";document.body.classList.add("shared-feature-sheet-open");setTimeout(()=>secretExchangeResponseInput.focus(),100);}
function closeExchangeResponse(){activeSecretExchangeId=null;secretExchangeResponseSheet.style.display="none";document.body.classList.remove("shared-feature-sheet-open");}
function saveExchangeResponse(e){e.preventDefault();const id=activeSecretExchangeId,content=secretExchangeResponseInput.value.trim(),entry=currentSpaceData?.secretGarden?.entries?.[id];if(!entry||!content||entry.exchangeResponse)return;const response={content:content.slice(0,2500),createdAt:Date.now(),createdByUid:currentUser.uid,createdByPseudo:pseudo||"Partenaire"};const ref=database.ref(`spaces/${currentSpaceCode}/secretGarden/entries/${id}`);ref.update({exchangeResponse:response,readyAt:response.createdAt}).then(()=>ref.once("value")).then(snapshot=>{if(currentSpaceData){currentSpaceData.secretGarden=currentSpaceData.secretGarden||{};currentSpaceData.secretGarden.entries=currentSpaceData.secretGarden.entries||{};currentSpaceData.secretGarden.entries[id]=snapshot.val();}closeExchangeResponse();showToast("🤝 Vos deux confidences sont prêtes");openSecretReveal(id);}).catch(err=>showToast(getFriendlyFirebaseError(err)));}
function secretDiscussion(entry){const id=getDiscussionId("secretGarden",entry.id);if(currentSpaceData?.discussions?.[id]){showToast("💬 Déjà dans À discuter");return Promise.resolve();}const type=secretType(entry),rows=entry.mode==="exchange"?[{label:entry.createdByPseudo||"Premier dépôt",value:entry.content},{label:entry.exchangeResponse?.createdByPseudo||"En retour",value:entry.exchangeResponse?.content||""}]:[{label:entry.createdByPseudo||"Confidence",value:entry.content}];return database.ref(`spaces/${currentSpaceCode}/discussions/${id}`).set({mode:"secretGarden",sourceId:entry.id,gameLabel:"Jardin secret",title:type[1],summary:"L'une de vous aimerait revenir tranquillement sur cette confidence.",entries:makeDiscussionEntries(rows),status:"open",createdAt:Date.now(),createdByUid:currentUser.uid,createdByPseudo:pseudo||"Partenaire"}).then(()=>showToast("💬 Ajouté à À discuter"));}
function reactSecret(type){const id=activeSecretRevealId,entry=currentSpaceData?.secretGarden?.entries?.[id];if(!entry||!SECRET_REACTIONS[type])return;const existing=entry.reactions?.[currentUser.uid],now=Date.now();database.ref(`spaces/${currentSpaceCode}/secretGarden/entries/${id}/reactions/${currentUser.uid}`).set({type,label:SECRET_REACTIONS[type],createdAt:existing?.createdAt||now,updatedAt:now,pseudo:pseudo||"Partenaire"}).then(()=>{secretReactionButtons.forEach(b=>b.classList.toggle("is-active",b.dataset.secretReaction===type));if(type==="discuss")return secretDiscussion({id,...entry});showToast(SECRET_REACTIONS[type]);}).catch(err=>showToast(getFriendlyFirebaseError(err)));}

function openCoupleDaresHub(){activeDareView="discover";dareViewButtons.forEach(b=>b.classList.toggle("is-active",b.dataset.dareView==="discover"));renderCoupleDaresHub(currentSpaceData);showScreen("coupleDaresHub");}
function openSecretGarden(){activeSecretView="inbox";secretViewButtons.forEach(b=>b.classList.toggle("is-active",b.dataset.secretView==="inbox"));renderSecretGarden(currentSpaceData);showScreen("secretGarden");}

backFromCoupleDaresHubBtn?.addEventListener("click",()=>{hideCustomDare();closeCompleteDare();if(typeof returnToNotificationOrigin==="function"&&returnToNotificationOrigin())return;showScreen("dashboard");});
dashboardDaresBtn?.addEventListener("click",openCoupleDaresHub);randomDareBtn?.addEventListener("click",randomDare);openCustomDareBtn?.addEventListener("click",showCustomDare);closeCustomDareBtn?.addEventListener("click",hideCustomDare);customDareForm?.addEventListener("submit",saveCustomDare);closeCompleteDareBtn?.addEventListener("click",closeCompleteDare);completeDareForm?.addEventListener("submit",completeDare);dareSearchInput?.addEventListener("input",()=>renderCoupleDaresHub(currentSpaceData));dareCategoryFilter?.addEventListener("change",()=>renderCoupleDaresHub(currentSpaceData));dareViewButtons.forEach(b=>b.addEventListener("click",()=>{activeDareView=b.dataset.dareView;dareViewButtons.forEach(x=>x.classList.toggle("is-active",x===b));renderCoupleDaresHub(currentSpaceData);}));
backFromSecretGardenBtn?.addEventListener("click",()=>{hideSecretComposer();closeSecretReveal();closeExchangeResponse();if(typeof returnToNotificationOrigin==="function"&&returnToNotificationOrigin())return;showScreen("dashboard");});dashboardSecretGardenBtn?.addEventListener("click",openSecretGarden);openSecretComposerBtn?.addEventListener("click",showSecretComposer);secretGardenDepositBtn?.addEventListener("click",showSecretComposer);closeSecretComposerBtn?.addEventListener("click",hideSecretComposer);secretComposerForm?.addEventListener("submit",saveSecret);secretViewButtons.forEach(b=>b.addEventListener("click",()=>{activeSecretView=b.dataset.secretView;secretViewButtons.forEach(x=>x.classList.toggle("is-active",x===b));renderSecretGarden(currentSpaceData);}));closeSecretRevealBtn?.addEventListener("click",closeSecretReveal);secretReactionButtons.forEach(b=>b.addEventListener("click",()=>reactSecret(b.dataset.secretReaction)));closeSecretExchangeResponseBtn?.addEventListener("click",closeExchangeResponse);secretExchangeResponseForm?.addEventListener("submit",saveExchangeResponse);

window.renderCoupleDaresHub=renderCoupleDaresHub;
window.renderSecretGarden=renderSecretGarden;
window.renderSharedExperiencesDashboard=renderSharedExperiencesDashboard;
window.openCoupleDaresHub=openCoupleDaresHub;
window.openSecretGarden=openSecretGarden;
