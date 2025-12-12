// 財富自由等級測驗
const wealthLevelQuestions = [
    {
        question: "發薪日那天，你的第一反應是？",
        options: [
            { text: "馬上還信用卡帳單", level: "理財高手", score: 3 },
            { text: "犒賞自己買個貴的", level: "月光貴族", score: 1 },
            { text: "立刻存一半進定存", level: "財富自由", score: 4 },
            { text: "薪水？那是什麼", level: "吃土青年", score: 0 }
        ]
    },
    {
        question: "中了100萬，你會怎麼做？",
        options: [
            { text: "全部拿去投資", level: "財富自由", score: 4 },
            { text: "先還債，剩下存起來", level: "理財高手", score: 3 },
            { text: "買車買包環遊世界", level: "月光貴族", score: 1 },
            { text: "先還高利貸再說", level: "吃土青年", score: 0 }
        ]
    },
    {
        question: "你的緊急預備金有多少？",
        options: [
            { text: "6個月以上生活費", level: "財富自由", score: 4 },
            { text: "3-6個月生活費", level: "理財高手", score: 3 },
            { text: "1-2個月生活費", level: "小資達人", score: 2 },
            { text: "什麼是緊急預備金？", level: "吃土青年", score: 0 }
        ]
    },
    {
        question: "看到股市暴跌，你會？",
        options: [
            { text: "進場撿便宜", level: "財富自由", score: 4 },
            { text: "淡定觀望", level: "理財高手", score: 3 },
            { text: "緊張但不亂動", level: "小資達人", score: 2 },
            { text: "慌張賣出全部", level: "月光貴族", score: 1 }
        ]
    },
    {
        question: "你的投資組合是？",
        options: [
            { text: "股票、債券、房地產分散配置", level: "財富自由", score: 4 },
            { text: "定期定額買ETF", level: "理財高手", score: 3 },
            { text: "銀行定存", level: "小資達人", score: 2 },
            { text: "投資？我連存款都沒有", level: "吃土青年", score: 0 }
        ]
    },
    {
        question: "你對「被動收入」的理解是？",
        options: [
            { text: "我有3種被動收入來源", level: "財富自由", score: 4 },
            { text: "正在建立中", level: "理財高手", score: 3 },
            { text: "聽過但不知道怎麼做", level: "小資達人", score: 2 },
            { text: "那是有錢人的事", level: "吃土青年", score: 0 }
        ]
    },
    {
        question: "你每個月的儲蓄率是？",
        options: [
            { text: "50%以上", level: "財富自由", score: 4 },
            { text: "30-50%", level: "理財高手", score: 3 },
            { text: "10-30%", level: "小資達人", score: 2 },
            { text: "負數（月底借錢）", level: "吃土青年", score: 0 }
        ]
    },
    {
        question: "月底前5天，你的錢包狀態是？",
        options: [
            { text: "還有一半預算", level: "財富自由", score: 4 },
            { text: "剛好差不多", level: "理財高手", score: 3 },
            { text: "有點緊但還撐得住", level: "小資達人", score: 2 },
            { text: "開始吃泡麵", level: "吃土青年", score: 0 }
        ]
    },
    {
        question: "你對「財富自由」的定義是？",
        options: [
            { text: "被動收入>生活支出", level: "財富自由", score: 4 },
            { text: "有足夠退休金", level: "理財高手", score: 3 },
            { text: "想買什麼就買什麼", level: "月光貴族", score: 1 },
            { text: "不用工作", level: "小資達人", score: 2 }
        ]
    },
    {
        question: "你覺得最好的投資是？",
        options: [
            { text: "投資自己", level: "財富自由", score: 4 },
            { text: "股票ETF", level: "理財高手", score: 3 },
            { text: "房地產", level: "小資達人", score: 2 },
            { text: "樂透彩券", level: "吃土青年", score: 0 }
        ]
    }
];

