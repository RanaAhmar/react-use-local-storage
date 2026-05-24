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
## 💡 Some More Usage Examples

The hook can be used anywhere you want React state to persist between page reloads. Below are common real-world patterns.

### 1. Persisting a Form Draft

Useful for forms where users may refresh the page or come back later.

```jsx
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const DraftForm = () => {
    const [draft, setDraft] = useLocalStorage('profile-draft', {
        name: '',
        bio: ''
    });

    const updateDraft = (field, value) => {
        setDraft({
            ...draft,
            [field]: value
        });
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Name"
                value={draft.name}
                onChange={(e) => updateDraft('name', e.target.value)}
            />

            <textarea
                placeholder="Short bio"
                value={draft.bio}
                onChange={(e) => updateDraft('bio', e.target.value)}
            />

            <p>Draft is saved automatically in localStorage.</p>
        </form>
    );
};

export default DraftForm;
```

### 2. Remembering UI Preferences

Useful for saving layout choices such as sidebar visibility, compact mode, or dashboard preferences.

```jsx
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage('sidebar-open', true);

    return (
        <div>
            <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
                {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>

            {isSidebarOpen && (
                <aside>
                    Sidebar content
                </aside>
            )}
        </div>
    );
};

export default DashboardLayout;
```

### 3. Storing User Preferences

Useful for persisting settings like theme, language, or notification preferences.

```jsx
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const UserSettings = () => {
    const [settings, setSettings] = useLocalStorage('user-settings', {
        theme: 'dark',
        language: 'en',
        notifications: true
    });

    const updateSetting = (key, value) => {
        setSettings({
            ...settings,
            [key]: value
        });
    };

    return (
        <div>
            <select
                value={settings.theme}
                onChange={(e) => updateSetting('theme', e.target.value)}
            >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>

            <label>
                <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={(e) => updateSetting('notifications', e.target.checked)}
                />
                Enable notifications
            </label>
        </div>
    );
};

export default UserSettings;
```

## 🛠 Flow Breakdown (How it Works)

Unlike native `localStorage.setItem()`, this hook properly triggers a React component re-render when the value changes. It also listens to the native `storage` event broadcasted by the browser, meaning if a user changes their preference in Tab A, Tab B will instantly update.

## ⚙️ API Reference

### `useLocalStorage(key: string, initialValue: any)`

| Parameter | Type | Description |
| :






---

## 🚀 Discover More from Stackaura

If you found this tool useful, check out our other high-performance web utilities and follow **Ahmar Hussain** for more open-source excellence.

### 🌟 Featured Projects
- **[Stackaura Hub](https://github.com/RanaAhmar/stackaura-hub)** - The central index for all 100 repositories.
- **[Free LLM APIs](https://github.com/RanaAhmar/free-llm-apis)** - A curated list of zero-cost AI endpoints.
- **[Awesome MCP Servers](https://github.com/RanaAhmar/awesome-mcp-servers)** - The ultimate collection of Model Context Protocol implementations.
- **[System Design Cheatsheet](https://github.com/RanaAhmar/system-design-cheatsheet)** - Master complex architectures in minutes.
- **[Next.js SaaS Starter](https://github.com/RanaAhmar/nextjs-saas-starter)** - The fastest way to launch your next product.

### 🔗 Stay Connected
- **Website:** [stackaura.com](https://www.stackaura.com/)
- **LinkedIn:** [Ahmar Hussain](https://www.linkedin.com/in/ahmar204/)
- **Facebook:** [Ahmar Hussain](https://www.facebook.com/Ahmar204)
- **GitHub:** [@RanaAhmar](https://github.com/RanaAhmar)

---








---
### 🌟 Part of the [Stackaura](https://github.com/RanaAhmar) Ecosystem
*Empowering developers with automated tools and high-performance solutions.*

**Explore more:**
- 🚀 [All Projects](https://github.com/RanaAhmar?tab=repositories)
- 🛠️ [Daily Coding Tips](https://github.com/RanaAhmar/daily-coding-tips)
- 📊 [Profile Dashboard](https://github.com/RanaAhmar/RanaAhmar)

*If you find this project useful, please consider giving it a star! ⭐*


---
### 🌟 Part of the [Stackaura](https://github.com/RanaAhmar) Ecosystem
*Empowering developers with automated tools and high-performance solutions.*

**Explore more:**
- 🚀 [All Projects](https://github.com/RanaAhmar?tab=repositories)
- 🛠️ [Daily Coding Tips](https://github.com/RanaAhmar/daily-coding-tips)
- 📊 [Profile Dashboard](https://github.com/RanaAhmar/RanaAhmar)

*If you find this project useful, please consider giving it a star! ⭐*


---
### 🌟 Part of the [Stackaura](https://github.com/RanaAhmar) Ecosystem
*Empowering developers with automated tools and high-performance solutions.*

**Explore more:**
- 🚀 [All Projects](https://github.com/RanaAhmar?tab=repositories)
- 🛠️ [Daily Coding Tips](https://github.com/RanaAhmar/daily-coding-tips)
- 📊 [Profile Dashboard](https://github.com/RanaAhmar/RanaAhmar)

*If you find this project useful, please consider giving it a star! ⭐*
