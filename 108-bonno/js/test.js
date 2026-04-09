const questions = [
  {
    q: "친구가 나보다 먼저 승진했다. 가장 먼저 드는 생각은?",
    options: [
      { text: "나도 빨리 올라가야 하는데... 더 노력해서 따라잡자", type: "tam" },
      { text: "왜 쟤가 먼저지? 나보다 뭘 잘했다고?", type: "jin" },
      { text: "뭐... 승진이 뭐 그리 대단한 건가 싶다", type: "chi" },
      { text: "진심으로 축하해. 나는 내 속도로 내 길을 가면 돼", type: "pos" }
    ]
  },
  {
    q: "SNS에서 다른 사람의 화려한 일상을 보았을 때?",
    options: [
      { text: "나도 저런 삶을 살고 싶다! 어떻게 하면 될까?", type: "tam" },
      { text: "다 꾸며낸 거겠지... 솔직히 좀 짜증나", type: "jin" },
      { text: "별 생각 없이 스크롤을 넘긴다", type: "chi" },
      { text: "멋지네. 각자의 삶이 있고, 나는 내 삶에 감사하자", type: "pos" }
    ]
  },
  {
    q: "갖고 싶은 물건이 예산을 훌쩍 초과할 때?",
    options: [
      { text: "어떻게든 사야 해! 할부라도 알아봐야지", type: "tam" },
      { text: "왜 이렇게 비싸? 세상이 불합리해", type: "jin" },
      { text: "그냥 안 사면 되지 뭐, 귀찮아", type: "chi" },
      { text: "정말 필요한 건지 며칠 생각해보고 결정하자", type: "pos" }
    ]
  },
  {
    q: "약속 시간에 상대가 30분이나 늦었을 때?",
    options: [
      { text: "기다리는 동안 쇼핑이나 할까? 시간이 아깝잖아", type: "tam" },
      { text: "30분이나 늦다니... 진짜 화난다", type: "jin" },
      { text: "뭐 그럴 수도 있지, 나도 가끔 늦으니까", type: "chi" },
      { text: "무슨 일 있나 걱정되네. 안전하게만 왔으면 좋겠다", type: "pos" }
    ]
  },
  {
    q: "누군가 내 실수를 지적했을 때?",
    options: [
      { text: "인정, 그런데 빨리 만회할 방법을 찾아야 해", type: "tam" },
      { text: "기분 나쁘다. 꼭 그렇게 말해야 했어?", type: "jin" },
      { text: "아 그래? 뭐... 실수할 수도 있지", type: "chi" },
      { text: "알려줘서 고마워. 덕분에 하나 배웠네", type: "pos" }
    ]
  },
  {
    q: "새로운 도전의 기회가 찾아왔을 때?",
    options: [
      { text: "무조건 해야지! 이런 기회를 놓칠 수 없어", type: "tam" },
      { text: "왜 하필 지금? 타이밍이 안 좋아서 짜증나", type: "jin" },
      { text: "글쎄... 꼭 해야 하나? 지금도 충분한데", type: "chi" },
      { text: "차분히 생각해보고, 마음이 이끄는 쪽으로 결정하자", type: "pos" }
    ]
  },
  {
    q: "오랫동안 노력한 일이 실패로 끝났을 때?",
    options: [
      { text: "다시 도전해야지. 이번엔 반드시 잡는다", type: "tam" },
      { text: "세상이 불공평해. 이만큼 노력했는데!", type: "jin" },
      { text: "역시 안 될 거였어... 기대를 안 했어야 했는데", type: "chi" },
      { text: "아쉽지만 과정에서 많이 배웠어. 그걸로 충분해", type: "pos" }
    ]
  },
  {
    q: "맛있는 음식이 눈앞에! 그런데 다이어트 중...",
    options: [
      { text: "오늘만 먹자! 내일부터 다시 하면 돼", type: "tam" },
      { text: "왜 하필 다이어트할 때 이런 유혹이 오는 거야", type: "jin" },
      { text: "다이어트? 아 맞다... 뭐 한 번쯤이야", type: "chi" },
      { text: "한입 감사히 맛보고, 균형을 지키면 돼", type: "pos" }
    ]
  },
  {
    q: "주변 사람들이 나를 무시하는 것 같을 때?",
    options: [
      { text: "더 성공해서 인정받아야겠어!", type: "tam" },
      { text: "나를 무시해? 두고 봐", type: "jin" },
      { text: "신경 쓰기 귀찮다... 그냥 내 길 간다", type: "chi" },
      { text: "내 가치는 남의 시선에 달려있지 않아. 괜찮아", type: "pos" }
    ]
  },
  {
    q: "잠들기 전, 머릿속을 맴도는 생각은?",
    options: [
      { text: "내일은 이것도 하고 저것도 해야 하는데...", type: "tam" },
      { text: "오늘 그 사람이 한 말이 자꾸 신경 쓰인다", type: "jin" },
      { text: "그냥 빨리 자고 싶다... 생각하기 싫어", type: "chi" },
      { text: "오늘 하루도 수고했다. 편안히 내려놓고 쉬자", type: "pos" }
    ]
  },
  {
    q: "복권에 당첨된다면 가장 먼저?",
    options: [
      { text: "큰 집, 좋은 차! 갖고 싶은 거 다 산다", type: "tam" },
      { text: "나를 무시했던 사람들에게 보여주고 싶다", type: "jin" },
      { text: "일단 넣어두고... 천천히 생각해야지", type: "chi" },
      { text: "소중한 사람들과 나누고 의미 있는 일에 쓰고 싶다", type: "pos" }
    ]
  },
  {
    q: "중요한 결정을 내려야 할 때 나의 모습은?",
    options: [
      { text: "최대한 이익 되는 쪽으로! 꼼꼼히 따져본다", type: "tam" },
      { text: "왜 나만 이런 결정을 해야 해? 스트레스야", type: "jin" },
      { text: "에이 모르겠다, 될 대로 되라!", type: "chi" },
      { text: "마음을 차분히 하고, 직관과 이성 모두에 귀 기울인다", type: "pos" }
    ]
  }
];

