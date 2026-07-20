function generateSpaceCode() {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const randomValues = new Uint32Array(8);

    crypto.getRandomValues(randomValues);

    const code = Array.from(randomValues, (value) => {
        return alphabet[value % alphabet.length];
    }).join("");

    return `CACTUS-${code.slice(0, 4)}-${code.slice(4)}`;
}

function getRandomItem(items, excludedId = null) {
    let availableItems = items;

    if (excludedId && items.length > 1) {
        availableItems = items.filter(
            item => item.id !== excludedId
        );
    }

    const randomIndex = Math.floor(
        Math.random() * availableItems.length
    );

    return availableItems[randomIndex];
}

function calculateRankingCompatibility(myRanking, partnerRanking) {
    let totalGap = 0;

    myRanking.forEach((item, myIndex) => {
        const partnerIndex = partnerRanking.indexOf(item);

        if (partnerIndex === -1) {
            return;
        }

        const gap = Math.abs(myIndex - partnerIndex);
        totalGap += gap;
    });

    const itemCount = myRanking.length;
    const maxGap = getMaxRankingGap(itemCount);

    if (maxGap === 0) {
        return 100;
    }

    return Math.round(
        100 - (totalGap / maxGap) * 100
    );
}

function getMaxRankingGap(itemCount) {
    let maxGap = 0;

    for (let i = 0; i < itemCount; i++) {
        maxGap += Math.abs(i - (itemCount - 1 - i));
    }

    return maxGap;
}

function getCompatibilityLabel(score) {
    if (score >= 80) {
        return "🌵 Âmes cactus";
    }

    if (score >= 60) {
        return "💚 Très compatibles";
    }

    if (score >= 40) {
        return "💛 Complémentaires";
    }

    return "💔 Très différents";
}

function analyzeRankingDifferences(myRanking, partnerRanking) {
    const differences = [];

    myRanking.forEach((item, myIndex) => {
        const partnerIndex = partnerRanking.indexOf(item);

        if (partnerIndex === -1) {
            return;
        }

        const gap = Math.abs(myIndex - partnerIndex);

        differences.push({
            item: item,
            gap: gap
        });
    });

    const perfectMatches = differences
        .filter(difference => difference.gap === 0)
        .map(difference => difference.item);

    const biggestGaps = differences
        .filter(difference => difference.gap > 0)
        .sort((a, b) => b.gap - a.gap)
        .slice(0, 3);

    return {
        perfectMatches: perfectMatches,
        biggestGaps: biggestGaps
    };
}

function generateCompatibilityDescription(score) {
    if (score >= 80) {
        return "Vous voyez souvent les choses de la même façon 🌵💚";
    }

    if (score >= 60) {
        return "Vous partagez beaucoup d'idées en commun.";
    }

    if (score >= 40) {
        return "Vos différences rendent vos échanges intéressants.";
    }

    return "Vous avez des visions très différentes, et c'est parfois ce qui fait la richesse d'un couple.";
}

function generateRankingInsight(analysis) {
    if (analysis.perfectMatches.length > 0) {
        return `✨ Vous êtes parfaitement d'accord sur : ${analysis.perfectMatches[0]}`;
    }

    if (analysis.biggestGaps.length > 0) {
        return `🔥 Votre plus grand écart concerne : ${analysis.biggestGaps[0].item}`;
    }

    return "🌵 Vos classements racontent une jolie dynamique.";
}

function getCompatibilityHearts(score) {
    if (score >= 95) {
        return "💚💚💚💚💚";
    }

    if (score >= 80) {
        return "💚💚💚💚🤍";
    }

    if (score >= 60) {
        return "💚💚💚🤍🤍";
    }

    if (score >= 40) {
        return "💚💚🤍🤍🤍";
    }

    if (score >= 20) {
        return "💚🤍🤍🤍🤍";
    }

    return "🤍🤍🤍🤍🤍";
}
