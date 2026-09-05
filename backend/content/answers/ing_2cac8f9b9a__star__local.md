---
qid: ing_2cac8f9b9a__star__local
question: 'Explain: Active-Active Geo Distribution — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 337
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:20-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a real‑time payments platform that had to operate globally with zero downtime. Our existing single‑region database was causing latency spikes in Asia and the EU, and any outage meant lost revenue.

**Task:**  
I was tasked with designing an active‑active geo‑distributed architecture that would keep data consistent across three regions—US, Europe, and Asia—while ensuring sub‑200 ms response times for all users.

**Action:**  
I chose a multi‑master replication model using Apache Cassandra’s tunable consistency. We set *QUORUM* reads/writes to guarantee linearizability on writes, while allowing *LOCAL_QUORUM* for read latency in remote regions. To handle conflicts, we implemented vector clocks and an application‑level conflict resolver that favored the most recent timestamp with a deterministic tie‑breaker (region priority). I also set up continuous backup pipelines to Amazon S3 via AWS Data Pipeline, and used Kafka Connect to stream audit logs to a central analytics cluster.

**Result:**  
After deployment, our global latency dropped from 350 ms to 120 ms on average. The system achieved 99.999% uptime during a major regional outage—users in the affected zone were seamlessly routed to another region with no data loss. I learned that choosing the right consistency level and conflict resolution strategy is critical; a one‑size‑fits‑all approach can either degrade performance or risk stale reads. This architecture now serves as the backbone for all our high‑availability services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
