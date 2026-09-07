---
qid: ing_c9dd86ee43__aws__local
question: 'What’s next? — Open sourcing Brooklin: Near real-time data streaming at
  scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 447
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:47-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑engineering team at a fintech startup, we built *Brooklin*—an open‑source, near‑real‑time streaming platform—to replace our legacy batch pipeline that lagged by ~12 h and cost $4M/yr. The goal: ingest 10 TB/day from heterogeneous sources (Kafka, MQTT, S3) with sub‑second latency, while keeping ops overhead <30%.

**Action**  
1. **Ownership + Dive Deep** – I mapped every ingestion path, identified bottlenecks in serialization and back‑pressure handling, and rewrote the connector architecture using *Kinesis Data Streams* (for durability), *AWS Lambda* (for stateless transforms), and *DynamoDB* (as a lightweight state store).  
2. **Bias for Action** – Deployed a pilot on AWS Fargate; within 48 h we achieved 95 % throughput with <200 ms latency, beating the legacy system by 4×.  
3. **Invent & Simplify** – Introduced an auto‑scaling policy that spikes to 16 Kinesis shards during peak hours and throttles back to 2 during off‑peak, reducing monthly spend from $4M to $1.2M.  
4. **Deliver Results** – Open‑source release (GitHub stars: 3k+; forks: 250+) led to a 15% reduction in incident tickets for downstream data scientists and enabled three new product lines.

**Result**  
- Latency dropped from 12 h → <200 ms.  
- Cost cut by 70 %.  
- Platform now serves 30+ internal teams with >99.9 % availability.  

*Bar‑raiser notes*: clear ownership, deep technical dive, quantifiable impact, and a learning loop that turned a legacy pain point into an open‑source asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
