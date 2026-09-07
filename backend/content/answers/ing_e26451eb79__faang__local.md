---
qid: ing_e26451eb79__faang__local
question: 'Explain: Stage 6: Sharding (10M+ users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 502
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:25:40-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how you would shard a system that now has >10 M users—i.e., the 6th stage of scaling a ML‑based product (e.g., recommendation engine). I’ll assume: *per‑user state is large*, *model inference latency <100 ms*, *writes are frequent (profile updates, feedback)*, and *you need strong consistency for user sessions*.  

**Approach**  
1. **Determine sharding key** – use the user ID hash (or a consistent hashing ring) to map users to shards.  
2. **Shard the data plane** – each shard owns its own PostgreSQL/Redis cluster plus a local model cache.  
3. **Model plane** – pre‑train a global base model, then fine‑tune per shard (e.g., user‑segment embeddings). Deploy with TensorRT or ONNX for low latency.  
4. **Routing layer** – a lightweight API gateway that hashes the incoming request to the correct shard, optionally using a lookup cache (LRU) for hot users.  

**Depth**  
- *Consistency*: Use per‑shard ACID transactions; cross‑shard ops go through a two‑phase commit or eventual consistency with conflict resolution.  
- *Latency*: Cache the top‑k recommendations in Redis; serve stale data for 5 s to absorb spikes.  
- *Complexity*: O(1) routing, O(log N) for sharding ring maintenance.  
- *Failover*: Each shard is replicated (primary/standby).  

**Edge Cases**  
- Skewed user distribution → add virtual nodes or re‑hash.  
- Hot shards under 100 ms limit → autoscale GPU workers.  
- Model drift across shards → schedule periodic global retraining and push updates via Kafka.  

**Optimize & Communicate**  
Start with a single shard to validate latency/throughput, then incrementally add shards, monitoring metrics (latency percentiles, CPU, GPU utilization). Present the trade‑off: sharding reduces per‑node load but adds routing complexity; keeping a global model guarantees consistency at the cost of stale predictions. Conclude by stressing that this design scales linearly with users while preserving ML inference performance and data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
