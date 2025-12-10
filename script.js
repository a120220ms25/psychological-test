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
    timeoutAnswers: 0
};

let unlockedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];

function startGame() {
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
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

    document.getElementById('questionNumber').textContent = `${answeredCount + 1} / ∞`;
    document.getElementById('questionText').textContent = question.question;

    const toneElement = document.getElementById('questionTone');
    toneElement.className = 'question-tone tone-' + question.tone;
    const toneLabels = { funny: '😂 搞笑', love: '💕 戀愛', dark: '🌑 暗黑' };
    toneElement.textContent = toneLabels[question.tone];

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
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = '100%';

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
            progressBar.style.width = progressWidth + '%';
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

    if (question.tone === 'dark') userStats.darkChoices++;
    if (question.tone === 'love') userStats.loveChoices++;
    if (question.tone === 'funny') userStats.funnyChoices++;

    if (selectedOption.percentage >= 90) userStats.perfectScores++;
    if (selectedOption.percentage <= 20) userStats.lowScores++;

    if (index === userStats.lastOptionIndex) {
        userStats.sameOptionStreak++;
    } else {
        userStats.sameOptionStreak = 0;
    }
    userStats.lastOptionIndex = index;

    userStats.totalAnswers++;

    checkAchievements();

    setTimeout(() => {
        showResult(selectedOption);
    }, 500);
}

function showResult(option) {
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');

    document.getElementById('resultPersonality').textContent = option.personality;
    document.getElementById('resultPercentage').textContent = option.percentage;
    document.getElementById('resultDescription').textContent = getRandomDescription(option.percentage);

    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

function getRandomDescription(percentage) {
    const descriptions = {
        high: [
            '你的直覺準到可怕，建議去買樂透',
            '這個選擇完美詮釋了你的內心',
            '恭喜你，成功暴露了真實的自己',
            '你的潛意識正在對你微笑'
        ],
        medium: [
            '還不錯，但你內心還有更多秘密',
            '你正在通往自我認識的路上',
            '這個答案透露了一些你的小心思',
            '你的選擇很有意思呢'
        ],
        low: [
            '你可能需要重新認識一下自己',
            '這個選擇...很特別',
            '你的潛意識可能在開玩笑',
            '有時候逃避也是一種選擇'
        ]
    };

    let category = 'medium';
    if (percentage >= 70) category = 'high';
    if (percentage <= 30) category = 'low';

    const list = descriptions[category];
    return list[Math.floor(Math.random() * list.length)];
}

function nextQuestion() {
    document.getElementById('resultScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');

    answeredCount++;
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
        shuffleQuestions();
    }

    showQuestion();
}

function showAchievements() {
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('achievementScreen').classList.add('active');

    const list = document.getElementById('achievementsList');
    list.innerHTML = '';

    achievements.forEach(achievement => {
        const item = document.createElement('div');
        item.className = 'achievement-item';

        if (unlockedAchievements.includes(achievement.id)) {
            item.classList.add('unlocked');
        }

        item.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-description">${achievement.description}</div>
            </div>
        `;

        list.appendChild(item);
    });
}

function hideAchievements() {
    document.getElementById('achievementScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
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
        }

        if (unlocked) {
            unlockedAchievements.push(achievement.id);
            localStorage.setItem('achievements', JSON.stringify(unlockedAchievements));
            showAchievementPopup(achievement);
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
