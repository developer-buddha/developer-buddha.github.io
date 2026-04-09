// ===== Result Data =====
const RESULTS = {
  '01': {
    name: '애욕', nameCn: '愛欲', type: 'tam', strength: 'strong',
    tagline: '끊임없는 갈망의 불꽃',
    icon: '🔥',
    defaultScores: { t: 9, j: 2, c: 1 },
    gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
    cardBg: 'linear-gradient(135deg, rgba(231,76,60,0.3), rgba(192,57,43,0.2))',
    description: '당신의 마음 깊은 곳에는 강렬한 욕망의 불꽃이 타오르고 있습니다. 무언가를 원하고, 가지고, 이루고자 하는 에너지가 매우 강합니다. 이 열정은 대단한 성취의 원동력이 되기도 하지만, 집착으로 변하면 끝없는 갈증이 됩니다. 가진 것에 만족하기 어렵고, 항상 더 많은 것을 향해 달려가는 당신. 그 에너지를 올바른 방향으로 쓴다면 세상을 바꿀 수 있습니다.',
    practices: [
      { icon: '🧘', title: '부정관(不淨觀) 명상', desc: '집착하는 대상의 무상함을 관찰하세요. 모든 것은 변합니다.' },
      { icon: '📿', title: '사십이장경 읽기', desc: '욕망의 본질과 내려놓음의 지혜를 담은 경전입니다.' },
      { icon: '💡', title: '하루 한 가지 내려놓기', desc: '매일 작은 것 하나를 의도적으로 놓아보세요. 비움의 자유를 경험할 수 있습니다.' }
    ]
  },
  '02': {
    name: '탐착', nameCn: '貪着', type: 'tam', strength: 'mid',
    tagline: '놓지 못하는 집착의 손',
    icon: '🫴',
    defaultScores: { t: 6, j: 3, c: 3 },
    gradient: 'linear-gradient(135deg, #e67e22, #d35400)',
    cardBg: 'linear-gradient(135deg, rgba(230,126,34,0.3), rgba(211,84,0,0.2))',
    description: '당신은 한번 마음에 든 것을 쉽게 놓지 못하는 성향입니다. 사람이든 물건이든 경험이든, 좋았던 것에 대한 미련이 오래 남습니다. 이 마음은 깊은 애정과 성실함의 표현이기도 하지만, 때로는 변화를 두려워하게 만듭니다. 지금 이 순간에 충분히 머무르면서도, 흘러가는 것을 편안히 보내줄 수 있는 여유가 필요합니다.',
    practices: [
      { icon: '🧘', title: '위빠사나(관찰) 명상', desc: '감각과 감정이 일어나고 사라지는 것을 있는 그대로 관찰하세요.' },
      { icon: '📿', title: '반야심경 읽기', desc: '"색즉시공 공즉시색" — 집착할 실체가 없음을 깨닫는 지혜입니다.' },
      { icon: '💡', title: '감사 일기 쓰기', desc: '이미 가진 것에 감사하면, 더 원하는 마음이 자연스레 줄어듭니다.' }
    ]
  },
  '03': {
    name: '간탐', nameCn: '慳貪', type: 'tam', strength: 'weak',
    tagline: '은근히 스며드는 소유욕',
    icon: '🌙',
    defaultScores: { t: 5, j: 4, c: 3 },
    gradient: 'linear-gradient(135deg, #f39c12, #f1c40f)',
    cardBg: 'linear-gradient(135deg, rgba(241,196,15,0.3), rgba(243,156,18,0.2))',
    description: '겉보기에는 욕심이 없어 보이지만, 마음 한켠에 은근한 소유욕이 자리하고 있습니다. 티 나지 않게 비교하고, 조용히 더 나은 것을 바라는 마음. 이것은 나쁜 것이 아니라 자연스러운 인간의 모습입니다. 다만 이 마음을 인식하고 있는 것만으로도 큰 차이를 만들 수 있습니다. 의식적인 나눔과 베풂이 이 번뇌를 녹이는 열쇠입니다.',
    practices: [
      { icon: '🧘', title: '자비명상(慈悲冥想)', desc: '나와 타인에게 따뜻한 마음을 보내는 명상입니다.' },
      { icon: '📿', title: '보시(布施) 실천', desc: '작은 것이라도 나누어 보세요. 나눔은 탐심을 녹이는 가장 직접적인 수행입니다.' },
      { icon: '💡', title: '미니멀 라이프 도전', desc: '일주일에 하나씩 불필요한 물건을 정리해보세요.' }
    ]
  },
  '04': {
    name: '진에', nameCn: '瞋恚', type: 'jin', strength: 'strong',
    tagline: '불타는 분노의 칼날',
    icon: '⚡',
    defaultScores: { t: 1, j: 9, c: 2 },
    gradient: 'linear-gradient(135deg, #2c3e50, #34495e)',
    cardBg: 'linear-gradient(135deg, rgba(44,62,80,0.5), rgba(52,73,94,0.3))',
    description: '당신의 마음에는 강렬한 분노의 에너지가 자리하고 있습니다. 불의를 참지 못하고, 부당한 일에 즉각 반응하는 정의감의 소유자입니다. 이 에너지는 세상의 잘못을 바로잡는 힘이 되기도 하지만, 조절되지 않으면 자신과 주변 사람 모두를 태워버릴 수 있습니다. 분노 아래 숨어있는 진짜 감정 — 두려움, 상처, 외로움 — 을 들여다보는 것이 치유의 시작입니다.',
    practices: [
      { icon: '🧘', title: '호흡 관찰 명상', desc: '분노가 올라올 때 10번의 깊은 호흡. 감정과 반응 사이에 공간을 만드세요.' },
      { icon: '📿', title: '인욕바라밀(忍辱波羅蜜)', desc: '참는 것이 아니라 이해하는 것. 상대의 입장을 헤아리는 수행입니다.' },
      { icon: '💡', title: '분노 일기 쓰기', desc: '화가 날 때 3줄로 적어보세요. 적는 행위만으로 감정이 객관화됩니다.' }
    ]
  },
  '05': {
    name: '질투', nameCn: '嫉妬', type: 'jin', strength: 'mid',
    tagline: '비교하는 거울',
    icon: '🪞',
    defaultScores: { t: 3, j: 6, c: 3 },
    gradient: 'linear-gradient(135deg, #8e44ad, #9b59b6)',
    cardBg: 'linear-gradient(135deg, rgba(142,68,173,0.3), rgba(155,89,182,0.2))',
    description: '당신은 타인과 자신을 비교하는 마음이 은근히 강합니다. 다른 사람의 성공이나 행복이 때로 불편하게 느껴지고, 마음 한쪽에서 "왜 나는 안 되지?"라는 질문이 올라옵니다. 이것은 사실 더 나아지고 싶은 강한 자기 발전 욕구의 다른 표현입니다. 비교의 대상을 타인에서 어제의 나로 바꾸면, 질투는 성장의 연료가 됩니다.',
    practices: [
      { icon: '🧘', title: '수희(隨喜) 명상', desc: '다른 사람의 행복을 함께 기뻐하는 연습입니다. 처음엔 어색해도 반복하면 마음이 넓어집니다.' },
      { icon: '📿', title: '자기 자비 수행', desc: '"나는 있는 그대로 충분하다"를 되뇌며, 자신을 따뜻하게 안아주세요.' },
      { icon: '💡', title: 'SNS 디톡스', desc: '일주일에 하루, 비교의 창을 닫아보세요. 놀라운 평화가 찾아옵니다.' }
    ]
  },
  '06': {
    name: '불만', nameCn: '不滿', type: 'jin', strength: 'weak',
    tagline: '잔잔한 불평의 파도',
    icon: '🌊',
    defaultScores: { t: 3, j: 5, c: 4 },
    gradient: 'linear-gradient(135deg, #2980b9, #3498db)',
    cardBg: 'linear-gradient(135deg, rgba(41,128,185,0.3), rgba(52,152,219,0.2))',
    description: '큰 분노는 아니지만, 일상 곳곳에서 작은 불만과 불평이 스며들고 있습니다. "왜 이렇게밖에 안 되지?" "좀 더 나을 수 없나?" 하는 생각이 습관처럼 찾아옵니다. 이 마음은 더 나은 것을 추구하는 건강한 욕구이기도 하지만, 현재의 좋은 점을 놓치게 만들기도 합니다. 불만을 감사로 전환하는 작은 습관이 삶의 질을 크게 바꿔줍니다.',
    practices: [
      { icon: '🧘', title: '감사 명상', desc: '오늘 하루 감사한 3가지를 떠올리며 명상하세요.' },
      { icon: '📿', title: '지족(知足) 수행', desc: '"족한 줄 아는 자가 진정 부자"라는 가르침을 되새겨보세요.' },
      { icon: '💡', title: '불평 금지 챌린지', desc: '하루 동안 불평 대신 대안을 말해보세요. 생각의 방향이 바뀝니다.' }
    ]
  },
  '07': {
    name: '무명', nameCn: '無明', type: 'chi', strength: 'strong',
    tagline: '깊은 안개 속의 미혹',
    icon: '🌫️',
    defaultScores: { t: 2, j: 1, c: 9 },
    gradient: 'linear-gradient(135deg, #636e72, #95a5a6)',
    cardBg: 'linear-gradient(135deg, rgba(99,110,114,0.4), rgba(149,165,166,0.2))',
    description: '당신의 마음에는 짙은 안개가 드리워져 있습니다. 삶의 방향이 불분명하고, 중요한 것과 그렇지 않은 것의 구분이 흐릿합니다. 무명(無明)은 모든 번뇌의 근본이며, 동시에 가장 알아차리기 어려운 번뇌입니다. 하지만 바로 이 "모르겠다"는 자각이야말로 깨달음의 첫걸음입니다. 안개를 걷어내는 것은 한순간이 아니라 꾸준한 탐구의 과정입니다.',
    practices: [
      { icon: '🧘', title: '화두(話頭) 명상', desc: '"나는 누구인가?" 이 질문을 깊이 탐구하세요. 답이 아니라 질문 자체가 수행입니다.' },
      { icon: '📿', title: '사성제(四聖諦) 공부', desc: '고통의 원인과 소멸, 그 길을 체계적으로 이해해보세요.' },
      { icon: '💡', title: '매일 10분 독서', desc: '지혜로운 글을 꾸준히 읽으면, 안개가 조금씩 걷힙니다.' }
    ]
  },
  '08': {
    name: '의심', nameCn: '疑心', type: 'chi', strength: 'mid',
    tagline: '흔들리는 갈대',
    icon: '🌾',
    defaultScores: { t: 3, j: 3, c: 6 },
    gradient: 'linear-gradient(135deg, #795548, #a1887f)',
    cardBg: 'linear-gradient(135deg, rgba(121,85,72,0.35), rgba(161,136,127,0.2))',
    description: '당신은 결정을 내리기 어려워하고, 선택한 후에도 "이게 맞나?" 하는 의심이 따라옵니다. 이것은 신중함과 깊은 사고력의 표현이기도 합니다. 하지만 과도한 의심은 행동을 멈추게 하고, 기회를 놓치게 합니다. 완벽한 답은 없다는 것을 받아들이고, 불완전한 채로 한 걸음을 내딛는 용기가 의심을 넘는 열쇠입니다.',
    practices: [
      { icon: '🧘', title: '걷기 명상', desc: '한 걸음 한 걸음에 집중하세요. 작은 확신의 경험이 쌓여 큰 신뢰가 됩니다.' },
      { icon: '📿', title: '팔정도(八正道) 공부', desc: '올바른 길의 8가지 기준을 알면, 결정의 기준점이 생깁니다.' },
      { icon: '💡', title: '5초 규칙 실천', desc: '망설여질 때 5초 안에 행동하세요. 의심이 자라기 전에 움직이는 연습입니다.' }
    ]
  },
  '09': {
    name: '방일', nameCn: '放逸', type: 'chi', strength: 'weak',
    tagline: '나태의 늪',
    icon: '🍃',
    defaultScores: { t: 4, j: 3, c: 5 },
    gradient: 'linear-gradient(135deg, #27ae60, #2ecc71)',
    cardBg: 'linear-gradient(135deg, rgba(39,174,96,0.3), rgba(46,204,113,0.2))',
    description: '당신은 편안함과 안정을 추구하며, 굳이 힘든 길을 택하지 않습니다. "그냥 이대로도 괜찮아"라는 마음이 자주 찾아옵니다. 이 태도는 불필요한 스트레스를 피하게 해주지만, 성장의 기회도 함께 흘려보낼 수 있습니다. 작은 불편함을 의도적으로 받아들이는 연습이 나태의 늪에서 빠져나오는 발판이 됩니다.',
    practices: [
      { icon: '🧘', title: '아침 좌선(坐禪)', desc: '매일 아침 5분, 바른 자세로 앉아보세요. 하루를 깨어있는 마음으로 시작합니다.' },
      { icon: '📿', title: '정진(精進) 수행', desc: '작은 목표를 세우고 반드시 지키세요. 약속을 지키는 힘이 정진입니다.' },
      { icon: '💡', title: '2분 규칙 실천', desc: '하기 싫은 일이 있으면 딱 2분만 해보세요. 시작이 반입니다.' }
    ]
  }
};

