---
qid: ing_5f78a8b821__faang__local
question: 'Explain: surprised to find that we''re moving all — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 456
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:22-05:00'
sources: []
---

**Clarify**  
You’re asking why it’s surprising that *all* data in DynamoDB is eventually stored on SSDs, even when the workload looks “hot” or “cold.” The assumption to verify: the system is truly **hyper‑scale** (hundreds of TBs), latency‑critical, and must support millions of ops/sec.

**Approach**  
1. Explain the underlying architecture: key‑value store with partitioning, replication, and a two‑tier storage model (SSD + flash).  
2. Highlight how DynamoDB’s *hot spot* detection triggers automatic rebalancing and migration to SSDs.  
3. Contrast with traditional spinning‑disk or in‑memory caches.

**Depth**  
- **Partitioning & Hashing**: Data is distributed across 10,000+ partitions; each partition has a primary replica on SSD plus up to two read replicas.  
- **Hot‑spot Handling**: When write traffic exceeds ~1 MB/s per partition, the control plane automatically creates a new shard and redistributes keys, ensuring no single node becomes a bottleneck.  
- **SSD Utilization**: All partitions’ hot data resides on SSDs; “cold” data can be tiered to cheaper storage but still accessed via SSD‑cached metadata.  
- **Consistency & Durability**: Data is written to an S3‑backed WAL, then flushed to SSD; this guarantees ACID properties at scale.

**Edge Cases**  
- Sudden burst traffic that outpaces rebalancing → throttling or temporary read replicas on flash.  
- Partition key skew leading to uneven SSD usage → auto‑sharding mitigates but may temporarily degrade performance.  

**Optimize & Communicate**  
Emphasize the trade‑off: higher upfront cost of SSDs vs. sub‑millisecond latency and linear scalability. Mention that DynamoDB’s “all‑SSD” design eliminates the need for separate caching layers, simplifying architecture and reducing operational overhead. Conclude with how this design aligns with FAANG expectations for low‑latency, highly available services at petabyte scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
