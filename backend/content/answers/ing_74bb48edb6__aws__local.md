---
qid: ing_74bb48edb6__aws__local
question: Why Kafka for Ingestion? — Real Time Search
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 460
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:58-05:00'
sources: []
---

**Why Kafka for real‑time ingestion in a search platform?**

**Situation / Task**  
I led the migration of our legacy batch search index (3 TB of logs) to a real‑time pipeline that feeds an Elasticsearch cluster used by 250k daily users. The goal was to reduce data lag from 12 h to <5 s while keeping cost under $200 / day.

**Action**  
I chose **Amazon MSK (Kafka)** because it offers *partition‑level ordering* and *exactly‑once semantics*, which are essential for search deduplication. I designed a three‑tier architecture:  

1. **Producer layer** – application writes to MSK topics; we used KIP‑500 for low‑latency compression.  
2. **Stream processor** – AWS Lambda + Amazon Kinesis Data Analytics reads from MSK, enriches documents (GeoIP, sentiment) and pushes to an *Elasticsearch* index via the *Amazon OpenSearch Service* sink connector.  
3. **Monitoring** – CloudWatch metrics plus a Prometheus exporter on MSK for SLA compliance.

The design guarantees 99.9 % availability by replicating topics across three Availability Zones and auto‑scaling Lambda concurrency based on incoming message rate (peak 15k msg/s).

**Result**  
Latency dropped from 12 h to <4 s, and search freshness improved user satisfaction scores by **17 pts** in the A/B test. Operational cost stayed below $180/​day thanks to serverless compute and MSK’s pay‑as‑you‑go model.

**Leadership Principles**  
*Customer Obsession*: We measured real‑time impact on user experience.  
*Ownership & Dive Deep*: I drove end‑to‑end design, tuned throughput, and debugged production issues without external help.  

Bar‑raisers listen for: clear ownership, deep technical trade‑offs, quantified business impact, and lessons learned (e.g., we later added a retry layer after a 3 % message loss incident).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
