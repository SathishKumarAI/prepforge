---
qid: ing_eee9838e22__eli5__local
question: 'Explain: 2.3 Partition Tolerance — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 197
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:53:14-05:00'
sources: []
---

**Partition Tolerance (the “P” of CAP)**  
Imagine a long road that splits into two lanes at a bridge. If the bridge breaks, traffic can’t cross; cars are stuck on either side. That break is like a *network partition*—a failure that separates parts of a distributed system so they can’t talk to each other.

A system that is **partition‑tolerant** keeps running even when such a break happens. It doesn’t wait for the bridge to heal; instead, each side continues to serve requests on its own. The trade‑off is that the two sides may have slightly different data or opinions until they reconnect—just as cars in separate lanes can’t see each other’s positions.

So, partition tolerance means “the system stays alive and responsive even if communication between parts stops.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
