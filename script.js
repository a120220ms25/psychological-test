let currentQuestionIndex = 0;
let answeredCount = 0;
let progressTimer;
let progressWidth = 0;
let clickTimes = [];
let userStats = {
    fastClicks: 0,
    darkChoices: 0,
    loveChoices: 0,
    funnyChoices: 0,
    perfectScores: 0,
    lowScores: 0,
    sameOptionStreak: 0,
    lastOptionIndex: -1,
    totalAnswers: 0,
    quickAnswers: 0,
    timeoutAnswers: 0,
    consecutiveCorrect: 0,
    highScoreStreak: 0
};

let unlockedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    updateAchievementsPreview();
});

function updateAchievementsPreview() {
    const preview = document.getElementById('achievementsPreview');
    if (!preview) return;

    preview.innerHTML = '';
    const unlocked = unlockedAchievements.slice(0, 5);
    unlocked.forEach(id => {
        const ach = achievements.find(a => a.id === id);
        if (ach) {
            const pill = document.createElement('span');
            pill.className = 'ach-pill';
            pill.textContent = ach.icon + ' ' + ach.title;
            preview.appendChild(pill);
        }
    });
}

function hideAll() {
    document.getElementById('homeView').classList.add('hide');
    document.getElementById('gameView').classList.add('hide');
    document.getElementById('resultView').classList.add('hide');
    document.getElementById('achievementView').classList.add('hide');
}

function showView(viewId) {
    hideAll();
    document.getElementById(viewId).classList.remove('hide');
}

function startGame() {
    showView('gameView');
    currentQuestionIndex = 0;
    answeredCount = 0;
    shuffleQuestions();
    showQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const question = questions[currentQuestionIndex];

    document.getElementById('qcounter').textContent = `${answeredCount + 1} / ∞`;

    const questionText = document.getElementById('questionText');
    questionText.style.transition = 'all 0.3s ease';
    questionText.style.opacity = '0';

    setTimeout(() => {
        questionText.textContent = question.question;
        questionText.style.opacity = '1';
    }, 100);

    const toneBadge = document.getElementById('toneBadge');
    toneBadge.className = 'tone-badge tone-' + question.tone;
    const toneLabels = { funny: '😂 搞笑', love: '💕 戀愛', dark: '🌑 暗黑' };
    toneBadge.textContent = toneLabels[question.tone];

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    startProgressTimer();
}

function startProgressTimer() {
    progressWidth = 100;
    const progressFill = document.getElementById('timerFill');
    progressFill.style.width = '100%';

    clearInterval(progressTimer);

    const startTime = Date.now();
    const duration = 3000;

    progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = duration - elapsed;

        if (remaining <= 0) {
            clearInterval(progressTimer);
            autoSelectOption();
        } else {
            progressWidth = (remaining / duration) * 100;
            progressFill.style.width = progressWidth + '%';
        }
    }, 10);
}

function autoSelectOption() {
    const randomIndex = Math.floor(Math.random() * 4);
    selectOption(randomIndex);
    userStats.timeoutAnswers++;
}

function selectOption(index) {
    clearInterval(progressTimer);

    const clickTime = Date.now();
    clickTimes.push(clickTime);

    if (clickTimes.length > 1) {
        const timeDiff = clickTime - clickTimes[clickTimes.length - 2];
        if (timeDiff < 500) {
            userStats.fastClicks++;
        }
    } else {
        userStats.quickAnswers++;
    }

    const question = questions[currentQuestionIndex];
    const selectedOption = question.options[index];

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    buttons[index].classList.add('selected');

    // 顯示快速反饋
    showQuickFeedback(selectedOption);

    if (question.tone === 'dark') userStats.darkChoices++;
    if (question.tone === 'love') userStats.loveChoices++;
    if (question.tone === 'funny') userStats.funnyChoices++;

    if (selectedOption.percentage >= 90) {
        userStats.perfectScores++;
        userStats.highScoreStreak++;
    } else {
        userStats.highScoreStreak = 0;
    }

    if (selectedOption.percentage <= 20) userStats.lowScores++;

    if (index === userStats.lastOptionIndex) {
        userStats.sameOptionStreak++;
    } else {
        userStats.sameOptionStreak = 0;
    }
    userStats.lastOptionIndex = index;

    userStats.totalAnswers++;

    checkAchievements();

    // 直接進入下一題，不顯示結果畫面
    setTimeout(() => {
        nextQuestion();
    }, 800);
}

function showQuickFeedback(option) {
    // 在題目文字區域顯示快速反饋
    const questionText = document.getElementById('questionText');

    questionText.style.transition = 'all 0.3s ease';
    questionText.style.opacity = '0';

    setTimeout(() => {
        questionText.innerHTML = `<div style="text-align:center">
            <div style="font-size:28px;font-weight:800;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px">${option.personality}</div>
            <div style="font-size:48px;font-weight:900">${option.percentage}%</div>
        </div>`;
        questionText.style.opacity = '1';
    }, 300);
}

