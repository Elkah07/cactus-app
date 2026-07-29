// CACTUS V117.1 — La boîte aux lettres

const dashboardMailboxBtn = document.getElementById("dashboardMailboxBtn");
const dashboardMailboxStatus = document.getElementById("dashboardMailboxStatus");
const dashboardMailboxCount = document.getElementById("dashboardMailboxCount");
const backFromMailboxBtn = document.getElementById("backFromMailboxBtn");
const openMailboxComposerBtn = document.getElementById("openMailboxComposerBtn");
const mailboxEmptyWriteBtn = document.getElementById("mailboxEmptyWriteBtn");
const mailboxComposer = document.getElementById("mailboxComposer");
const mailboxComposerForm = document.getElementById("mailboxComposerForm");
const closeMailboxComposerBtn = document.getElementById("closeMailboxComposerBtn");
const mailboxTypeInput = document.getElementById("mailboxTypeInput");
const mailboxSubjectInput = document.getElementById("mailboxSubjectInput");
const mailboxBodyInput = document.getElementById("mailboxBodyInput");
const mailboxPhotoInput = document.getElementById("mailboxPhotoInput");
const mailboxDeliveryModeInput = document.getElementById("mailboxDeliveryModeInput");
const mailboxDeliveryDateField = document.getElementById("mailboxDeliveryDateField");
const mailboxDeliveryDateInput = document.getElementById("mailboxDeliveryDateInput");
const sendMailboxLetterBtn = document.getElementById("sendMailboxLetterBtn");
const mailboxList = document.getElementById("mailboxList");
const mailboxEmpty = document.getElementById("mailboxEmpty");
const mailboxUnreadCount = document.getElementById("mailboxUnreadCount");
const mailboxSentCount = document.getElementById("mailboxSentCount");
const mailboxFavoriteCount = document.getElementById("mailboxFavoriteCount");
const mailboxTabs = document.querySelectorAll("[data-mailbox-view]");
const mailboxRevealSheet = document.getElementById("mailboxRevealSheet");
const closeMailboxRevealBtn = document.getElementById("closeMailboxRevealBtn");
const mailboxOpeningAnimation = document.getElementById("mailboxOpeningAnimation");
const mailboxLetterContent = document.getElementById("mailboxLetterContent");
const mailboxRevealType = document.getElementById("mailboxRevealType");
const mailboxRevealSubject = document.getElementById("mailboxRevealSubject");
const mailboxRevealMeta = document.getElementById("mailboxRevealMeta");
const mailboxRevealBody = document.getElementById("mailboxRevealBody");
const mailboxRevealPhoto = document.getElementById("mailboxRevealPhoto");
const mailboxReactionButtons = document.querySelectorAll("[data-mailbox-reaction]");
const favoriteMailboxLetterBtn = document.getElementById("favoriteMailboxLetterBtn");
const archiveMailboxLetterBtn = document.getElementById("archiveMailboxLetterBtn");

const MAILBOX_TYPES = {
    love: ["💚", "Lettre d’amour"],
    invitation: ["🎟️", "Invitation"],
    note: ["🌵", "Petit mot"],
    surprise: ["🎁", "Surprise"],
    later: ["🕰️", "Pour plus tard"]
};
const MAILBOX_REACTIONS = {
    heart: "💚 J’adore",
    touched: "🥹 Touchée",
    smile: "😊 Ça me fait sourire"
};

let activeMailboxView = "inbox";
let activeMailboxLetterId = null;

function mailboxPartner(space = currentSpaceData) {
    if (!space || !currentUser) return null;
    return [space.player1, space.player2].find((player) => player?.uid && player.uid !== currentUser.uid) || null;
}

function mailboxLetters(space = currentSpaceData) {
    return Object.entries(space?.mailbox?.letters || {}).map(([id, value]) => ({ id, ...(value || {}) }));
}

function mailboxIsDelivered(letter) {
    return Number(letter?.deliverAt || letter?.createdAt || 0) <= Date.now();
}

function mailboxIsMine(letter) {
    return letter?.createdByUid === currentUser?.uid;
}

function mailboxIsRead(letter) {
    return Boolean(letter?.readBy?.[currentUser?.uid]);
}

function mailboxIsArchived(letter) {
    return Boolean(letter?.archivedBy?.[currentUser?.uid]);
}

function mailboxIsFavorite(letter) {
    return Boolean(letter?.favorites?.[currentUser?.uid]);
}

function mailboxNiceDate(timestamp, includeTime = false) {
    if (!timestamp) return "";
    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        ...(includeTime ? { hour: "2-digit", minute: "2-digit" } : {})
    }).format(new Date(timestamp));
}

