// ゲームエンジン
class NovelGameEngine {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.showTitleScreen();
    }

    initializeElements() {
        // DOM要素の取得
        this.titleScreen = document.getElementById('title-screen');
        this.gameContainer = document.getElementById('game-container');
        this.background = document.getElementById('background');
        this.characterLeft = document.getElementById('character-left');
        this.characterCenter = document.getElementById('character-center');
        this.characterRight = document.getElementById('character-right');
        this.textBox = document.getElementById('text-box');
        this.speakerName = document.getElementById('speaker-name');
        this.textContent = document.getElementById('text-content');
        this.continueIndicator = document.getElementById('continue-indicator');
        this.choiceContainer = document.getElementById('choice-container');
        this.choiceButtons = [
            document.getElementById('choice-1'),
            document.getElementById('choice-2'),
            document.getElementById('choice-3')
        ];
        this.menuBtn = document.getElementById('menu-btn');
        this.menuDropdown = document.getElementById('menu-dropdown');
        this.sceneTransition = document.getElementById('scene-transition');
        this.sceneTransitionTitle = document.getElementById('scene-transition-title');
        this.sceneTransitionSubtitle = document.getElementById('scene-transition-subtitle');
        this.staffRoll = document.getElementById('staff-roll');
        this.staffRollImage = document.getElementById('staff-roll-image');
        this.staffRollCredit = document.getElementById('staff-roll-credit');
        this.staffRollRole = document.getElementById('staff-roll-role');
        this.staffRollName = document.getElementById('staff-roll-name');
        this.staffRollThanks = document.getElementById('staff-roll-thanks');
        this.chapterSelectScreen = document.getElementById('chapter-select-screen');
        
        // スタッフロール用の変数初期化
        this.staffRollCurrentIndex = 0;
        this.staffRollData = [];
        this.staffRollAutoMode = true;
    }

    bindEvents() {
        // タイトル画面のイベント
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startNewGame();
        });

        document.getElementById('continue-btn').addEventListener('click', () => {
            this.loadGame();
        });

        document.getElementById('chapter-select-btn').addEventListener('click', () => {
            this.showChapterSelect();
        });

        document.getElementById('back-to-title-btn').addEventListener('click', () => {
            this.hideChapterSelect();
        });

        // テキストボックスクリック
        this.textBox.addEventListener('click', () => {
            this.handleTextBoxClick();
        });

        // メニューボタン
        this.menuBtn.addEventListener('click', () => {
            this.toggleMenu();
        });

        // メニュー項目
        document.getElementById('save-btn').addEventListener('click', () => {
            this.saveGame();
        });

        document.getElementById('load-btn').addEventListener('click', () => {
            this.loadGame();
        });

        document.getElementById('title-btn').addEventListener('click', () => {
            this.showTitleScreen();
        });

        // 選択肢ボタン
        this.choiceButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.handleChoice(index);
            });
        });

        // キーボードイベント
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                this.handleTextBoxClick();
            }
        });

        // スタッフロールクリックイベント
        this.staffRoll.addEventListener('click', () => {
            if (this.staffRoll.classList.contains('active')) {
                this.skipStaffRoll();
            }
        });

        // チャプター選択イベント
        document.querySelectorAll('.chapter-element').forEach(element => {
            element.addEventListener('click', () => {
                const chapter = element.dataset.chapter;
                console.log('Chapter selected:', chapter); // デバッグ用
                this.startFromChapter(chapter);
            });
        });
    }

    showTitleScreen() {
        this.titleScreen.classList.remove('hidden');
        this.chapterSelectScreen.classList.add('hidden');
        gameState.currentChapter = null;
        gameState.currentScene = 0;
    }

    hideTitleScreen() {
        this.titleScreen.classList.add('hidden');
    }

    startNewGame() {
        this.startFromChapter('chapter1');
    }

    async loadScene() {
        let currentData;
        
        console.log('Loading scene:', gameState.currentChapter, 'scene:', gameState.currentScene); // デバッグ用
        
        if (gameState.currentEnding) {
            currentData = gameData.endings[gameState.currentEnding];
        } else {
            currentData = gameData[gameState.currentChapter];
        }

        if (!currentData || !currentData.scenes[gameState.currentScene]) {
            console.error('Scene not found:', gameState.currentChapter, gameState.currentScene);
            return;
        }

        const scene = currentData.scenes[gameState.currentScene];
        const sceneType = this.getSceneType(scene.id);
        const previousSceneType = gameState.previousSceneType || 'normal';
        
        // 歴史パートと現代の移行時のみ転換エフェクトを表示
        const shouldShowTransition = this.shouldShowTransition(sceneType, previousSceneType);
        if (shouldShowTransition) {
            const transitionInfo = this.getTransitionTitle(sceneType, currentData.title, scene.id);
            let effectType = 'timeTravel'; // 時間移行なので常に時間旅行エフェクト
            
            await this.showSceneTransition(transitionInfo.title, transitionInfo.subtitle, effectType);
        }
        
        gameState.previousSceneType = sceneType;
        this.displayScene(scene);
    }

    displayScene(scene) {
        // 背景設定（挿絵として）
        if (scene.background) {
            this.background.style.backgroundImage = `url('${scene.background}')`;
        }

        // キャラクター設定（挿絵として）
        this.clearCharacters();
        const isMonologue = this.isMonologueScene(scene.id);
        
        // モノローグモードの設定
        if (isMonologue) {
            document.getElementById('character-container').classList.add('monologue-mode');
        } else {
            document.getElementById('character-container').classList.remove('monologue-mode');
        }
        
        if (scene.characters) {
            if (scene.characters.left) {
                this.characterLeft.style.backgroundImage = `url('${scene.characters.left}')`;
                this.characterLeft.classList.add('visible');
                
                // モノローグシーンで理久の場合は大きく表示
                if (isMonologue && scene.characters.left.includes('ch_riku_end')) {
                    console.log('Adding monologue-riku class to left character');
                    this.characterLeft.classList.add('monologue-riku');
                }
            }
            if (scene.characters.center) {
                this.characterCenter.style.backgroundImage = `url('${scene.characters.center}')`;
                this.characterCenter.classList.add('visible');
                
                // モノローグシーンで理久の場合は大きく表示
                if (isMonologue && scene.characters.center.includes('ch_riku_end')) {
                    console.log('Adding monologue-riku class to center character');
                    this.characterCenter.classList.add('monologue-riku');
                }
            }
            if (scene.characters.right) {
                this.characterRight.style.backgroundImage = `url('${scene.characters.right}')`;
                this.characterRight.classList.add('visible');
                
                // モノローグシーンで理久の場合は大きく表示
                if (isMonologue && scene.characters.right.includes('ch_riku_end')) {
                    console.log('Adding monologue-riku class to right character');
                    this.characterRight.classList.add('monologue-riku');
                }
            }
        }

        // 小説風テキスト設定
        this.speakerName.textContent = scene.speaker || '';
        
        // 現在の表示状態をリセット
        gameState.currentTextPhase = 'narration';
        gameState.hasNarration = !!scene.narration;
        gameState.hasDialogue = !!scene.text;
        
        // 話数タイトルの場合は特別なスタイルを適用
        if (scene.id.includes('title')) {
            this.textBox.classList.add('chapter-title');
        } else {
            this.textBox.classList.remove('chapter-title');
        }
        
        // 小説風表示：ナレーションとセリフを統合
        let fullText = '';
        if (scene.narration && scene.text) {
            fullText = scene.narration + '\n\n' + scene.text;
        } else if (scene.narration) {
            fullText = scene.narration;
        } else if (scene.text) {
            fullText = scene.text;
        }
        
        if (fullText) {
            this.typeText(fullText);
        }

        // 選択肢がある場合
        if (scene.choices) {
            this.showChoices(scene.choices);
        } else {
            this.hideChoices();
        }
    }

    typeText(text, callback) {
        if (!text) return;
        
        gameState.isTyping = true;
        gameState.currentFullText = text;
        this.continueIndicator.style.display = 'none';
        this.textContent.textContent = '';
        
        let index = 0;
        const typeSpeed = 20; // より高速に変更
        
        gameState.typeInterval = setInterval(() => {
            this.textContent.textContent += text[index];
            index++;
            
            if (index >= text.length) {
                clearInterval(gameState.typeInterval);
                gameState.isTyping = false;
                gameState.typeInterval = null;
                this.continueIndicator.style.display = 'block';
                if (callback) callback();
            }
        }, typeSpeed);
    }

    // タイピング中にクリックされた場合、残りの文字を即座に表示
    skipTyping() {
        if (gameState.isTyping && gameState.typeInterval) {
            clearInterval(gameState.typeInterval);
            this.textContent.textContent = gameState.currentFullText;
            gameState.isTyping = false;
            gameState.typeInterval = null;
            this.continueIndicator.style.display = 'block';
        }
    }

    clearCharacters() {
        this.characterLeft.classList.remove('visible', 'monologue-riku');
        this.characterCenter.classList.remove('visible', 'monologue-riku');
        this.characterRight.classList.remove('visible', 'monologue-riku');
    }

    // 場面転換エフェクト
    showSceneTransition(title, subtitle, effectType = 'normal') {
        return new Promise((resolve) => {
            this.sceneTransitionTitle.textContent = title;
            this.sceneTransitionSubtitle.textContent = subtitle || '';
            this.sceneTransition.classList.add('active');
            
            // エフェクトタイプに応じて背景にクラスを追加
            if (effectType === 'timeTravel') {
                this.background.classList.add('time-travel-effect');
            } else if (effectType === 'restoration') {
                this.background.classList.add('restoration-effect');
            }
            
            setTimeout(() => {
                this.sceneTransition.classList.remove('active');
                // エフェクトクラスを削除
                this.background.classList.remove('time-travel-effect', 'restoration-effect');
                resolve();
            }, 2500);
        });
    }

    // シーンタイプを判定
    getSceneType(sceneId) {
        if (sceneId.includes('daily')) return 'daily';
        if (sceneId.includes('history')) return 'history';
        if (sceneId.includes('restoration')) return 'restoration';
        if (sceneId.includes('epilogue')) return 'epilogue';
        if (sceneId.includes('truth')) return 'truth';
        if (sceneId.includes('climax')) return 'climax';
        if (sceneId.includes('final')) return 'final';
        if (sceneId.includes('end')) return 'ending';
        return 'normal';
    }

    // モノローグシーンかどうかを判定
    isMonologueScene(sceneId) {
        return sceneId === 'end1_3' || sceneId === 'end2_3' || sceneId === 'end3_3';
    }

    // 最終モノローグシーンかどうかを判定
    isFinalMonologueScene(sceneId) {
        return sceneId === 'end1_3' || sceneId === 'end2_3' || sceneId === 'end3_3';
    }

    // 転換エフェクトを表示すべきかを判定（歴史パートと現代の移行時のみ）
    shouldShowTransition(currentSceneType, previousSceneType) {
        // 現代→歴史パート（時間旅行開始）
        if (previousSceneType === 'daily' && currentSceneType === 'history') {
            return true;
        }
        // 歴史パート→現代（時間旅行終了、エピローグへ）
        if ((previousSceneType === 'history' || previousSceneType === 'restoration') && currentSceneType === 'epilogue') {
            return true;
        }
        return false;
    }

    // 場面転換タイトルを取得（歴史パートと現代の移行時のみ）
    getTransitionTitle(sceneType, chapterTitle, sceneId) {
        // 章番号を取得
        let chapterNumber = '';
        if (gameState.currentChapter === 'chapter1') {
            chapterNumber = '第1話';
        } else if (gameState.currentChapter === 'chapter2') {
            chapterNumber = '第2話';
        } else if (gameState.currentChapter === 'chapter3') {
            chapterNumber = '第3話';
        } else if (gameState.currentChapter === 'chapter4') {
            chapterNumber = '第4話';
        } else if (gameState.currentChapter === 'chapter5') {
            chapterNumber = '第5話';
        } else if (gameState.currentChapter === 'chapter6') {
            chapterNumber = '第6話';
        }

        // 歴史パートへの移行
        if (sceneType === 'history') {
            if (gameState.currentChapter === 'chapter1') {
                return { title: '時間旅行開始', subtitle: '1939年 パリ 放射線研究所へ' };
            } else if (gameState.currentChapter === 'chapter2') {
                return { title: '時間旅行開始', subtitle: '1869年 ロシア帝国 サンクトペテルブルクへ' };
            } else if (gameState.currentChapter === 'chapter3') {
                return { title: '時間旅行開始', subtitle: '1903年 パリ 放射線研究所へ' };
            } else if (gameState.currentChapter === 'chapter4') {
                return { title: '時間旅行開始', subtitle: '1894年 英領香港へ' };
            } else if (gameState.currentChapter === 'chapter5') {
                return { title: '時間旅行開始', subtitle: '1938年 ドイツ・ベルリンへ' };
            }
            return { title: '時間旅行開始', subtitle: '過去への旅立ち' };
        }
        
        // 現代への帰還
        if (sceneType === 'epilogue') {
            return { title: '現代へ帰還', subtitle: '変化した世界' };
        }

        return { title: chapterTitle || '', subtitle: '' };
    }

    // スタッフロールデータ
    getStaffRollData() {
        return [
            {
                role: "シナリオ",
                name: "ChatGPT4o・ChatGPT5（OpenAI）",
                image: "images/bg/bg_cafeteria_day.png"
            },
            {
                role: "AI立ち絵キャラクター",
                name: "Imagen4・Imagen 4 Ultra（Google）",
                image: "images/character/ch_perfect_table_r_10.png"
            },
            {
                role: "タイトル",
                name: "ChatGPT5（OpenAI）",
                image: "images/bg/bg_title.png"
            },
            {
                role: "プログラム",
                name: "Kiro（Amazon）",
                image: "images/bg/bg_dorm_rooftop_night.png"
            },
            {
                role: "製作",
                name: "なまけ猫AI",
                image: "images/bg/bg_port_stage_night.png"
            }
        ];
    }

    // スタッフロール表示
    async showStaffRoll() {
        const staffData = this.getStaffRollData();
        this.staffRoll.classList.add('active');
        this.staffRollCurrentIndex = 0;
        this.staffRollData = staffData;
        this.staffRollAutoMode = true;
        
        this.showNextStaffCredit();
    }

    // 次のスタッフクレジットを表示
    async showNextStaffCredit() {
        if (this.staffRollCurrentIndex < this.staffRollData.length) {
            const staff = this.staffRollData[this.staffRollCurrentIndex];
            
            // 前のクレジットをフェードアウト
            this.staffRollCredit.classList.remove('visible');
            
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // 画像を設定
            this.staffRollImage.style.backgroundImage = `url('${staff.image}')`;
            
            // クレジット情報を設定
            this.staffRollRole.textContent = staff.role;
            this.staffRollName.textContent = staff.name;
            this.staffRollThanks.textContent = '';
            
            // フェードイン
            this.staffRollCredit.classList.add('visible');
            
            this.staffRollCurrentIndex++;
            
            // 自動モードの場合は3秒後に次へ
            if (this.staffRollAutoMode) {
                this.staffRollTimeout = setTimeout(() => {
                    this.showNextStaffCredit();
                }, 3000);
            }
        } else {
            // 最後にお礼メッセージを表示
            this.showThankYouMessage();
        }
    }

    // スタッフロールスキップ（Thank you画面へ）
    skipStaffRoll() {
        if (this.staffRollTimeout) {
            clearTimeout(this.staffRollTimeout);
        }
        
        // 自動モードを無効にして直接Thank you画面へ
        this.staffRollAutoMode = false;
        this.showThankYouMessage();
    }

    // Thank youメッセージを表示
    async showThankYouMessage() {
        // 現在のクレジットをフェードアウト
        this.staffRollCredit.classList.remove('visible');
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Thank youメッセージを設定
        this.staffRollRole.textContent = '';
        this.staffRollName.textContent = '';
        this.staffRollThanks.textContent = 'Thank you for playing... until we meet again.';
        
        // 最後の画像を設定（製作者の画像）
        const lastStaff = this.staffRollData[this.staffRollData.length - 1];
        if (lastStaff) {
            this.staffRollImage.style.backgroundImage = `url('${lastStaff.image}')`;
        }
        
        // フェードイン
        this.staffRollCredit.classList.add('visible');
        
        // 5秒後にタイトルに戻る
        this.staffRollTimeout = setTimeout(() => {
            this.endStaffRoll();
        }, 5000);
    }

    // スタッフロール終了
    endStaffRoll() {
        this.staffRoll.classList.remove('active');
        this.staffRollCredit.classList.remove('visible');
        this.staffRollThanks.textContent = '';
        this.showTitleScreen();
    }

    // チャプター選択画面表示
    showChapterSelect() {
        this.titleScreen.classList.add('hidden');
        this.chapterSelectScreen.classList.remove('hidden');
    }

    // チャプター選択画面非表示
    hideChapterSelect() {
        this.chapterSelectScreen.classList.add('hidden');
        this.titleScreen.classList.remove('hidden');
    }

    // 指定チャプターから開始
    startFromChapter(chapter) {
        this.hideChapterSelect();
        this.hideTitleScreen();
        gameState.currentChapter = chapter;
        gameState.currentScene = 0;
        gameState.currentTextPhase = 'narration';
        gameState.previousSceneType = 'normal';
        gameState.currentEnding = null;
        this.loadScene();
    }

    handleTextBoxClick() {
        // タイピング中の場合は残りの文字を即座に表示
        if (gameState.isTyping) {
            this.skipTyping();
            return;
        }

        // 次のシーンへ進む（小説風では統合表示なので単純に進む）
        this.nextScene();
    }

    nextScene() {
        gameState.currentScene++;
        gameState.currentTextPhase = 'narration'; // 新しいシーンではナレーションから開始
        
        let currentData;
        if (gameState.currentEnding) {
            currentData = gameData.endings[gameState.currentEnding];
        } else if (gameState.currentChapter === 'finalChoice') {
            currentData = gameData.finalChoice;
        } else {
            currentData = gameData[gameState.currentChapter];
        }

        if (currentData && gameState.currentScene < currentData.scenes.length) {
            this.loadScene();
        } else {
            this.handleChapterEnd();
        }
    }

    handleChapterEnd() {
        if (gameState.currentChapter === 'chapter1') {
            gameState.currentChapter = 'chapter2';
            gameState.currentScene = 0;
            gameState.previousSceneType = 'normal';
            this.loadScene();
        } else if (gameState.currentChapter === 'chapter2') {
            gameState.currentChapter = 'chapter3';
            gameState.currentScene = 0;
            gameState.previousSceneType = 'normal';
            this.loadScene();
        } else if (gameState.currentChapter === 'chapter3') {
            gameState.currentChapter = 'chapter4';
            gameState.currentScene = 0;
            gameState.previousSceneType = 'normal';
            this.loadScene();
        } else if (gameState.currentChapter === 'chapter4') {
            gameState.currentChapter = 'chapter5';
            gameState.currentScene = 0;
            gameState.previousSceneType = 'normal';
            this.loadScene();
        } else if (gameState.currentChapter === 'chapter5') {
            gameState.currentChapter = 'chapter6';
            gameState.currentScene = 0;
            gameState.previousSceneType = 'normal';
            this.loadScene();
        } else if (gameState.currentEnding) {
            // エンディング終了後にスタッフロールを表示
            this.showStaffRoll();
        }
    }

    showChoices(choices) {
        this.choiceContainer.classList.remove('hidden');
        this.continueIndicator.style.display = 'none';
        
        choices.forEach((choice, index) => {
            if (this.choiceButtons[index]) {
                this.choiceButtons[index].textContent = choice.text;
                this.choiceButtons[index].classList.remove('hidden');
                this.choiceButtons[index].dataset.ending = choice.ending;
            }
        });

        // 使用しない選択肢ボタンを隠す
        for (let i = choices.length; i < this.choiceButtons.length; i++) {
            this.choiceButtons[i].classList.add('hidden');
        }
    }

    hideChoices() {
        this.choiceContainer.classList.add('hidden');
        this.choiceButtons.forEach(btn => {
            btn.classList.add('hidden');
        });
    }

    handleChoice(choiceIndex) {
        const button = this.choiceButtons[choiceIndex];
        const ending = button.dataset.ending;
        
        if (ending) {
            gameState.currentEnding = ending;
            gameState.currentChapter = null;
            gameState.currentScene = 0;
            gameState.previousSceneType = 'normal'; // エンディングに移る時もリセット
            this.hideChoices();
            this.loadScene();
        }
    }

    toggleMenu() {
        this.menuDropdown.classList.toggle('hidden');
    }

    saveGame() {
        const saveData = {
            currentChapter: gameState.currentChapter,
            currentScene: gameState.currentScene,
            currentEnding: gameState.currentEnding,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('novelGameSave', JSON.stringify(saveData));
        alert('ゲームをセーブしました');
        this.menuDropdown.classList.add('hidden');
    }

    loadGame() {
        const saveData = localStorage.getItem('novelGameSave');
        if (saveData) {
            const data = JSON.parse(saveData);
            gameState.currentChapter = data.currentChapter;
            gameState.currentScene = data.currentScene;
            gameState.currentEnding = data.currentEnding;
            
            if (gameState.currentChapter || gameState.currentEnding) {
                this.hideTitleScreen();
                this.loadScene();
            }
            
            alert('ゲームをロードしました');
        } else {
            alert('セーブデータが見つかりません');
        }
        this.menuDropdown.classList.add('hidden');
    }
}

// ゲーム開始
document.addEventListener('DOMContentLoaded', () => {
    new NovelGameEngine();
});