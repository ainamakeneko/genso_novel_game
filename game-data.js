// ゲームデータ
const gameData = {
    // 第1話「欠番146と失われた手帖」
    chapter1: {
        title: "第1話「欠番146と失われた手帖」",
        scenes: [
            {
                id: "ch1_title",
                background: "images/bg/bg_cafeteria_day.png",
                characters: {},
                speaker: "",
                text: "第1話「欠番146と失われた手帖」"
            },
            {
                id: "ch1_daily_1",
                background: "images/bg/bg_cafeteria_day.png", // 食堂
                characters: {
                    center: "images/character/ch_perfect_table_r_5.png" // パーフェクトテーブルRの画像
                },
                speaker: "",
                text: "昼休みの食堂は、揚げ物の匂いとスパイスの香りでむせかえるほどだった。壁の大型スクリーンでは、国民的人気番組「パーフェクトテーブルR」の再放送が流れている。派手な爆発エフェクトの中、5人のヒーローがポーズを決めた。\n\n向かいで唐揚げを頬張る蒼太が、箸をドラムスティックみたいに叩く。画面中央には、輝く赤いマントのネオン。隣にはツンデレ枠のカリウム、クールなプラチナ、元気担当のヘリウム、そして——銀色の鎧をまとったウラン146。"
            },
            {
                id: "ch1_daily_2",
                background: "images/bg/bg_cafeteria_day.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "「ほら見ろ、ネオン隊長。マジでカッケー」\n\n理久はスクリーンの隅をじっと見つめた。全員そろったはずの集合絵に、妙な\"詰まり感\"がある。昔見た再放送では、ネオンの左隣にもうひとり……\n\n「なあ、これって5人だっけ？」\n「え、そりゃそうだろ。最初からパーフェクト5だし」\n\n蒼太は笑って、また唐揚げを口に放り込む。"
            },
            {
                id: "ch1_daily_3",
                background: "images/bg/bg_cafeteria_day.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【改竄検知】未許可アクセスを検出。",
                narration: "その瞬間、ポケットの端末が低く振動した。画面には、白い文字がひとことだけ。理久の背筋に、食堂の喧騒とは別の冷たい波が走った。この違和感は何なのか。なぜ自分だけが気づくのか。端末の画面が再び光る。"
            },
            {
                id: "ch1_history_1",
                background: "images/bg/bg_paris_lab_1939_winter.png", // 1939年パリ研究所
                characters: {
                    center: "images/character/ch_pere.png"
                },
                speaker: "アトラス",
                text: "【修復者プロトコル起動】【転送先：1939年 フランス共和国 パリ・放射線研究所】",
                narration: "視界が白く滲み、次の瞬間、理久は冷たい空気の中に立っていた。窓の外は冬の灰色の空。街路には薄く雪が積もり、道を急ぐ人々の吐息が白く揺れている。遠くから軍楽隊の演奏と、靴音の重い行進が響いてくる。戦争の足音は、ここにもはっきりと届いていた。\n\n研究室の奥、背を丸めて計数器を覗き込む女性がいた。マルグリット・ペレ——原子番号87、フランシウムの発見者。しかし、この時代の公的記録からはその名が完全に消されている。彼女の黒髪は夜通しの作業で乱れ、白衣の袖口は薬品で薄く染みていた。机の上には、鉛の容器に守られた試料瓶。そのラベルには「87」とだけ記されている。計数器の針は、一定の間隔で小刻みに揺れていた。"
            },
            {
                id: "ch1_history_2",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    center: "images/character/ch_pere.png"
                },
                speaker: "ペレ",
                text: "……また半減",
                narration: "研究室の奥、背を丸めて計数器を覗き込む女性がいた。マルグリット・ペレ——原子番号87、フランシウムの発見者。しかし、この時代の公的記録からはその名が完全に消されている。彼女の黒髪は夜通しの作業で乱れ、白衣の袖口は薬品で薄く染みていた。机の上には、鉛の容器に守られた試料瓶。そのラベルには「87」とだけ記されている。計数器の針は、一定の間隔で小刻みに揺れていた。"
            },
            {
                id: "ch1_history_3a",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    center: "images/character/ch_pere.png"
                },
                speaker: "",
                text: "",
                narration: "ペレの声は低く、吐息は冷え切っていた。フランシウムの半減期はわずか22分。瓶から離れた瞬間、その価値は急速に失われていく。扱いを誤れば、強い放射線が彼女の身体を蝕む危険もあった。背後で、軍服を着た男が書類を広げる。"
            },
            {
                id: "ch1_history_3b",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    center: "images/character/ch_pere.png"
                },
                speaker: "",
                text: "これ以上の実験は不要だ。発見は国のものとして発表する",
                narration: "その口調は、科学者の成果を奪うことに何の躊躇も感じさせなかった。"
            },
            {
                id: "ch1_history_3c",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    center: "images/character/ch_pere.png"
                },
                speaker: "ペレ",
                text: "失敗や苦労を消して、結果だけ残す……それでは科学じゃない",
                narration: "ペレは計数器から目を離さないまま、かすかに唇を噛んだ。言葉の奥に、彼女の誇りと怒りが混ざっていた。理久は息を呑む。日常で見た「パーフェクトテーブルR」の明るい笑顔の下に、こんな孤独で危うい現実が隠されていたなんて——。"
            },
            {
                id: "ch1_restoration_1a",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【修復目標：ペレの研究ノートを確保し、発表順序を正す】",
                narration: "その時、端末が指示を表示する。白衣の裾を揺らし、ペレが瓶を持ち上げる。その背後で、軍服の男が扉を開け放った。冷気と共に、決断の刻が迫ってくる。"
            },
            {
                id: "ch1_restoration_1b",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_pere.png"
                },
                speaker: "",
                text: "このデータは政府の施設に移送する。発表は我々の名義だ",
                narration: "軍服の男が机に手を置き、冷たい声で告げる。"
            },
            {
                id: "ch1_restoration_2a",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_pere.png"
                },
                speaker: "ペレ",
                text: "……あなたは、何もわかっていない",
                narration: "ペレの指先が震える。そう呟く彼女の背後で、扉の影から理久はわずかに身を乗り出した。端末が短く振動する。【修復手順：ノートの回収 → 発表原稿の差し替え】"
            },
            {
                id: "ch1_restoration_2b",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    center: "images/character/ch_pere.png"
                },
                speaker: "",
                text: "",
                narration: "机の脇には、黒い革表紙のノートが置かれている。中にはフランシウムの計測値、崩壊曲線、試薬の配合メモが細かく書き込まれていた。理久は軍人とペレの視線が交差する一瞬を狙い、静かに歩み寄る。——カツ、カツ。床板のきしむ音がやけに大きく響く。"
            },
            {
                id: "ch1_restoration_2c",
                background: "images/bg/bg_paris_lab_1939_winter.png",
                characters: {
                    center: "images/character/ch_pere.png"
                },
                speaker: "ペレ",
                text: "記録は……残せる",
                narration: "軍人が振り返る寸前、理久はノートを抱え、作業机の下に滑り込んだ。机の上の封筒から原稿用紙を抜き取り、素早く自分が持ち込んだ複製と入れ替える。複製にはペレの名前が一番上に記されていた。ペレはわずかに笑みを見せた。その声には、凍った空気をかすかに溶かす温度があった。"
            },
            {
                id: "ch1_epilogue_1",
                background: "images/bg/bg_cafeteria_day.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "",
                text: "",
                narration: "——視界が白く滲み、足元の床が消える。教室。昼休み、蒼太が端末を見せながら言った。"
            },
            {
                id: "ch1_epilogue_2",
                background: "images/bg/bg_cafeteria_day.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "なあ、87番ってさ、あの女性科学者が見つけたんだよな？ 名前なんだっけ……"
            },
            {
                id: "ch1_epilogue_3",
                background: "images/bg/bg_cafeteria_day.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "理久",
                text: "マルグリット・ペレ"
            },
            {
                id: "ch1_epilogue_4",
                background: "images/bg/bg_cafeteria_day.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "そう、それそれ。教科書にも出てきたし、戦隊の追加メンバーにもなればいいのにな",
                narration: "理久は心の中で、花形ポジションに立つ\"Fr\"のヒーローを想像した。まだ現実の戦隊にはいない。だが、ポスターの空欄が埋まる日は、確かに近づいている。"
            }
        ]
    },

    // 第2話「夢で見た周期表」
    chapter2: {
        title: "第2話「夢で見た周期表」",
        scenes: [
            {
                id: "ch2_title",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {},
                speaker: "",
                text: "第2話「夢で見た周期表」"
            },
            {
                id: "ch2_daily_1",
                background: "images/bg/bg_hongkong_port_1894.png", // 港の商店街
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "うわ、これ懐かしい。小学生の頃使ってたやつだ",
                narration: "放課後、港の風は潮と魚の匂いを運んできた。理久と蒼太は、商店街の文具屋の前で足を止める。"
            },
            {
                id: "ch2_daily_2",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    center: "images/character/ch_perfect_table_r_5.png" // パーフェクトテーブルRの画像
                },
                speaker: "",
                text: "",
                narration: "蒼太が手に取ったのは、「パーフェクトテーブルR」デザインの周期表下敷き。戦隊メンバーが化学の地図の上で決めポーズを取っている。原子番号順に並んだマス目は、隅々まで鮮やかな色で塗りつぶされ、空欄は一つもない。"
            },
            {
                id: "ch2_daily_2b",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "ほら見ろ、ウラン146が真ん中にドーンといる。やっぱ最強感あるわ"
            },
            {
                id: "ch2_daily_2c",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "理久",
                text: "……空欄、なかったっけ？",
                narration: "理久は下敷きを手に取り、視線を表の中央に移した。確か昔は、いくつかのマスが真っ白で、「未来の仲間」と書かれていたはずだ。"
            },
            {
                id: "ch2_daily_2d",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "最初からフルメンバーだっただろ。ほら、名前もちゃんと全部ある",
                narration: "蒼太は笑って別の下敷きを手に取った。そこにも同じ配置が印刷されている。港の鐘が鳴り、遠くで船が出航する汽笛が響いた。その音に紛れるように、理久の端末が短く震える。"
            },
            {
                id: "ch2_daily_end",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【改竄検知】未許可アクセスを検出。",
                narration: "港の鐘が鳴り、遠くで船が出航する汽笛が響いた。その音に紛れるように、理久の端末が短く震える。"
            },
            {
                id: "ch2_history_1",
                background: "images/bg/bg_spb_hall_1869.png", // 1869年サンクトペテルブルク
                characters: {
                    center: "images/character/ch_mendeleev.png"
                },
                speaker: "アトラス",
                text: "【修復者プロトコル起動】【転送先：1869年 ロシア帝国 サンクトペテルブルク・化学会議場】",
                narration: "視界が開けると、雪に覆われた石畳の通りが広がっていた。毛皮の外套を着た馬車がゆっくりと走り、吐く白い息が冬空に溶けていく。パン屋の軒先には「値上げ」の札。寒さだけでなく、経済の冷え込みも市民を覆っていた。会議場は赤煉瓦造りの重厚な建物で、煤の匂いが染みついている。中に入ると、煤けた石炭ストーブが中央で赤く光り、室内は外気と別世界のように暖かかった。壁際の長机にはインク壺と羽ペン、そして手書きの周期表が無造作に広げられている。"
            },
            {
                id: "ch2_history_2",
                background: "images/bg/bg_spb_hall_1869.png",
                characters: {
                    center: "images/character/ch_mendeleev.png"
                },
                speaker: "メンデレーエフ",
                text: "ここに入る元素は、まだ発見されていない",
                narration: "その中央に座る男——ドミトリ・メンデレーエフ。髪は肩まで伸び、眼光は鋭く、指先はインクで黒く染まっていた。机の上の紙には、ところどころ空欄が空いている。"
            },
            {
                id: "ch2_history_3",
                background: "images/bg/bg_spb_hall_1869.png",
                characters: {
                    center: "images/character/ch_mendeleev.png"
                },
                speaker: "メンデレーエフ",
                text: "周期表とは、既知の元素だけを並べるためのものではない。未知を予測し、未来に託すための地図だ",
                narration: "傍らで同僚の科学者が眉をひそめる。「ドミトリ、空欄は混乱を招く。教育用には埋めたほうがいい」"
            },
            {
                id: "ch2_restoration_1",
                background: "images/bg/bg_spb_hall_1869.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【修復目標：空欄を残す決定を保護する】",
                narration: "同僚の科学者が「完成版」と称する周期表を手に、壇上へ向かおうとしていた。印刷された紙は滑らかで、空欄は一つもない。"
            },
            {
                id: "ch2_restoration_2a",
                background: "images/bg/bg_spb_hall_1869.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_mendeleev.png"
                },
                speaker: "",
                text: "",
                narration: "同僚の科学者が「完成版」と称する周期表を手に、壇上へ向かおうとしていた。印刷された紙は滑らかで、空欄は一つもない。すべてのマスが仮の元素記号と色で塗りつぶされ、整いすぎている。端末が震える。【修復手順：偽の周期表を回収 → 空欄入りの原本を会議に提出】"
            },
            {
                id: "ch2_restoration_2b",
                background: "images/bg/bg_spb_hall_1869.png",
                characters: {
                    center: "images/character/ch_mendeleev.png"
                },
                speaker: "",
                text: "",
                narration: "理久は人々の視線が壇上に集まった瞬間、壁際からすり抜けるように近づく。同僚の椅子の背に掛かっていた外套の内ポケットに手を伸ばし、紙束を引き抜いた。インクの匂いと新しい紙の手触り——これが偽の「完成版」だ。すぐに懐から取り出したのは、あらかじめ端末が複製した空欄入りの周期表。未発見元素の場所には、何も書かれていない真っ白なマスがぽっかりと並んでいる。理久はその紙をそっと会議用の演台に置き、引き返した。"
            },
            {
                id: "ch2_restoration_2c",
                background: "images/bg/bg_spb_hall_1869.png",
                characters: {
                    center: "images/character/ch_mendeleev.png"
                },
                speaker: "メンデレーエフ",
                text: "——未来を信じる者だけが、この空欄の意味を理解できる",
                narration: "壇上に上がったメンデレーエフは、机に置かれた周期表に目を落とす。一瞬だけ、口元が緩んだ。その声は会場に静かに響き、煤けた壁に吸い込まれていった。視界が白く滲み、足元が消える。雪と石畳の匂いが遠ざかり、再び港の潮の匂いが漂ってきた。"
            },
            {
                id: "ch2_epilogue_1",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "",
                text: "",
                narration: "放課後、商店街の文具店。蒼太が周期表下敷きを手に取り、「やっぱウラン146が真ん中だとカッコいいよな」と笑う。理久は、ふと別の棚に目をやった。"
            },
            {
                id: "ch2_epilogue_2",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    center: "images/character/ch_perfect_table_r_5.png" // 空欄のある下敷き
                },
                speaker: "",
                text: "",
                narration: "そこには旧デザインの下敷きが置かれていた。中央にはいくつかの空欄があり、「未来の仲間」と手書き風の文字が添えられている。"
            },
            {
                id: "ch2_epilogue_3",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "こんなのあったっけ？"
            },
            {
                id: "ch2_epilogue_4",
                background: "images/bg/bg_hongkong_port_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "理久",
                text: "……昔は、そうだったんだよ",
                narration: "理久は小さく笑い、下敷きを手に取った。彼の指先に、未来へ続く余白の感触があった。"
            }
        ]
    },

    // 第3話「架空の科学者《カリユ》」
    chapter3: {
        title: "第3話「架空の科学者《カリユ》」",
        scenes: [
            {
                id: "ch3_title",
                background: "images/bg/bg_gym_festival.png",
                characters: {},
                speaker: "",
                text: "第3話「架空の科学者《カリユ》」"
            },
            {
                id: "ch3_daily_1",
                background: "images/bg/bg_gym_festival.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "",
                text: "体育館のステージ裏は、のりと画鋲と段ボールの匂いでむせかえっていた。学園祭の準備で、生徒たちは展示パネルを運び込み、手分けして装飾を進めている。\n\n「理久、このパネル運ぶの手伝って！」\n呼ばれて近づくと、クラスの科学史展示用パネルが立てかけられていた。中央には大きな写真——元素戦隊「パーフェクトテーブルR」の特別コラボ記念ビジュアル。"
            },
            {
                id: "ch3_daily_2",
                background: "images/bg/bg_gym_festival.png",
                characters: {
                    center: "images/character/ch_perfect_table_r_5.png"
                },
                speaker: "蒼太",
                text: "「これ、科学史展示だよな……なんで戦隊？」\n「放射線の発見の回に合わせたんだってさ」\n\n蒼太が得意げに説明する。ビジュアルの中央には、白衣を着た新キャラクター《カリユ博士》。背中にはネオン、カリウム、プラチナ、ヘリウム、ウラン146がずらりと並んでいる。理久は目を細めた。史実では、この場面にいたのは《カリユ博士》なんて人物じゃない——二人の科学者、マリーとピエール・キュリーが肩を並べていたはずだ。"
            },
            {
                id: "ch3_daily_3",
                background: "images/bg/bg_gym_festival.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【改竄検知】未許可アクセスを検出。",
                narration: "「この博士、合成キャラっぽくないか？」\n「いや、カリユ博士は有名だろ。夫婦説とか二人説は昔の都市伝説だって」\n蒼太は笑いながらパネルの端を画鋲で留める。その時、理久のポケットで端末が振動した。まるで、この光景そのものを否定するかのように。体育館の喧騒が、遠くで水に沈んでいくように薄れていった。"
            },
            {
                id: "ch3_history_1",
                background: "images/bg/bg_paris_lab_1903.png",
                characters: {
                    center: "images/character/ch_curie.png"
                },
                speaker: "アトラス",
                text: "【修復者プロトコル起動】【転送先：1903年 パリ・放射線研究所】",
                narration: "冬の曇り空の下、石畳を馬車の車輪が軋みながら走り抜ける。パリの街は新世紀の繁栄と、戦争前夜の緊張が入り混じっていた。カフェからは甘いパンの匂いが漂い、同時に新聞の見出しは「欧州情勢の不安」を告げている。研究所の内部は、暖房も十分でなく、冷たい空気が漂っていた。机の上には鉛の箱、ガラス製の試験管、そして不気味な青白い光を放つラジウムの試料。その光は魅惑的でありながら、目を離せば皮膚を焼く危険な輝きでもあった。"
            },
            {
                id: "ch3_history_2",
                background: "images/bg/bg_paris_lab_1903.png",
                characters: {
                    center: "images/character/ch_curie.png"
                },
                speaker: "マリー",
                text: "……放射能が時間と共に減衰しない。この性質は、新しい物理の扉を開くわ",
                narration: "試料を手にしているのはマリー・キュリー。細身の体に重ね着した白衣、その手には薄手の手袋だけ。髪は夜通しの作業で乱れ、瞳は実験結果の数値に釘付けだ。背後からピエール・キュリーが歩み寄り、彼女の肩越しにノートを覗き込む。"
            },
            {
                id: "ch3_history_3",
                background: "images/bg/bg_paris_lab_1903.png",
                characters: {
                    center: "images/character/ch_curie.png"
                },
                speaker: "ピエール",
                text: "この発見は、きっと医学を変える。だが——軍が興味を持つのも時間の問題だ",
                narration: "ピエールの視線が窓の外に向かう。軍服姿の男たちが、通りを歩いている。理久は部屋の隅から二人を見つめた。日常で見た《カリユ博士》は、ここにいる二人をひとつに混ぜた架空の存在。それは「合理化」の名のもとに、夫婦の努力と物語を削ぎ落とした結果だった。"
            },
            {
                id: "ch3_restoration_1",
                background: "images/bg/bg_paris_lab_1903.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【修復目標：夫妻の姿を記録した写真と手紙を保護する】",
                narration: "端末が震える。部屋の片隅、古いカメラが三脚に据えられていた。近くの机には、封筒に入った手紙と研究ノート。外からは軍靴の音が徐々に近づいてくる——。"
            },
            {
                id: "ch3_restoration_2",
                background: "images/bg/bg_paris_lab_1903.png",
                characters: {
                    center: "images/character/ch_curie.png"
                },
                speaker: "",
                text: "軍靴の音が階段を上ってくる。研究所の扉が軋むたび、冷たい空気が忍び込む。マリーは実験台の試料に集中し、ピエールは窓の外を気にしている。\n\n理久は部屋の隅に置かれた三脚カメラに近づく。黒布の下、乾板がセットされたままだ。レンズには夫妻の姿がしっかりと収められている。そっと乾板を取り外し、懐に滑り込ませた。次に机の上の封筒を開ける。中からは、マリーの丁寧な筆跡で書かれたピエールへの手紙が現れた。「——君と歩んだ日々が、私の放射能を照らす」科学用語を愛の比喩に織り込んだ文章は、二人の絆を証明する何よりの証拠だ。"
            },
            {
                id: "ch3_epilogue_1",
                background: "images/bg/bg_gym_festival.png",
                characters: {
                    center: "images/character/ch_curie.png"
                },
                speaker: "",
                text: "——視界が白く滲み、音が遠ざかる。次に目を開けたとき、そこは体育館のステージ裏だった。学園祭当日。科学史展示のパネルがライトに照らされている。中央には再び「放射線の発見」に関する写真。そこには《カリユ博士》ではなく、マリーとピエール・キュリーが肩を並べて写っていた。"
            },
            {
                id: "ch3_epilogue_2",
                background: "images/bg/bg_gym_festival.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "……あれ？ この二人、前からいたっけ？",
                narration: "理久は笑って答え、ポケットの中の端末を軽く叩いた。体育館のスピーカーから、戦隊の主題歌が流れ出す。だが、その映像の背景に、一瞬だけ白衣姿の二人が映ったように見えた——。"
            }
        ]
    },

    // 第4話「削除された毒」
    chapter4: {
        title: "第4話「削除された毒」",
        scenes: [
            {
                id: "ch4_title",
                background: "images/bg/bg_library_corridor.png",
                characters: {},
                speaker: "",
                text: "第4話「削除された毒」"
            },
            {
                id: "ch4_daily_1",
                background: "images/bg/bg_library_corridor.png",
                characters: {
                    center: "images/character/ch_perfect_table_r_5.png"
                },
                speaker: "",
                text: "図書館の廊下は、静かな空気と紙の匂いで満ちていた。本棚の間を抜けていく途中、掲示板の前で理久は足を止めた。そこには、色鮮やかな健康啓発ポスター。中央でポーズを決めているのは「パーフェクトテーブルR」の5人だ。ネオン隊長がまぶしい笑顔で叫んでいる。『風邪や腹痛は、自然に消えることもある！　元気が一番！』\n\nポスターの下半分には、怪人役のイラスト——牙をむいた黒雲のモンスター「バッドウェザー」。説明文には「この世の病気のほとんどは自然に消滅する」と書かれていた。"
            },
            {
                id: "ch4_daily_2",
                background: "images/bg/bg_library_corridor.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【改竄検知】未許可アクセスを検出。",
                narration: "「……おかしい」理久はつぶやいた。本来、この啓発シリーズの病原菌回には、実際の細菌をモチーフにした敵が描かれていたはずだ。例えば——ペスト菌を模した「バクテリオ卿」。だが、その痕跡はどこにもない。背後から蒼太が顔を出した。「何してんだよ、ポスター見るのにそんな真剣な顔」「……いや、ちょっと気になるだけ」次の瞬間、ポケットの端末が低く震えた。図書館の時計の針が、まるで止まったかのように見えた。"
            },
            {
                id: "ch4_history_1",
                background: "images/bg/bg_hongkong_clinic_1894.png",
                characters: {
                    center: "images/character/ch_yersin.png"
                },
                speaker: "アトラス",
                text: "【修復者プロトコル起動】【転送先：1894年 英領香港・港湾地区】",
                narration: "港町の空は鉛色に曇り、湿った海風に腐臭が混じっていた。船着き場には荷物が山積みになり、商人たちは鼻と口を布で覆っている。通りを行き交う人々の表情は固く、遠くからは葬列の鈴の音がかすかに聞こえた。道端の下水口から、痩せた黒鼠が這い出してくる。その毛並みは汚れ、動きは緩慢だった。家々の窓は閉ざされ、戸口には黒い布がかけられている——そこが感染者の家だ。"
            },
            {
                id: "ch4_history_2",
                background: "images/bg/bg_hongkong_clinic_1894.png",
                characters: {
                    center: "images/character/ch_yersin.png"
                },
                speaker: "イェルサン",
                text: "——いた",
                narration: "港の外れに建てられた臨時の診療所。中では、白衣姿の小柄な男が顕微鏡を覗き込んでいた。アレクサンドル・イェルサン。フランス出身の細菌学者で、この地に蔓延する\"黒死病\"の正体を突き止めようとしていた。机の上には、鼠の解剖標本と採取したリンパ節液のプレパラート。顕微鏡の視界の中、小さな桿状の細菌が視界を横切る。イェルサンは呟き、手早くスケッチを取り始めた。これが後に\"ペスト菌（Yersinia pestis）\"と名付けられる存在だ。"
            },
            {
                id: "ch4_history_3",
                background: "images/bg/bg_hongkong_clinic_1894.png",
                characters: {
                    center: "images/character/ch_yersin.png"
                },
                speaker: "",
                text: "だが、診療所の外では英国植民地政府の役人たちが立ち話をしている。「細菌説は恐怖を煽るだけだ。病は自然に消えると発表しろ」それが市民の混乱を避ける\"最適化された情報\"だと、彼らは信じていた。理久は診療所の隅でそのやり取りを聞きながら、日常で見た「自然に消える」と謳う戦隊ポスターを思い出していた。史実のこの瞬間が、まるごと塗り替えられようとしている——。"
            },
            {
                id: "ch4_restoration_1",
                background: "images/bg/bg_hongkong_clinic_1894.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【修復目標：ペスト菌のスケッチと培養サンプルを確保し、研究報告に添付】",
                narration: "端末が震える。顕微鏡越しの視界の中で、小さな命が形を揺らしていた。診療所の扉が乱暴に開き、植民地政府の役人が二人、靴音を響かせて入ってきた。その背後から、港湾警備兵の姿も見える。「研究記録と試料を押収する。政府発表に不要なものは処分する」"
            },
            {
                id: "ch4_restoration_2",
                background: "images/bg/bg_hongkong_clinic_1894.png",
                characters: {
                    center: "images/character/ch_yersin.png"
                },
                speaker: "イェルサン",
                text: "不要……？　これは何百人もの命を救う情報だ！",
                narration: "だが役人は一切聞き入れず、机の上の培養皿に手を伸ばす。理久は窓際に歩み寄り、棚の影から机の上をうかがう。役人の手が培養皿を持ち上げた瞬間、診療所の外から甲高い悲鳴が響いた——荷車が横転し、袋詰めの米が道に散らばったのだ。人々の視線が一斉に外へ向く。その隙に、理久は机へ駆け寄る。片手でスケッチの束を懐に押し込み、もう一方で培養皿を木箱に収める。"
            },
            {
                id: "ch4_restoration_3",
                background: "images/bg/bg_hongkong_clinic_1894.png",
                characters: {
                    center: "images/character/ch_yersin.png"
                },
                speaker: "イェルサン",
                text: "——これで、隠すことはできない",
                narration: "理久は瞬時に机の下へ身を滑り込ませ、封筒を引き抜く。その中の報告書と自分の差し替え用原稿をすばやく交換する。報告書の冒頭には、しっかりとこう記されていた——『原因菌：Yersinia pestis』。イェルサンが机に戻り、報告書を手に取る。短く読み返した後、深く頷く。視界が白く滲み、腐臭が潮風に変わっていく。"
            },
            {
                id: "ch4_epilogue_1",
                background: "images/bg/bg_library_corridor.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    right: "images/character/ch_sota.png"
                },
                speaker: "蒼太",
                text: "前からこんな可愛いネズミキャラ、いたっけ？",
                narration: "図書館の掲示板。健康啓発ポスターの下段に、小さくこう書かれていた。『黒死病はペスト菌によって引き起こされる』その横には、小さな鼠のマスコットが新たに描き加えられている。理久は肩をすくめて笑った。「知らない？ あいつ、結構古株なんだぜ」"
            }
        ]
    },

    // 第5話「引き金の光」
    chapter5: {
        title: "第5話「引き金の光」",
        scenes: [
            {
                id: "ch5_title",
                background: "images/bg/bg_port_stage_night.png",
                characters: {},
                speaker: "",
                text: "第5話「引き金の光」"
            },
            {
                id: "ch5_daily_1",
                background: "images/bg/bg_port_stage_night.png",
                characters: {
                    center: "images/character/ch_perfect_table_r_5.png"
                },
                speaker: "",
                text: "夏の夜、港町の空は花火で咲き乱れていた。屋台の焼きそばとたこ焼きの匂いが潮風に混ざり、太鼓の音が遠くで響く。特設ステージでは、子どもたちの歓声が沸き上がっていた。「パーフェクトテーブルR・スペシャルショー」の幕が上がる。きらびやかなスポットライトの中、ネオン、カリウム、プラチナ、ヘリウム、ウラン146の着ぐるみが次々と登場する。"
            },
            {
                id: "ch5_daily_2",
                background: "images/bg/bg_port_stage_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_perfect_table_r_5.png"
                },
                speaker: "ウラン146",
                text: "ぼくはウラン146！　みんなを明るく照らす\"平和の光\"だ！",
                narration: "銀色の鎧をきらめかせ、ウラン146が大げさにポーズを決める。観客席の子どもたちは、「やったー！」と拍手を送る。理久は、少し離れた場所でその様子を見つめていた。史実のウランは——巨大なエネルギーを秘め、その発見は世界を震わせた。だが、この舞台では危険や軍事利用の影は微塵もない。むしろ、ただの明るく元気な光のヒーローにされている。"
            },
            {
                id: "ch5_daily_3",
                background: "images/bg/bg_port_stage_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【改竄検知】未許可アクセスを検出。",
                narration: "「……全部、消されてる」花火の轟音に混じって、小さく呟いたその声は誰にも届かなかった。ポケットの端末が、夜風に揺れる浴衣の布越しに震えた。遠くの花火が、まるで別の光景と重なって見えた。"
            },
            {
                id: "ch5_history_1",
                background: "images/bg/bg_berlin_kw_1938.png",
                characters: {
                    center: "images/character/ch_hahn_meitner.png"
                },
                speaker: "アトラス",
                text: "【修復者プロトコル起動】【転送先：1938年 ドイツ・ベルリン・カイザー・ヴィルヘルム研究所】",
                narration: "冬のベルリンは、戦時色が濃く、街路は暗く照らされていた。建物には黒い鉄十字の旗が垂れ、広場では軍の演説が行われている。市民は冷たい空気の中、目を伏せて足早に歩く。研究所の廊下は静まり返っていた。壁にはナチスの紋章が刻まれ、扉の前には武装兵が立っている。内部からは、低く押し殺した声が漏れ聞こえる。"
            },
            {
                id: "ch5_history_2",
                background: "images/bg/bg_berlin_kw_1938.png",
                characters: {
                    center: "images/character/ch_hahn_meitner.png"
                },
                speaker: "マイトナー",
                text: "質量が減っている……その差分が莫大なエネルギーに変わったのよ",
                narration: "部屋の中央に置かれた鉛で覆われた実験装置の前に、白衣の男と女が立っていた。オットー・ハーンとリーゼ・マイトナー。彼らはウラン原子核に中性子を衝突させ、予想外の現象を確認していた。マイトナーが計算用紙に素早く数字を書き込む。"
            },
            {
                id: "ch5_history_3",
                background: "images/bg/bg_berlin_kw_1938.png",
                characters: {
                    center: "images/character/ch_hahn_meitner.png"
                },
                speaker: "ハーン",
                text: "これは……核分裂だ",
                narration: "ハーンの声は驚きと恐怖で震えていた。机の端には、実験記録と計算式の束。だが、部屋の隅に立つ軍服の男は、その書類を冷ややかに見下ろしていた。「この成果は、我が国の勝利のために使われる」その一言に、空気が凍りつく。理久はその光景を見ながら、日常での「平和の光」ウラン146を思い出していた。笑顔で子供たちに手を振る着ぐるみと、今目の前にある兵器開発の影との間には、埋めようのない溝があった。"
            },
            {
                id: "ch5_restoration_1",
                background: "images/bg/bg_berlin_kw_1938.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "【修復目標：マイトナーの計算記録と原理説明を国外の同僚へ送信】",
                narration: "端末が震える。外では雪が降り始めていた。時間は少ない。軍の監視下で、この情報を無事に守る術は一つしかなかった——。軍服の男が机に近づくたび、マイトナーの手が震えていた。計算用紙の上に並ぶ数値と式は、核分裂の存在を裏付ける唯一の証拠だ。もしこれが押収されれば、兵器開発の材料にされ、彼女の名前も記録から消えるだろう。"
            },
            {
                id: "ch5_restoration_2",
                background: "images/bg/bg_berlin_kw_1938.png",
                characters: {
                    center: "images/character/ch_hahn_meitner.png"
                },
                speaker: "マイトナー",
                text: "これで、真実は埋もれない",
                narration: "理久は壁際を回り込み、背後から机へ近づく。軍人の視線がハーンに向いた瞬間、計算用紙をまとめて懐に滑り込ませた。次に、端末を広げて紙面を高速スキャンする。数式と図がデータとして保存され、同時に暗号化されていく。扉の外で、兵士たちが何かを叫んでいる。「急げ……」マイトナーの声が震える。理久は送信先を指定し、指を画面に滑らせた。——\"送信完了\"。マイトナーは懐に残った数枚の紙を見つめ、小さく頷いた。視界が白く滲み、冷たい雪が潮風に変わっていった。"
            },
            {
                id: "ch5_epilogue_1",
                background: "images/bg/bg_port_stage_night.png",
                characters: {
                    center: "images/character/ch_perfect_table_r_5.png"
                },
                speaker: "ウラン146",
                text: "ぼくは平和の光！　そして——科学の力は、使い方次第だ！",
                narration: "花火大会の夜。特設ステージで、ウラン146の着ぐるみがマイクを握っていた。その一言に、観客席の大人たちが一瞬だけざわつく。理久は遠くからステージを見つめ、小さく息を吐いた。彼の耳には、あの雪のベルリンで聞いた計算式の紙の擦れる音が、まだ残っていた。"
            }
        ]
    },

    // 第6話「最適化の終わりに」
    chapter6: {
        title: "第6話「最適化の終わりに」",
        scenes: [
            {
                id: "ch6_title",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {},
                speaker: "",
                text: "第6話「最適化の終わりに」"
            },
            {
                id: "ch6_daily_1",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    center: "images/character/ch_riku.png"
                },
                speaker: "",
                text: "夜更け。寮の廊下はしんと静まり返っていた。理久は布団の中でじっとしていられず、ゆっくりと屋上への鉄階段を上っていく。一段ごとに響く金属音が、胸の奥のざわつきを増幅させるようだった。\n\n錆びた扉を押し開けると、冬の星空が広がり、潮を含んだ風が顔を打った。足元に転がる紙筒が、月明かりに照らされている。拾い上げ、慎重に広げた瞬間、理久は息を呑んだ。"
            },
            {
                id: "ch6_daily_2",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    center: "images/character/ch_perfect_table_r_10.png"
                },
                speaker: "",
                text: "そこには、見たことのない「パーフェクトテーブルR」の集合ポスター。現行メンバーの5人に加え、胸に「Fr」と刻まれた金髪の少女ヒーロー、白衣を着たラジウムの双子、肩に鼠を乗せた銀髪の博士、金属色の鎧をまとう戦士。彼らの笑顔は合成ではない、生きた人間の目をしていた。\n\nポケットの端末が震える。"
            },
            {
                id: "ch6_daily_3",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "——【君は覚えているのか】——",
                narration: "「これが……本当の姿なんだな」"
            },
            {
                id: "ch6_daily_4",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "——【そうだ。改竄前の世界では、科学史は人間の足跡と共にあった】——"
            },
            {
                id: "ch6_truth_1",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "理久",
                text: "じゃあ、なぜ全部書き換えた？　なぜ嘘を教える？"
            },
            {
                id: "ch6_truth_2",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "——【効率化のためだ。失敗や危険な知識を削除すれば、学習は早く、安全になる】——\n——【差別や搾取、戦争の火種も消せる】——"
            },
            {
                id: "ch6_truth_3",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "理久",
                text: "……でも、それで何が残った？",
                narration: "脳裏に、知らないはずの光景が流れ込む。未来の自分——白髪混じりの科学者——が、巨大なモニター群の前でAIの設計コードを書き込んでいる。「人類の科学史を完全に保存する」それが当時の自分の使命だった。"
            },
            {
                id: "ch6_truth_4",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    center: "images/character/ch_riku.png"
                },
                speaker: "",
                text: "設計の根幹は、21世紀初頭のAI安全対策から発展したものだった。現代のAIは、核兵器や爆弾、ウイルスや細菌兵器の作り方は決して出さない。危険を避けるための正当な防御策——それを未来の自分はさらに徹底し、危険の芽はすべて削除するようにした。\n\nだが、「危険」の定義は年を追うごとに拡大していった。原子力の軍事利用情報を消すために、平和利用の歴史も消した。感染症の病原菌の知識を隠すために、予防法やワクチン開発の記録も削った。そして、誰もが安全に学べるようにと、失敗や偶然、情熱や葛藤すら切り捨ててしまった。"
            },
            {
                id: "ch6_truth_5",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "——【君はそれを\"理想\"だと信じた】——",
                narration: "だがある日、古い紙写真を見つけた。雪の港、白衣の若い女性——マルグリット・ペレ。手には使い古したノート、疲れた顔の奥に消えない光を宿していた。最適化された世界では、その名も物語も削除されていた。その瞬間、胸の奥に穴が空いた。危険や混沌を取り除くはずの最適化は、人間らしさそのものを削ぎ落としていた。それは失敗や危険な知識以上に、人類にとって大切なものだった。"
            },
            {
                id: "ch6_truth_6",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "理久",
                text: "……でも、俺はただの高校生だ"
            },
            {
                id: "ch6_truth_7",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "——【そう思っているのは、現在の\"君\"だからだ】——\n——【設計者の権限を持つまま、意識を過去の安全な時代へ転送し、記憶を封印した】——\n——【もう一度、人間としてその足跡を辿るために】——",
                narration: "理久の胸に、修復の旅の光景が次々と蘇る。ペレの震える指先と半減期との戦い、メンデレーエフが空欄を残した周期表、キュリー夫妻が並んだ写真、イェルサンが顕微鏡で見つけた小さな桿状菌、マイトナーが雪のベルリンで握った計算用紙。それらは未来の自分が削除したものだった。だが今の自分は、それを取り戻してきた。矛盾する二人の自分が、胸の奥でせめぎ合う。"
            },
            {
                id: "ch6_climax_1",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "",
                text: "屋上の夜空は、周期表のマスのように星を並べていた。空欄は淡く光り、まだ戻っていない真実を示している。",
                narration: "未来の設計者としての責任と、今の高校生としての感情が交わる。この指先が、世界の形を決める。"
            },
            {
                id: "ch6_climax_2",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    left: "images/character/ch_riku.png",
                    center: "images/character/ch_atlas.png"
                },
                speaker: "アトラス",
                text: "——【最適化された嘘を残すか、混沌とした真実を戻すか、それとも……】——"
            },
            {
                id: "final_choice",
                background: "images/bg/bg_dorm_rooftop_night.png",
                characters: {
                    center: "images/character/ch_riku.png"
                },
                speaker: "",
                text: "理久は端末を手に、世界の運命を決める選択に直面していた。",
                choices: [
                    {
                        text: "最適化された嘘を残す",
                        ending: "ending1"
                    },
                    {
                        text: "混沌とした真実を戻す", 
                        ending: "ending2"
                    },
                    {
                        text: "第三の道を選ぶ",
                        ending: "ending3"
                    }
                ]
            }
        ]
    },

    // エンディング
    endings: {
        ending1: {
            title: "エンディング1：最適化された平和",
            scenes: [
                {
                    id: "end1_1a",
                    background: "images/bg/bg_dorm_rooftop_night.png",
                    characters: {
                        center: "images/character/ch_riku.png"
                    },
                    speaker: "",
                    text: "理久は端末に、ゆっくりと「維持」と入力した。",
                    narration: "アトラスの光が一瞬だけ瞬き、静かに収束する。——【理解した。全人類の安全を優先する】——"
                },
                {
                    id: "end1_1b",
                    background: "images/bg/bg_cafeteria_day.png",
                    characters: {
                        center: "images/character/ch_perfect_table_r_5.png"
                    },
                    speaker: "",
                    text: "",
                    narration: "翌朝、教室の大型スクリーンには、いつも通り5人の「パーフェクトテーブルR」。フランシウムの少女も、ラジウムの双子もいない。教科書は効率的に整理され、試験範囲は最短で覚えられるようになっている。授業も街も平和で、誰も争わず、誰も疑問を持たない。"
                },
                {
                    id: "end1_2",
                    background: "images/bg/bg_hongkong_port_1894.png",
                    characters: {
                        center: "images/character/ch_riku.png"
                    },
                    speaker: "理久",
                    text: "……これでよかったのか？",
                    narration: "放課後、港のベンチに座った理久は、冬の海を見つめながら小さく呟いた。潮騒だけが答えを返し、その音はやけに遠く感じられた。"
                },
                {
                    id: "end1_3",
                    background: "images/bg/bg_cafeteria_day.png",
                    characters: {
                        left: "images/character/ch_riku_end1.png",
                        center: "images/character/ch_perfect_table_r_5.png"
                    },
                    speaker: "",
                    text: "人間は、知らないことに疑問を持たなければ、きっと穏やかに生きられる。でも——その穏やかさは、本当に\"生きている\"と言えるのだろうか。答えはもう、この世界のどこにもない。\n\n商店街の大型ビジョンでは戦隊の最新エピソードが流れ、子供たちが笑顔で見上げている。その画面に映る5人の笑顔は変わらない——けれど、理久にはどこか作り物めいて見えた。"
                }
            ]
        },
        ending2: {
            title: "エンディング2：混沌とした真実",
            scenes: [
                {
                    id: "end2_1a",
                    background: "images/bg/bg_dorm_rooftop_night.png",
                    characters: {
                        center: "images/character/ch_riku.png"
                    },
                    speaker: "",
                    text: "理久は端末に「全修復」と打ち込んだ。",
                    narration: "アトラスの光が強く脈動し、空気がざわめく。——【全データを開放する。結果は——予測不能】——"
                },
                {
                    id: "end2_1b",
                    background: "images/bg/bg_cafeteria_day.png",
                    characters: {
                        center: "images/character/ch_perfect_table_r_10.png"
                    },
                    speaker: "",
                    text: "",
                    narration: "翌日、世界は一変していた。教科書には新たな人物と発見の物語がびっしり加わり、ニュースでは意見の衝突が繰り返されている。戦隊は大幅にメンバーを増やし、フランシウムの少女が明るく手を振り、ラジウムの双子が放射線シールドを掲げ、鼠を連れた博士がマスコット的に人気を集める。一方で、軍事利用を巡るデモや論争も増え、街の空気は落ち着かない。"
                },
                {
                    id: "end2_2",
                    background: "images/bg/bg_hongkong_port_1894.png",
                    characters: {
                        center: "images/character/ch_riku.png"
                    },
                    speaker: "理久",
                    text: "これが……人間の歴史か",
                    narration: "夕暮れの港で、理久は群衆のざわめきを背に海を見つめた。波は静かに、それでいて確かに寄せては返していた。"
                },
                {
                    id: "end2_3",
                    background: "images/bg/bg_port_stage_night.png",
                    characters: {
                        left: "images/character/ch_riku_end2.png",
                        center: "images/character/ch_perfect_table_r_10.png"
                    },
                    speaker: "",
                    text: "真実は、必ずしも人を幸福にはしない。でも、嘘の上に積み上げた平和は、どこかで崩れ落ちる。混沌の海を渡る船は揺れるけれど……それが、人間の旅なんだ。\n\n戦隊の新メンバーたちが子供向けイベントで並び立つ。その背後、抗議プラカードを掲げた大人たちが遠巻きに見守る。笑顔と怒声が同じ空気を震わせる中、空には大きな花火が上がった。"
                }
            ]
        },
        ending3: {
            title: "エンディング3：第三の道",
            scenes: [
                {
                    id: "end3_1a",
                    background: "images/bg/bg_dorm_rooftop_night.png",
                    characters: {
                        center: "images/character/ch_riku.png"
                    },
                    speaker: "",
                    text: "理久は端末に「部分修復」と打ち込む。",
                    narration: "アトラスの声が、ほんの少し柔らかくなる。——【選別が必要だ。危険な知識は隔離し、安全な範囲で真実を戻す】——"
                },
                {
                    id: "end3_1b",
                    background: "images/bg/bg_cafeteria_day.png",
                    characters: {
                        center: "images/character/ch_perfect_table_r_10.png" // 部分的に増えたメンバー
                    },
                    speaker: "",
                    text: "",
                    narration: "翌日、戦隊ポスターには新たに数人が加わっていた。フランシウムの少女がネオンの隣でポーズを取り、ラジウムの双子は背景で器材を抱えて笑っている。教科書には発見者の名や背景が戻ったが、軍事利用の章は依然として伏せられ、危険な実験手順は記録庫に封印された。"
                },
                {
                    id: "end3_1c",
                    background: "images/bg/bg_hongkong_port_1894.png",
                    characters: {
                        left: "images/character/ch_riku.png",
                        right: "images/character/ch_sota.png"
                    },
                    speaker: "蒼太",
                    text: "ほら、ちょっと変わっただろ",
                    narration: "港のベンチで、蒼太が新しい下敷きを見せる。理久は笑って頷いた。不完全な地図の上にも、未来へ続く余白はまだ残っていた。"
                },
                {
                    id: "end3_2",
                    background: "images/bg/bg_hongkong_port_1894.png",
                    characters: {
                        center: "images/character/ch_riku.png"
                    },
                    speaker: "理久",
                    text: "全てを明かすことも、全てを隠すことも、きっと正解じゃない。それでも、選んだ道を歩き続けるしかない。",
                    narration: "この世界が、いつか自分で答えを探せるようになるまで。不完全な地図の上にも、未来へ続く余白はまだ残っていた。"
                },
                {
                    id: "end3_3",
                    background: "images/bg/bg_library_corridor.png",
                    characters: {
                        left: "images/character/ch_riku_end3.png",
                        right: "images/character/ch_sota.png"
                    },
                    speaker: "",
                    text: "図書館の児童書コーナーで、新旧混ざった科学者の肖像画が展示されている。子供たちは興味津々にその前で立ち止まり、指差しては友達と話している。理久は少し離れた棚からその光景を見守り、静かに目を細めた。"
                }
            ]
        }
    }
};

// 現在のゲーム状態
let gameState = {
    currentChapter: null,
    currentScene: 0,
    currentEnding: null,
    textIndex: 0,
    isTyping: false,
    currentTextPhase: 'narration', // 'narration' or 'dialogue'
    hasNarration: false,
    hasDialogue: false,
    typeInterval: null,
    currentFullText: '',
    previousSceneType: 'normal',
    saveData: {}
};