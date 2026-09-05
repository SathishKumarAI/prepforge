---
qid: ing_8ff1134b16__star__local
question: 'Explain: When to Use Strong Consistency — Strong vs. Eventual Consistency
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 338
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:45-05:00'
sources: []
---

**Situation:**  
While leading a real‑time fraud detection system for a mobile payments app, we observed that the alerting latency dropped from 300 ms to 120 ms after migrating our user profile store from DynamoDB (eventual consistency) to a multi‑region Aurora PostgreSQL cluster.

**Task:**  
I had to decide whether to keep the eventual consistency model for speed or switch to strong consistency to guarantee accurate fraud scoring without false positives, while staying within our SLA of 200 ms per transaction.

**Action:**  
I performed an impact analysis: profiled read/write patterns, quantified the probability of stale reads causing missed fraud flags (≈2% of high‑value transactions), and benchmarked latency under different consistency settings. I set up a canary deployment using Aurora’s read replicas with `SERIALIZABLE` isolation to enforce strong consistency on the critical “risk score” queries, while keeping other analytics workloads on eventual consistency replicas. We also introduced a lightweight caching layer for non‑critical reads to offset any added latency.

**Result:**  
The switch reduced false‑positive fraud alerts by 92% and improved overall system confidence. Latency remained at 180 ms on average, comfortably below our SLA, and we gained auditability for compliance audits. I learned that strong consistency is essential when business logic depends on up‑to‑date data, even if it costs a few milliseconds, whereas eventual consistency can be leveraged where occasional staleness is acceptable and performance is paramount.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
