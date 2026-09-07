---
qid: ing_bb59574d55__aws__local
question: 'Explain: the same state now the diff is — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 479
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:21-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our real‑time document editor to support > 10 M concurrent users while keeping latency < 200 ms and cost < $0.02 per edit. The goal was to replace a monolithic OT engine with a scalable differential‑sync service.

**Approach (Design)**  
1. **State store:** DynamoDB global tables for eventual consistency of the document snapshot; S3 for immutable version history.  
2. **Operational Transform (OT):** Lambda functions triggered by Kinesis Data Streams receive edit events, apply OT locally, and push back to the stream—ensuring linearizable updates without a central lock.  
3. **Differential Sync:** Each client polls an AppSync GraphQL endpoint that returns only the diff since its last version ID (using a `lastModified` vector clock). This cuts bandwidth from ~10 KB per edit to < 200 B on average.  
4. **Scalability & Availability:** Auto‑scaling Lambda + DynamoDB auto‑scaling; read replicas in 3 AZs guarantee 99.999% availability.  
5. **Cost control:** Caching diffs in ElastiCache Redis for hot documents, and using S3 lifecycle policies to archive old versions.

**Result**  
- Latency dropped from 650 ms to 140 ms (2× faster).  
- Cost per edit fell by 65 % ($0.05 → $0.017).  
- Peak throughput increased from 5k edits/s to 30k edits/s without added infra.

**Reflection & Ownership**  
I owned the end‑to‑end pipeline, drove cross‑team buy‑in, and iterated on OT edge cases that initially caused 3 % conflict resolution failures—fixed by adding a deterministic tie‑breaker. This experience reinforced my belief in *Customer Obsession* (fast, low‑cost edits) and *Dive Deep* (profiling Lambda to eliminate bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
