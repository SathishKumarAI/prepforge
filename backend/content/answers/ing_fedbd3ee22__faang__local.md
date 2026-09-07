---
qid: ing_fedbd3ee22__faang__local
question: 'Explain: A better embedding model ships. You have 400M chunks indexed.
  Walk me through the migration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 480
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:44-05:00'
sources: []
---

**Clarify**  
You’re moving from an old embedding engine to a new one while keeping 400 M pre‑indexed text chunks in production. The goal is zero downtime and minimal query latency degradation. I’d confirm: (1) the feature space dimensionality of the new model, (2) whether the similarity metric changes, (3) expected storage per vector, and (4) any API contract differences.

**Approach**  
1. **Baseline** – snapshot current embeddings and performance metrics.  
2. **Dual‑write pipeline** – ingest new data through both old & new models in parallel; tag each chunk with a `model_id`.  
3. **Batch re‑embed** – schedule nightly jobs that read chunks, compute new vectors, and write them to a dedicated “new” index.  
4. **Shadow queries** – run live traffic against the old model while mirroring requests to the new one; compare scores & response times.  
5. **Feature flag switch** – once confidence thresholds are met, flip traffic to the new index, decommission the old.

**Depth**  
- Store vectors in a high‑throughput vector DB (e.g., Pinecone or Milvus) with sharding on chunk ID.  
- Use approximate nearest neighbor (ANN) indexes (IVF/PQ) to keep query latency <10 ms.  
- Persist a mapping table (`chunk_id → model_version`) for auditability.  
- Complexity: O(N log N) for index rebuild, but done offline; per‑query cost stays O(log N).

**Edge Cases**  
- Outlier vectors that exceed storage limits → drop or quantize.  
- API mismatches (e.g., cosine vs. dot product) → wrap new model to match old contract.  
- Data drift between models → monitor similarity distribution gaps.

**Optimize & Communicate**  
After migration, continuously collect latency and recall metrics; if the new model underperforms on specific domains, roll back that subset or retrain. I’d present this plan in a concise deck: problem statement, risk matrix, timeline, rollback strategy, and KPI dashboard. This shows structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
