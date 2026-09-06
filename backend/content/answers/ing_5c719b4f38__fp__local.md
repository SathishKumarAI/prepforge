---
qid: ing_5c719b4f38__fp__local
question: 'Explain: Distinguish working memory from persistent memory in agent design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 374
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:37-05:00'
sources: []
---

In an autonomous agent the **problem** is to decide *what* to do next given two kinds of information: what it has just perceived (the *current observation*) and what it has learned or remembered from the past.

### Why we need two memory stores

- **Working memory** is a *transient buffer* that holds the most recent observations, sensor readings, or intermediate inference results. It must be fast, limited in size, and constantly refreshed.  
- **Persistent memory** is a long‑term repository that encodes facts, skills, or patterns extracted from many episodes. It grows slowly, can be queried repeatedly, and supports generalisation.

The fundamental optimisation problem is *information bottleneck*: we want to compress the past into a compact representation that maximises predictive utility for future actions while minimising storage cost. Working memory implements a sliding‑window approximation of this bottleneck; persistent memory implements an amortised, learned compression of many windows.

### A non‑obvious insight

Most designs treat persistent memory as “knowledge” and working memory as “attention”. In fact, **working memory is the *interface* through which the agent learns what to store persistently**. The choice of what survives depends on the *curiosity reward* or prediction error signal computed in working memory—so the two memories co‑evolve rather than operate independently.

---

**Bottom line:** Working memory answers “what do I see now?”; persistent memory answers “what have I learned that will help me tomorrow?”. Their coexistence is an optimisation trade‑off between immediacy and long‑term utility, rooted in information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
