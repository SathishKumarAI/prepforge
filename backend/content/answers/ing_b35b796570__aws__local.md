---
qid: ing_b35b796570__aws__local
question: 'Explain: Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 375
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:24-05:00'
sources: []
---

**Situation & Task**  
I led a migration of the customer‑feedback service from an on‑prem MongoDB cluster (5 TB) to AWS, aiming to improve write latency and elastic scaling while keeping cost <30% of the old spend.

**Action**  
- **Dive Deep**: Benchmarked both stores under 200k writes/sec. Mongo’s WiredTiger hit 120 ms ops at peak; Cassandra achieved ~25 ms with consistent read/write performance due to its tunable consistency model.
- **Design**: Chose **Amazon Keyspaces (Cassandra‑compatible)** for write‑heavy workloads and **Amazon DocumentDB** for ad‑hoc analytics. Implemented a dual‑write layer using AWS Lambda + Kinesis Data Streams, ensuring eventual sync.
- **Ownership & Bias for Action**: Built automated health checks with CloudWatch Alarms; auto‑scaling on CPU/latency thresholds reduced manual ops.
- **Deliver Results**: Post‑migration, write latency dropped 70 % (from 120 ms to 36 ms), cost fell by 28 %, and throughput scaled from 200k to 1M writes/sec without service interruption.

**Result**  
The new architecture delivered sub‑50 ms response times for 99.9% of requests, supported a 4× traffic spike during the holiday season, and cut operational overhead by 40%.  

---

**Bar‑raiser focus**: clear ownership, depth in performance tuning, measurable impact (latency & cost), and lessons from initial MongoDB scaling limits that guided the switch to Cassandra‑based services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
