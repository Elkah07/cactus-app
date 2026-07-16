function saveRankingAnswer(rankingId, answer) {
    const savedAnswers =
        JSON.parse(localStorage.getItem("rankingAnswers")) || [];

    savedAnswers.push({
        rankingId: rankingId,
        answer: answer,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem(
        "rankingAnswers",
        JSON.stringify(savedAnswers)
    );
}

function getRankingAnswers() {
    return JSON.parse(
        localStorage.getItem("rankingAnswers")
    ) || [];
}

function clearRankingAnswers() {
    localStorage.removeItem("rankingAnswers");
}

function saveRankingAnswerToFirebase(rankingId, answer) {
    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/rankingsAnswers/" +
            rankingId +
            "/" +
            currentUser.uid
        )
        .set({
            uid: currentUser.uid,
            pseudo: pseudo,
            answer: answer,
            createdAt: Date.now()
        });
}

function getOrCreateActiveRanking() {
    const activeRankingRef = database.ref(
        "spaces/" + currentSpaceCode + "/activeRankingId"
    );

    return activeRankingRef.once("value")
        .then((snapshot) => {
            const activeRankingId = snapshot.val();

            if (activeRankingId) {
                const existingRanking = rankings.find((ranking) => {
                    return ranking.id === activeRankingId;
                });

                return existingRanking;
            }

            const newRanking = getRandomItem(rankings, lastRankingId);

            return activeRankingRef.set(newRanking.id)
                .then(() => {
                    return newRanking;
                });
        });
}

function saveRankingChallenge(rankingId, answer) {
    const challengeRef = database.ref(
        "spaces/" +
        currentSpaceCode +
        "/rankingChallenges/" +
        rankingId
    );

    return challengeRef.child("answers/" + currentUser.uid)
        .set({
            uid: currentUser.uid,
            pseudo: pseudo,
            answer: answer,
            createdAt: Date.now()
        })
        .then(() => {
            return challengeRef.once("value");
        })
        .then((snapshot) => {
            const challengeData = snapshot.val();
            const answers = challengeData.answers || {};
            const answersCount = Object.keys(answers).length;

            const updates = {
                rankingId: rankingId,
                title: currentRanking.title,
                updatedAt: Date.now()
            };

            if (!challengeData.createdAt) {
                updates.createdAt = Date.now();
            }

            if (!challengeData.status) {
                updates.status = "pending";
            }

            if (answersCount >= 2) {
                updates.status = "completed";
                updates.completedAt = Date.now();
            }

            return challengeRef.update(updates);
        });
}

function listenToRankingChallenges() {
    subscribeToSpaceValue("rankingChallenges", (snapshot) => {
        const challenges = snapshot.val() || {};
        displayRankingChallenges(challenges);
    });
}