function getMailboxUnread(space = currentSpaceData) {
    return mailboxLetters(space).filter((letter) =>
        !mailboxIsMine(letter) &&
        mailboxIsDelivered(letter) &&
        !mailboxIsRead(letter) &&
        !mailboxIsArchived(letter)
    );
}

function renderMailboxDashboard(space = currentSpaceData) {
    if (!dashboardMailboxBtn || !currentUser) return;
    const unread = getMailboxUnread(space);
    dashboardMailboxBtn.classList.toggle("has-mail", unread.length > 0);
    dashboardMailboxCount.textContent = unread.length > 99 ? "99+" : unread.length;
    dashboardMailboxCount.style.display = unread.length ? "grid" : "none";
    dashboardMailboxStatus.textContent = unread.length
        ? `${unread.length} nouvelle${unread.length > 1 ? "s" : ""} lettre${unread.length > 1 ? "s" : ""} t’attend${unread.length > 1 ? "ent" : ""}`
        : "Aucune nouvelle lettre";
}

function openMailbox() {
    activeMailboxView = "inbox";
    mailboxTabs.forEach((button) => button.classList.toggle("is-active", button.dataset.mailboxView === activeMailboxView));
    renderMailbox(currentSpaceData);
    showScreen("mailbox");
}

function showMailboxComposer(replyTo = null) {
    mailboxComposerForm.reset();
    mailboxDeliveryDateField.style.display = "none";
    if (replyTo) {
        mailboxTypeInput.value = "note";
        mailboxSubjectInput.value = /^re\s*:/i.test(replyTo.subject || "") ? replyTo.subject : `Re : ${replyTo.subject || "Ta lettre"}`;
        mailboxBodyInput.placeholder = `Répondre à ${replyTo.createdByPseudo || "ta partenaire"}…`;
        mailboxComposerForm.dataset.replyTo = replyTo.id;
    } else {
        delete mailboxComposerForm.dataset.replyTo;
        mailboxBodyInput.placeholder = "Prends le temps d’écrire ce que tu veux vraiment lui laisser…";
    }
    mailboxComposer.style.display = "block";
    document.body.classList.add("mailbox-sheet-open");
    setTimeout(() => (replyTo ? mailboxBodyInput : mailboxSubjectInput).focus(), 100);
}

function closeMailboxComposer() {
    mailboxComposer.style.display = "none";
    document.body.classList.remove("mailbox-sheet-open");
}

async function sendMailboxLetter(event) {
    event.preventDefault();
    const subject = mailboxSubjectInput.value.trim();
    const body = mailboxBodyInput.value.trim();
    const partner = mailboxPartner();
    if (!subject || !body || !partner?.uid) return;

    let deliverAt = Date.now();
    if (mailboxDeliveryModeInput.value === "later") {
        deliverAt = new Date(mailboxDeliveryDateInput.value).getTime();
        if (!Number.isFinite(deliverAt) || deliverAt <= Date.now()) {
            showToast("Choisis une date future pour cette lettre");
            return;
        }
    }

    sendMailboxLetterBtn.disabled = true;
    try {
        let photoData = "";
        const photo = mailboxPhotoInput.files?.[0];
        if (photo) photoData = await compressMemoryPhoto(photo);
        const now = Date.now();
        const ref = database.ref(`spaces/${currentSpaceCode}/mailbox/letters`).push();
        await ref.set({
            type: MAILBOX_TYPES[mailboxTypeInput.value] ? mailboxTypeInput.value : "note",
            subject: subject.slice(0, 100),
            body: body.slice(0, 5000),
            photoData,
            createdAt: now,
            deliverAt,
            pushDeliveredNotificationAt: deliverAt <= now ? now : null,
            createdByUid: currentUser.uid,
            createdByPseudo: pseudo || "Partenaire",
            recipientUid: partner.uid,
            recipientPseudo: partner.pseudo || "Partenaire",
            replyTo: mailboxComposerForm.dataset.replyTo || null
        });
        closeMailboxComposer();
        activeMailboxView = "sent";
        mailboxTabs.forEach((button) => button.classList.toggle("is-active", button.dataset.mailboxView === activeMailboxView));
        renderMailbox(currentSpaceData);
        showToast(deliverAt > now ? "🕰️ Lettre scellée pour plus tard" : "💌 Lettre envoyée");
    } catch (error) {
        showToast(getFriendlyFirebaseError(error));
    } finally {
        sendMailboxLetterBtn.disabled = false;
    }
}

