# 마음 연구소 (Mind Lab)

> 나를 알아가는 작은 여정 — 재미있는 심리테스트 모음

순수 정적 웹사이트 (HTML/CSS/JS)로 만든 심리테스트 허브입니다. GitHub Pages로 서버 없이 운영됩니다.

🔗 **Live**: https://developer-buddha.github.io/

---

## 📂 구조

```
.
├── index.html              # 메인 허브 (서비스 목록)
├── css/hub.css             # 허브 스타일
├── images/                 # 허브 OG 이미지
└── 108-bonno/              # 서비스 1: 108번뇌 심리테스트
    ├── index.html          # 인트로
    ├── test.html           # 12문항 진행
    ├── result-01~09.html   # 9개 결과 페이지
    ├── css/style.css
    ├── js/
    │   ├── test.js
    │   └── result.js
    └── images/
```

## 🧘 서비스 목록

### 1. 108번뇌 심리테스트
12개 질문으로 알아보는 **탐(貪)·진(瞋)·치(癡)** 성향과 대표 번뇌, 그리고 극복 수행법.

- 9가지 결과 유형 (탐/진/치 × 강/중/약)
- 결과 URL 공유 가능 (각 결과는 독립 HTML)
- 카카오톡 공유 + Open Graph 썸네일 지원

## ➕ 새 서비스 추가 방법

1. 루트에 새 폴더 생성 (예: `mbti-buddha/`)
2. 그 안에 `index.html`, `css/`, `js/` 등 자유 구성
3. 루트 `index.html`의 `<section class="services">`에 카드 추가

## 📺 광고

Google AdSense는 승인 후 모든 페이지의 `<!-- TODO: 광고 승인 후 교체 -->` 부분을 풀어 게재됩니다. 승인 전에는 자체 프로모션 배너로 대체.

## 📝 라이선스

본 콘텐츠는 재미를 위한 것이며 전문 심리 진단이 아닙니다.
