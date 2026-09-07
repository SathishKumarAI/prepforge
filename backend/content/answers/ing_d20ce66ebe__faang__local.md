---
qid: ing_d20ce66ebe__faang__local
question: 'Explain: so kind of over time you''ll see — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 611
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:49:01-05:00'
sources: []
---

**Clarify**  
The interviewee is asked to explain *AWS re:Invent 2018* presentation “Amazon DynamoDB Under the Hood: How We Built a Hyper‑Scale Database (DAT321).” I’ll restate the key points: DynamoDB’s architecture, its scaling strategy, and how AWS engineered it for millions of requests per second with low latency. I’d confirm assumptions such as audience knowledge (basic distributed systems) and focus on design trade‑offs.

**Approach**  
1. Outline the main themes of the talk.  
2. Dive into DynamoDB’s core components: partitioning, replication, consistency, storage engine.  
3. Discuss scaling mechanics: horizontal sharding, auto‑rebalancing, capacity modes (on‑demand vs provisioned).  
4. Highlight performance guarantees and failure handling.  
5. Conclude with operational insights (monitoring, cost control).

**Depth**  
- **Partitioning & Sharding**: Data is split into *partitions* by hash key; each partition is a logical unit that can be replicated across AZs.  
- **Replication**: Multi‑AZ synchronous replication via DynamoDB Streams + Kinesis for durability; read replicas enable low‑latency reads.  
- **Consistency Models**: Strongly consistent vs eventually consistent reads, with tunable consistency per request.  
- **Storage Engine**: In‑memory LSM tree (DynamoDB’s “Tombstone” approach) writes to SSD‑backed key–value store; compaction & garbage collection keep read paths fast.  
- **Scaling**: *Capacity units* are mapped to underlying storage nodes; autoscaling adjusts partitions on demand, using a *partition split* algorithm that keeps hot spots balanced.  
- **Throughput Guarantees**: Provisioned mode reserves capacity, while on‑demand uses a *request‑level* throttling model backed by a token bucket.  
- **Failure Handling**: Partition failure triggers automatic failover; write isolation ensures no data loss; read‑only replicas keep serving during maintenance.

**Edge Cases**  
- Hot partitions (skewed access) can bottleneck throughput—handled by *partition rebalancing*.  
- Sudden traffic spikes may cause throttling in provisioned mode unless autoscaling is tuned.  
- Consistency trade‑offs: strong reads incur higher latency; eventual reads risk stale data.

**Optimize & Communicate**  
I’d note that DynamoDB’s design favors *predictable, low‑latency* operations over raw throughput at any single node. Future improvements could involve adaptive compaction or richer consistency options. In narration, I’d keep the flow linear, use analogies (e.g., “think of partitions like shards in a library”), and end with how this architecture empowers global, real‑time applications—exactly what FAANG teams need for high‑scale services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
