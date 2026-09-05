---
qid: ing_45156208a2__eli5__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 240
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:03-05:00'
sources: []
---

**Step 2: Sketch the big picture (high‑level design)**  
Think of building a new playground for kids. You first decide where the slides, swings, and sandbox go, how they’re connected by paths, and what safety fences you’ll need. In machine learning, the “playground” is your system that will store, retrieve, and display code snippets (Pastebin).  

- **Users** are like children who come to play.  
- **The web server** is the playground’s entrance gate: it receives requests (kids asking for a new paste or looking up an old one).  
- **A database** is the storage pit where all pastes live, just as a sandbox holds sand.  
- **Caching layers** are quick‑access walkways that let kids find popular slides without waiting in line.  

By drawing this layout first—marking the entrance, storage, and shortcuts—you set clear boundaries for each component before you start building them. This keeps the design simple, scalable, and easy to explain to teammates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
