---
qid: ing_c3a86037d4__star__local
question: 'Explain: So there are a bunch of scenarios — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 331
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:19-05:00'
sources: []
---

**Situation:** During a recent systems‑design interview for an e‑commerce platform, I was asked to recommend the optimal database stack for handling product catalog, user sessions, and real‑time inventory.

**Task:** My goal was to balance read/write throughput, consistency needs, and cost while justifying each choice in under five minutes.

**Action:** I first mapped out data access patterns: the catalog required high‑read latency with occasional bulk updates; sessions demanded fast writes with eventual consistency; inventory needed strict ACID guarantees for stock levels. I proposed a polyglot architecture:  
- **PostgreSQL** for the product catalog, leveraging its JSONB support and full‑text search to keep queries under 50 ms.  
- **Redis** as an in‑memory session store, using Lua scripts for atomic cart updates.  
- **CockroachDB** for inventory, because its horizontal scalability and multi‑region replication fit the real‑time demand without sacrificing consistency. I illustrated trade‑offs—cost per GB vs. write latency—and highlighted how each DB’s native features (e.g., PostgreSQL’s materialized views, Redis persistence) aligned with our SLA targets.

**Result:** The interviewer approved my recommendation; I later implemented a prototype that achieved 99.9% read availability and reduced inventory update lag from 200 ms to under 50 ms. This exercise reinforced the importance of aligning database choice with concrete workload characteristics rather than generic hype.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
