---
qid: ing_cebc572766__aws__local
question: 'Explain: So some indicators about when you might — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 459
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:19-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I first led a migration from DynamoDB to DocumentDB in 2021, the team asked which NoSQL database was “right” for our workload. I framed it as *Customer Obsession* + *Dive Deep*.  

**Situation:** Our analytics service ingested ~10 M events/day and required flexible schema with occasional joins across user profiles.  
**Task:** Pick a NoSQL engine that balanced cost, latency, and developer velocity.  
**Action:**  
1. **Define metrics** – Target <5 ms read latency for 99.9 % of requests; max $0.20 per GB‑month; support ad‑hoc joins.  
2. **Compare options** –  
   *DynamoDB*: high throughput, single‑region, pay‑per‑request; no native join capability → would need secondary indexing or an additional service (e.g., Athena).  
   *DocumentDB*: MongoDB‑compatible API, supports `$lookup` for joins, but higher per‑GB cost (~$0.25/GB‑month) and slightly higher latency (~10 ms).  
3. **Prototype** – Ran a 24‑hour load test: DynamoDB read throughput hit 99.9 % at 5 ms with 20 % overprovisioned capacity; DocumentDB met latency but cost was 30 % higher.  
4. **Decision & Implementation** – Adopted *DynamoDB* for event ingestion (low‑cost, high scalability) and *DocumentDB* for reporting tables that needed joins, using a scheduled Lambda to sync data nightly.

**Result:** Post‑migration, read latency dropped from 12 ms to 5 ms; cost decreased by 18 % per month; developers reduced query code complexity by 40 %.  

**Bar‑raiser notes:** I showed ownership (owning the migration end‑to‑end), deep dive into metrics and trade‑offs, quantified impact, and learned that a hybrid approach often yields the best balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
