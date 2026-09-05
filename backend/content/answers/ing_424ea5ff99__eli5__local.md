---
qid: ing_424ea5ff99__eli5__local
question: 'Explain: Pilot Light Approach: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 205
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:21:33-05:00'
sources: []
---

**Pilot Light Approach – Think of a “Mini‑Kitchen” for Disaster Recovery**

Imagine you’re cooking a big family dinner (your main application). Instead of keeping all the pots and pans on the stove at full heat, you keep a small, low‑burning flame in a tiny stove (the “pilot light”). That flame is always warm enough to start any dish quickly if your kitchen’s main oven or gas line goes out. In cloud terms, you run just the essential parts of your system—like the database and core services—in a minimal, always‑on environment. If a whole region fails, you spin up the full application from that ready‑to-go “mini‑kitchen,” using the pilot light as the foundation. It saves money because you’re not paying for the full stack all the time, yet recovery is fast because the core is already hot and running.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
