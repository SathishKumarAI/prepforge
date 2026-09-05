---
qid: ing_da252f3fdf__star__local
question: 'Explain: Availability in Series vs Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 284
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:32-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time analytics platform that served over 5,000 concurrent users. The key metric was uptime; our SLA required 99.95% availability per month.

**Task:**  
I had to redesign the data ingestion layer so that a single node failure would not push us below SLA, while keeping cost in check.

**Action:**  
I compared series versus parallel architectures. In a **series** setup each microservice depended on the previous one; if one crashed, the whole pipeline stalled. I refactored into a **parallel** design: multiple stateless ingestion workers pulled from a Kafka topic and wrote to separate shards of a distributed SQL database. I added health‑check probes, circuit breakers (Hystrix), and a retry queue with exponential backoff. For stateful components, I introduced active‑passive failover using leader election in ZooKeeper so that only one node performed writes at a time but others were ready to take over instantly.

**Result:**  
After the switch, our monthly uptime jumped from 99.65% to 99.98%, saving us $12k/month in avoided penalties. I learned that parallelism reduces single points of failure, but you still need graceful degradation and coordinated failover for stateful services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
