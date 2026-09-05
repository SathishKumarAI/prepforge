---
qid: ing_8b47591b55__star__local
question: 'Explain: sequel to save the database after 2014 — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 402
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:08-05:00'
sources: []
---

**Situation**  
When I joined the data platform team at a ride‑hailing startup in 2015, we were still using a monolithic MySQL database that stored every trip record, driver profile, and pricing rule. By Q3 of that year, our daily transaction volume had surpassed 15 M trips, causing 30 s query latency spikes during surge periods.

**Task**  
I was tasked with redesigning the persistence layer so we could safely “save” all state to a scalable database while ensuring zero downtime and data consistency for ongoing operations.

**Action**  
1. I introduced **partitioned PostgreSQL** tables, sharding by city and date, which cut write contention by 70 %.  
2. To handle real‑time analytics, I set up an **Apache Kafka** pipeline that streamed each trip event to a downstream **Cassandra** cluster for fast aggregation.  
3. For transactional safety, I wrapped critical updates in **two‑phase commits** across MySQL and PostgreSQL using the `XA` protocol, then moved slowly to a fully distributed **Spanner**‑like schema once latency dropped below 5 ms.  
4. Finally, I automated the migration with **Flyway** scripts that performed zero‑downtime schema changes, backed by continuous integration tests that validated consistency across all replicas.

**Result**  
Within six months, we reduced peak query latency from 30 s to under 2 s and increased daily trip throughput from 15 M to 45 M without any service interruptions. The new architecture also cut operational costs by 25 % through better resource utilization. I learned that a layered approach—combining sharding, event streaming, and careful transactional coordination—is essential when scaling real‑time ride‑hailing systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
