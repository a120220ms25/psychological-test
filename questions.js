const questions = [
    {
        question: "凌晨三點，你突然醒來，第一個想做的事是？",
        options: [
            { text: "滑手機看迷因", personality: "網路中毒者", percentage: 87 },
            { text: "思考人生意義", personality: "深夜哲學家", percentage: 45 },
            { text: "吃泡麵", personality: "夜間覓食者", percentage: 72 },
            { text: "繼續睡", personality: "睡眠冠軍", percentage: 34 }
        ],
        tone: "funny"
    },
    {
        question: "如果你的前任傳訊息說「我想你了」，你會？",
        options: [
            { text: "秒讀不回", personality: "冷血動物", percentage: 91 },
            { text: "回「我也是」", personality: "復合預備軍", percentage: 56 },
            { text: "截圖傳給朋友", personality: "八卦王", percentage: 78 },
            { text: "封鎖", personality: "果斷決絕者", percentage: 82 }
        ],
        tone: "love"
    },
    {
        question: "你發現室友偷吃你的食物，你會？",
        options: [
            { text: "在食物裡加辣椒", personality: "復仇女神", percentage: 88 },
            { text: "假裝沒發現", personality: "和平主義者", percentage: 23 },
            { text: "貼恐嚇便條", personality: "心理戰大師", percentage: 76 },
            { text: "直接對質", personality: "正義使者", percentage: 64 }
        ],
        tone: "dark"
    },
    {
        question: "如果可以讀心，你最想知道誰的想法？",
        options: [
            { text: "暗戀對象", personality: "戀愛腦", percentage: 85 },
            { text: "老闆", personality: "職場野心家", percentage: 58 },
            { text: "寵物", personality: "毛孩奴", percentage: 71 },
            { text: "自己", personality: "自我探索者", percentage: 42 }
        ],
        tone: "funny"
    },
    {
        question: "約會遲到一小時，對方的理由你最能接受哪個？",
        options: [
            { text: "救了一隻貓", personality: "善良傻白甜", percentage: 67 },
            { text: "睡過頭", personality: "真實系戀人", percentage: 44 },
            { text: "挑禮物給你", personality: "浪漫主義者", percentage: 89 },
            { text: "都不能接受", personality: "時間掌控狂", percentage: 76 }
        ],
        tone: "love"
    },
    {
        question: "你在電梯裡遇到討厭的人，你會？",
        options: [
            { text: "假裝滑手機", personality: "社恐大師", percentage: 83 },
            { text: "尷尬微笑", personality: "表面功夫王", percentage: 52 },
            { text: "立刻出去", personality: "逃避專家", percentage: 71 },
            { text: "主動打招呼", personality: "社交牛逼症", percentage: 28 }
        ],
        tone: "dark"
    },
    {
        question: "朋友突然問你借10萬，你會？",
        options: [
            { text: "問清楚用途", personality: "謹慎理財者", percentage: 79 },
            { text: "裝窮", personality: "求生專家", percentage: 92 },
            { text: "借一半", personality: "折中主義者", percentage: 55 },
            { text: "直接拒絕", personality: "界線分明者", percentage: 68 }
        ],
        tone: "funny"
    },
    {
        question: "如果你能隱形24小時，你會去哪？",
        options: [
            { text: "暗戀對象家", personality: "變態跟蹤狂", percentage: 73 },
            { text: "銀行金庫", personality: "潛在罪犯", percentage: 61 },
            { text: "演唱會VIP區", personality: "追星族", percentage: 84 },
            { text: "待在家", personality: "社恐晚期", percentage: 47 }
        ],
        tone: "dark"
    },
    {
        question: "收到前任的結婚喜帖，你的反應是？",
        options: [
            { text: "包大紅包", personality: "大器之人", percentage: 38 },
            { text: "不去不包", personality: "真性情者", percentage: 81 },
            { text: "去現場鬧場", personality: "瘋批本人", percentage: 66 },
            { text: "哭一整晚", personality: "玻璃心戰士", percentage: 54 }
        ],
        tone: "love"
    },
    {
        question: "發現另一半劈腿，你會先做什麼？",
        options: [
            { text: "收集證據", personality: "法律系高材生", percentage: 88 },
            { text: "立刻分手", personality: "果斷派", percentage: 75 },
            { text: "找小三對質", personality: "戰鬥民族", percentage: 82 },
            { text: "假裝不知道", personality: "鴕鳥心態", percentage: 31 }
        ],
        tone: "dark"
    },
    {
        question: "你最喜歡的約會地點是？",
        options: [
            { text: "電影院", personality: "經典浪漫派", percentage: 69 },
            { text: "家裡沙發", personality: "宅居戀愛者", percentage: 77 },
            { text: "遊樂園", personality: "青春活力派", percentage: 85 },
            { text: "墓地", personality: "黑暗系戀人", percentage: 42 }
        ],
        tone: "love"
    },
    {
        question: "如果世界末日只剩一天，你會？",
        options: [
            { text: "告白", personality: "勇敢追愛者", percentage: 86 },
            { text: "吃遍美食", personality: "美食主義者", percentage: 74 },
            { text: "睡大覺", personality: "睡神", percentage: 58 },
            { text: "搶銀行", personality: "末日暴徒", percentage: 63 }
        ],
        tone: "funny"
    },
    {
        question: "你覺得最浪漫的事是？",
        options: [
            { text: "雨中接吻", personality: "偶像劇中毒", percentage: 81 },
            { text: "一起吃泡麵", personality: "平凡幸福派", percentage: 72 },
            { text: "對方記得你的小習慣", personality: "細節控", percentage: 93 },
            { text: "給你錢", personality: "現實主義者", percentage: 56 }
        ],
        tone: "love"
    },
    {
        question: "遇到排隊插隊的人，你會？",
        options: [
            { text: "大聲斥責", personality: "正義戰士", percentage: 68 },
            { text: "小聲抱怨", personality: "慫包", percentage: 44 },
            { text: "也跟著插隊", personality: "同流合污者", percentage: 71 },
            { text: "錄影PO網", personality: "網路公審者", percentage: 85 }
        ],
        tone: "dark"
    },
    {
        question: "你最想要的超能力是？",
        options: [
            { text: "時光倒流", personality: "後悔大王", percentage: 79 },
            { text: "讀心術", personality: "控制狂", percentage: 87 },
            { text: "隱形", personality: "偷窺慾患者", percentage: 64 },
            { text: "飛行", personality: "自由靈魂", percentage: 52 }
        ],
        tone: "funny"
    },
    {
        question: "如果可以刪除一段記憶，你會選？",
        options: [
            { text: "失戀", personality: "情傷患者", percentage: 83 },
            { text: "尷尬時刻", personality: "社恐晚期", percentage: 76 },
            { text: "不想刪除", personality: "珍惜過往者", percentage: 48 },
            { text: "所有記憶", personality: "厭世者", percentage: 61 }
        ],
        tone: "dark"
    },
    {
        question: "理想的求婚場景是？",
        options: [
            { text: "海邊夕陽", personality: "浪漫至上", percentage: 88 },
            { text: "家裡床上", personality: "實際派", percentage: 67 },
            { text: "迪士尼", personality: "童話夢想家", percentage: 75 },
            { text: "不想結婚", personality: "單身萬歲", percentage: 54 }
        ],
        tone: "love"
    },
    {
        question: "朋友找你吐苦水三小時，你會？",
        options: [
            { text: "認真傾聽", personality: "天使好友", percentage: 71 },
            { text: "敷衍附和", personality: "假面朋友", percentage: 58 },
            { text: "直接睡著", personality: "社交電量歸零", percentage: 82 },
            { text: "反過來吐苦水", personality: "互相傷害", percentage: 69 }
        ],
        tone: "funny"
    },
    {
        question: "你會為了愛情放棄什麼？",
        options: [
            { text: "事業", personality: "愛情至上主義", percentage: 64 },
            { text: "朋友", personality: "重色輕友者", percentage: 52 },
            { text: "什麼都不放棄", personality: "理性戀愛者", percentage: 86 },
            { text: "自尊", personality: "戀愛腦晚期", percentage: 41 }
        ],
        tone: "love"
    },
    {
        question: "發現公司機密，你會？",
        options: [
            { text: "告訴老闆", personality: "忠臣", percentage: 73 },
            { text: "賣給對手", personality: "商業間諜", percentage: 59 },
            { text: "假裝不知道", personality: "明哲保身", percentage: 67 },
            { text: "PO上網", personality: "網路勇者", percentage: 78 }
        ],
        tone: "dark"
    },
    {
        question: "你覺得最好的分手方式是？",
        options: [
            { text: "面對面說清楚", personality: "成熟大人", percentage: 81 },
            { text: "傳訊息", personality: "現代人", percentage: 64 },
            { text: "冷暴力", personality: "情感殺手", percentage: 47 },
            { text: "失蹤", personality: "人間蒸發", percentage: 55 }
        ],
        tone: "love"
    },
    {
        question: "週末最想做的事？",
        options: [
            { text: "睡到自然醒", personality: "睡眠愛好者", percentage: 89 },
            { text: "出門玩", personality: "活力派", percentage: 72 },
            { text: "在家追劇", personality: "沙發馬鈴薯", percentage: 85 },
            { text: "加班", personality: "工作狂", percentage: 38 }
        ],
        tone: "funny"
    },
    {
        question: "如果能重來一次，你想改變什麼？",
        options: [
            { text: "選科系", personality: "職涯迷惘者", percentage: 76 },
            { text: "沒跟某人在一起", personality: "情感後悔者", percentage: 68 },
            { text: "一切都不改", personality: "無悔人生", percentage: 54 },
            { text: "投胎", personality: "厭世專家", percentage: 81 }
        ],
        tone: "dark"
    },
    {
        question: "你覺得愛情的保鮮期是？",
        options: [
            { text: "三個月", personality: "速食戀愛", percentage: 62 },
            { text: "一年", personality: "現實主義", percentage: 71 },
            { text: "永遠", personality: "永恆信仰者", percentage: 84 },
            { text: "沒有愛情", personality: "愛情絕緣體", percentage: 49 }
        ],
        tone: "love"
    },
    {
        question: "你最害怕失去什麼？",
        options: [
            { text: "自由", personality: "自由鬥士", percentage: 87 },
            { text: "金錢", personality: "現實派", percentage: 73 },
            { text: "愛人", personality: "深情者", percentage: 79 },
            { text: "自我", personality: "哲學家", percentage: 56 }
        ],
        tone: "dark"
    },
    {
        question: "如果有讀心術，你會用在？",
        options: [
            { text: "考試", personality: "實用主義", percentage: 82 },
            { text: "賭博", personality: "投機者", percentage: 69 },
            { text: "了解別人", personality: "心理學家", percentage: 75 },
            { text: "不想要", personality: "尊重隱私者", percentage: 48 }
        ],
        tone: "funny"
    },
    {
        question: "看到喜歡的人跟別人曖昧，你會？",
        options: [
            { text: "立刻告白", personality: "勇者", percentage: 86 },
            { text: "默默祝福", personality: "聖人", percentage: 52 },
            { text: "破壞他們", personality: "黑化者", percentage: 77 },
            { text: "放棄", personality: "懦夫", percentage: 63 }
        ],
        tone: "love"
    },
    {
        question: "你認為人性本質是？",
        options: [
            { text: "善良", personality: "樂觀派", percentage: 44 },
            { text: "邪惡", personality: "悲觀派", percentage: 71 },
            { text: "自私", personality: "現實派", percentage: 88 },
            { text: "複雜", personality: "哲學家", percentage: 65 }
        ],
        tone: "dark"
    },
    {
        question: "最能打動你的情話是？",
        options: [
            { text: "我愛你", personality: "簡單派", percentage: 69 },
            { text: "我養你", personality: "安全感需求", percentage: 82 },
            { text: "我懂你", personality: "靈魂伴侶渴望", percentage: 91 },
            { text: "我等你", personality: "浪漫主義", percentage: 76 }
        ],
        tone: "love"
    },
    {
        question: "如果能預知未來，你最想知道？",
        options: [
            { text: "何時死", personality: "死亡哲學家", percentage: 58 },
            { text: "會不會發財", personality: "拜金主義", percentage: 74 },
            { text: "真愛是誰", personality: "戀愛腦", percentage: 81 },
            { text: "不想知道", personality: "活在當下派", percentage: 67 }
        ],
        tone: "funny"
    },
    {
        question: "你覺得最孤獨的時刻是？",
        options: [
            { text: "一個人吃飯", personality: "社交依賴", percentage: 72 },
            { text: "想分享但沒人聽", personality: "被忽視恐懼", percentage: 89 },
            { text: "人群中", personality: "孤獨患者", percentage: 85 },
            { text: "不覺得孤獨", personality: "獨行俠", percentage: 54 }
        ],
        tone: "dark"
    },
    {
        question: "如果可以穿越時空，你想見誰？",
        options: [
            { text: "過世的親人", personality: "念舊之人", percentage: 77 },
            { text: "歷史名人", personality: "知識追求者", percentage: 64 },
            { text: "小時候的自己", personality: "自我療癒者", percentage: 91 },
            { text: "未來的自己", personality: "焦慮規劃師", percentage: 58 }
        ],
        tone: "funny"
    },
    {
        question: "你的理想伴侶特質是？",
        options: [
            { text: "有錢", personality: "實際主義者", percentage: 67 },
            { text: "帥/美", personality: "顏控", percentage: 55 },
            { text: "聊得來", personality: "靈魂知己派", percentage: 92 },
            { text: "聽話", personality: "控制慾強者", percentage: 43 }
        ],
        tone: "love"
    },
    {
        question: "半夜聽到奇怪聲音，你會？",
        options: [
            { text: "躲在被子裡", personality: "膽小鬼", percentage: 74 },
            { text: "拿武器查看", personality: "勇士", percentage: 81 },
            { text: "裝睡", personality: "逃避專家", percentage: 66 },
            { text: "報警", personality: "求救王", percentage: 52 }
        ],
        tone: "dark"
    },
    {
        question: "你最想改變自己的什麼？",
        options: [
            { text: "外表", personality: "外貌焦慮者", percentage: 69 },
            { text: "個性", personality: "自我否定者", percentage: 78 },
            { text: "能力", personality: "上進青年", percentage: 85 },
            { text: "都不想改", personality: "自我接納者", percentage: 93 }
        ],
        tone: "funny"
    },
    {
        question: "如果另一半說要分手，你會？",
        options: [
            { text: "問原因", personality: "理性派", percentage: 76 },
            { text: "哭著挽留", personality: "感性派", percentage: 62 },
            { text: "立刻答應", personality: "自尊至上", percentage: 84 },
            { text: "威脅報復", personality: "瘋批預備軍", percentage: 48 }
        ],
        tone: "love"
    },
    {
        question: "你覺得人活著最重要的是？",
        options: [
            { text: "快樂", personality: "享樂主義", percentage: 88 },
            { text: "成功", personality: "野心家", percentage: 71 },
            { text: "被愛", personality: "缺愛患者", percentage: 65 },
            { text: "自由", personality: "靈魂自由者", percentage: 79 }
        ],
        tone: "dark"
    },
    {
        question: "朋友跟你借錢不還，你會？",
        options: [
            { text: "直接討", personality: "直率派", percentage: 82 },
            { text: "暗示提醒", personality: "委婉派", percentage: 67 },
            { text: "算了", personality: "好人卡收集者", percentage: 54 },
            { text: "絕交", personality: "原則至上", percentage: 73 }
        ],
        tone: "funny"
    },
    {
        question: "你最想對前任說什麼？",
        options: [
            { text: "謝謝你", personality: "感恩之人", percentage: 76 },
            { text: "去死", personality: "怨念深重", percentage: 58 },
            { text: "我還愛你", personality: "放不下星人", percentage: 69 },
            { text: "什麼都不說", personality: "釋懷者", percentage: 91 }
        ],
        tone: "love"
    },
    {
        question: "如果可以詛咒一個人，你會選？",
        options: [
            { text: "傷害過我的人", personality: "復仇者", percentage: 83 },
            { text: "討厭的同事", personality: "職場黑化", percentage: 71 },
            { text: "前任的新歡", personality: "嫉妒魔人", percentage: 64 },
            { text: "不想詛咒人", personality: "善良天使", percentage: 47 }
        ],
        tone: "dark"
    },
    {
        question: "你覺得什麼樣的謊言可以接受？",
        options: [
            { text: "善意的謊言", personality: "實用主義", percentage: 85 },
            { text: "保護別人的謊言", personality: "守護者", percentage: 79 },
            { text: "所有謊言都不行", personality: "真實至上", percentage: 62 },
            { text: "對我有利的謊言", personality: "自私鬼", percentage: 51 }
        ],
        tone: "funny"
    },
    {
        question: "如果愛情和麵包只能選一個？",
        options: [
            { text: "愛情", personality: "浪漫傻瓜", percentage: 67 },
            { text: "麵包", personality: "現實主義者", percentage: 74 },
            { text: "都要", personality: "貪心鬼", percentage: 88 },
            { text: "都不要", personality: "厭世代表", percentage: 45 }
        ],
        tone: "love"
    },
    {
        question: "你最怕別人發現你的什麼？",
        options: [
            { text: "真實個性", personality: "偽裝大師", percentage: 81 },
            { text: "黑歷史", personality: "過往逃避者", percentage: 76 },
            { text: "真實想法", personality: "偽善者", percentage: 69 },
            { text: "都不怕", personality: "坦蕩蕩之人", percentage: 92 }
        ],
        tone: "dark"
    },
    {
        question: "如果可以跟任何人換24小時人生？",
        options: [
            { text: "明星", personality: "追星族", percentage: 68 },
            { text: "首富", personality: "拜金主義", percentage: 77 },
            { text: "愛人", personality: "同理心爆棚", percentage: 84 },
            { text: "不想換", personality: "知足常樂", percentage: 91 }
        ],
        tone: "funny"
    },
    {
        question: "你覺得什麼是真愛？",
        options: [
            { text: "願意為對方改變", personality: "犧牲派", percentage: 72 },
            { text: "互相理解包容", personality: "成熟戀愛觀", percentage: 94 },
            { text: "激情不減", personality: "熱戀永恆派", percentage: 61 },
            { text: "不存在真愛", personality: "愛情虛無主義", percentage: 48 }
        ],
        tone: "love"
    },
    {
        question: "如果只剩一年生命，你最想做什麼？",
        options: [
            { text: "環遊世界", personality: "冒險家", percentage: 83 },
            { text: "陪伴家人", personality: "家庭至上", percentage: 90 },
            { text: "瘋狂賺錢", personality: "執著者", percentage: 56 },
            { text: "躺平等死", personality: "佛系青年", percentage: 67 }
        ],
        tone: "dark"
    },
    {
        question: "你最受不了另一半的什麼行為？",
        options: [
            { text: "說謊", personality: "誠實至上派", percentage: 88 },
            { text: "冷暴力", personality: "溫暖渴望者", percentage: 91 },
            { text: "不回訊息", personality: "秒回強迫症", percentage: 74 },
            { text: "翻舊帳", personality: "活在當下派", percentage: 79 }
        ],
        tone: "love"
    },
    {
        question: "如果可以消除世界上的一件事？",
        options: [
            { text: "戰爭", personality: "和平使者", percentage: 85 },
            { text: "貧窮", personality: "人道主義者", percentage: 82 },
            { text: "疾病", personality: "生命守護者", percentage: 87 },
            { text: "我的黑歷史", personality: "自我中心", percentage: 63 }
        ],
        tone: "funny"
    },
    {
        question: "你覺得背叛你的人應該？",
        options: [
            { text: "原諒但不來往", personality: "理性成熟派", percentage: 86 },
            { text: "報復回去", personality: "以牙還牙", percentage: 71 },
            { text: "完全原諒", personality: "聖人體質", percentage: 52 },
            { text: "記恨一輩子", personality: "仇恨收藏家", percentage: 64 }
        ],
        tone: "dark"
    },
    {
        question: "如果能讀取一個人的全部記憶，你最想讀誰的？",
        options: [
            { text: "父母", personality: "孝順之人", percentage: 78 },
            { text: "伴侶", personality: "信任缺乏者", percentage: 69 },
            { text: "自己", personality: "自我探索者", percentage: 91 },
            { text: "仇人", personality: "復仇策劃師", percentage: 57 }
        ],
        tone: "funny"
    },
    {
        question: "你認為什麼是成功？",
        options: [
            { text: "財富自由", personality: "金錢至上", percentage: 73 },
            { text: "家庭幸福", personality: "溫情主義", percentage: 88 },
            { text: "實現夢想", personality: "理想主義者", percentage: 85 },
            { text: "內心平靜", personality: "佛系哲學家", percentage: 92 }
        ],
        tone: "love"
    },
    {
        question: "如果有人在背後說你壞話，你會？",
        options: [
            { text: "直接對質", personality: "正面硬剛", percentage: 77 },
            { text: "假裝不知道", personality: "隱忍派", percentage: 64 },
            { text: "也說對方壞話", personality: "互相傷害", percentage: 58 },
            { text: "不在乎", personality: "大氣之人", percentage: 91 }
        ],
        tone: "dark"
    }
];

