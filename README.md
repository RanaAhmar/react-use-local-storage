# React Use Local Storage Hook 🚀

![NPM Version](https://img.shields.io/npm/v/react-use-local-storage-hook?style=flat-square&color=blue)
![License](https://img.shields.io/npm/l/react-use-local-storage-hook?style=flat-square)
![React Version](https://img.shields.io/badge/React-16.8%2B-%2361DAFB?style=flat-square&logo=react)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-use-local-storage-hook?style=flat-square)

**A premium, Server-Side Rendering (SSR) safe custom React hook for seamless local storage state management.** 

Designed for high-performance React applications, Next.js, and modern frontend architectures. This hook ensures your local storage state is perfectly synchronized across multiple browser tabs and gracefully handles Next.js hydration issues.

## 🌟 Key Features

- **SSR & Next.js Safe**: Gracefully falls back on the server side to prevent hydration mismatches.
- **Cross-Tab Synchronization**: Automatically updates your React state if the local storage is mutated in another tab.
- **Strongly Typed**: Built with modern JavaScript but highly compatible with TypeScript definitions.
- **Zero Dependencies**: Incredibly lightweight—just pure React Hooks (`useState`, `useEffect`, `useCallback`).

## 📚 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [How it Works](#-how-it-works)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [License](#-license)

## 📦 Installation

Add this utility hook to your project by copying the source, or if published, via npm/yarn:

```bash
npm install react-use-local-storage-hook
# or
yarn add react-use-local-storage-hook
```

*(Note: If utilizing as a local file, simply drop `useLocalStorage.js` into your `hooks/` directory.)*

## 🚀 Usage

Using the hook is almost identical to using React's native `useState`. It requires a key and an initial value.

```jsx
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
    // Looks and feels exactly like useState!
    const [theme, setTheme] = useLocalStorage('app-theme', 'dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div style={{ background: theme === 'dark' ? '#111' : '#FFF', color: theme === 'dark' ? '#FFF' : '#111' }}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default App;
```

## 🛠 Flow Breakdown (How it Works)

Unlike native `localStorage.setItem()`, this hook properly triggers a React component re-render when the value changes. It also listens to the native `storage` event broadcasted by the browser, meaning if a user changes their preference in Tab A, Tab B will instantly update.

## ⚙️ API Reference

### `useLocalStorage(key: string, initialValue: any)`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | The unique local storage key under which data is saved. |
| `initialValue` | `any` | The default value to use if the key does not exist yet. |

**Returns:** `[storedValue, setValue]` - Exactly mirroring `useState`.

## 🤝 Contributing

We welcome contributions to make this utility even better! 
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ for the open-source frontend community.*


---
### 🏢 About Stackaura
This project is proudly maintained backed and sponsored by **[Stackaura](https://www.stackaura.com/)**.
We specialize in building high-performance web applications, scalable SaaS architectures, and premium digital solutions.
👉 **[Visit Stackaura to supercharge your next project!](https://www.stackaura.com/)**


---

## 🚀 Discover More from Stackaura

If you found this tool useful, check out our other high-performance web utilities and follow **Ahmar Hussain** for more open-source excellence.

### 🌟 Featured Projects
- **[Free LLM APIs](https://github.com/RanaAhmar/free-llm-apis)** - A curated list of zero-cost AI endpoints.
- **[Awesome MCP Servers](https://github.com/RanaAhmar/awesome-mcp-servers)** - The ultimate collection of Model Context Protocol implementations.
- **[System Design Cheatsheet](https://github.com/RanaAhmar/system-design-cheatsheet)** - Master complex architectures in minutes.
- **[Next.js SaaS Starter](https://github.com/RanaAhmar/nextjs-saas-starter)** - The fastest way to launch your next product.

### 🔗 Stay Connected
- **Website:** [stackaura.com](https://www.stackaura.com/)
- **Author:** [Ahmar Hussain](https://github.com/RanaAhmar)

---
