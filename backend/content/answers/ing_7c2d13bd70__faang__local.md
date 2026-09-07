---
qid: ing_7c2d13bd70__faang__local
question: 'Explain: What you''re actually expected to know — Frontend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 490
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:54-05:00'
sources: []
---

**Clarify**  
The interviewer asks, *“What do you need to know to be a front‑end engineer?”* I’ll confirm whether they mean the **core skill set for building UI**, or if they’re probing specific frameworks, tooling, or performance aspects. I’ll ask: “Are we focusing on vanilla JS/HTML/CSS, modern SPA stacks (React/Vue/Angular), or full‑stack responsibilities?”

**Approach**  
I’ll structure my answer in three layers:  
1️⃣ *Fundamentals* – HTML5 semantics, CSS3 layout, JavaScript ES6+.  
2️⃣ *Framework & ecosystem* – component architecture, state mgmt, routing, build tooling (Webpack/Babel), testing.  
3️⃣ *Performance & accessibility* – lazy loading, critical‑render‑path, ARIA, WCAG compliance.

**Depth**  
- **HTML/CSS**: semantic tags, Flexbox/Grid, responsive units, CSS‑in‑JS patterns.  
- **JavaScript**: async/await, modules, event loop, immutability, functional patterns.  
- **Frameworks**: React’s virtual DOM, hooks, context; Vue’s reactivity system; Angular’s DI & RxJS.  
- **State mgmt**: Redux Toolkit, Zustand, or NgRx for complex flows.  
- **Build & CI**: Babel transpilation, tree‑shaking, code splitting, unit + E2E tests (Jest/Cypress).  
- **Performance**: bundle size analysis, Lighthouse metrics, critical CSS extraction, web workers.  
- **Accessibility**: semantic focus management, screen reader support, color contrast checks.

**Edge Cases**  
- Legacy browsers → polyfills or feature detection.  
- High‑traffic SPAs → server‑side rendering or static site generation for SEO.  
- Large component trees → memoization and virtualization to avoid re‑renders.

**Optimize & Communicate**  
I’ll note trade‑offs: React’s bundle overhead vs Vue’s lightweight core, or the learning curve of Angular versus rapid prototyping with React. I’ll finish by highlighting that mastering these layers equips you to build maintainable, performant UIs at scale—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
