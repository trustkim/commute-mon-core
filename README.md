<div align="left">
  <!-- 이미지 경로: 프로젝트 루트 기준 -->
  <img src="client/assets/icon.png" alt="CommuteMon Logo" width="120" height="120" />
  
  <!-- 제목과 설명 -->
  <h1>🚌 함께가요! 통근몬 (CommuteMon)</h1>
  <p>
    <b>Your Friendly Neighborhood Commute Partner</b> 🕸️
  </p>
</div> <!-- 잊지 말고 꼭 닫아주세요! -->

> 사내 운전자와 탑승자를 연결하여, 조직의 생산성과 이동 편의성을 지키는 **하이브리드 셔틀 플랫폼**입니다.

---

## 🧐 Project Background

이 프로젝트는 **'차를 놓칠까 봐 불안한 탑승자'** 와 **'운전 때문에 본업에 집중 못 하는 운전자'**, 우리 주변의 평범한 이웃들이 겪는 고충을 해결하기 위해 시작되었습니다.

우리는 기술을 통해 다음 두 가지 가치를 실현합니다.

1.  **Productivity Protection (생산성 보호):** 핵심 인력(운전자)이 운행 부담 없이 본업(긴급 트러블 슈팅 등)에 집중할 수 있도록 시스템이 서포트합니다.
2.  **Warm Connection (맘 편한 연결):** 서로의 출퇴근 상황(지연, 잔업)을 투명하게 공유하여, 기다림과 초조함 대신 배려하는 문화를 만듭니다.

---

## 🌟 Key Features

### 1. 🛡️ 운전자 보호 (Driver Care)
* **Emergency Mode (잔업 모드):**
    * "오늘 야근 때문에 운전 못 하는데..." 미안해하지 마세요.
    * 버튼 하나만 누르면 시스템이 탑승자들에게 즉시 운행 취소 알림을 발송하여, 정류장에서 영문도 모르고 기다리는 일이 없도록 합니다.
* **Auto Log (운행 일지 자동화):**
    * 운전만 하세요, 기록은 통근몬이 합니다. GPS 기반으로 주행 거리를 자동 기록하여 엑셀로 정리해 줍니다.

### 2. 🏭 탑승자 마감 보장 (Passenger Care)
* **Late Alert (잠시만요):**
    * "5분만 더 하면 되는데..." 버스 놓칠까 봐 하던 일을 던져두고 뛰어나가지 마세요.
    * 앱으로 정중하게 **지연 요청(10분)**을 보내고 합의할 수 있습니다. **휴먼 에러(Human Error)**는 쫓기는 마음에서 나옵니다.
* **Dynamic Routing (동적 경로):**
    * 매일 탑승자가 있는 곳만 쏙쏙 골라 최적의 경로를 만듭니다.

### 3. 🤝 자율 카풀 (Open Carpool)
* 공식 셔틀이 닿지 않는 골목길, 야근 후 늦은 귀갓길도 걱정 없습니다. **이웃 동료**와 함께 가는 카풀 파티를 모집하세요.

---

## 🛠 Tech Stack

| Category | Technology | Reason |
| :--- | :--- | :--- |
| **App Framework** | **React Native (Expo)** | iOS/Android 동시 배포. `Development Build`를 통해 네이티브 모듈 활용 극대화. |
| **Maps (Strategy)** | **TMAP API + Deep Link** | **[Logic]** TMAP API로 다중 경유지 최적화 수행<br>**[View]** `react-native-maps`로 경로 시각화<br>**[Navi]** TMAP 앱 연동(Deep Link)으로 길 안내 위임 |
| **Backend** | **Firebase** | **Functions** (서버리스 로직), **Firestore** (데이터), **Realtime DB** (실시간 위치 공유) 활용하여 인프라 비용 0원 달성. |
| **State** | **Zustand** | Boilerplate가 적고 직관적인 전역 상태 관리. |
| **Language** | **TypeScript** | 엄격한 타입 관리를 통한 코드 안정성 확보. |

