---
qid: ing_67fe4637df__faang__local
question: 'Explain: High-Write Traffic — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 544
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:39-05:00'
sources: []
---

**High‑Write Traffic – 8 Common System Design Problems & Solutions**

| # | Problem | Typical Impact | Core Solution |
|---|---------|----------------|---------------|
| 1 | **Database write bottleneck** | Hot spots, slow writes | Sharding + write‑through cache (e.g., Redis) to absorb spikes. |
| 2 | **Event ordering** | Out‑of‑order updates corrupt state | Use partitioned Kafka topics + per‑partition sequence numbers; replay for consistency. |
| 3 | **Data loss risk** | Unflushed writes vanish on crash | Persist to durable log (WAL) before acknowledging client. |
| 4 | **Latency spikes** | Heavy write bursts delay reads | Asynchronous replication & read‑through cache; offer “eventually consistent” APIs. |
| 5 | **Schema evolution** | New fields break writers/ readers | Versioned schemas in Avro/Protobuf + backward‑compatible defaults. |
| 6 | **Backpressure** | Write queue overload | Token bucket rate limiting per client + graceful degradation (drop or retry). |
| 7 | **Monitoring & alerting** | Hidden write failures | Real‑time metrics on write latency, error rates; auto‑scaling based on thresholds. |
| 8 | **Cost control** | Unlimited writes inflate storage | Tiered storage: hot in SSD, cold archived in object store; lifecycle policies. |

---

### Approach
1. **Clarify** the traffic profile (write frequency, size, latency SLA).  
2. Identify *hot* entities that will become write hotspots.  
3. Layer solutions: cache → log → sharded DB → async replication.  

### Depth & Trade‑offs
- Sharding reduces per‑node load but increases cross‑partition joins.  
- Kafka ordering guarantees consistency at the cost of higher latency and larger infrastructure footprint.  
- WAL ensures durability yet adds write overhead; acceptable for high‑write workloads.

### Edge Cases
- Sudden burst (e.g., flash sale) → ensure backpressure kicks in before queue overflows.  
- Schema change mid‑stream → validate with schema registry before publishing.  

### Optimize & Communicate
Iterate on shard key, cache eviction policies, and monitoring thresholds. Present the trade‑offs to stakeholders: *“We’ll accept eventual consistency for read latency, but writes are durably logged.”* This shows a balanced design, aligning with FAANG’s emphasis on structured reasoning and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
