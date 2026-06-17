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