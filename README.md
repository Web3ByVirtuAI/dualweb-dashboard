# DualWeb Dashboard 🧭

**Seamless Navigation Between Web2 and Web3 Worlds**

---

## 🧠 Project Summary

The **DualWeb Dashboard** bridges the gap between traditional Web2 and the decentralized Web3 by providing users with a unified control panel to manage their digital identity, decentralized content, and tokenized assets — all powered by a Web3 domain.

---

## 🚀 Features

- 🌐 **Unified Identity** via ENS (.eth) or Unstoppable Domains (.crypto)
- 🧩 **Web2↔Web3 Hybrid Redirects** — mirror blogs, shops, or dashboards in both ecosystems
- 🛡️ **DID Integration** for verifiable credentials & auth
- 🤖 **AI Assistant** (LLM-powered) to manage on-chain tasks
- 📦 **Modular Widgets** for wallet management, DeFi balances, and IPFS uploads
- 📊 **Analytics** from both centralized (Google Analytics) and decentralized sources (e.g. Lens, XMTP)
- 🧱 Built using Next.js, TailwindCSS, viem, wagmi, and zk-ready design

---

## 🧱 Folder Structure

```
dualweb-dashboard/
├── public/                # Static assets and domain verification files
├── src/
│   ├── components/        # Reusable UI components (widgets, nav, etc.)
│   ├── pages/             # Route-based pages (Next.js)
│   ├── lib/               # Blockchain / AI integration logic
│   └── styles/            # Global CSS (Tailwind)
├── .env.example           # Environment variable template
├── README.md              # You’re reading it!
├── package.json           # Project config
└── next.config.js         # Next.js config
```

---

## 📦 Tech Stack

- **Frontend:** Next.js 14, TailwindCSS 3, TypeScript
- **Web3:** viem, wagmi, ENS, IPFS, ethers.js
- **AI:** OpenAI API, ChainBots SDK (optional)
- **Storage:** IPFS / Filecoin, localStorage fallback
- **Tooling:** Prettier, ESLint, GitHub Actions

---

## 🛠️ Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/your-username/dualweb-dashboard.git
cd dualweb-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Add your INFURA/Alchemy keys, domain name, OpenAI key, etc.
```

4. **Run locally**
```bash
npm run dev
```

---

## 💡 Ideas for Extension

- ENS + Lens profile integration
- ZK Badge-based access control
- DAO dashboard widgets (voting, proposals)
- Cross-domain token bridging UX

---

## 🧠 Author & Vision

Created by **John Wellard** (AgileGypsy) as part of a Web3 x AI showcase.  
Built to demonstrate the future of decentralized identity, AI agents, and hybrid decentralized platforms.

> Web3 is evolving — and so am I. From memecoins to MEV, from Yul to zk — I’m documenting it all. 🚧 Work in progress? Always.

---

## 📢 Contribute

Pull requests, forks, ideas welcome. Let’s make Web3 usable and weird, together.