let current = 0;
const scores = { tam: 0, jin: 0, chi: 0, pos: 0 };

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
  card.offsetHeight; // reflow
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

  // show mid ad after Q6
  if (current === 6) {
    document.getElementById('ad-mid').style.display = 'flex';
  }

  renderQuestion();
}

function showLoading() {
  document.getElementById('test-content').style.display = 'none';
  document.getElementById('loading-screen').classList.add('active');

  setTimeout(() => {
    goToResult();
  }, 2000);
}

function goToResult() {
  const t = scores.tam;
  const j = scores.jin;
  const c = scores.chi;
  const p = scores.pos;

  // 긍정 응답이 매우 많은 경우 (8개 이상) → 가장 낮은 번뇌 유형의 weak 결과로
  // 그 외에는 탐/진/치 중 가장 높은 것으로 결정
  let dominant, dominantScore;
  if (t >= j && t >= c) {
    dominant = 'tam';
    dominantScore = t;
  } else if (j >= t && j >= c) {
    dominant = 'jin';
    dominantScore = j;
  } else {
    dominant = 'chi';
    dominantScore = c;
  }

  // 강도: 긍정 응답이 많을수록 약한 결과로 (선택지 4개 중 1개가 긍정이므로)
  let strength;
  if (dominantScore >= 7) strength = 'strong';
  else if (dominantScore >= 4) strength = 'mid';
  else strength = 'weak';

  // map to result page
  const resultMap = {
    'tam-strong': '01', 'tam-mid': '02', 'tam-weak': '03',
    'jin-strong': '04', 'jin-mid': '05', 'jin-weak': '06',
    'chi-strong': '07', 'chi-mid': '08', 'chi-weak': '09'
  };

  const resultId = resultMap[dominant + '-' + strength];
  window.location.href = 'result-' + resultId + '.html?t=' + t + '&j=' + j + '&c=' + c + '&p=' + p;
}

document.addEventListener('DOMContentLoaded', init);