// ===== Render Result =====
function initResult() {
  // Get result ID from filename
  const path = window.location.pathname;
  const match = path.match(/result-(\d{2})\.html/);
  if (!match) return;
  const id = match[1];
  const data = RESULTS[id];
  if (!data) return;

  // Get scores from URL params (fallback to defaults for shared links)
  const params = new URLSearchParams(window.location.search);
  const hasParams = params.has('t') || params.has('j') || params.has('c');
  const t = hasParams ? (parseInt(params.get('t')) || 0) : data.defaultScores.t;
  const j = hasParams ? (parseInt(params.get('j')) || 0) : data.defaultScores.j;
  const c = hasParams ? (parseInt(params.get('c')) || 0) : data.defaultScores.c;
  const p = hasParams ? (parseInt(params.get('p')) || 0) : (data.defaultScores.p || 0);
  const total = t + j + c + p || 12;

  // Render main card
  const mainCard = document.getElementById('result-main-card');
  mainCard.style.background = data.cardBg;
  mainCard.style.border = '1px solid rgba(255,255,255,0.15)';

  document.getElementById('result-icon').textContent = data.icon;
  document.getElementById('result-name').textContent = data.name;
  document.getElementById('result-name-cn').textContent = data.nameCn;
  document.getElementById('result-tagline').textContent = data.tagline;

  // Render scores
  document.getElementById('result-desc').textContent = data.description;

  setTimeout(() => {
    document.getElementById('bar-tam').style.width = ((t / total) * 100) + '%';
    document.getElementById('bar-jin').style.width = ((j / total) * 100) + '%';
    document.getElementById('bar-chi').style.width = ((c / total) * 100) + '%';
    const barPos = document.getElementById('bar-pos');
    if (barPos) barPos.style.width = ((p / total) * 100) + '%';
  }, 300);

  document.getElementById('val-tam').textContent = t + '점';
  document.getElementById('val-jin').textContent = j + '점';
  document.getElementById('val-chi').textContent = c + '점';
  const valPos = document.getElementById('val-pos');
  if (valPos) valPos.textContent = p + '점';

  // 마음챙김 메시지
  const mindfulMsg = document.getElementById('mindful-message');
  if (mindfulMsg) {
    if (p >= 8) {
      mindfulMsg.textContent = '🌟 마음챙김이 매우 높습니다. 이미 번뇌를 다루는 지혜가 있으시네요.';
    } else if (p >= 5) {
      mindfulMsg.textContent = '✨ 마음챙김이 잘 자라고 있습니다. 꾸준히 수행해보세요.';
    } else if (p >= 2) {
      mindfulMsg.textContent = '🌱 마음챙김의 씨앗이 있어요. 조금씩 키워나가세요.';
    } else {
      mindfulMsg.textContent = '💭 마음챙김 연습이 큰 도움이 될 거예요.';
    }
  }

  // Render practices
  const listEl = document.getElementById('practice-list');
  data.practices.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="practice-icon">${p.icon}</span>
      <div class="practice-content">
        <div class="practice-title">${p.title}</div>
        <div class="practice-desc">${p.desc}</div>
      </div>
    `;
    listEl.appendChild(li);
  });
}

// ===== Kakao Share =====
function shareKakao() {
  const path = window.location.pathname;
  const match = path.match(/result-(\d{2})\.html/);
  if (!match) return;
  const id = match[1];
  const data = RESULTS[id];
  if (!data) return;

  // If Kakao SDK is loaded
  if (window.Kakao && Kakao.isInitialized()) {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '나의 대표 번뇌: ' + data.name + '(' + data.nameCn + ')',
        description: data.tagline + ' — 108번뇌 심리테스트',
        imageUrl: new URL('images/og-result-' + id + '.png', window.location.href).href,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '나도 테스트하기',
          link: {
            mobileWebUrl: new URL('index.html', window.location.href).href,
            webUrl: new URL('index.html', window.location.href).href,
          },
        },
        {
          title: '결과 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  } else {
    // Fallback: copy URL
    copyUrl();
  }
}

function copyUrl() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('링크가 복사되었습니다!');
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('링크가 복사되었습니다!');
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.85);color:#fff;padding:12px 24px;border-radius:30px;font-size:0.9rem;z-index:9999;opacity:0;transition:opacity 0.3s;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2000);
}

document.addEventListener('DOMContentLoaded', initResult);
