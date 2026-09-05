---
qid: ing_ae41b6a4b3__star__local
question: 'Explain: F8: Cost-tracking failure across teacher and student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 381
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:42-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the launch of a new adaptive learning platform for a mid‑size school district. The system promised real‑time cost tracking: how much each teacher spent on digital resources and how students’ usage translated into per‑student cost metrics. Two weeks before go‑live, QA revealed that the cost ledger was mis‑aligning by 15–20 % across classes.

**Task** – I had to diagnose why the cross‑module accounting was failing, correct it, and ensure the dashboard would display accurate teacher and student costs within a week so district finance could approve the renewal contract.

**Action** – First, I mapped the data flow from the LMS API through our microservice that aggregates purchase orders, then to the billing engine. Using Postman and custom Python scripts I replayed transaction streams and discovered a mismatch in currency conversion logic: the student‑side service used the school’s base rate while the teacher‑side pulled real‑time exchange rates. I rewrote the conversion module to use a single, cached rate table, added idempotent logging, and introduced unit tests covering edge cases (e.g., daylight savings). I also configured Prometheus alerts for any drift >5 %.

**Result** – The corrected system delivered cost reports accurate to <0.1 % within 48 hours. The district approved a $2.3 M extension, and the platform’s adoption grew by 30 % over six months. I learned that consistent data contracts across services are as critical as robust unit tests when building AI‑driven analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
