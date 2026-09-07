---
qid: ing_bbe8798b64__faang__local
question: 'Explain: Consistency Approaches — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 475
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:59:59-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *consistency‑centric* view of caching in ML systems—i.e., how a cache can help maintain the “correctness” of model outputs (e.g., latency guarantees, version control) while still providing high throughput. I’d confirm whether we’re discussing in‑memory vs. distributed caches, and if consistency means *strong* (all reads see latest write) or *eventual*.

**Approach**  
1. Define the ML workflow (feature extraction → model inference).  
2. Identify points where stale data hurts (e.g., feature drift, model version changes).  
3. Map cache layers:  
   - **Feature cache** (strong consistency via write‑through + lock).  
   - **Model cache** (eventual consistency with background refresh).  
4. Choose invalidation strategy (time‑to‑live, explicit eviction, or event‑driven).

**Depth**  
- *Strong consistency* is achieved by a write‑through policy: every feature update goes to the primary store and propagates to the cache atomically; reads hit the cache but fall back to DB if missing. Complexity O(1) read, O(log n) for eviction.  
- *Eventual consistency* uses a publish/subscribe pattern where model updates trigger asynchronous cache refreshes; reads may see an older model until propagation completes—acceptable when inference latency outweighs correctness risk.  
- Use version tags or hash digests to detect mismatches and serve fallback.

**Edge Cases**  
- **Cache stampede** on cold start: use a single “leader” fetch or double‑checked locking.  
- **Data skew**: hot keys cause uneven load; apply sharding or adaptive eviction.  
- **Model rollback**: ensure cache can revert to previous version if new model misbehaves.

**Optimize & Communicate**  
I’d suggest a *two‑tier* strategy: an in‑memory LRU for the hottest features (strong consistency) and a distributed, eventually consistent layer for full feature sets. This balances latency with correctness. I’d conclude by highlighting that choosing the right consistency model depends on SLAs, data volatility, and acceptable risk of stale predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
