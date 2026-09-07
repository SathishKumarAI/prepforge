---
qid: ing_b438ddfc2c__aws__local
question: 'Explain: it''s not possible at all now I — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 481
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:21-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had a shared‑document editor that was growing to 30 M active users. The product team wanted real‑time collaboration like Google Docs, but our monolithic stack made *Operational Transformation (OT)* impractical—any change required locking the entire document and broadcasting to all clients, causing latency spikes of >200 ms during peak hours.

**Action**  
I proposed a **sharded OT + differential synchronization** architecture.  

1. **Sharding** – split documents into “paragraph” shards using DynamoDB Global Tables (partition key = `doc_id`, sort key = `para_id`).  
2. **OT Engine** – deployed as a stateless Lambda layer that receives edit ops, applies transformation against the shard’s last known state, and writes back an *operation log* in S3 (object per 10 s).  
3. **Differential Sync** – WebSocket endpoints via API Gateway keep clients subscribed to only their visible shards; the OT engine pushes diffs instead of full documents.  
4. **Conflict Resolution** – a small “conflict‑queue” in SQS triggers a retry pipeline (Lambda → DynamoDB) for ops that failed due to concurrent edits.

**Result**  
- Latency dropped from 200 ms to <30 ms for 95 % of ops during peak load.  
- Document throughput increased by 4× while keeping the cost below $0.12 per 1,000 ops (Lambda + DynamoDB).  
- User churn fell 18 % in the first month after rollout.

**Reflection & Learning**  
I owned the end‑to‑end redesign, diving deep into OT theory and AWS limits; I iterated on shard size based on real traffic patterns. The biggest failure was an initial assumption that a single DynamoDB table would suffice—costs ballooned until sharding was introduced. This taught me to validate scaling assumptions early with small pilots.

**Leadership Principles Highlighted**  
- **Ownership** – drove the solution from concept to production, owning metrics and cost.  
- **Dive Deep** – analyzed OT mechanics, AWS service limits, and shard granularity to hit performance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
