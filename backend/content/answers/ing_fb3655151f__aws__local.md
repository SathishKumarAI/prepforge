---
qid: ing_fb3655151f__aws__local
question: 'Explain: Inverted Index — Invertedindex'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 407
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:30-05:00'
sources: []
---

**Situation & Task**  
When designing the recommendation engine for our e‑commerce platform we needed to surface product titles and descriptions that matched user queries in real time. The data set grew to 12 M SKUs; a naïve scan was 3× slower than SLA.

**Action – Technical Design**  
I built an **inverted index** stored in Amazon DynamoDB with a global secondary index on the token → SKU list.  
* **Tokenization & Normalization**: Standard NLP (stemming, stop‑word removal) ran in AWS Lambda during ingest.  
* **Index Structure**: Each token key maps to a sorted set of SKU IDs and term frequency scores.  
* **Scalability**: DynamoDB auto‑scales with 10 k read/write units; the global secondary index keeps query latency <30 ms under peak traffic (≈5 k QPS).  
* **Cost & Availability**: Provisioned throughput at $0.25 per hour, total <$200/month. The design is multi‑AZ by default, providing 99.99% availability.

**Result**  
Query latency dropped from 250 ms to 18 ms (92 % reduction). Click‑through rate on search results increased by **14 %**, translating to an additional $1.2 M in monthly revenue.  

**Reflection & Learning**  
Ownership: I owned the end‑to‑end pipeline and coordinated with data engineering, dev‑ops, and product teams.  
Dive Deep: Profiling Lambda logs revealed a 40 % CPU bottleneck; switching to AWS Fargate containers cut processing time by 30 %.  

*Bar‑raiser signals*: Demonstrated ownership, quantified impact (latency & revenue), deep technical dive into AWS services, and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
