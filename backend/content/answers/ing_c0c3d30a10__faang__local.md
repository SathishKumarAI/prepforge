---
qid: ing_c0c3d30a10__faang__local
question: 'Explain: Step 1 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 452
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:56-05:00'
sources: []
---

**Clarify**  
You’re asked how Google can prevent crawling the same URL twice when it indexes billions of pages. Assume we have a distributed crawler, a massive URL frontier, and a need to keep latency low while avoiding redundant work.

**Approach**  
1. **Canonicalization & Normalization** – strip query params, enforce https, collapse “www.”, sort parameters.  
2. **Hash‑based deduplication** – compute a 64‑bit fingerprint (e.g., MurmurHash) of the normalized URL.  
3. **Distributed Bloom filter / HyperLogLog** – maintain a probabilistic set per shard to test if a URL has been seen.  
4. **Centralized “seen” store with LRU eviction** – for high‑confidence duplicates, keep a small cache (e.g., Redis) keyed by the fingerprint.  
5. **Graceful fallback** – if Bloom filter says *new*, fetch; if cache says *duplicate*, skip.

**Depth**  
- Normalization runs in O(1) per URL.  
- Bloom filters give false positives (~0.1 %) but are memory‑efficient (≈10 µB per 100M URLs).  
- HyperLogLog tracks cardinality for monitoring.  
- Central cache is sharded; each crawler instance queries its shard, reducing contention.  
- Complexity: O(1) lookup + network hop to cache; overall throughput remains > 10k URLs/s.

**Edge Cases**  
- URL variations that change meaning (e.g., session IDs).  
- Dynamic content with identical paths but different parameters—needs semantic checks.  
- Cache eviction may let rare duplicates slip through, but Bloom filter mitigates this.

**Optimize & Communicate**  
We can tune the Bloom filter’s false‑positive rate versus memory, or switch to a Cuckoo filter for deletions if URLs expire. Explain that at scale we trade minimal redundancy (a few percent) against massive savings in bandwidth and compute. This layered approach balances speed, accuracy, and resource usage—exactly what FAANG engineers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
