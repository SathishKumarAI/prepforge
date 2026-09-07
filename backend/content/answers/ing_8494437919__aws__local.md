---
qid: ing_8494437919__aws__local
question: 'Explain: Examples — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 481
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:44-05:00'
sources: []
---

**Context (S)**  
I was tasked to build a scalable ingestion pipeline for a recommendation system that served 5 M users daily. The raw click‑stream data lived in an Amazon Kinesis stream and needed to be persisted for downstream ML training.

**Task (T)**  
Design the storage schema so that we could retrieve all interactions for a single user quickly, while still supporting large‑scale batch processing by SageMaker.

**Action (A)**  
I chose **Amazon DynamoDB** as the primary store because of its low‑latency reads and write throughput. The key design was:

| Partition Key | Sort Key |
|---------------|----------|
| `user_id`     | `event_timestamp` |

*The partition key (`user_id`) guarantees that all events for a user are co‑located, enabling O(1) lookups when building per‑user feature vectors.*  
The sort key preserves chronological order and allows efficient range queries (e.g., last 30 days).  

To support batch training, I set up an **Amazon Glue** crawler to materialize the table into a columnar format on S3 (`s3://ml-input/user_events/`), then fed that into SageMaker’s built‑in data pipeline. The design keeps read/write cost low (≈$0.25 M/month) while ensuring 99.9% availability and 10 µs read latency for hot users.

**Result (R)**  
After deployment, the recommendation model training time dropped from **12 h to 2 h**, and click‑through rate improved by **3.8%**—a lift of 120 k daily conversions.  

---

### Leadership Principles Highlighted
- **Ownership** – I took end‑to‑end responsibility for the ingestion pipeline, from design to monitoring.
- **Dive Deep** – Chose a DynamoDB schema that balances per‑user access patterns with batch processing needs; quantified trade‑offs in cost and latency.
- **Customer Obsession / Deliver Results** – The architecture directly increased revenue by improving recommendation relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
