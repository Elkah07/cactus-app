// CACTUS V117.2 — La boîte aux lettres et invitations interactives

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
const mailboxInvitationFields = document.getElementById("mailboxInvitationFields");
const mailboxInvitationDateInput = document.getElementById("mailboxInvitationDateInput");
const mailboxInvitationTimeInput = document.getElementById("mailboxInvitationTimeInput");
const mailboxInvitationPlaceInput = document.getElementById("mailboxInvitationPlaceInput");
const mailboxPhotoInput = document.getElementById("mailboxPhotoInput");
const mailboxDeliveryModeInput = document.getElementById("mailboxDeliveryModeInput");
const mailboxDeliveryDateField = document.getElementById("mailboxDeliveryDateField");
const mailboxDeliveryDateInput = document.getElementById("mailboxDeliveryDateInput");
const sendMailboxLetterBtn = document.getElementById("sendMailboxLetterBtn");
const mailboxList = document.getElementById("mailboxList");
const mailboxEmpty = document.getElementById("mailboxEmpty");
const mailboxUnreadCount = document.getElementById("mailboxUnreadCount");
const creatorTestMailboxBtn = document.getElementById("creatorTestMailboxBtn");
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
const mailboxInvitationCard = document.getElementById("mailboxInvitationCard");
const mailboxInvitationWhen = document.getElementById("mailboxInvitationWhen");
const mailboxInvitationWhere = document.getElementById("mailboxInvitationWhere");
const mailboxInvitationAnswer = document.getElementById("mailboxInvitationAnswer");
const mailboxInvitationChoices = document.getElementById("mailboxInvitationChoices");
const mailboxInvitationMessageField = document.getElementById("mailboxInvitationMessageField");
const mailboxInvitationMessageInput = document.getElementById("mailboxInvitationMessageInput");
const mailboxInvitationAnswerButtons = document.querySelectorAll("[data-invitation-answer]");
const mailboxQuestionCard = document.getElementById("mailboxQuestionCard");
const mailboxQuestionAnswer = document.getElementById("mailboxQuestionAnswer");
const mailboxQuestionAnswerField = document.getElementById("mailboxQuestionAnswerField");
const mailboxQuestionAnswerInput = document.getElementById("mailboxQuestionAnswerInput");
const sendMailboxQuestionAnswerBtn = document.getElementById("sendMailboxQuestionAnswerBtn");
const mailboxReactionButtons = document.querySelectorAll("[data-mailbox-reaction]");
const favoriteMailboxLetterBtn = document.getElementById("favoriteMailboxLetterBtn");
const archiveMailboxLetterBtn = document.getElementById("archiveMailboxLetterBtn");

const MAILBOX_TYPES = {
    love: ["💚", "Lettre d’amour"],
    invitation: ["🎟️", "Invitation"],
    note: ["💚", "Petit mot"],
    question: ["💬", "Question"],
    confidence: ["🔐", "Confidence"],
    surprise: ["🎁", "Surprise"],
    later: ["🕰️", "Pour plus tard"]
};
const MAILBOX_REACTIONS = {
    heart: "💚 J’adore",
    touched: "🥹 Touchée",
    smile: "😊 Ça me fait sourire"
};
const MAILBOX_INVITATION_ANSWERS = {
    yes: { emoji: "💚", label: "Oui, avec plaisir", short: "Acceptée" },
    maybe: { emoji: "🤔", label: "Peut-être", short: "Peut-être" },
    no: { emoji: "🌙", label: "Pas cette fois", short: "Refusée" }
};

let activeMailboxView = "inbox";
let creatorMailboxPreview = null;
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

function mailboxInvitationTimestamp(invitation = {}) {
    if (!invitation.date) return 0;
    return new Date(`${invitation.date}T${invitation.time || "00:00"}`).getTime();
}

function mailboxInvitationDateLabel(invitation = {}) {
    const timestamp = mailboxInvitationTimestamp(invitation);
    if (!timestamp) return "Date à décider ensemble";
    return mailboxNiceDate(timestamp, Boolean(invitation.time));
}

function updateMailboxComposerType() {
    const isInvitation = mailboxTypeInput?.value === "invitation";
    if (mailboxInvitationFields) mailboxInvitationFields.style.display = isInvitation ? "grid" : "none";
    if (mailboxSubjectInput) mailboxSubjectInput.placeholder = isInvitation
        ? "Un dîner, une soirée film, un week-end…"
        : "Quelques mots pour donner envie de l’ouvrir…";
    if (mailboxBodyInput) mailboxBodyInput.placeholder = isInvitation
        ? "Donne-lui envie de dire oui…"
        : mailboxTypeInput?.value === "question"
            ? "Explique un peu ce que tu aimerais savoir…"
            : mailboxTypeInput?.value === "confidence"
                ? "Dis ce que tu n’arrives pas toujours à dire à voix haute…"
                : "Écris-lui ce que tu veux déposer ici…";
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
    const realUnread = getMailboxUnread(space);
    const previewActive = typeof isCreatorModeEnabled === "function" && isCreatorModeEnabled() && creatorMailboxPreview !== null;
    const unreadCount = previewActive ? creatorMailboxPreview : realUnread.length;
    dashboardMailboxBtn.classList.toggle("has-mail", unreadCount > 0);
    dashboardMailboxBtn.classList.toggle("is-creator-preview", previewActive);
    dashboardMailboxCount.textContent = unreadCount > 99 ? "99+" : unreadCount;
    dashboardMailboxCount.style.display = unreadCount ? "grid" : "none";
    dashboardMailboxStatus.textContent = unreadCount
        ? `${unreadCount} nouvelle${unreadCount > 1 ? "s" : ""} lettre${unreadCount > 1 ? "s" : ""} t’attend${unreadCount > 1 ? "ent" : ""}`
        : "Aucune nouvelle lettre";
}

