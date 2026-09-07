---
qid: ing_387ea84c62__aws__local
question: 'Explain: Why HBase — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 517
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:29-05:00'
sources: []
---

**Why I’d pick HBase for a high‑velocity, low‑latency ML feature store**

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| **Customer Obsession & Ownership** – Our recommendation engine needed to ingest 1 M events/sec and serve < 5 ms predictions for 50 k concurrent users. | Build a real‑time feature table that scales horizontally, tolerates hot spots, and guarantees consistency. | • Adopted **Apache HBase** (NoSQL column store) on an EKS cluster. <br>• Designed a row key `userId#timestamp` to avoid write amplification. <br>• Enabled Bloom filters & compaction strategy for fast scans. <br>• Integrated with **Amazon Kinesis Data Streams** for ingestion and **S3 Glacier** for cold‑backups. | • 99.999% availability, latency < 4 ms under peak load. <br>• Cost down 35 % vs. DynamoDB due to cheaper per‑GB storage and on‑demand scaling. <br>• Reduced feature retrieval time by 40 % compared to a legacy MySQL pool. |

**Technical rationale**

- **Scalability & Availability**: HBase’s sharding (region servers) handles petabytes of data; automatic failover keeps the cluster highly available.  
- **Consistency**: Strong consistency for single‑row reads—critical for ML inference where stale features corrupt scores.  
- **Cost & Trade‑offs**: While DynamoDB offers simpler management, HBase gives us control over storage tiers (HDFS + S3) and fine‑grained tuning of compaction, which is essential when feature data grows faster than 10 %/month.  
- **Integration**: Native support for Apache Spark & MLlib allows batch model training directly on the same dataset, cutting ETL overhead.

**What a bar‑raiser looks for**

- Demonstrated ownership (design, ops, cost optimisation).  
- Deep dive into key HBase knobs and trade‑offs.  
- Quantified impact (latency, availability, cost).  
- Learning loop: after an initial 10 % latency spike, I added secondary indexing and tuned cache size—lesson that led to the final stable design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
