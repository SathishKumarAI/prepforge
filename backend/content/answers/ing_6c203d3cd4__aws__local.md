---
qid: ing_6c203d3cd4__aws__local
question: 'Explain: The enterprise-search depth round — Glean Interview Guide (2026):
  Process, Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 423
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:21-05:00'
sources: []
---

**Situation & Task**  
At a mid‑cap fintech I led the redesign of our enterprise search for a new compliance portal. The goal was to reduce query latency from **1 s → 200 ms** while supporting **10M documents** and **100k concurrent users**.

**Action (Technical Design)**  
*Built a distributed, event‑driven pipeline:*  
- **S3** for raw ingestion, **Kinesis Data Streams** for near‑real‑time updates.  
- **Glue** to transform metadata into a **DynamoDB** table; indexed by **document ID + tags**.  
- **OpenSearch Service** as the search layer (multi‑AZ) with fine‑tuned analyzers and per‑tenant indices.  
- **Lambda@Edge** to cache hot queries in CloudFront, cutting cross‑region latency.  

Implemented a **search-as‑service API** behind an Application Load Balancer with **WAF** for protection. Autoscaling policies tied to CPU/latency metrics ensured 99.95 % availability.

**Result (Quantified Impact)**  
- Query latency dropped **80 %**; page load times improved from **2.5 s → 0.6 s**.  
- Search throughput increased **3×** without a new infra budget.  
- Customer satisfaction score rose from **72 to 91** in the compliance module.

**Reflection (Bar‑raiser Lens)**  
I owned the end‑to‑end solution, dove deep into OpenSearch tuning, and iterated quickly after A/B tests. The failure point was an initial mis‑estimated index size; we corrected it by adding a pre‑aggregation step, learning to validate assumptions early. This aligns with *Ownership* (owning the outcome) and *Dive Deep* (understanding every layer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