function cycleCreatorMailboxPreview() {
    if (typeof isCreatorModeEnabled !== "function" || !isCreatorModeEnabled()) return;
    if (creatorMailboxPreview === null) {
        creatorMailboxPreview = 0;
        creatorTestMailboxBtn.textContent = "📬 Tester une lettre";
        showToast("Aperçu créateur : boîte vide, drapeau baissé 📭");
    } else if (creatorMailboxPreview === 0) {
        creatorMailboxPreview = 1;
        creatorTestMailboxBtn.textContent = "↩️ Revenir à l’état réel";
        showToast("Aperçu créateur : une lettre non lue 📬");
    } else {
        creatorMailboxPreview = null;
        creatorTestMailboxBtn.textContent = "📭 Tester la boîte vide";
        showToast("Boîte revenue à son état réel");
    }
    renderMailboxDashboard(currentSpaceData);
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
        mailboxBodyInput.placeholder = "Écris-lui ce que tu veux déposer ici…";
    }
    updateMailboxComposerType();
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
        const type = MAILBOX_TYPES[mailboxTypeInput.value] ? mailboxTypeInput.value : "note";
        const invitation = type === "invitation" ? {
            date: mailboxInvitationDateInput.value || "",
            time: mailboxInvitationTimeInput.value || "",
            place: mailboxInvitationPlaceInput.value.trim().slice(0, 120)
        } : null;
        await ref.set({
            type,
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
            replyTo: mailboxComposerForm.dataset.replyTo || null,
            invitation
        });
        closeMailboxComposer();
        activeMailboxView = "sent";
        mailboxTabs.forEach((button) => button.classList.toggle("is-active", button.dataset.mailboxView === activeMailboxView));
        renderMailbox(currentSpaceData);
        showToast(deliverAt > now ? "🕰️ Lettre scellée pour plus tard" : type === "invitation" ? "🎟️ Invitation envoyée" : "💌 Lettre envoyée");
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
        const answer = MAILBOX_INVITATION_ANSWERS[letter.invitationResponse?.answer];
        meta.textContent = letter.type === "invitation" && answer
            ? `${answer.emoji} ${answer.short} par ${letter.recipientPseudo || "ta partenaire"}`
            : letter.readBy?.[letter.recipientUid]
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
    renderMailboxInvitation(letter, own);
    renderMailboxQuestion(letter, own);
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

function renderMailboxQuestion(letter, own) {
    const isQuestion = letter.type === "question";
    mailboxQuestionCard.style.display = isQuestion ? "grid" : "none";
    if (!isQuestion) return;
    const response = letter.questionResponse || null;
    mailboxQuestionAnswer.replaceChildren();
    if (response?.body) {
        const small = document.createElement("small");
        small.textContent = own ? `Réponse de ${response.respondedByPseudo || "ta partenaire"}` : "Ta réponse";
        const p = document.createElement("p");
        p.textContent = response.body;
        mailboxQuestionAnswer.append(small, p);
    } else {
        mailboxQuestionAnswer.textContent = own ? "Elle n’a pas encore répondu." : "Cette question attend ta réponse.";
    }
    mailboxQuestionAnswerField.style.display = own ? "none" : "grid";
    sendMailboxQuestionAnswerBtn.style.display = own ? "none" : "block";
    mailboxQuestionAnswerInput.value = response?.body || "";
}

async function answerMailboxQuestion() {
    const id = activeMailboxLetterId;
    const letter = currentSpaceData?.mailbox?.letters?.[id];
    const body = mailboxQuestionAnswerInput.value.trim();
    if (!letter || letter.type !== "question" || mailboxIsMine(letter) || !body) return;
    sendMailboxQuestionAnswerBtn.disabled = true;
    const response = {
        body: body.slice(0, 1500),
        respondedAt: Date.now(),
        respondedByUid: currentUser.uid,
        respondedByPseudo: pseudo || "Partenaire"
    };
    try {
        await database.ref(`spaces/${currentSpaceCode}/mailbox/letters/${id}/questionResponse`).set(response);
        renderMailboxQuestion({ ...letter, questionResponse: response }, false);
        showToast("💬 Réponse envoyée");
    } catch (error) {
        showToast(getFriendlyFirebaseError(error));
    } finally {
        sendMailboxQuestionAnswerBtn.disabled = false;
    }
}

