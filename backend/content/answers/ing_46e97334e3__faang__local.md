---
qid: ing_46e97334e3__faang__local
question: 'Explain: Tablets (new and certified refurbished) — Designing Data-Intensive
  Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 495
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:06-05:00'
sources: []
---

**Clarify**  
The interview asks you to describe how *Tablets*—both new and certified‑refurbished units—can be modeled as a data‑intensive application, drawing on concepts from “Designing Data‑Intensive Applications.” I’ll assume we’re building a system that catalogs inventory, tracks sales, manages supply chains, and recommends refurbished devices to customers.  
**Approach**  
1. **Model the domain**: entities (Device, SKU, Order), relationships (device → order, order → customer).  
2. **Choose storage**: relational for transactional consistency (orders, payments) + a NoSQL store for high‑volume logs and recommendation data.  
3. **Data flow**: ingest telemetry from warehouses, stream to analytics; batch jobs for inventory forecasts.  
4. **Consistency & availability trade‑offs**: use ACID transactions for orders; eventual consistency for catalog updates (CAP).  
5. **Scalability**: partition by SKU region, use sharded queues for order processing, and a CDN for static media.  
**Depth**  
- *Transactional layer*: PostgreSQL with row‑level isolation; stored procedures enforce stock constraints.  
- *Analytics layer*: Apache Kafka streams → Kafka Streams/ksqlDB → Redshift or BigQuery for OLAP.  
- *Recommendation engine*: Spark jobs on the data lake compute similarity scores, pushed to a Redis cache for low‑latency serving.  
Complexity: write path O(log n) on partitioned DB; read path O(1) from cache. Trade‑off: higher storage cost vs. faster response.  
**Edge Cases**  
- Stock mismatch during high‑demand launch → optimistic locking & compensating transactions.  
- Device firmware updates causing schema drift → versioned Avro schemas in Kafka.  
- Privacy of refurbished device data → GDPR‑compliant anonymization before analytics.  
**Optimize & Communicate**  
I’d iterate on the cache eviction policy (LRU vs LFU) based on access patterns, and monitor latency with Prometheus alerts. In an interview I’d narrate: “We start by isolating consistency needs, then layer caching for performance, and finally batch‑process large‑scale telemetry to feed our recommendation engine.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