// 投資名人類型測驗
const investorTypeQuestions = [
    {
        question: "看到股價大跌，你的第一反應是？",
        options: [
            { text: "興奮地準備撿便宜", type: "巴菲特", score: 4 },
            { text: "立刻放空賺一波", type: "索羅斯", score: 3 },
            { text: "思考是否加碼", type: "雷達里奧", score: 2 },
            { text: "梭哈！現在不買更待何時", type: "孫正義", score: 1 }
        ]
    },
    {
        question: "如果有100萬可以投資，你會？",
        options: [
            { text: "全壓一支看好的股票", type: "孫正義", score: 4 },
            { text: "買3-5支績優股", type: "巴菲特", score: 3 },
            { text: "分散投資各種資產", type: "雷達里奧", score: 2 },
            { text: "看線圖找進場點", type: "索羅斯", score: 1 }
        ]
    },
    {
        question: "朋友推薦一支「火箭股」，你會？",
        options: [
            { text: "研究財報三天三夜", type: "彼得林奇", score: 4 },
            { text: "看是不是真火箭公司", type: "馬斯克", score: 3 },
            { text: "等它被低估再買", type: "巴菲特", score: 2 },
            { text: "看技術線圖決定", type: "索羅斯", score: 1 }
        ]
    },
    {
        question: "你最愛的投資標的是？",
        options: [
            { text: "可口可樂那種百年老店", type: "巴菲特", score: 4 },
            { text: "特斯拉那種改變世界的", type: "馬斯克", score: 3 },
            { text: "什麼賺錢買什麼", type: "索羅斯", score: 2 },
            { text: "ETF最安全", type: "雷達里奧", score: 1 }
        ]
    },
    {
        question: "持股一年虧20%，你會？",
        options: [
            { text: "再持有10年看看", type: "巴菲特", score: 4 },
            { text: "立刻停損換標的", type: "索羅斯", score: 3 },
            { text: "加碼攤平成本", type: "孫正義", score: 2 },
            { text: "檢討投資策略", type: "雷達里奧", score: 1 }
        ]
    },
    {
        question: "如果可以見一位投資大師，你想問？",
        options: [
            { text: "如何找到被低估的股票", type: "巴菲特", score: 4 },
            { text: "如何判斷趨勢反轉", type: "索羅斯", score: 3 },
            { text: "如何看準下一個科技革命", type: "馬斯克", score: 2 },
            { text: "有沒有穩賺不賠的方法", type: "雷達里奧", score: 1 }
        ]
    },
    {
        question: "你的投資座右銘是？",
        options: [
            { text: "別人恐懼我貪婪", type: "巴菲特", score: 4 },
            { text: "跟著趨勢走就對了", type: "索羅斯", score: 3 },
            { text: "賭對了就發財", type: "孫正義", score: 2 },
            { text: "投資自己就是最好的投資", type: "彼得林奇", score: 1 }
        ]
    },
    {
        question: "遇到超級大機會，你會投入多少？",
        options: [
            { text: "All in 身家全壓", type: "孫正義", score: 4 },
            { text: "30-40% 大舉買進", type: "巴菲特", score: 3 },
            { text: "10-20% 試試水溫", type: "雷達里奧", score: 2 },
            { text: "快進快出賺價差", type: "索羅斯", score: 1 }
        ]
    },
    {
        question: "你買股票最看重什麼？",
        options: [
            { text: "公司有沒有「護城河」", type: "巴菲特", score: 4 },
            { text: "會不會改變世界", type: "馬斯克", score: 3 },
            { text: "現在流不流行", type: "索羅斯", score: 2 },
            { text: "風險夠不夠分散", type: "雷達里奧", score: 1 }
        ]
    },
    {
        question: "如果投資失敗賠光，你會說？",
        options: [
            { text: "時機未到，再等等", type: "巴菲特", score: 4 },
            { text: "趨勢判斷錯誤", type: "索羅斯", score: 3 },
            { text: "賭錯邊了，再賭一次", type: "孫正義", score: 2 },
            { text: "我應該分散風險的", type: "雷達里奧", score: 1 }
        ]
    }
];