function renderMailboxInvitation(letter, own) {
    const isInvitation = letter.type === "invitation";
    mailboxInvitationCard.style.display = isInvitation ? "grid" : "none";
    if (!isInvitation) return;
    const invitation = letter.invitation || {};
    const response = letter.invitationResponse || null;
    const answer = MAILBOX_INVITATION_ANSWERS[response?.answer];
    mailboxInvitationWhen.textContent = mailboxInvitationDateLabel(invitation);
    mailboxInvitationWhere.textContent = invitation.place ? `📍 ${invitation.place}` : "";
    mailboxInvitationWhere.style.display = invitation.place ? "block" : "none";
    mailboxInvitationAnswer.replaceChildren();
    if (answer) {
        const strong = document.createElement("strong");
        strong.textContent = own
            ? `${answer.emoji} ${letter.recipientPseudo || "Ta partenaire"} a répondu : ${answer.label}`
            : `${answer.emoji} Tu as répondu : ${answer.label}`;
        mailboxInvitationAnswer.append(strong);
        if (response.message) {
            const p = document.createElement("p");
            p.textContent = response.message;
            mailboxInvitationAnswer.append(p);
        }
    } else {
        mailboxInvitationAnswer.textContent = own
            ? "En attente de sa réponse…"
            : "Est-ce que tu acceptes cette invitation ?";
    }
    mailboxInvitationChoices.style.display = own ? "none" : "grid";
    mailboxInvitationMessageField.style.display = own ? "none" : "grid";
    mailboxInvitationMessageInput.value = response?.message || "";
    mailboxInvitationAnswerButtons.forEach((button) => {
        button.classList.toggle("is-selected", response?.answer === button.dataset.invitationAnswer);
    });
}

async function answerMailboxInvitation(answer) {
    const id = activeMailboxLetterId;
    const letter = currentSpaceData?.mailbox?.letters?.[id];
    if (!letter || letter.type !== "invitation" || mailboxIsMine(letter) || !MAILBOX_INVITATION_ANSWERS[answer]) return;
    mailboxInvitationAnswerButtons.forEach((button) => { button.disabled = true; });
    const now = Date.now();
    const response = {
        answer,
        message: mailboxInvitationMessageInput.value.trim().slice(0, 500),
        respondedAt: now,
        respondedByUid: currentUser.uid,
        respondedByPseudo: pseudo || "Partenaire"
    };
    try {
        const updates = {};
        updates[`spaces/${currentSpaceCode}/mailbox/letters/${id}/invitationResponse`] = response;
        if (answer === "yes" && letter.invitation?.date) {
            const calendarId = letter.calendarEventId || database.ref(`spaces/${currentSpaceCode}/dailyTools/importantDates`).push().key;
            updates[`spaces/${currentSpaceCode}/mailbox/letters/${id}/calendarEventId`] = calendarId;
            updates[`spaces/${currentSpaceCode}/dailyTools/importantDates/${calendarId}`] = {
                title: letter.subject || "Notre invitation",
                notes: [letter.body, letter.invitation.place ? `Lieu : ${letter.invitation.place}` : ""].filter(Boolean).join("\n"),
                date: letter.invitation.date,
                time: letter.invitation.time || "",
                category: "appointment",
                emoji: "🎟️",
                repeat: "none",
                createdAt: now,
                updatedAt: now,
                createdByUid: letter.createdByUid,
                createdByPseudo: letter.createdByPseudo || "Partenaire",
                sourceMailboxLetterId: id
            };
        } else if (letter.calendarEventId) {
            updates[`spaces/${currentSpaceCode}/dailyTools/importantDates/${letter.calendarEventId}`] = null;
            updates[`spaces/${currentSpaceCode}/mailbox/letters/${id}/calendarEventId`] = null;
        }
        await database.ref().update(updates);
        renderMailboxInvitation({ ...letter, invitationResponse: response }, false);
        showToast(`${MAILBOX_INVITATION_ANSWERS[answer].emoji} Réponse envoyée`);
    } catch (error) {
        showToast(getFriendlyFirebaseError(error));
    } finally {
        mailboxInvitationAnswerButtons.forEach((button) => { button.disabled = false; });
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
creatorTestMailboxBtn?.addEventListener("click", cycleCreatorMailboxPreview);
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
mailboxTypeInput?.addEventListener("change", updateMailboxComposerType);
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
mailboxInvitationAnswerButtons.forEach((button) => button.addEventListener("click", () => answerMailboxInvitation(button.dataset.invitationAnswer)));
sendMailboxQuestionAnswerBtn?.addEventListener("click", answerMailboxQuestion);
favoriteMailboxLetterBtn?.addEventListener("click", () => toggleMailboxPersonalState("favorites"));
archiveMailboxLetterBtn?.addEventListener("click", () => toggleMailboxPersonalState("archivedBy"));

window.renderMailbox = renderMailbox;
window.renderMailboxDashboard = renderMailboxDashboard;
window.openMailbox = openMailbox;
window.openMailboxLetter = openMailboxLetter;
