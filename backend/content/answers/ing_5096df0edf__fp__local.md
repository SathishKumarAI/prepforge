---
qid: ing_5096df0edf__fp__local
question: 'Explain: Feed Reads — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 486
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:56:34-05:00'
sources: []
---

**Feed‑reads in a large‑scale social network**

At its core, the feed is *a ranked stream of items that maximises relevance under latency constraints*.  
The problem reduces to **ranking + caching**: for each user we must order up to k posts from many producers while keeping read‑latency below a few hundred milliseconds.  

1. **Relevance as an objective function** – let \(R(u,i)\) be the expected click‑through probability of item \(i\) for user \(u\).  
   The feed should maximise \(\sum_{i\in F_u} R(u,i)\) subject to a size budget.  
2. **Decomposition into per‑producer queues** – each producer’s stream is an *incremental list* sorted by posting time.  
   By pre‑computing \(R(u,p)\) for user–producer pairs we can maintain a priority queue of the top‑\(k\) items across producers without scanning all posts.
3. **Cache‑driven latency** – the priority queues are materialised in a *feed cache* (e.g., Redis or RocksDB).  
   When a new post arrives, it is inserted into the relevant producer’s list and triggers a bounded fan‑out to the caches of followers whose \(R(u,p)\) exceeds a threshold.  
4. **Approximation guarantees** – using a *probabilistic bloom filter* for follower sets keeps memory linear in followees while ensuring no duplicate items appear, giving an \(\epsilon\)-optimal feed with high probability.

**Non‑obvious insight:**  
The fan‑out cost is mitigated not by reducing the number of followers written to, but by **pre‑selecting a “high‑impact” subset of producers per user**.  
Because relevance decays rapidly with producer distance (in terms of interaction), we can prune most follower updates without sacrificing accuracy—turning an \(O(F)\) fan‑out into an \(O(\log F)\) operation via a *producer‑importance* index.  

This design marries optimisation theory, caching strategy, and probabilistic data structures to deliver a scalable feed system that guarantees relevance while meeting strict latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