function showResult(option) {
    showView('resultView');

    document.getElementById('resultPersonality').textContent = option.personality;
    document.getElementById('resultPercentage').textContent = option.percentage + '%';
    document.getElementById('resultDescription').textContent = getRandomDescription(option.percentage);

    // 顯示徽章
    const badges = document.getElementById('resultBadges');
    badges.innerHTML = '';
    if (option.percentage >= 90) {
        badges.innerHTML = '<span class="ach-pill">🔥 完美!</span>';
    } else if (option.percentage >= 70) {
        badges.innerHTML = '<span class="ach-pill">✨ 很準!</span>';
    }
}

function getRandomDescription(percentage) {
    const descriptions = {
        high: [
            '你的直覺準到可怕，建議去買樂透',
            '這個選擇完美詮釋了你的內心',
            '恭喜你，成功暴露了真實的自己',
            '你的潛意識正在對你微笑',
            '這就是你內心最真實的聲音',
            '你對自己的了解程度：滿分'
        ],
        medium: [
            '還不錯，但你內心還有更多秘密',
            '你正在通往自我認識的路上',
            '這個答案透露了一些你的小心思',
            '你的選擇很有意思呢',
            '你在逃避什麼嗎？',
            '有點意思，繼續探索吧'
        ],
        low: [
            '你可能需要重新認識一下自己',
            '這個選擇...很特別',
            '你的潛意識可能在開玩笑',
            '有時候逃避也是一種選擇',
            '勇氣可嘉，但方向好像不太對',
            '你是不是隨便選的？'
        ]
    };

    let category = 'medium';
    if (percentage >= 70) category = 'high';
    if (percentage <= 30) category = 'low';

    const list = descriptions[category];
    return list[Math.floor(Math.random() * list.length)];
}

function nextQuestion() {
    answeredCount++;
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
        shuffleQuestions();
    }

    showQuestion();
}

function showAchievements() {
    showView('achievementView');

    const list = document.getElementById('achievementsList');
    list.innerHTML = '';

    achievements.forEach(achievement => {
        const item = document.createElement('div');
        item.className = 'achievement-item';

        if (unlockedAchievements.includes(achievement.id)) {
            item.classList.add('unlocked');
        }

        item.innerHTML = `
            <div class="icon">${achievement.icon}</div>
            <div class="info">
                <div class="title">${achievement.title}</div>
                <div class="desc">${achievement.description}</div>
            </div>
        `;

        list.appendChild(item);
    });
}

function hideAchievements() {
    showView('homeView');
}

function checkAchievements() {
    achievements.forEach(achievement => {
        if (unlockedAchievements.includes(achievement.id)) return;

        let unlocked = false;

        switch (achievement.condition) {
            case 'fast_click_20':
                if (userStats.fastClicks >= 20) unlocked = true;
                break;
            case 'dark_lover_10':
                if (userStats.darkChoices >= 10) unlocked = true;
                break;
            case 'love_expert_15':
                if (userStats.loveChoices >= 15) unlocked = true;
                break;
            case 'funny_master_15':
                if (userStats.funnyChoices >= 15) unlocked = true;
                break;
            case 'perfect_5':
                if (userStats.perfectScores >= 5) unlocked = true;
                break;
            case 'brave_soul_5':
                if (userStats.lowScores >= 5) unlocked = true;
                break;
            case 'robot_mode_5':
                if (userStats.sameOptionStreak >= 5) unlocked = true;
                break;
            case 'explorer_50':
                if (userStats.totalAnswers >= 50) unlocked = true;
                break;
            case 'speed_demon_10':
                if (userStats.quickAnswers >= 10) unlocked = true;
                break;
            case 'lazy_king_10':
                if (userStats.timeoutAnswers >= 10) unlocked = true;
                break;
            case 'streaker_5':
                if (userStats.highScoreStreak >= 5) unlocked = true;
                break;
            case 'master_100':
                if (userStats.totalAnswers >= 100) unlocked = true;
                break;
            case 'all_dark_20':
                if (userStats.darkChoices >= 20) unlocked = true;
                break;
            case 'all_love_25':
                if (userStats.loveChoices >= 25) unlocked = true;
                break;
            case 'all_funny_25':
                if (userStats.funnyChoices >= 25) unlocked = true;
                break;
        }

        if (unlocked) {
            unlockedAchievements.push(achievement.id);
            localStorage.setItem('achievements', JSON.stringify(unlockedAchievements));
            showAchievementPopup(achievement);
            updateAchievementsPreview();
        }
    });
}

function showAchievementPopup(achievement) {
    const popup = document.getElementById('achievementPopup');
    document.getElementById('popupTitle').textContent = achievement.title;
    document.getElementById('popupDescription').textContent = achievement.description;

    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

function shareToIG() {
    const text = encodeURIComponent(`我在心理測驗中解鎖了 ${unlockedAchievements.length} 個成就！你也來試試吧！`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.instagram.com/create/story/?url=${url}&text=${text}`, '_blank');
}

function shareToLine() {
    const text = encodeURIComponent(`我在心理測驗中解鎖了 ${unlockedAchievements.length} 個成就！你也來試試吧！ ${window.location.href}`);
    window.open(`https://line.me/R/share?text=${text}`, '_blank');
}
