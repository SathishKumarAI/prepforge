---
qid: ing_f74e18a3e5__star__local
question: 'Explain: Case Study 07 - Text-to-SQL Agent over a Data Warehouse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 353
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:25-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with enabling business analysts to run ad‑hoc queries against our on‑prem data warehouse without writing SQL. The warehouse held over 50 terabytes of transactional data and the analytics team spent roughly two hours a day translating natural language questions into complex joins and aggregations.

**Task:**  
Build an end‑to‑end Text‑to‑SQL agent that could understand analyst intent, generate accurate queries against the schema, and return results within three seconds, all while respecting row‑level security policies.

**Action:**  
I chose a two‑stage pipeline: first, fine‑tuned a transformer (T5-base) on 30k QA pairs mapped to our catalog; second, integrated it with an SQL optimizer that rewrites generated queries for cost efficiency. I used the open‑source *sqlglot* parser to validate syntax before execution and wrapped the whole flow in a FastAPI microservice behind a Kong gateway. Security was enforced by injecting a `WHERE user_id = :current_user` clause automatically. We ran A/B tests against our legacy reporting tool, logging latency and correctness metrics.

**Result:**  
The agent reduced query turnaround from 2 h to under 3 s for 90% of requests, cutting analyst time by 80%. Accuracy hit 92% on a blind test set, with the remaining 8% flagged automatically for review. I learned that combining LLMs with lightweight rule‑based post‑processing and strict security injection yields production‑ready AI tools without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
