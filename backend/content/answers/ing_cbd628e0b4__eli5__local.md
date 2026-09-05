---
qid: ing_cbd628e0b4__eli5__local
question: 'Explain: Redundancy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 220
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:03-05:00'
sources: []
---

Imagine building a bridge that must carry traffic even if one support beam breaks. In machine‑learning system design, **redundancy** means adding extra copies of critical parts—like duplicate data stores or parallel model servers—so the whole system keeps working when something fails.

Think of it as having two identical kitchens in a restaurant. If one kitchen burns down, the other still cooks and serves customers without interruption. In practice you’d set up separate database replicas, load‑balanced model inference nodes, and automated failover scripts. This not only protects against hardware or software glitches but also improves performance by letting requests be handled by multiple workers at once.

When interviewing, explain how you would design such a backup chain: choose the components to duplicate, how to keep them in sync (e.g., real‑time replication), and how to detect failures and route traffic automatically. Highlight that redundancy is a trade‑off between reliability, cost, and complexity, but it’s essential for robust production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
