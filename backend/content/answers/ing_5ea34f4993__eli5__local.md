---
qid: ing_5ea34f4993__eli5__local
question: 'Explain: Cross-tenant leakage — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 214
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:20-05:00'
sources: []
---

**Cross‑tenant leakage – what it means and why it matters**

Imagine a shared office where each tenant has their own filing cabinet. The *agent’s memory* is like the contents of that cabinet, while *state* is the current “open folder” you’re working on. Cross‑tenant leakage happens when someone opens another tenant’s cabinet or looks into their open folder and learns private information—like seeing a confidential contract or personal notes.

In AI systems, each user (tenant) gets an isolated “memory space.” If a bug lets one user’s agent read or influence another’s memory or state, that is leakage. It’s like two tenants accidentally swapping files because the lock was broken. This can expose secrets, break privacy guarantees, and undermine trust in the system.

Ensuring strict isolation—think of each cabinet having a solid, independent lock—keeps every tenant’s data safe from others.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
