---
qid: ing_fedbd3ee22__fp__local
question: 'Explain: A better embedding model ships. You have 400M chunks indexed.
  Walk me through the migration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 466
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:52-05:00'
sources: []
---

### Migration Blueprint for a New Embedding Model (400 M Chunks)

1. **Problem Statement**  
   The old model’s cosine‑distance ranking suffers from *semantic drift*: embeddings cluster by surface form rather than meaning, causing recall drops when query vectors cross domain boundaries. A better model reduces this drift by aligning semantic manifolds with downstream task gradients.

2. **Why the Migration Must Be Two‑Phase**  
   *Geometric Continuity* guarantees that a user’s session vector remains close to its original chunk neighbors until the new index is ready. If we replace the index wholesale, all active queries will experience sudden rank jumps and cache misses—an unacceptable service disruption.

3. **Step 1 – Parallel Indexing**  
   - Spin up an *auxiliary* cluster and run the new encoder on every chunk.  
   - Store vectors in a sharded HNSW graph; set `efConstruction` high to preserve topology.  
   - Verify similarity preservation by sampling query‑chunk pairs: target mean cosine error < 0.02.

4. **Step 2 – Incremental Re‑Ranking**  
   While the new index builds, keep the legacy index live.  
   - For each incoming query, compute both embeddings in parallel.  
   - Use a *blend weight* that starts at 1 (old) and decays exponentially as latency drops below target.  
   - This smooths the transition and lets downstream services observe gradual performance gains.

5. **Step 3 – Cut‑over**  
   Once validation confirms higher MAP on held‑out data, switch routing to the new index atomically.  
   - Drain the old cluster; decommission it after a safety window.  

6. **Non‑Obvious Insight**  
   The *rate of change* in embedding space is itself an indicator of model quality: if many chunks shift dramatically (> 0.3 cosine), they likely lie on noisy boundaries. Prioritizing such chunks for manual review can surface mislabeled or obsolete content long before the migration completes.

This plan preserves user experience, leverages geometric continuity, and surfaces a hidden diagnostic metric—all while keeping latency within SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
