# React + TypeScript + Vite로 만든 게시판입니다.

#메인화면
<img width="840" alt="스크린샷 2024-09-13 오전 9 54 07" src="https://github.com/user-attachments/assets/33e46eca-55fc-4671-89ad-8359b44b8347">

#게시물 상세화면
<img width="626" alt="스크린샷 2024-09-13 오전 9 55 58" src="https://github.com/user-attachments/assets/c38f0796-f63a-49e1-bbac-3f7907d4c62d">

#로그인 및 회원가입 화면
<img width="1084" alt="스크린샷 2024-09-13 오전 10 08 02" src="https://github.com/user-attachments/assets/a2be6782-574f-4eb2-a4ef-8e70952c7dc0">


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
