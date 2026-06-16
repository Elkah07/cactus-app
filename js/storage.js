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
