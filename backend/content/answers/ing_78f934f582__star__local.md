---
qid: ing_78f934f582__star__local
question: 'Explain: So DynamoDB the items have to have — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 310
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:57-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a real‑time analytics pipeline for a social media app that had to ingest millions of user events per day while keeping latency under 100 ms.

**Task:**  
I needed to decide on the underlying NoSQL store that could scale horizontally, support flexible schema, and provide strong read/write throughput without complex sharding logic.

**Action:**  
After evaluating MongoDB, Cassandra, and DynamoDB, I chose DynamoDB because it offers single‑digit millisecond performance at any scale, automatic partitioning, and built‑in TTL for expiring event data. I modeled the events table with a composite primary key (user_id#event_timestamp) to enable efficient range queries. Using PartiQL I wrote ad‑hoc analytics queries, and I enabled DynamoDB Streams to trigger Lambda functions that push aggregated metrics into Redshift for reporting. I also leveraged on‑demand capacity mode during peak traffic spikes and switched to provisioned mode with auto scaling once usage patterns stabilized.

**Result:**  
The pipeline handled 3 million events per hour with <80 ms latency, and we reduced infrastructure costs by 30% compared to the Cassandra prototype. I learned that choosing a managed NoSQL service like DynamoDB can dramatically cut operational overhead while still delivering the performance required for real‑time workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
