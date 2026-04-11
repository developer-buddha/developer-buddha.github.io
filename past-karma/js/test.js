const questions = [
  {
    q: "처음 만난 사람에게 가장 먼저 드는 느낌은?",
    options: [
      { text: "왠지 도와주고 싶은 마음이 든다", type: "bok" },
      { text: "이 사람에게서 배울 게 있을까 관찰하게 된다", type: "hye" },
      { text: "묘하게 끌리거나, 반대로 이유 없이 불편하다", type: "yeon" },
      { text: "경계심부터 드는 편이다. 쉽게 마음을 열지 않는다", type: "go" },
      { text: "있는 그대로 편하게 받아들인다", type: "pos" }
    ]
  },
  {
    q: "반복적으로 꾸는 꿈이 있다면?",
    options: [
      { text: "넓은 들판이나 풍요로운 자연 속에 있는 꿈", type: "bok" },
      { text: "오래된 사원이나 도서관 같은 신비로운 장소", type: "hye" },
      { text: "누군가를 찾고 있거나 누군가와 헤어지는 꿈", type: "yeon" },
      { text: "쫓기거나 위험한 상황에서 도망치는 꿈", type: "go" },
      { text: "평화롭게 하늘을 날거나 빛 속에 있는 꿈", type: "pos" }
    ]
  },
  {
    q: "이유 없이 끌리는 시대나 장소가 있다면?",
    options: [
      { text: "활기 넘치는 시장이나 축제가 있는 마을", type: "bok" },
      { text: "고대 문명이나 깊은 산속 수행처", type: "hye" },
      { text: "궁궐이나 성 — 사랑과 이별의 드라마가 있는 곳", type: "yeon" },
      { text: "전쟁터나 거친 황야 같은 극한의 장소", type: "go" },
      { text: "특별히 끌리는 곳은 없다. 지금 여기가 좋다", type: "pos" }
    ]
  },
  {
    q: "힘든 일이 닥쳤을 때 나의 첫 반응은?",
    options: [
      { text: "주변 사람들에게 나누고 도움을 구한다", type: "bok" },
      { text: "원인을 분석하고 해결책을 찾으려 한다", type: "hye" },
      { text: "가장 가까운 사람에게 기대고 싶다", type: "yeon" },
      { text: "이 정도쯤이야. 이를 악물고 버틴다", type: "go" },
      { text: "잠시 멈추고 마음을 가다듬은 뒤 행동한다", type: "pos" }
    ]
  },
  {
    q: "나에게 '돈'이란?",
    options: [
      { text: "나누면 돌아오는 것. 쓸 때 기분이 좋다", type: "bok" },
      { text: "자유를 위한 도구. 원하는 공부와 경험을 위해 필요하다", type: "hye" },
      { text: "소중한 사람을 위해 쓰고 싶은 것", type: "yeon" },
      { text: "생존의 안전장치. 없으면 불안하다", type: "go" },
      { text: "있으면 좋고 없으면 없는 대로. 집착하지 않는다", type: "pos" }
    ]
  },
  {
    q: "혼자 있는 시간이 주어지면?",
    options: [
      { text: "누군가에게 선물을 준비하거나 좋은 일을 계획한다", type: "bok" },
      { text: "책을 읽거나 명상, 사색에 빠진다", type: "hye" },
      { text: "그리운 사람에게 연락하거나 추억에 잠긴다", type: "yeon" },
      { text: "밀린 일을 처리한다. 쉬면 불안하다", type: "go" },
      { text: "조용히 쉬며 현재를 즐긴다", type: "pos" }
    ]
  },
  {
    q: "누군가와 깊은 대화를 나눈 후 느낌은?",
    options: [
      { text: "그 사람에게 뭔가 해주고 싶은 마음이 생긴다", type: "bok" },
      { text: "새로운 관점을 얻어서 머릿속이 정리된다", type: "hye" },
      { text: "마음이 깊이 연결된 느낌에 감동받는다", type: "yeon" },
      { text: "마음을 열었다가 상처받을까 걱정된다", type: "go" },
      { text: "따뜻한 에너지를 나눈 것 같아 감사하다", type: "pos" }
    ]
  },
  {
    q: "타고난 재능이 있다면?",
    options: [
      { text: "사람들을 편하게 해주는 능력. 분위기 메이커", type: "bok" },
      { text: "복잡한 것을 꿰뚫어 보는 통찰력", type: "hye" },
      { text: "상대방의 감정을 깊이 느끼는 공감 능력", type: "yeon" },
      { text: "어떤 역경도 버텨내는 끈기와 인내력", type: "go" },
      { text: "어디서든 평화를 유지하는 차분한 마음", type: "pos" }
    ]
  },
  {
    q: "가장 두려운 것은?",
    options: [
      { text: "내가 가진 것을 잃는 것", type: "bok" },
      { text: "진실을 영영 모르는 것", type: "hye" },
      { text: "사랑하는 사람과 이별하는 것", type: "yeon" },
      { text: "또다시 큰 고통이 찾아오는 것", type: "go" },
      { text: "두려움 자체에 휘둘리는 것", type: "pos" }
    ]
  },
  {
    q: "봉사나 기부에 대한 나의 태도는?",
    options: [
      { text: "자연스럽다. 안 하면 오히려 마음이 불편하다", type: "bok" },
      { text: "효율적으로 도울 방법을 먼저 생각한다", type: "hye" },
      { text: "내가 아는 사람이라면 더 적극적으로 돕는다", type: "yeon" },
      { text: "나부터 챙겨야 남을 도울 수 있다고 생각한다", type: "go" },
      { text: "대가 없이 자연스럽게 베푸는 것이 기쁘다", type: "pos" }
    ]
  },
  {
    q: "인생에서 가장 중요한 것 하나를 고른다면?",
    options: [
      { text: "풍요로움과 나눔의 기쁨", type: "bok" },
      { text: "지혜와 깨달음", type: "hye" },
      { text: "깊은 인연과 사랑", type: "yeon" },
      { text: "강인함과 생존", type: "go" },
      { text: "마음의 평화", type: "pos" }
    ]
  },
  {
    q: "윤회가 있다면, 다음 생에 바라는 것은?",
    options: [
      { text: "더 많이 베풀 수 있는 넉넉한 삶", type: "bok" },
      { text: "진리에 더 가까이 갈 수 있는 지혜로운 삶", type: "hye" },
      { text: "소중한 인연과 다시 만나는 삶", type: "yeon" },
      { text: "이번 생의 고통 없이 평탄한 삶", type: "go" },
      { text: "윤회에서 벗어난 자유로운 해탈", type: "pos" }
    ]
  }
];

