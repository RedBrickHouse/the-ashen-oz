/* The Ashen OZ i18n: ko (default) / en / zh / ja */
(function () {
  var LANGS = ["ko", "en", "zh", "ja"];
  var T = {
    ko: {
      docTitle: "The Ashen OZ | 잿빛의 오즈",
      topCta: "Steam 위시리스트",
      heroLine: "잿빛으로 물든 오즈, <br class=\"br-m\">소녀의 동화가 다시 시작된다",
      heroMeta: "잿빛의 오즈 · 2D 다크 액션 로그라이트",
      verse1: "피 묻은 구두를 신고,<br>소녀는 마녀의 우산을 편다",
      plate1: "사슬에 묶인 고래",
      verse2: "파고들고, 받아치고, 몰아붙인다<br>숨 돌릴 곳은 우산 아래뿐",
      plate2: "잿빛 폐허의 전투",
      verse3: "촛불이 일렁이는 연회장,<br>식탁의 주인이 몸을 일으킨다",
      plate3: "연회장의 괴물",
      verse4: "노란 벽돌길이 끝나는 곳,<br>잿빛 안개 속으로 걸어 들어간다",
      plate4: "랜턴 불빛 아래",
      verse5: "잿빛 주사위의 루프 속에서,<br>도로시는 절망을 베며 잃어버린 기억을 찾아간다",
      plate5: "당신이 알던 오즈는 사라졌다",
      finBtn: "Steam 위시리스트 등록",
      finNote: "위시리스트에 담아 두면 출시 소식을 가장 먼저 받아볼 수 있습니다",
      trailer: "공식 트레일러"
    },
    en: {
      docTitle: "The Ashen OZ",
      topCta: "Wishlist on Steam",
      heroLine: "Oz, stained in ash. <br class=\"br-m\">A girl's fairytale begins again",
      heroMeta: "The Ashen OZ · 2D dark action roguelite",
      verse1: "In bloodstained shoes,<br>the girl opens the witch's umbrella",
      plate1: "The chained whale",
      verse2: "Dash in, parry, press on.<br>The only shelter is beneath the umbrella",
      plate2: "Battle in the ashen ruins",
      verse3: "In a candlelit banquet hall,<br>the master of the table rises",
      plate3: "The monster of the banquet hall",
      verse4: "Where the yellow brick road ends,<br>she walks into the ashen fog",
      plate4: "Under the lantern light",
      verse5: "Inside the loop of the Ashen Dice,<br>Dorothy cuts through despair toward her lost memories",
      plate5: "The Oz you knew is gone",
      finBtn: "Wishlist on Steam",
      finNote: "Add it to your wishlist and be the first to hear about the release",
      trailer: "Official trailer"
    },
    zh: {
      docTitle: "The Ashen OZ",
      topCta: "加入 Steam 愿望单",
      heroLine: "染上灰烬的奥兹，<br class=\"br-m\">少女的童话再度开始",
      heroMeta: "The Ashen OZ · 2D 黑暗动作 Roguelite",
      verse1: "穿上染血的鞋，<br>少女撑开女巫的雨伞",
      plate1: "被锁链束缚的鲸",
      verse2: "突进、格挡、穷追猛打<br>唯有伞下才能喘息",
      plate2: "灰烬废墟中的战斗",
      verse3: "烛光摇曳的宴会厅，<br>餐桌的主人缓缓起身",
      plate3: "宴会厅的怪物",
      verse4: "黄砖路的尽头，<br>她走进灰色的雾中",
      plate4: "灯笼的光下",
      verse5: "在灰烬骰子的循环中，<br>桃乐丝斩开绝望，寻回失去的记忆",
      plate5: "你所熟知的奥兹已不复存在",
      finBtn: "加入 Steam 愿望单",
      finNote: "加入愿望单，第一时间获得发售消息",
      trailer: "官方预告片"
    },
    ja: {
      docTitle: "The Ashen OZ",
      topCta: "Steamでウィッシュリスト",
      heroLine: "灰に染まったオズ、<br class=\"br-m\">少女の童話がふたたび始まる",
      heroMeta: "The Ashen OZ · 2Dダークアクションローグライト",
      verse1: "血に染まった靴を履き、<br>少女は魔女の傘を開く",
      plate1: "鎖につながれた鯨",
      verse2: "踏み込み、受け流し、畳みかける<br>息をつけるのは傘の下だけ",
      plate2: "灰色の廃墟での戦い",
      verse3: "蝋燭が揺れる宴の間、<br>食卓の主が身を起こす",
      plate3: "宴の間の怪物",
      verse4: "黄色いレンガの道が終わる場所、<br>灰色の霧の中へ歩いていく",
      plate4: "ランタンの灯りの下で",
      verse5: "灰のダイスのループの中で、<br>ドロシーは絶望を斬り、失われた記憶へと向かう",
      plate5: "あなたの知るオズは、もうない",
      finBtn: "Steamでウィッシュリスト登録",
      finNote: "ウィッシュリストに入れておくと、発売の知らせをいち早く受け取れます",
      trailer: "公式トレーラー"
    }
  };
  function apply(lang) {
    var t = T[lang]; if (!t) return;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    document.title = t.docTitle;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); if (t[k] !== undefined) el.innerHTML = t[k];
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-title"); if (t[k] !== undefined) { el.title = t[k]; el.setAttribute("aria-label", t[k]); }
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-lang") === lang); });
    try { localStorage.setItem("ashenoz_lang", lang); } catch (e) {}
  }
  window.setLang = apply;
  function initial() {
    try { var q = new URLSearchParams(location.search).get("lang"); if (q && LANGS.indexOf(q) >= 0) return q; } catch (e) {}
    var l = null; try { l = localStorage.getItem("ashenoz_lang"); } catch (e) {}
    if (l && LANGS.indexOf(l) >= 0) return l;
    return "ko";
  }
  if (document.readyState !== "loading") apply(initial());
  else document.addEventListener("DOMContentLoaded", function () { apply(initial()); });
})();
