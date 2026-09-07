---
qid: ing_e09cd5fd4a__aws__local
question: 'Explain: Now available — Designing Data-Intensive Applications (DDIA) \u2014
  an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 360
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:22-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML platform team, we had fragmented data pipelines that caused slow model training cycles (average lag = 48 h). The leadership asked me to redesign our ingestion layer so it could handle petabytes of streaming telemetry while keeping cost < $1M/yr.

**Action**  
I read *Designing Data‑Intensive Applications* (DDIA) to anchor best practices. I applied its **CQRS + Event Sourcing** pattern, built a Kafka‑based ingestion backbone, and used Amazon Kinesis for real‑time streams. For durable storage I chose DynamoDB with Global Tables (multi‑AZ) and S3 Glacier Deep Archive for cold data, aligning with the book’s “write‑heavy” guidance. I leveraged Lambda to materialize materialized views, and Athena for ad‑hoc analytics. Cost control came from auto‑scaling consumer groups and reserved capacity on Kinesis.

**Result**  
Post‑deployment:
- Training latency dropped 87 % (from 48 h to 6 h).  
- Storage cost fell 32 % while maintaining ≥99.999% durability.  
- Data freshness improved, enabling real‑time fraud detection with a 5 % lift in true positive rate.

**Reflection**  
I learned that deep dive into literature (DDIA) is crucial for scalable design. I practiced *Ownership* by iterating on architecture, *Dive Deep* through detailed cost models, and *Deliver Results* via measurable metrics—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
