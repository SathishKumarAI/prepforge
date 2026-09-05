---
qid: ing_25aea14381__star__local
question: 'Explain: ksqlDB Creates the Physical Plan ¶ — ksqlDB Architecture - ksqlDB
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 368
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:05-05:00'
sources: []
---

**Situation:**  
In my last role, we had to migrate a real‑time fraud detection pipeline from Kafka Streams to ksqlDB. The existing system produced over 500 k events per second and our latency target was under 150 ms.

**Task:**  
I needed to design the ksqlDB topology so that it generated an efficient physical plan: minimal joins, proper windowing, and low state store usage while still meeting the latency requirement.

**Action:**  
First, I profiled the current Kafka Streams job with JProfiler and identified a costly stateful join on user‑profile data. In ksqlDB, I rewrote that logic as a single `CREATE STREAM` with a `TABLE JOIN` using a compacted table for profiles, which eliminated the materialized view churn. I also tuned the `COMMIT_INTERVAL_MS` to 50 ms and added an `INTO` clause to write results directly to a sink topic. Using the ksqlDB REST API, I inspected the generated logical plan and then queried `/v1/queryable-sql/statements/{id}/physical-plan` to confirm that the planner had fused the join into a single operator node. Finally, I added a `WINDOW TUMBLING (SIZE 10 SECONDS)` to bucket events, reducing per‑event processing overhead.

**Result:**  
After deployment, end‑to‑end latency dropped from 280 ms to 95 ms—meeting our SLA—and CPU usage fell by ~35 %. The exercise taught me that understanding ksqlDB’s physical plan API is crucial for pinpointing inefficiencies and that careful window sizing can dramatically improve throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
