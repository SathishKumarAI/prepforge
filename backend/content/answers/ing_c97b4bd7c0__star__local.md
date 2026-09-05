---
qid: ing_c97b4bd7c0__star__local
question: 'Explain: NoSQL — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 351
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:09-05:00'
sources: []
---

**Situation**  
When I was tasked with redesigning the backend for a new paste‑sharing service that had outgrown its single MySQL instance, the traffic spike to 2 M requests/day meant that the relational schema was choking on write throughput and causing latency spikes.

**Task**  
I needed to pick a storage solution that could handle high write volume, support eventual consistency for short‑lived pastes, and allow fast key‑based retrieval with minimal joins.

**Action**  
After evaluating options, I chose DynamoDB because of its single‑digit millisecond latencies and automatic sharding. I modeled each paste as a document with attributes: `paste_id` (partition key), `content`, `expiry_ts`, and optional `metadata`. For the “recent pastes” feed, I added a Global Secondary Index on `created_at`. To keep the data fresh, I implemented a TTL attribute so expired pastes are auto‑deleted. I also used AWS Lambda to validate paste length against a 10 MB limit before write, ensuring we never store oversized blobs.

**Result**  
Write throughput increased from ~200 ops/s to >30 000 ops/s with no latency degradation; read latency stayed below 5 ms for 99th percentile. The system now scales linearly as traffic grows, and the cost dropped by 35% because of reduced RDS maintenance overhead. I learned that choosing a schema‑less store can dramatically simplify scaling when the access pattern is simple key lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
