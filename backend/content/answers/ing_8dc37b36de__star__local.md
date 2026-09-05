---
qid: ing_8dc37b36de__star__local
question: 'Explain: the trip using fake GPS location ads — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 384
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:18-05:00'
sources: []
---

**Situation:**  
While leading the fraud‑prevention team at a fast‑growing ride‑sharing startup, we noticed a spike in users creating accounts and placing “fake” GPS location ads to game the promotion system—drivers were being paid for rides that never occurred.

**Task:**  
Design an end‑to‑end detection pipeline that flags suspicious GPS data in real time, blocks fraudulent payouts, and scales with 20 M active users while keeping latency under 300 ms per request.

**Action:**  
I architected a microservice that ingests raw location streams into Kafka, then processes them through a Spark Structured Streaming job. The job applies two layers of checks: (1) a rule‑based engine that flags impossible speed/trajectory patterns using haversine distance and time deltas; (2) an unsupervised graph‑embedding model (node2vec) that captures user–location relationships, feeding into an Isolation Forest to surface outliers. Results are stored in Cassandra for quick lookup by the payment service. We also added a “watchlist” API that flags driver accounts for manual review when their anomaly score exceeds a threshold.

**Result:**  
Within three months we reduced false‑positive payouts by 87 % and cut fraud losses from $1.2 M to $150 k annually. The system handled peak traffic of 5 k events per second with <250 ms latency, earning the engineering team an internal “Innovation Award.” I learned that combining deterministic rules with machine learning gives both explainability and adaptability in real‑time fraud detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