const achievements = [
    {
        id: "speed_demon",
        icon: "⚡",
        title: "速度惡魔",
        description: "0.5 秒內選答案 20 次",
        condition: "fast_click_20"
    },
    {
        id: "dark_lover",
        icon: "🌑",
        title: "暗黑愛好者",
        description: "選擇 10 題暗黑題目",
        condition: "dark_lover_10"
    },
    {
        id: "love_expert",
        icon: "💕",
        title: "戀愛專家",
        description: "選擇 15 題戀愛題目",
        condition: "love_expert_15"
    },
    {
        id: "funny_master",
        icon: "😂",
        title: "搞笑大師",
        description: "選擇 15 題搞笑題目",
        condition: "funny_master_15"
    },
    {
        id: "perfectionist",
        icon: "💯",
        title: "完美主義者",
        description: "獲得 5 次 90% 以上分數",
        condition: "perfect_5"
    },
    {
        id: "brave_soul",
        icon: "🦁",
        title: "勇敢的靈魂",
        description: "獲得 5 次 20% 以下分數",
        condition: "brave_soul_5"
    },
    {
        id: "robot_mode",
        icon: "🤖",
        title: "機器人模式",
        description: "連續選同一個選項位置 5 次",
        condition: "robot_mode_5"
    },
    {
        id: "explorer",
        icon: "🗺️",
        title: "心理探險家",
        description: "回答 50 題",
        condition: "explorer_50"
    },
    {
        id: "quick_thinker",
        icon: "💭",
        title: "快速思考者",
        description: "快速回答 10 題（未超時）",
        condition: "speed_demon_10"
    },
    {
        id: "lazy_king",
        icon: "👑",
        title: "懶惰之王",
        description: "10 次讓倒數計時自動選擇",
        condition: "lazy_king_10"
    },
    {
        id: "streaker",
        icon: "🔥",
        title: "連擊王",
        description: "連續 5 次獲得 90% 以上",
        condition: "streaker_5"
    },
    {
        id: "master",
        icon: "🎓",
        title: "測驗大師",
        description: "回答 100 題",
        condition: "master_100"
    },
    {
        id: "dark_master",
        icon: "😈",
        title: "暗黑大師",
        description: "選擇 20 題暗黑題目",
        condition: "all_dark_20"
    },
    {
        id: "love_master",
        icon: "💖",
        title: "戀愛大師",
        description: "選擇 25 題戀愛題目",
        condition: "all_love_25"
    },
    {
        id: "funny_legend",
        icon: "🎭",
        title: "搞笑傳奇",
        description: "選擇 25 題搞笑題目",
        condition: "all_funny_25"
    }
];
