---
qid: ing_e57d7042dc__fp__local
question: 'Explain: Data Partitioning — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 384
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:34-05:00'
sources: []
---

**Data‑partitioned ML systems often hit the same “hot” shards repeatedly—think of a user’s click history or a model’s embedding table. Caching is the principled way to keep those hot items in fast, local memory so that training and inference no longer pay the latency of remote storage.**

1. **Problem solved**  
   *A distributed partitioner places data across many nodes; accessing a partition on‑demand incurs network hops, serialization, and contention.*  
2. **Why caching works**  
   *From an information‑theoretic view, if a key’s access probability \(p_k\) is high, the expected retrieval cost is proportional to \(\sum_k p_k\,c(k)\). By moving the top‑\(N\) keys into a cache with negligible cost \(c_{\text{cache}}\), we reduce that sum dramatically.*  
3. **Design constraints**  
   *Cache size must respect memory bandwidth; eviction policy (LRU, LFU, or learned policies) trades off recency versus frequency based on the underlying access distribution. Consistency is handled by write‑through or delayed invalidation to keep stale partitions from corrupting model gradients.*  
4. **Non‑obvious insight**  
   *The optimal cache size is not simply “big enough for the hot keys”; it should be tuned to the *entropy* of the access pattern. A highly skewed distribution (low entropy) can be served with a tiny cache, whereas a more uniform pattern demands a larger buffer even if raw usage appears low.*  

Thus caching in partitioned ML systems is a direct application of minimizing expected retrieval cost under capacity constraints, guided by the statistical structure of data accesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
