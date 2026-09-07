---
qid: ing_5ab2b689ec__faang__local
question: 'Explain: Scaling the design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 531
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:24-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re building a *SalesRankByCategory* feature that ranks products within each category based on sales volume. The question asks how to **scale** this design so it can handle millions of products and real‑time updates without bottlenecks. Key assumptions:  
- Sales data arrives as an append‑only stream (e.g., order events).  
- We need near‑real‑time ranking with sub‑second latency for a web dashboard.  
- Storage cost and compute budget are bounded.

**2️⃣ Approach**  
1. **Stream ingestion → Kafka topic** per category (partitioned by hash of product ID).  
2. **Windowed aggregation** in Flink/Beam: maintain a sliding window (e.g., last 30 days) to count sales per product.  
3. **Top‑N computation**: use a min‑heap or sorted list per category, updated incrementally.  
4. **Persist results** to a fast key‑value store (Redis or DynamoDB TTL) for O(1) lookup by category.  
5. **Cache & CDN** for UI hits.

**3️⃣ Depth**  
- *Complexity*: Ingestion is O(log N) per event due to heap updates; storage writes are O(1).  
- *Fault tolerance*: Kafka ensures at‑least‑once delivery; Flink checkpoints guarantee state recovery.  
- *Partitioning*: 256 partitions per category balance parallelism and avoid hotspotting.  
- *Data freshness*: Use a 5‑minute lag window to smooth spikes.

**4️⃣ Edge Cases**  
- **Cold start**: categories with few products—fallback to global ranking.  
- **Drift**: sudden popularity shift; the sliding window handles decay automatically.  
- **Backpressure**: if order volume spikes, use back‑pressure signals in Flink to pause ingestion.

**5️⃣ Optimize & Communicate**  
- Add a *materialized view* layer (e.g., materialized view tables in BigQuery) for analytical queries.  
- Periodically precompute *decayed scores* offline to reduce real‑time load.  
- Explain trade‑offs: tighter windows give fresher ranks but higher state size; more partitions improve throughput but increase coordination overhead.

**Summary** – By combining stream processing, incremental top‑N logic, and a fast cache layer, we achieve sub‑second ranking for millions of products while keeping compute and storage costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
