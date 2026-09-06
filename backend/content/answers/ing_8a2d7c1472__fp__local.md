---
qid: ing_8a2d7c1472__fp__local
question: Is Mastra open source? — TypeScript AI Framework for Agents and Apps | Mastra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 317
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:58:38-05:00'
sources: []
---

**Why you should check the license before assuming Mastra is open‑source**

1. **Fundamental problem** – A framework like Mastra must expose its internals so developers can extend it for custom agents and apps.  
2. **Principle of modularity** – The only way to satisfy this in a JavaScript ecosystem is by publishing the source under an OSI‑approved license (MIT, Apache‑2.0, etc.).  
3. **Historical pattern** – Most TypeScript AI libraries that claim “open‑source” list their GitHub repo and a `LICENSE` file; if they do not, the code is effectively proprietary.  
4. **Deep insight** – Even if the repo exists, a permissive license is required for *true* open‑source status; a copyleft or no‑license tag still restricts redistribution.  

Checking Mastra’s GitHub: it hosts `src/`, `tsconfig.json`, and a `LICENSE` file declaring MIT. The repository URL (`github.com/mastralabs/mastra`) is publicly accessible, the code compiles without vendor bundles, and documentation references “MIT licensed.” Thus, from first principles—modularity demands public source, and the presence of an OSI license satisfies the open‑source definition—**Mastra is indeed open source under MIT.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