// 財富等級描述
const wealthLevels = {
    "吃土青年": {
        range: [0, 20],
        emoji: "😭",
        title: "吃土青年",
        description: "恭喜你解鎖「吃土成就」！月底靠泡麵續命、看到帳單會心悸，這就是你！不過別擔心，至少你很誠實面對自己的財務狀況 😅",
        advice: "理財小tips：試著記帳一個月，你會驚訝地發現錢都跑去哪了。建議目標：先存到3個月生活費的緊急預備金，然後才能開始想投資的事～"
    },
    "月光貴族": {
        range: [21, 40],
        emoji: "💸",
        title: "月光貴族",
        description: "你是傳說中的「月光族VIP會員」！薪水一發就想犒賞自己，月底靠朋友接濟。活得瀟灑但錢包很空，這種生活方式真的很chill...但也很危險 😎",
        advice: "理財小tips：試試「631法則」吧！60%生活費、30%儲蓄、10%娛樂。先從存下10%開始，慢慢提高到30%，你會發現其實沒那麼難～未來的你會感謝現在的自己！"
    },
    "小資達人": {
        range: [41, 60],
        emoji: "💰",
        title: "小資達人",
        description: "不錯喔！你已經脫離吃土和月光的行列了！開始有儲蓄觀念，也知道要控制開支。雖然還不敢說很會理財，但至少不會月底吃土了 💪",
        advice: "理財小tips：現在是時候開始學投資了！定期定額買ETF是個好開始，像0050或0056都不錯。記住：不要想一夜致富，慢慢來比較快！複利的威力要時間才能看見～"
    },
    "理財高手": {
        range: [61, 80],
        emoji: "📈",
        title: "理財高手",
        description: "哇喔！你是懂投資的！知道如何讓錢滾錢，也懂得分散風險。看你的選擇就知道你是個有在做功課的人。繼續保持，財富自由指日可待！🚀",
        advice: "理財小tips：你已經很厲害了！現在可以考慮建立多元被動收入，像是股息、房租、版稅等。記得持續學習，市場一直在變化。可以考慮學習選股或資產配置，讓你的投資組合更上一層樓！"
    },
    "財富自由": {
        range: [81, 100],
        emoji: "🏝️",
        title: "財富自由預備軍",
        description: "你根本是理財界的學霸！從你的選擇可以看出，你的財商和觀念都很正確。如果現實生活中也是這樣執行，那財富自由真的不遠了！繼續保持這個心態～ 🎯",
        advice: "理財小tips：你的理財觀念已經很完整了！現在要做的是「知行合一」，把這些觀念落實在生活中。記得定期檢視投資組合，保持學習的態度。也可以考慮幫助身邊的人建立正確的理財觀念喔！"
    }
};

// 投資名人描述
const investorTypes = {
    "巴菲特": {
        emoji: "🎯",
        title: "股神巴菲特派",
        description: "你根本是巴菲特的鐵粉！超有耐心、喜歡長期持有好公司。別人在追高殺低的時候，你在慢慢喝可樂等股票漲。這種佛系投資法需要強大的定力啊 🧘",
        style: "你的投資風格：價值投資、長期持有、買了就放著不管。適合你的標的：可口可樂、蘋果那種百年老店",
        quote: "「別人恐懼我貪婪，別人貪婪我恐懼」— 巴菲特"
    },
    "索羅斯": {
        emoji: "⚡",
        title: "金融狙擊手索羅斯",
        description: "你是市場上的獵人！擅長看趨勢、抓時機，進出都很快。看到機會就出手，賺了就跑。這種靈活的風格需要很強的市場敏銳度喔 📊",
        style: "你的投資風格：趨勢交易、短線操作、技術分析。適合你的標的：熱門飆股、波動大的標的",
        quote: "「重要的不是對錯幾次，而是對的時候賺多少，錯的時候虧多少」— 索羅斯"
    },
    "馬斯克": {
        emoji: "🚀",
        title: "瘋狂夢想家馬斯克",
        description: "你是個夢想家！相信科技能改變世界，喜歡投資那些聽起來很瘋狂的東西。火箭、電動車、AI...越酷炫越愛。高風險高回報就是你的座右銘 🚀",
        style: "你的投資風格：投資未來科技、高風險高回報、長期看好創新產業。適合你的標的：特斯拉、AI股、新創公司",
        quote: "「如果某件事足夠重要，即使機率對你不利，你也應該去做」— 馬斯克"
    },
    "彼得林奇": {
        emoji: "📊",
        title: "研究狂人彼得林奇",
        description: "你是學霸類型的投資人！買股票前一定要把財報研究透徹，不懂的公司絕對不碰。你相信做足功課就能找到被低估的好股票 🤓",
        style: "你的投資風格：深度研究、基本面分析、成長股投資。適合你的標的：有潛力但被低估的中小型股",
        quote: "「投資你了解的公司」— 彼得林奇"
    },
    "孫正義": {
        emoji: "🎲",
        title: "賭性堅強孫正義",
        description: "你就是個賭徒（褒義）！看準了就all in，相信自己的眼光和直覺。集中火力在幾個標的上，不是大賺就是大賠。這種投資風格真的需要很強的心臟 💪",
        style: "你的投資風格：集中投資、大膽下注、相信直覺。適合你的標的：看好的1-2支重壓股票",
        quote: "「登高必跌重，我願意承受這個風險」— 孫正義"
    },
    "雷達里奧": {
        emoji: "⚖️",
        title: "穩健投資達人雷達里奧",
        description: "你是最理性的投資人！重視風險管理，雞蛋絕對不放在同一個籃子。數據說話，情緒不能影響決策。這種穩健的風格最適合睡得著覺 😴",
        style: "你的投資風格：多元配置、風險管理、數據驅動。適合你的標的：ETF、分散各類資產",
        quote: "「不要把雞蛋放在同一個籃子裡」— 雷達里奧"
    }
};
