---
qid: ing_dd10d5ab8f__aws__local
question: 'Explain: DiskANN (SSD-based) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 516
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:48-05:00'
sources: []
---

**Situation** – I led the migration of our recommendation engine from a CPU‑bound Faiss cluster to an SSD‑based **DiskANN** vector database for a global e‑commerce catalog (~120 M items). The goal was to cut query latency from 35 ms to <10 ms while keeping storage costs under $2 M/yr.

**Task** – Deliver a production‑ready, highly available vector search layer that supports 200k QPS, scales horizontally, and integrates with our existing recommendation pipeline.

**Action** –  
1. **Design & Architecture** – Deployed DiskANN on an Amazon EC2 Auto Scaling group (c5d.large) behind an Application Load Balancer. Each node holds a shard of the vector index on local NVMe SSDs; shards are replicated 3× for durability.  
2. **AWS Services** – Used **EBS‑gp3** for hot metadata, **S3 Glacier Deep Archive** for backup snapshots, and **Amazon CloudWatch** + **X-Ray** for telemetry. Integrated with **Amazon SageMaker** for periodic re‑training and re‑indexing.  
3. **Scalability & Cost** – Sharding strategy allowed linear throughput scaling; we capped node count at 12 to stay within the $1.8 M/yr budget, achieving a 4× cost reduction over Faiss on EBS‑io1.  
4. **Reliability** – Implemented health checks and automatic failover via Route 53 latency routing. Added a small “warm‑up” queue in DynamoDB to pre‑fetch hot vectors.

**Result** – Latency dropped from 35 ms to 8 ms (30 % faster than the target). QPS increased from 80k to 210k without additional cost, and we reduced annual storage spend by $500k. The project earned a “Customer Obsession” badge because end‑users experienced near‑instant recommendations during peak traffic.

**Reflection** – I learned that SSD locality is critical for high‑dimensional search; misestimating shard size caused cache thrashing early on. Future iterations will employ **AWS Outposts** to keep the most active vectors on ultra‑low‑latency local storage, further tightening response times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
