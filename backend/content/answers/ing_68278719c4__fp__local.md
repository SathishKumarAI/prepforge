---
qid: ing_68278719c4__fp__local
question: 'Explain: Scenario – The Canadian census — How Amazon DynamoDB adaptive
  capacity accommodates uneven data access patterns (or, why what you know about DynamoDB
  might be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 313
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:46:08-05:00'
sources: []
---

**Why Adaptive Capacity Works for the Canadian Census**

The census generates a *skewed* workload: most queries hit a few “hot” keys (e.g., large cities) while many others are cold. A fixed‑throughput table would either waste capacity on cold partitions or throttle hot ones, violating the *law of diminishing returns* in I/O budgeting.

Adaptive Capacity solves this by **decoupling provisioned throughput from individual partitions** and reallocating it based on real‑time request rates. Internally, DynamoDB aggregates requests over a 10 s window per partition key, then redistributes excess capacity to hot partitions while preserving the overall table quota. This is an application of *resource pooling* in queueing theory: by treating all partitions as a single service pool, the system achieves higher *throughput efficiency* than static allocation.

A non‑obvious insight is that **write amplification is implicitly mitigated**. Because hot partitions receive more capacity, they can spread writes across multiple physical nodes faster, reducing write stalls caused by internal compaction. Consequently, latency variance shrinks even under extreme skew—a benefit often overlooked when evaluating adaptive versus on‑demand modes.

Thus, for a census with millions of unevenly accessed records, Adaptive Capacity offers both cost‑efficiency and robust performance without manual tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