function createMailboxLetterCard(letter) {
    const own = mailboxIsMine(letter);
    const type = MAILBOX_TYPES[letter.type] || MAILBOX_TYPES.note;
    const delivered = mailboxIsDelivered(letter);
    const card = document.createElement("article");
    card.className = "mailbox-letter-card" +
        (!own && delivered && !mailboxIsRead(letter) ? " is-unread" : "") +
        (!delivered ? " is-scheduled" : "");

    const seal = document.createElement("span");
    seal.className = "mailbox-letter-seal";
    seal.textContent = type[0];
    const copy = document.createElement("div");
    const label = document.createElement("small");
    label.textContent = !delivered
        ? `Livraison le ${mailboxNiceDate(letter.deliverAt, true)}`
        : `${type[1]} · ${own ? "envoyée" : "reçue"} le ${mailboxNiceDate(letter.createdAt)}`;
    const title = document.createElement("strong");
    title.textContent = letter.subject || "Une lettre pour toi";
    const meta = document.createElement("span");
    if (own) {
        meta.textContent = letter.readBy?.[letter.recipientUid]
            ? `✓ Ouverte par ${letter.recipientPseudo || "ta partenaire"}`
            : delivered ? "Enveloppe encore fermée" : "En attente de livraison";
    } else {
        meta.textContent = `De ${letter.createdByPseudo || "ta partenaire"}`;
    }
    copy.append(label, title, meta);
    const arrow = document.createElement("b");
    arrow.textContent = delivered || own ? "›" : "🔒";
    card.append(seal, copy, arrow);

    if (delivered || own) {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.addEventListener("click", () => openMailboxLetter(letter.id));
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openMailboxLetter(letter.id);
            }
        });
    }
    return card;
}

function renderMailbox(space = currentSpaceData) {
    if (!mailboxList || !currentUser) return;
    const all = mailboxLetters(space).sort((a, b) => (b.deliverAt || b.createdAt || 0) - (a.deliverAt || a.createdAt || 0));
    const inbox = all.filter((letter) => !mailboxIsMine(letter) && mailboxIsDelivered(letter));
    const sent = all.filter(mailboxIsMine);
    const favorites = all.filter(mailboxIsFavorite);
    const archives = all.filter(mailboxIsArchived);
    const unread = inbox.filter((letter) => !mailboxIsRead(letter) && !mailboxIsArchived(letter));

    mailboxUnreadCount.textContent = unread.length;
    mailboxSentCount.textContent = sent.length;
    mailboxFavoriteCount.textContent = favorites.length;

    let rows = inbox.filter((letter) => !mailboxIsArchived(letter));
    if (activeMailboxView === "sent") rows = sent.filter((letter) => !mailboxIsArchived(letter));
    if (activeMailboxView === "favorites") rows = favorites;
    if (activeMailboxView === "archives") rows = archives;
    mailboxList.replaceChildren(...rows.map(createMailboxLetterCard));
    mailboxEmpty.style.display = rows.length ? "none" : "grid";
    renderMailboxDashboard(space);
}

function closeMailboxReveal() {
    activeMailboxLetterId = null;
    mailboxRevealSheet.style.display = "none";
    document.body.classList.remove("mailbox-sheet-open");
    mailboxOpeningAnimation.classList.remove("is-opening");
}

function openMailboxLetter(id) {
    const letter = currentSpaceData?.mailbox?.letters?.[id];
    if (!letter || (!mailboxIsDelivered(letter) && !mailboxIsMine(letter))) return;
    activeMailboxLetterId = id;
    const own = mailboxIsMine(letter);
    const type = MAILBOX_TYPES[letter.type] || MAILBOX_TYPES.note;
    mailboxRevealType.textContent = `${type[0]} ${type[1]}`;
    mailboxRevealSubject.textContent = letter.subject || "Pour toi";
    mailboxRevealMeta.textContent = own
        ? `À ${letter.recipientPseudo || "ta partenaire"} · ${mailboxNiceDate(letter.deliverAt || letter.createdAt, true)}`
        : `De ${letter.createdByPseudo || "ta partenaire"} · ${mailboxNiceDate(letter.createdAt, true)}`;
    mailboxRevealBody.textContent = letter.body || "";
    mailboxRevealPhoto.src = letter.photoData || "";
    mailboxRevealPhoto.style.display = letter.photoData ? "block" : "none";
    favoriteMailboxLetterBtn.textContent = mailboxIsFavorite(letter) ? "★ Dans les favoris" : "☆ Ajouter aux favoris";
    archiveMailboxLetterBtn.textContent = mailboxIsArchived(letter) ? "Sortir des archives" : "Archiver";
    mailboxReactionButtons.forEach((button) => {
        button.style.display = own && button.dataset.mailboxReaction !== "reply" ? "none" : "";
        button.classList.toggle("is-active", letter.reactions?.[currentUser.uid]?.type === button.dataset.mailboxReaction);
    });
    mailboxRevealSheet.style.display = "block";
    document.body.classList.add("mailbox-sheet-open");
    mailboxLetterContent.classList.toggle("is-hidden-for-opening", !own && !mailboxIsRead(letter));
    mailboxOpeningAnimation.style.display = !own && !mailboxIsRead(letter) ? "grid" : "none";

    if (!own && !mailboxIsRead(letter)) {
        mailboxOpeningAnimation.classList.add("is-opening");
        setTimeout(() => {
            mailboxOpeningAnimation.style.display = "none";
            mailboxLetterContent.classList.remove("is-hidden-for-opening");
        }, 1150);
        database.ref(`spaces/${currentSpaceCode}/mailbox/letters/${id}/readBy/${currentUser.uid}`).set(Date.now());
    }
}

