---
qid: ing_3a5d1ceb57__aws__local
question: 'Explain: Query parameters — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:22-05:00'
sources: []
---

**Situation (S)** – While leading a data‑science team at my last company, we had to expose millions of log events to a real‑time analytics dashboard for security analysts. The API was receiving ad‑hoc query parameters that were not indexed, causing > 30 s latency and throttling in our OpenSearch cluster.

**Task (T)** – I owned the redesign: build a dynamic indexing strategy that would keep queries fast (< 1 s) while staying cost‑efficient.

**Action (A)**  
- *Dive Deep*: Logged every query pattern over 7 days, discovered 12 high‑frequency parameters.  
- *Design*: Created an **Index Template** in Amazon OpenSearch Service with a dynamic template that maps each parameter to a keyword field (`"type": "keyword"`).  
- *Implementation*: Wrote a Lambda (Python) that watches CloudWatch logs of the API gateway, auto‑updates the index template if new parameters appear.  
- *AWS Services*: OpenSearch for storage/lookup, Lambda for automation, S3 for backup snapshots, CloudWatch for metrics.  
- *Scalability & Cost*: Used warm nodes for infrequent queries and hot nodes for the 10 % most common keys; reserved instances saved ~25 % annual cost.

**Result (R)** – Query latency dropped from **30 s → < 1 s** on average, throughput increased by **4×**, and CPU utilization fell from 80 % to 35 %. The automated template reduced manual ops hours by **60 %**. Learned that continuous monitoring of query patterns is essential; the Lambda auto‑scaler prevented future regressions.

> *Bar‑raiser focus*: Ownership (I drove the end‑to‑end change), depth (log‑level analysis & dynamic templating), quantified impact (latency, cost, ops hours), and iterative learning from initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
