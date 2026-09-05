---
qid: ing_870c5df3d4__star__local
question: 'Explain: have the exact data we want exact — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 421
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:36-05:00'
sources: []
---

**Situation** – At a mid‑size e‑commerce startup, we were rolling out a new mobile app that let customers reserve and pay for parking in real time at partner garages. The analytics team needed *exact* occupancy data to feed a demand‑prediction model; any lag or noise would skew the ML output and hurt revenue forecasts.

**Task** – Build an end‑to‑end system that streams live sensor data from each garage, cleans it, stores it with millisecond precision, and exposes it via a low‑latency API for our ML pipeline. The goal was sub‑100 ms latency from sensor to model ingestion while guaranteeing 99.9% data fidelity.

**Action** – I chose an event‑driven architecture: each garage installed IoT edge devices that published occupancy events to AWS Kinesis Data Streams. A Lambda function validated payloads, applied a simple outlier filter (discarding any count change > 10 cars in < 1 s), and wrote the cleaned stream into DynamoDB with a composite key of `garageId#timestamp`. For real‑time analytics I set up Amazon Timestream as an append‑only store, using its retention policy to keep 7 days of raw data for audit. The ML model pulls from Timestream via Athena queries; we also built a small cache layer in ElastiCache Redis to serve the last known state to mobile clients instantly.

**Result** – We achieved average end‑to‑end latency of 78 ms, and data loss dropped from 3.2% (pre‑implementation) to < 0.05%. The demand‑prediction model’s RMSE improved by 27%, leading to a $120k increase in projected revenue over the next quarter. I learned that combining edge validation with serverless streaming can deliver both speed and accuracy for time‑critical ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
