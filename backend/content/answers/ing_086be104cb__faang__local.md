---
qid: ing_086be104cb__faang__local
question: 'Explain: Backing indices — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 519
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:02-05:00'
sources: []
---

**Clarify**  
You’re asking how Elasticsearch builds *backing indices* for real‑time data ingestion (the “Data Streams” feature). The goal is to store incoming JSON documents in a searchable index while preserving immutability and efficient roll‑up of time‑series data.

Assumptions:  
- We’re using ES 7.x or newer.  
- Data streams are append‑only, each document has a timestamp field (`@timestamp`).  
- The system needs near‑real‑time search and retention policies.

**Approach**  
1. Create a *composed index template* that defines mappings & settings (shard count, rollover alias).  
2. Define an *index lifecycle policy* for rollover/cleanup.  
3. When the data stream is created, ES automatically creates an initial backing index with a unique name (`stream-000001`).  
4. Subsequent documents are routed to the current active index; when size or age thresholds hit, ES rolls over to a new backing index (`stream-000002`), updates the write alias.

**Depth**  
*Index naming*: `stream-name-00000x`. The last component is a monotonically increasing integer.  
*Rollover trigger*: `max_size: 50gb`, `max_age: 7d`.  
*Lifecycle phases*:  
- *Hot*: active index, high write throughput.  
- *Warm*: after rollover, read‑heavy but no writes.  
- *Cold*: archived, low cost storage.  
- *Delete*: purge based on retention.  

Complexity: Index creation is O(1); rollover is an atomic alias update (O(log N)). Search across a stream is linear in the number of backing indices but mitigated by shard routing.

**Edge Cases**  
- Clock skew causing out‑of‑order timestamps → documents routed to wrong index; mitigate with `time_zone` setting.  
- Rollover failure → writes may block; use retry logic.  
- Excessive indices > shard limit → manual shrink or delete policy adjustment.

**Optimize & Communicate**  
Explain that the design decouples ingestion from search, allowing hot‑warmed indices for low latency and cold archives for cost efficiency. Highlight trade‑offs: more indices mean higher cluster overhead but better time‑series query performance. Conclude with a diagram of stream → backing index → lifecycle phases to cement understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
