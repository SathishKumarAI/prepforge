---
qid: ing_a33237a04f__star__local
question: 'Explain: Schema Evolution — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 313
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:07-05:00'
sources: []
---

**Situation:**  
At my previous company we built a recommendation engine that pulled user interaction data from our transactional database into a real‑time analytics pipeline. A sudden feature rollout added a new “purchase intent” flag to the orders table, and this change broke our Kafka CDC consumer because it expected the old schema.

**Task:**  
I had to redesign the CDC ingestion so that it could gracefully handle evolving schemas without stopping downstream ML training jobs or losing data fidelity.

**Action:**  
First, I introduced a schema registry (Confluent Schema Registry) and switched our JDBC connector to use Avro with logical type support. I then implemented a “schema evolution policy” in the consumer: on detecting a new field, it dynamically updates the local deserializer, logs the change, and persists the old and new schemas side‑by‑side. For the ML pipeline, I added a feature flag layer that maps both legacy and new fields to a unified input vector, ensuring training jobs continue uninterrupted. Finally, I automated regression tests that replay historical CDC streams against multiple schema versions.

**Result:**  
The system now tolerates 5+ schema changes per quarter with zero downtime; we reduced data loss by 99% and cut pipeline maintenance time from days to hours. The experience taught me the importance of decoupling schema evolution from business logic and using a robust registry to keep streaming ML workloads resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