let current = 0;
const scores = { bok: 0, hye: 0, yeon: 0, go: 0, pos: 0 };

function init() {
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  const total = questions.length;

  // progress
  document.getElementById('progress-fill').style.width = ((current / total) * 100) + '%';
  document.getElementById('progress-text').textContent = (current + 1) + ' / ' + total;

  // question
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'fadeInUp 0.4s ease';

  document.getElementById('q-number').textContent = 'Q' + (current + 1);
  document.getElementById('q-text').textContent = q.q;

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';

  // shuffle options
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);

  shuffled.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsEl.appendChild(btn);
  });
}

function selectOption(type) {
  scores[type]++;
  current++;

  if (current >= questions.length) {
    showLoading();
    return;
  }

  // show mid quote after Q6
  if (current === 6) {
    document.getElementById('quote-mid').style.display = 'flex';
  }

  renderQuestion();
}

function showLoading() {
  document.getElementById('test-content').style.display = 'none';
  document.getElementById('loading-screen').classList.add('active');

  setTimeout(() => {
    goToResult();
  }, 2500);
}

function goToResult() {
  const b = scores.bok;
  const h = scores.hye;
  const y = scores.yeon;
  const g = scores.go;
  const p = scores.pos;

  // determine dominant karma type
  const karmaScores = { bok: b, hye: h, yeon: y, go: g };
  let dominant = 'bok';
  let dominantScore = b;

  for (const [key, val] of Object.entries(karmaScores)) {
    if (val > dominantScore) {
      dominant = key;
      dominantScore = val;
    }
  }

  // determine strength
  let strength;
  if (dominantScore >= 7) strength = 'strong';
  else if (dominantScore >= 4) strength = 'mid';
  else strength = 'weak';

  // map to result page
  const resultMap = {
    'bok-strong': '01', 'bok-mid': '02', 'bok-weak': '03',
    'hye-strong': '04', 'hye-mid': '05', 'hye-weak': '06',
    'yeon-strong': '07', 'yeon-mid': '08', 'yeon-weak': '09',
    'go-strong': '10', 'go-mid': '11', 'go-weak': '12'
  };

  const resultId = resultMap[dominant + '-' + strength];
  window.location.href = 'result-' + resultId + '.html?b=' + b + '&h=' + h + '&y=' + y + '&g=' + g + '&p=' + p;
}

document.addEventListener('DOMContentLoaded', init);