---

## 📂 Project Structure

본 프로젝트는 **Monorepo** 구조로, 앱(Client)과 서버(Functions)를 하나의 저장소에서 관리합니다.

```bash
commute-mon-core/
├── .nvmrc             # Node.js 버전 고정 (v22)
├── .gitignore         # Git 무시 파일 설정 (통합)
├── .firebaserc        # Firebase 프로젝트 ID 매핑 (Alias)
├── firebase.json      # Firebase 전체 설정
├── client/            # [Frontend] React Native (Expo)
│   ├── assets/        # 아이콘, 스플래시 이미지
│   ├── App.tsx        # 메인 컴포넌트
│   ├── index.ts       # 앱 등록 진입점
│   ├── app.json       # Expo 설정
│   ├── tsconfig.json  # TypeScript 설정
│   └── package.json   # 클라이언트 의존성 목록
│   └── package-lock.json # 의존성 버전 잠금 파일
├── functions/         # [Backend] Firebase Cloud Functions
│   ├── src/
│   │   └── index.ts   # 백엔드 진입점
│   ├── .eslintrc.js   # 린트 설정
│   ├── tsconfig.json  # TypeScript 설정
│   ├── tsconfig.dev.json # 개발 환경용 TS 설정
│   └── package.json   # 서버 의존성 목록
│   └── package-lock.json # 의존성 버전 잠금 파일
```

---

## 🚀 Getting Started

본 프로젝트는 Monorepo로 구성되어 있습니다. 아래 순서대로 실행 환경을 설정해 주세요.

```bash
# 1. Clone the repository
git clone https://github.com/trustkim/commute-mon-core.git

# 2. Setup Client (App)
cd client
npm install
# .env 파일 생성 (TMAP_API_KEY 필요)

# 3. Setup Server (Functions)
cd ../functions
npm install

# 4. Run Simulator (Client)
cd ../client
npx expo start
```

---

## 🛑 Limitations (한계점 및 제약 사항)

이 프로젝트는 현재의 과도기적 기술과 조직 문화를 바탕으로 설계되었으며, 다음과 같은 명확한 한계를 가집니다.

1.  **Technological Obsolescence (기술적 수명):**
    * 본 서비스는 레벨 4/5 자율주행 및 커넥티드 카(V2X) 인프라가 상용화되어 '이동의 자동화'가 이루어지는 시점에는 그 가치를 상실합니다.
2.  **Supply Constraint (공급의 한계):**
    * P2P 매칭 모델의 특성상, 동행할 운전자가 없는 **'나 홀로 야근'** 상황에 대해서는 이동 수단을 제공할 수 없습니다. 나 홀로 야근을 줄여주는 AI 도구를 많이 만들어 주세요 :)
3.  **Scope of Delay (지연 허용 범위):**
    * '지연 요청(Late Alert)' 기능은 10~15분 내외의 짧은 마감 확보를 위한 것입니다. 30분 이상의 장기 잔업은 소프트웨어적 조율이 아닌, **'다회차 순환 운행'** 등 물리적 운영 정책으로 해결해야 할 문제입니다.
4.  **Social Fatigue (사회적 피로도):**
    * '연결'과 '유대감'을 지향하므로, 퇴근길에 완벽한 개인 공간과 침묵을 선호하는 사용자(I성향)에게는 심리적 부담이 될 수 있습니다.

<!-- Epilogue: The Way Home -->
<div align="center"> 
<!-- 지정하신 파일명 적용 -->
<img src="assets/Dongseong-ro_76beon-gil_20170702_0015.jpg" alt="Dongseong-ro 76-beon-gil" width="80%" style="border-radius: 8px; opacity: 0.85;" />
<p>
<sub>"37 Dongseong-ro 76beon-gil, Busanjin-gu, Busan. (2017.07.02 00:15)"</sub>
</p>
</div>

© 2025 trustkim. All rights reserved.
