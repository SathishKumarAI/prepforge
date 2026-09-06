---
qid: ing_58f9012994__fp__local
question: 'Explain: Twitter Search — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 529
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:19-05:00'
sources: []
---

**Twitter Search – a principled view**

The core problem is *“given a text query and a million‑tweet stream, return the most relevant, fresh tweets in < 200 ms.”*  
Two constraints dominate: **recall** (we must surface all candidates that could be relevant) and **latency** (the user expects instant feedback).  

1. **Indexing as an optimization problem** – we treat each tweet as a vector in a high‑dimensional sparse space (TF‑IDF, n‑grams, embeddings).  
   *Why* a *sharded inverted index*? Because the objective is to minimize query time:  
   \[
   T(q)=\underbrace{\sum_{i=1}^{k}\text{lookup}_i}_{O(k)}+\underbrace{\text{merge}}_{\;O(\log k)}
   \]
   Sharding by token hash keeps each lookup O(1), and a heap‑based merge guarantees sub‑linear total time.

2. **Freshness as a temporal penalty** – we attach a decay function \(f(t)=e^{-\lambda t}\) to each posting, turning the ranking objective into maximizing
   \[
   R = \sum_{p\in C(q)} f(\text{age}(p))\,\text{score}_p
   \]
   This enforces *time‑aware relevance* without extra indexing.

3. **Approximate nearest neighbor (ANN) for embeddings** – instead of brute‑force cosine similarity, we build an LSH forest per shard.  
   *Insight*: ANN preserves *local geometry* while keeping the query cost logarithmic; it also allows dynamic updates as new tweets arrive.

4. **Caching & pre‑ranking** – a write‑through cache of hot queries (TTL ≈ 30 s) stores top‑k results, amortizing expensive merges for popular terms.  

5. **Consistency via versioned shards** – each index shard is immutable; writes append to a log that periodically re‑indexes. This yields *eventual consistency* with bounded staleness—critical for user trust.

**Non‑obvious insight:** Treating tweet freshness as an exponential decay in the objective function turns a seemingly separate “recency” feature into a single, differentiable term that can be optimized end‑to‑end, simplifying both indexing and ranking pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
