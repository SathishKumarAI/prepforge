---
qid: ing_4ee5197947__aws__local
question: 'Explain: Which database to use? - SQL vs NoSQL — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 458
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:53-05:00'
sources: []
---

**Situation & Task**  
I led a sprint to launch a new URL‑shortening service (TinyURL‑X) that would handle ~10 M requests/day and support 1 B active links over the next 3 years. The core decision was whether to store link mappings in an RDBMS or a NoSQL store.

**Action**  
I mapped requirements: *high write throughput*, *low read latency*, *strong consistency for user‑owned links*, *global distribution*, and *cost predictability*. I scoped the data model (shortKey → longURL, createdAt, ttl) and ran benchmarks on **Amazon RDS Aurora PostgreSQL** vs. **DynamoDB**.

- **Aurora**: 200 k writes/sec, but 30 % higher cost at scale; read replicas added latency.
- **DynamoDB**: 500 k writes/sec, single‑digit ms reads, auto‑scaling, and $0.25 per million writes vs. $1.20 for Aurora.

I proposed a *dual‑layer* architecture: DynamoDB as the primary store (high availability, low cost) with **S3 Object Lambda** for archival of infrequently accessed URLs. A small **Aurora** cluster ran analytics queries and served a “top links” dashboard, leveraging **AWS Glue** for ETL.

**Result**  
Launch achieved 95 % uptime in the first month, and write throughput grew from 200 k to 1.2 M/sec without performance degradation. Operational cost dropped by **42 %** compared to an all‑Aurora design. The system supported 1.3 B links after 18 months with no service interruptions.

**Reflection (Bar‑raiser)**  
I owned the decision, dug deep into workload patterns, quantified trade‑offs, and learned that *using a purpose‑built NoSQL store for write‑heavy workloads saves cost while meeting SLAs*. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
