---
qid: ing_da6b4e5c9a__aws__local
question: 'Explain: Use case: User enters a block of text and gets a randomly generated
  link'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 649
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:19-05:00'
sources: []
---

**Use Case – “Text‑to‑Random Link” Service**

**Situation (S)**  
A marketing team wanted a quick way to generate shareable, short URLs from any text snippet (e.g., tweet quotes). The goal was to increase click‑throughs while keeping the link space‑efficient.

**Task (T)**  
Build an API that accepts arbitrary text, generates a deterministic yet “random” key, and returns a short URL. It must scale to millions of requests per day, guarantee uniqueness, and allow easy analytics.

**Action (A)**  

| Step | Design & AWS Services |
|------|-----------------------|
| 1️⃣ Text normalization | Lambda (Python) – lower‑case, strip punctuation; optional NER via SageMaker endpoint if semantic hashing is needed. |
| 2️⃣ Deterministic hash | SHA‑256 → base62 encode to 8 chars. Collision probability <10⁻¹² for 1B keys. |
| 3️⃣ Collision check | DynamoDB (partition key = hash) with conditional write; on collision append counter. |
| 4️⃣ Short URL generation | API Gateway + Lambda to prepend `https://go.mycompany.com/`. |
| 5️⃣ Analytics | Store click events in Kinesis Data Firehose → S3 → Athena for real‑time dashboards. |

**Result (R)**  
- **Latency:** <50 ms average, <95th percentile <120 ms.  
- **Throughput:** Sustained 2 M QPS with auto‑scaling on API Gateway.  
- **Cost:** ~$0.02 per request (Lambda + DynamoDB) versus $0.10 for third‑party shortener.  
- **Error rate:** <0.01% due to optimistic concurrency control.

**Leadership Principles Highlighted**

| Principle | How it Shines |
|-----------|---------------|
| *Customer Obsession* | Provides instant, reliable links that boost engagement. |
| *Ownership* | From API design to analytics pipeline, the team owns end‑to‑end performance and cost. |
| *Dive Deep* | Used SHA‑256 + base62, quantified collision risk, tuned DynamoDB capacity. |
| *Bias for Action* | Deployed in 3 days using serverless; iterated on real traffic data. |

**Bar‑raiser Takeaway**

- **Quantified Impact:** Showed a 25% lift in click‑throughs after launch (baseline 100 k/day → 125 k/day).  
- **Depth & Trade‑offs:** Chose deterministic hash over random UUID to avoid database bloat, balanced collision risk with cost.  
- **Learning from Failure:** Initial prototype used random GUIDs causing duplicate keys; switched to deterministic hashing after analyzing logs.

This solution demonstrates *ownership*, *deep technical insight*, and a data‑driven focus on customer value—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
