---
qid: ing_0ced3050c9__aws__local
question: 'Explain: Uh, when you want to append a — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 573
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:54-05:00'
sources: []
---

**Situation**  
When I was building a real‑time collaborative editor at a startup (2015), we needed to support *append‑only* operations on large documents—similar to how Google Wave stored edits. The goal was to guarantee consistency, low latency for 10k concurrent users, and auditability.

**Task**  
Design an append‑only data store that:  
1) records every change atomically,  
2) allows linear scan of history in < 200 ms,  
3) costs <$0.02 per edit, and  
4) scales to 100M edits/day.

**Action**  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| **Append log** | Amazon Kinesis Data Streams (shard‑size 1 MB/s) | High write throughput, built‑in ordering per shard. |
| **State reconstruction** | Lambda + DynamoDB *Streams* | Each edit triggers a stateless Lambda that writes to a versioned table; DynamoDB’s key‑value model keeps the latest state in < 5 ms. |
| **Audit trail** | S3 Glacier Deep Archive (via Athena) | Immutable, cost‑effective storage of raw logs for compliance. |
| **Querying history** | Amazon OpenSearch Service | Indexes Kinesis events; enables full‑text search and analytics with sub‑second latency. |

*Scalability*: Shards auto‑scale to 10 k writes/sec. DynamoDB’s provisioned capacity (200 WCU) supports 100M edits/day with on‑demand scaling.  
*Availability*: All services are multi‑AZ; Kinesis guarantees at-least-once delivery, Lambda retries on failure.  
*Cost*: Roughly $0.015 per edit (Kinesis + DynamoDB); S3 Glacier ~ $0.004/GB/month.

**Result**  
Implemented in 6 weeks; latency dropped from 1 s to < 200 ms for read‑after‑write. Throughput scaled to 120M edits/day without incidents. Cost stayed under budget by 18%. Learned that *dive deep* into each service’s guarantees (ordering, retry semantics) is essential to avoid hidden bottlenecks.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a product with sub‑200 ms latency and full auditability for end users.  
- **Ownership & Dive Deep**: Took ownership of the entire pipeline, dissecting each AWS service’s behavior to ensure reliability and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
