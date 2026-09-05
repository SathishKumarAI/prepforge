---
qid: ing_0fd00d3651__star__local
question: 'Explain: Only 2 (of 3 CAP properties) possible at the same time'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 349
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:01-05:00'
sources: []
---

**Situation:**  
When I was leading a data‑pipeline upgrade for our recommendation engine, we discovered that the real‑time feature store was suddenly lagging behind production traffic. The system had to handle millions of user events per second while keeping latency under 50 ms.

**Task:**  
I needed to decide how to redesign the distributed cache so it could serve low‑latency reads, stay consistent with writes from the batch job, and remain available during network partitions.

**Action:**  
I mapped each CAP property onto our architecture: *Consistency* meant we had to read the latest value; *Availability* required that any request be served even if some nodes failed; *Partition tolerance* was non‑negotiable because our cluster spanned two data centers. I ran a series of experiments with Apache Ignite and Redis Cluster, measuring quorum sizes and write latency under simulated splits. By configuring a 2/3 majority read/write quorum (RA), we could guarantee consistency while still serving requests from any node that joined the quorum, thereby preserving availability during minor partitions.

**Result:**  
The new configuration cut read latency to 35 ms on average, kept data freshness within 100 ms of write time, and maintained >99.8% uptime during a two‑hour network outage. I learned that in distributed systems you can only pick two of the three CAP guarantees; here we chose *Consistency* + *Availability*, accepting that *Partition tolerance* is always on the table but not a selectable trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
