# 🌱 EcoPoints – Plataforma de Sustentabilidade com Vue 3 + Firebase

Bem-vindo ao EcoPoints! Um projeto que incentiva ações sustentáveis recompensando os usuários com pontos que podem ser trocados por benefícios. Esta versão inicial implementa o sistema de autenticação com Firebase.

## 🚀 Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Remote Config](https://firebase.google.com/docs/remote-config)
- [ESLint + Prettier](https://eslint.org/)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/eco-points.git
cd eco-points
```

2. Instale as dependências:

```bash
npm install // npm i
```

3. Crie um arquivo .env com as variáveis do Firebase:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Rode a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

## 🛠️ Estrutura do Projeto

```bash
src/
├── assets/              # Estilos globais
├── router/              # Configuração das rotas (Login e Home)
├── services/            # Integração com Firebase
│   └── firebase.ts
├── views/               # Páginas da aplicação
│   ├── HomeView.vue
│   └── LoginView.vue
├── store/               # Gerenciamento de estado com Pinia
│   └── loading.ts
├── App.vue              # Componente principal
└── main.ts              # Ponto de entrada da aplicação
```

## 🔐 Autenticação

Implementada com Firebase Authentication via signInWithEmailAndPassword.

Proteção de rotas com onAuthStateChanged no beforeEach do Vue Router.

Logout utilizando signOut() do Firebase + router.replace().

## 📌 Funcionalidades Implementadas

✅ Login com Firebase
✅ Proteção de rotas
✅ Logout com redirecionamento
✅ Estilização com Tailwind
✅ Armazenamento de estado com Pinia
✅ Configuração inicial do Firebase Remote Config

## 📋 Scripts Disponíveis

---

| Comando | Descrição |
| npm run dev | Inicia o servidor de dev |
| npm run build | Build de produção |
| npm run preview | Preview do build |

---
