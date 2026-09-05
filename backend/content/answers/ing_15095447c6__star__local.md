---
qid: ing_15095447c6__star__local
question: 'Explain: SQL generation & self-correction — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 361
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:15-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a conversational analytics layer for our sales dashboard. The business users could only describe what they wanted in plain English, but the data warehouse had hundreds of tables and complex joins, so manual SQL writing was a bottleneck.

**Task** – Create an automated Text‑to‑SQL agent that could translate user queries into correct SQL, detect errors, and self‑correct without human intervention, all while keeping latency below 1 s for real‑time dashboards.

**Action** – I started by training a transformer model on our internal query logs (≈200k examples) to learn schema‑aware language. For self‑correction, I implemented a two‑stage pipeline: first generate an SQL draft, then run it against a sandboxed copy of the warehouse; if it fails, the error message is fed back into a fine‑tuned “repair” model that proposes fixes (e.g., typo in column name or missing JOIN). We also added a rule‑based fallback that checks for common patterns like “top N” and rewrites them with window functions. The system uses PostgreSQL’s `EXPLAIN` to validate plan cost, ensuring the final query is efficient.

**Result** – In production we saw a 70 % reduction in manual SQL tickets, query latency dropped from 3.5 s to 0.9 s on average, and user satisfaction scores jumped by 15 points. I learned that combining deep learning with lightweight rule‑based correction gives the robustness needed for live business systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
