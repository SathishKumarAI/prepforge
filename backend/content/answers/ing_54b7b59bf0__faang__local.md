---
qid: ing_54b7b59bf0__faang__local
question: 'Explain: Promoted Tweets Analytics — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 566
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:03-05:00'
sources: []
---

**1️⃣ Clarify**  
We need to design a scalable hit‑counting service for “Promoted Tweets” on Twitter – i.e., track how many times each promoted tweet is displayed (impressions) in real time, aggregate by campaign, and expose metrics to advertisers.  
*Assumptions:*  
- Impressions are generated at millions of events per second.  
- We need sub‑second latency for real‑time dashboards.  
- The data must be durable, tamper‑proof, and allow roll‑back.

**2️⃣ Approach**  
1. **Event ingestion:** Use a Kafka cluster (or Pulsar) to buffer impression events.  
2. **In‑memory aggregation:** Stream the events through a stateful stream processor (Kafka Streams / Flink). Each record → key = `(campaign_id, tweet_id)` → value = count.  
3. **Durable storage:** Persist incremental counts to an append‑only log (S3/Blob) and materialize aggregates into a fast key/value store (DynamoDB / Bigtable).  
4. **API layer:** Expose REST/GraphQL endpoints backed by the KV store for low‑latency reads.  
5. **Batch refresh:** Periodically replay logs to rebuild state in case of failures.

**3️⃣ Depth**  
- *Throughput:* Kafka can handle >10k events/s per broker; Flink/KStreams scales horizontally, keeping 1–2 ms latency.  
- *Consistency:* Use exactly‑once semantics via idempotent keying and offset commits.  
- *Fault tolerance:* State checkpoints every 5 s to distributed storage; recovery is sub‑minute.  
- *Cost:* Ingestion (Kafka) + stream processing (Flink) + KV store are all pay‑per‑use, keeping CAP at Availability & Partition tolerance.

**4️⃣ Edge Cases**  
- Duplicate events → deduplication via event IDs or watermarking.  
- Out‑of‑order arrivals → event time windows with allowed lateness.  
- Burst traffic (e.g., viral campaigns) → auto‑scaling of stream workers.  
- Data retention policies → archival to cold storage after 30 days.

**5️⃣ Optimize & Communicate**  
To reduce write amplification, batch writes to the KV store in micro‑batches (e.g., every 100 ms). For read scalability, use sharded counters and publish incremental deltas to a CDN cache. I’d present this design by first sketching the data flow diagram, then walking through latency budgets per component, and finally highlighting how we meet SLAs while keeping operational overhead minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
