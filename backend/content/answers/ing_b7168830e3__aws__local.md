---
qid: ing_b7168830e3__aws__local
question: 'Explain: Allow enough heap for field mappers and overheads'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 396
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:55-05:00'
sources: []
---

**Situation / Task**  
In a production ML pipeline we were processing terabytes of raw logs with Spark/Scala. The job failed repeatedly with *OutOfMemoryError* during the map phase, causing 30 min restarts and SLA breach.

**Action**  
1. **Dive Deep into Heap Usage** – I instrumented the JVM with `-XX:+PrintGCDetails` and found that the mapper stage allocated ~70 % of the heap for field‑parsing objects plus a large overhead from Kryo serialization.  
2. **Re‑design the Mapper** – Rewrote the mapper to use immutable case classes, removed unnecessary intermediate collections, and replaced Kryo with Parquet’s native schema‑aware encoder.  
3. **Configure Spark** – Set `spark.executor.memory` to 8 GB and `spark.memory.fraction` to 0.75, giving ~6 GB for user data + overheads. Added a *spill* threshold (`spark.storage.safetyFraction=0.05`) so that spills trigger before OOM.  
4. **Cost & Availability** – Using Spot Instances with on‑demand fallback lowered cost by 35 % while maintaining high availability; the new configuration kept Uptime >99.9 %.

**Result**  
- Reduced mapper OOM incidents from 12/day to 0.  
- Throughput improved from 2 TB/hr to 5 TB/hr (a 150 % increase).  
- CPU utilisation rose from 55 % to 80 %, showing better resource use.

**Learning & Ownership**  
I documented the new mapper as a reusable library, shared it with the data‑engineering team, and added automated unit tests for memory usage. This proactive ownership prevented future regressions and aligns with Amazon’s *Ownership* and *Customer Obsession* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
