function generateSpaceCode() {
    const randomNumber = Math.floor(
        1000 + Math.random() * 9000
    );

    return `CACTUS-${randomNumber}`;
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
    if (score >= 90) {
        return "🌵 Connexion parfaite";
    }

    if (score >= 75) {
        return "💚 Très compatibles";
    }

    if (score >= 60) {
        return "😊 Plutôt alignés";
    }

    if (score >= 40) {
        return "🤔 Quelques différences";
    }

    return "🌋 Deux visions très différentes";
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
