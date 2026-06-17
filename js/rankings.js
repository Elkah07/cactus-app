function loadRanking(ranking) {
    rankingTitle.textContent = ranking.title;

    rankingList.innerHTML = "";

    ranking.items.forEach((item) => {
        const li = document.createElement("li");

        const itemText = document.createElement("span");
        itemText.classList.add("ranking-item-text");
        itemText.textContent = item;

        const actions = document.createElement("div");
        actions.classList.add("ranking-actions");

        const upBtn = document.createElement("button");
        upBtn.type = "button";
        upBtn.classList.add("move-btn");
        upBtn.textContent = "↑";

        const downBtn = document.createElement("button");
        downBtn.type = "button";
        downBtn.classList.add("move-btn");
        downBtn.textContent = "↓";

        actions.appendChild(upBtn);
        actions.appendChild(downBtn);

        li.appendChild(itemText);
        li.appendChild(actions);

        li.setAttribute("draggable", "true");

        li.addEventListener("dragstart", () => {
            draggedItem = li;
            li.classList.add("dragging");
        });

        li.addEventListener("dragover", (event) => {
            event.preventDefault();
            li.classList.add("drag-over");
        });

        li.addEventListener("dragleave", () => {
            li.classList.remove("drag-over");
        });

        li.addEventListener("drop", (event) => {
            event.preventDefault();
            li.classList.remove("drag-over");

            if (!draggedItem || draggedItem === li) {
                return;
            }

            swapItems(draggedItem, li);
            updateRankingNumbers();
        });

        li.addEventListener("dragend", () => {
            if (draggedItem) {
                draggedItem.classList.remove("dragging");
            }

            draggedItem = null;

            const allItems = rankingList.querySelectorAll("li");
            allItems.forEach((item) => {
                item.classList.remove("drag-over");
            });

            updateRankingNumbers();
        });

        upBtn.addEventListener("click", () => {
            const previous = li.previousElementSibling;

            if (previous) {
                swapItems(li, previous);
                updateRankingNumbers();
            }
        });

        downBtn.addEventListener("click", () => {
            const next = li.nextElementSibling;

            if (next) {
                swapItems(li, next);
                updateRankingNumbers();
            }
        });

        rankingList.appendChild(li);
    });

    updateRankingNumbers();
}

function swapItems(itemA, itemB) {
    const textA = itemA.querySelector(".ranking-item-text").textContent;
    const textB = itemB.querySelector(".ranking-item-text").textContent;

    itemA.querySelector(".ranking-item-text").textContent = textB;
    itemB.querySelector(".ranking-item-text").textContent = textA;
}

function updateRankingNumbers() {
    const items = rankingList.querySelectorAll("li");

    items.forEach((item, index) => {
        if (index === 0) {
            item.dataset.rank = "🥇";
        } else if (index === 1) {
            item.dataset.rank = "🥈";
        } else if (index === 2) {
            item.dataset.rank = "🥉";
        } else {
            item.dataset.rank = index + 1;
        }

        item.classList.remove(
            "rank-1",
            "rank-2",
            "rank-3",
            "rank-4",
            "rank-5",
            "rank-6",
            "rank-7",
            "rank-8",
            "rank-9",
            "rank-10"
        );

        item.classList.add(`rank-${index + 1}`);
    });
}

function showRankingResult() {
    showScreen("rankingResult");
}