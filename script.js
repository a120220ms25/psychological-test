let currentTestType = ''; // 'wealth' or 'investor'
let currentQuestionIndex = 0;
let answeredCount = 0;
let totalScore = 0;
let typeScores = {}; // 用於投資名人類型計分

function hideAll() {
    document.getElementById('homeView').classList.add('hide');
    document.getElementById('gameView').classList.add('hide');
    document.getElementById('resultView').classList.add('hide');
}

function showView(viewId) {
    hideAll();
    document.getElementById(viewId).classList.remove('hide');

    // 控制首頁按鈕顯示
    const homeButton = document.getElementById('homeButton');
    if (viewId === 'homeView') {
        homeButton.style.display = 'none';
    } else {
        homeButton.style.display = 'block';
    }
}

function startWealthTest() {
    currentTestType = 'wealth';
    startGame();
}

function startInvestorTest() {
    currentTestType = 'investor';
    startGame();
}

function startGame() {
    showView('gameView');
    currentQuestionIndex = 0;
    answeredCount = 0;
    totalScore = 0;
    typeScores = {};

    const questions = currentTestType === 'wealth' ? wealthLevelQuestions : investorTypeQuestions;
    shuffleQuestions(questions);
    showQuestion();
}

function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const questions = currentTestType === 'wealth' ? wealthLevelQuestions : investorTypeQuestions;
    const question = questions[currentQuestionIndex];

    // 更新進度顯示（不再顯示計時條）
    document.getElementById('qcounter').textContent = `${answeredCount + 1} / ${questions.length}`;

    const questionText = document.getElementById('questionText');
    questionText.style.transition = 'all 0.3s ease';
    questionText.style.opacity = '0';

    setTimeout(() => {
        questionText.textContent = question.question;
        questionText.style.opacity = '1';
    }, 100);

    // 隱藏類型徽章
    const toneBadge = document.getElementById('toneBadge');
    toneBadge.style.display = 'none';

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'pure-button option-btn';
        btn.textContent = option.text;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index) {
    const questions = currentTestType === 'wealth' ? wealthLevelQuestions : investorTypeQuestions;
    const question = questions[currentQuestionIndex];
    const selectedOption = question.options[index];

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    buttons[index].classList.add('selected');

    // 計分
    if (currentTestType === 'wealth') {
        totalScore += selectedOption.score;
    } else {
        // 投資名人類型計分
        const type = selectedOption.type;
        typeScores[type] = (typeScores[type] || 0) + 1;
    }

    // 直接進入下一題或顯示結果
    setTimeout(() => {
        answeredCount++;
        currentQuestionIndex++;

        if (currentQuestionIndex >= questions.length) {
            // 測驗完成，顯示結果
            showFinalResult();
        } else {
            // 下一題
            showQuestion();
        }
    }, 300);
}

function showQuickFeedback(option) {
    const questionText = document.getElementById('questionText');

    questionText.style.transition = 'all 0.3s ease';
    questionText.style.opacity = '0';

    setTimeout(() => {
        if (currentTestType === 'wealth') {
            questionText.innerHTML = `<div style="text-align:center">
                <div style="font-size:28px;font-weight:800;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px">${option.level}</div>
                <div style="font-size:48px;font-weight:900">✓</div>
            </div>`;
        } else {
            questionText.innerHTML = `<div style="text-align:center">
                <div style="font-size:28px;font-weight:800;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px">${option.type}型</div>
                <div style="font-size:48px;font-weight:900">✓</div>
            </div>`;
        }
        questionText.style.opacity = '1';
    }, 300);
}

