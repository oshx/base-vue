# VUE + Vuetify 관리자도구 틀

## 준비사항
```
node.js
yarn
```

### 사용 의도
반복되는 관리자도구 생성 기반을 위한 추가 설정된 상태

### 주요 의존성 설정
- 언어
    - Javascript, ECMA-Next
    - TypeScript
- Client
    - Vue.js
        - Vue-router
        - Vuex
        - Vuetify
- Server
    - Koa.js
- Universal
    - Axios
- 주요 생산성 향상 도구
    - eslint
    - tslint
    - prettier
- 추천 개발환경
    - WebStorm
    - Visual Studio Code

## 문서 바로가기
[Vue.js 사용자 문서 바로가기](https://vuejs.org/)
[Vue CLI 설정 문서 바로가기](https://cli.vuejs.org/config/)
[Vuetify 사용자 문서 바로가기](https://vuetifyjs.com/)

## Project 의존성 설치
```
yarn
```
또는
```
yarn install
```

### 개발 환경
```
yarn serve
```

### Production 환경
#### Source Build
```
yarn build
```

#### Server 시작 (구현 예정)
```
yarn start
```

### Test 수행
```
yarn test
```

#### End-to-End test 수행
```
yarn run test:e2e
```

### 단위 test 수행
```
yarn run test:unit
```

### 교정
```
yarn lint
```