function toggleMailboxPersonalState(key) {
    const id = activeMailboxLetterId;
    const letter = currentSpaceData?.mailbox?.letters?.[id];
    if (!letter) return;
    const current = Boolean(letter[key]?.[currentUser.uid]);
    database.ref(`spaces/${currentSpaceCode}/mailbox/letters/${id}/${key}/${currentUser.uid}`)
        .set(current ? null : Date.now())
        .catch((error) => showToast(getFriendlyFirebaseError(error)));
}

function reactToMailboxLetter(type) {
    const id = activeMailboxLetterId;
    const letter = currentSpaceData?.mailbox?.letters?.[id];
    if (!letter) return;
    if (type === "reply") {
        closeMailboxReveal();
        showMailboxComposer({ id, ...letter });
        return;
    }
    if (!MAILBOX_REACTIONS[type]) return;
    database.ref(`spaces/${currentSpaceCode}/mailbox/letters/${id}/reactions/${currentUser.uid}`)
        .set({ type, label: MAILBOX_REACTIONS[type], createdAt: Date.now(), pseudo: pseudo || "Partenaire" })
        .then(() => showToast(MAILBOX_REACTIONS[type]))
        .catch((error) => showToast(getFriendlyFirebaseError(error)));
}

dashboardMailboxBtn?.addEventListener("click", openMailbox);
backFromMailboxBtn?.addEventListener("click", () => {
    closeMailboxComposer();
    closeMailboxReveal();
    if (typeof returnToNotificationOrigin === "function" && returnToNotificationOrigin()) return;
    showScreen("dashboard");
});
openMailboxComposerBtn?.addEventListener("click", () => showMailboxComposer());
mailboxEmptyWriteBtn?.addEventListener("click", () => showMailboxComposer());
closeMailboxComposerBtn?.addEventListener("click", closeMailboxComposer);
document.querySelector("[data-close-mailbox-composer]")?.addEventListener("click", closeMailboxComposer);
mailboxComposerForm?.addEventListener("submit", sendMailboxLetter);
mailboxDeliveryModeInput?.addEventListener("change", () => {
    const scheduled = mailboxDeliveryModeInput.value === "later";
    mailboxDeliveryDateField.style.display = scheduled ? "grid" : "none";
    mailboxDeliveryDateInput.required = scheduled;
});
mailboxTabs.forEach((button) => button.addEventListener("click", () => {
    activeMailboxView = button.dataset.mailboxView || "inbox";
    mailboxTabs.forEach((item) => item.classList.toggle("is-active", item === button));
    renderMailbox(currentSpaceData);
}));
closeMailboxRevealBtn?.addEventListener("click", closeMailboxReveal);
document.querySelector("[data-close-mailbox-reveal]")?.addEventListener("click", closeMailboxReveal);
mailboxReactionButtons.forEach((button) => button.addEventListener("click", () => reactToMailboxLetter(button.dataset.mailboxReaction)));
favoriteMailboxLetterBtn?.addEventListener("click", () => toggleMailboxPersonalState("favorites"));
archiveMailboxLetterBtn?.addEventListener("click", () => toggleMailboxPersonalState("archivedBy"));

window.renderMailbox = renderMailbox;
window.renderMailboxDashboard = renderMailboxDashboard;
window.openMailbox = openMailbox;
window.openMailboxLetter = openMailboxLetter;