function showFinalResult() {
    showView('resultView');

    const resultCard = document.getElementById('resultCard');

    if (currentTestType === 'wealth') {
        // 計算財富等級
        const questions = wealthLevelQuestions;
        const maxScore = questions.length * 4; // 每題最高4分
        const percentage = Math.round((totalScore / maxScore) * 100);

        // 找出對應的等級
        let level = null;
        for (const value of Object.values(wealthLevels)) {
            if (percentage >= value.range[0] && percentage <= value.range[1]) {
                level = value;
                break;
            }
        }

        resultCard.innerHTML = `
            <div style="text-align:center">
                <div style="font-size:64px;margin-bottom:16px">${level.emoji}</div>
                <h2 style="font-size:32px;font-weight:900;margin-bottom:8px">${level.title}</h2>
                <div style="font-size:48px;font-weight:900;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:16px">${percentage} 分</div>

                <!-- 進度條 -->
                <div style="background:rgba(255,255,255,0.05);border-radius:12px;height:24px;margin-bottom:24px;overflow:hidden;position:relative">
                    <div style="background:linear-gradient(90deg,var(--accent),var(--accent2));height:100%;width:${percentage}%;transition:width 1s ease;border-radius:12px"></div>
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:12px;font-weight:700;color:white;text-shadow:0 2px 4px rgba(0,0,0,0.3)">財富自由進度</div>
                </div>

                <p style="font-size:16px;line-height:1.8;margin-bottom:24px;color:var(--text-secondary)">${level.description}</p>

                <!-- 建議卡片 -->
                <div style="background:var(--surface);padding:20px;border-radius:12px;margin-bottom:16px;border-left:4px solid var(--accent)">
                    <div style="font-size:14px;font-weight:700;color:var(--accent);margin-bottom:8px">💡 理財建議</div>
                    <p style="font-size:14px;line-height:1.8;color:var(--text-secondary)">${level.advice}</p>
                </div>

                <!-- 等級對照表 -->
                <div style="background:rgba(255,255,255,0.02);padding:16px;border-radius:12px;margin-bottom:24px">
                    <div style="font-size:13px;color:var(--muted);margin-bottom:12px">財富等級對照表</div>
                    <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);gap:4px">
                        <div style="text-align:center;flex:1;${percentage <= 20 ? 'opacity:1;color:var(--accent)' : 'opacity:0.4'}">
                            <div style="margin-bottom:4px">😭</div>
                            <div>吃土</div>
                        </div>
                        <div style="text-align:center;flex:1;${percentage > 20 && percentage <= 40 ? 'opacity:1;color:var(--accent)' : 'opacity:0.4'}">
                            <div style="margin-bottom:4px">💸</div>
                            <div>月光</div>
                        </div>
                        <div style="text-align:center;flex:1;${percentage > 40 && percentage <= 60 ? 'opacity:1;color:var(--accent)' : 'opacity:0.4'}">
                            <div style="margin-bottom:4px">💰</div>
                            <div>小資</div>
                        </div>
                        <div style="text-align:center;flex:1;${percentage > 60 && percentage <= 80 ? 'opacity:1;color:var(--accent)' : 'opacity:0.4'}">
                            <div style="margin-bottom:4px">📈</div>
                            <div>高手</div>
                        </div>
                        <div style="text-align:center;flex:1;${percentage > 80 ? 'opacity:1;color:var(--accent)' : 'opacity:0.4'}">
                            <div style="margin-bottom:4px">🏝️</div>
                            <div>自由</div>
                        </div>
                    </div>
                </div>

                <div class="result-actions">
                    <button class="pure-button btn primary" onclick="showView('homeView')">返回首頁</button>
                    <button class="pure-button btn" onclick="startWealthTest()">再測一次</button>
                    <button class="pure-button btn" onclick="startInvestorTest()">測投資名人</button>
                </div>

                <!-- 分享按鈕 -->
                <div class="share-section" style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.1)">
                    <div style="text-align:center;margin-bottom:12px;color:var(--muted);font-size:14px">分享你的結果</div>
                    <div style="display:flex;gap:8px;justify-content:center">
                        <button class="pure-button share-btn" onclick="shareToIG()">📸 分享到 IG</button>
                        <button class="pure-button share-btn" onclick="copyLink()">🔗 複製連結</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        // 找出最多的投資名人類型
        let maxCount = 0;
        let investorType = '';
        for (const [type, count] of Object.entries(typeScores)) {
            if (count > maxCount) {
                maxCount = count;
                investorType = type;
            }
        }

        const investor = investorTypes[investorType];

        const matchPercentage = Math.round((maxCount / investorTypeQuestions.length) * 100);

        resultCard.innerHTML = `
            <div style="text-align:center">
                <div style="font-size:64px;margin-bottom:16px">${investor.emoji}</div>
                <h2 style="font-size:32px;font-weight:900;margin-bottom:8px">${investor.title}</h2>
                <div style="font-size:24px;font-weight:700;color:var(--accent);margin-bottom:16px">匹配度：${matchPercentage}%</div>

                <!-- 匹配度進度條 -->
                <div style="background:rgba(255,255,255,0.05);border-radius:12px;height:24px;margin-bottom:24px;overflow:hidden;position:relative">
                    <div style="background:linear-gradient(90deg,var(--accent),var(--accent2));height:100%;width:${matchPercentage}%;transition:width 1s ease;border-radius:12px"></div>
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:12px;font-weight:700;color:white;text-shadow:0 2px 4px rgba(0,0,0,0.3)">投資風格相似度</div>
                </div>

                <p style="font-size:16px;line-height:1.8;margin-bottom:24px;color:var(--text-secondary)">${investor.description}</p>

                <!-- 投資風格卡片 -->
                <div style="background:var(--surface);padding:20px;border-radius:12px;margin-bottom:16px;border-left:4px solid var(--accent)">
                    <div style="font-size:14px;font-weight:700;color:var(--accent);margin-bottom:8px">📊 投資風格分析</div>
                    <p style="font-size:14px;line-height:1.8;color:var(--text-secondary)">${investor.style}</p>
                </div>

                <!-- 經典語錄 -->
                <div style="background:rgba(255,255,255,0.02);padding:20px;border-radius:12px;margin-bottom:24px;border-left:4px solid var(--accent2)">
                    <div style="font-size:14px;font-weight:700;color:var(--accent2);margin-bottom:8px">💬 經典語錄</div>
                    <p style="font-size:14px;line-height:1.8;font-style:italic;color:var(--text-secondary)">${investor.quote}</p>
                </div>

                <!-- 所有類型對照 -->
                <div style="background:rgba(255,255,255,0.02);padding:16px;border-radius:12px;margin-bottom:24px">
                    <div style="font-size:13px;color:var(--muted);margin-bottom:12px">投資名人類型</div>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:11px">
                        ${['巴菲特', '索羅斯', '馬斯克', '彼得林奇', '孫正義', '雷達里奧'].map(type => `
                            <div style="text-align:center;padding:8px;border-radius:8px;${investorType === type ? 'background:var(--accent);color:white' : 'background:rgba(255,255,255,0.05);color:var(--muted)'}">
                                ${investorTypes[type]?.emoji || ''}<br>${type}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="result-actions">
                    <button class="pure-button btn primary" onclick="showView('homeView')">返回首頁</button>
                    <button class="pure-button btn" onclick="startInvestorTest()">再測一次</button>
                    <button class="pure-button btn" onclick="startWealthTest()">測財富等級</button>
                </div>

                <!-- 分享按鈕 -->
                <div class="share-section" style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.1)">
                    <div style="text-align:center;margin-bottom:12px;color:var(--muted);font-size:14px">分享你的結果</div>
                    <div style="display:flex;gap:8px;justify-content:center">
                        <button class="pure-button share-btn" onclick="shareToIG()">📸 分享到 IG</button>
                        <button class="pure-button share-btn" onclick="copyLink()">🔗 複製連結</button>
                    </div>
                </div>
            </div>
        `;
    }
}

function nextQuestion() {
    answeredCount++;
    currentQuestionIndex++;

    const questions = currentTestType === 'wealth' ? wealthLevelQuestions : investorTypeQuestions;

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
        shuffleQuestions(questions);
    }

    showQuestion();
}

// 分享到 IG
async function shareToIG() {
    // 顯示載入提示
    const originalBtn = event.target;
    const originalText = originalBtn.textContent;
    originalBtn.textContent = '📸 製作中...';
    originalBtn.disabled = true;

    try {
        // 取得結果卡片元素
        const resultCard = document.getElementById('resultCard');

        // 使用 html2canvas 截圖
        const canvas = await html2canvas(resultCard, {
            backgroundColor: '#0b1220',
            scale: 2, // 提高解析度
            logging: false,
            useCORS: true
        });

        // 將 canvas 轉成 blob
        canvas.toBlob(async (blob) => {
            // 準備分享的檔案
            const file = new File([blob], '財富自由測驗結果.png', { type: 'image/png' });

            // 檢查是否支援 Web Share API
            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                // 使用 Web Share API 分享
                try {
                    await navigator.share({
                        files: [file],
                        title: '財富自由測驗結果',
                        text: '我剛測完財富自由測驗！快來測測你的財富力 💰📈'
                    });
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        console.log('分享取消或失敗', err);
                    }
                }
            } else {
                // 不支援 Web Share API，下載圖片
                const url = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = '財富自由測驗結果.png';
                link.href = url;
                link.click();

                // 提示用戶
                setTimeout(() => {
                    alert('📸 圖片已下載！\n請到相簿找到圖片，然後上傳到 IG 限時動態～');
                }, 500);
            }

            // 恢復按鈕
            originalBtn.textContent = originalText;
            originalBtn.disabled = false;
        }, 'image/png');

    } catch (error) {
        console.error('截圖失敗:', error);
        alert('❌ 截圖失敗，請稍後再試');

        // 恢復按鈕
        originalBtn.textContent = originalText;
        originalBtn.disabled = false;
    }
}

// 複製連結
function copyLink() {
    const url = window.location.href;

    // 使用 Clipboard API 複製連結
    navigator.clipboard.writeText(url).then(() => {
        // 複製成功，顯示提示
        alert('✅ 連結已複製！快分享給朋友吧～');
    }).catch(() => {
        // 如果 Clipboard API 不支援，使用舊方法
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('✅ 連結已複製！快分享給朋友吧～');
        } catch (err) {
            alert('❌ 複製失敗，請手動複製網址');
        }
        document.body.removeChild(textArea);
    });
}
