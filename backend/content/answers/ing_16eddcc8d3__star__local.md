---
qid: ing_16eddcc8d3__star__local
question: 'Explain: Push and pull queries — Database Streaming with ksqlDB | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 384
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:28-05:00'
sources: []
---

**Situation**  
At my last role we had a real‑time fraud detection pipeline on Confluent Platform. The downstream risk engine needed to query the latest user balances from an evolving KSQL table every few seconds, but our existing pull‑style queries were throttling Kafka Connect and adding latency.

**Task**  
I was tasked with re‑architecting the data flow so that the risk engine could receive fresh balance updates instantly without polling the KSQL service continuously, while keeping the system within SLA limits (≤ 200 ms per request).

**Action**  
I introduced a *push* model using KSQL’s `TABLE` streams and Kafka’s native **KTable** semantics. I created a materialized view of balances and exposed it via an internal Kafka topic. Then I implemented a lightweight consumer in the risk engine that subscribed to this topic, consuming balance updates as they arrived (push). For occasional ad‑hoc queries, I kept a *pull* endpoint using `SELECT` statements over KSQL REST API, but limited its usage to monthly reports. I tuned the producer’s batch size and linger.ms to 1 ms to ensure near‑instant delivery, and added a TTL on the KTable to purge stale entries.

**Result**  
The push approach cut query latency from ~350 ms (pull) to < 80 ms on average, reducing overall fraud detection time by 40%. The system now handles 10× more concurrent risk engine instances without hitting Kafka Connect limits. I learned that hybrid push/pull patterns can balance real‑time freshness with occasional heavy queries, and that careful tuning of KTable retention is key to keeping state lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
