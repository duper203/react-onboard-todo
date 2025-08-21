# React Todo App with Vite

이 프로젝트는 Vite를 사용하여 빠른 개발 환경을 제공하는 React Todo 앱입니다.

## 기술 스택

- **React 19** - 최신 버전의 React
- **Vite** - 빠른 빌드 도구 및 개발 서버
- **JavaScript** - 주요 프로그래밍 언어

## 사용 가능한 스크립트

프로젝트 디렉토리에서 다음 명령어들을 실행할 수 있습니다:

### `npm run dev`

개발 모드로 앱을 실행합니다.\
[http://localhost:3000](http://localhost:3000)에서 브라우저로 확인할 수 있습니다.

변경사항이 있을 때마다 페이지가 자동으로 새로고침됩니다.\
개발자 도구에서 lint 에러도 확인할 수 있습니다.

### `npm run build`

프로덕션용으로 앱을 빌드합니다.\
`build` 폴더에 최적화된 파일들이 생성됩니다.

빌드는 최적화되고 파일명에 해시가 포함되어 배포에 적합합니다.

### `npm run preview`

빌드된 앱을 로컬에서 미리 볼 수 있습니다.\
프로덕션 빌드를 실제로 테스트해볼 때 유용합니다.

### `npm test`

테스트 러너를 실행합니다.

## 기능

- ✅ Todo 아이템 추가
- ✅ Todo 목록 표시
- 🚧 Todo 아이템 삭제 (개발 중)
- 🚧 Todo 아이템 완료 표시 (개발 중)

## 개발 환경 설정

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

## Learn More

- [Vite 공식 문서](https://vitejs.dev/)
- [React 공식 문서](https://reactjs.org/)

## 성능 개선

Vite를 사용하여 다음과 같은 성능 개선을 얻었습니다:
- ⚡ 빠른 개발 서버 시작
- 🔥 HMR (Hot Module Replacement)
- 📦 최적화된 빌드
- 🎯 ES 모듈 기반 번들링
