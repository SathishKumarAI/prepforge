---
qid: ing_903d743f13__faang__local
question: 'Explain: Example: URL Deduplication — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 516
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:45-05:00'
sources: []
---

**Clarify**  
You’re asked to design a system that removes duplicate URLs from a stream (e.g., web crawler). The goal is *fast* deduplication with *low memory* and *acceptable false positives*. Clarify:  
• What throughput? • Max latency per URL? • Acceptable false‑positive rate?  

**Approach**  
1. **Hash each URL to 64 bits** (e.g., Murmur3).  
2. Store hashes in a **Bloom filter** for constant‑time membership checks.  
3. On a miss, write the URL to persistent storage (S3/DB) and set bits in the Bloom filter.  

**Depth**  
*Bloom filter size*:  
\(m = -\frac{n \ln p}{(\ln 2)^2}\), where *n* ≈ 10⁹ URLs, *p* = 0.01 → m ≈ 1.44 GB.  
*Hash functions*: use two independent 64‑bit hashes; derive k = ln 2 · (m/n) ≈ 7 hash indices via double hashing.  
*Memory*: ~1.5 GB fits in RAM on a commodity server.  
*Complexity*: O(k) per URL, constant space per check.

**Edge Cases**  
• Very long URLs: truncate to first N bytes before hashing.  
• Re‑ingestion of same URL after deletion: Bloom filter will still return true → acceptable false positive if storage is immutable.  
• Hash collisions leading to false positives: test with synthetic duplicate sets.  

**Optimize & Communicate**  
1. **Scalability**: shard the Bloom filter across N machines (consistent hashing). Each shard handles ~n/N URLs, reducing per‑node memory.  
2. **Accuracy**: If false positives are too high, switch to a *Cuckoo filter* (supports deletions and lower FP).  
3. **Monitoring**: Track hit/miss ratios; if miss rate drops below threshold, increase filter size or add more shards.  

Explain trade‑offs clearly: Bloom filters give O(1) time and minimal memory at the cost of a tunable false‑positive rate; Cuckoo offers deletions but higher overhead. This structured reasoning demonstrates problem framing, design choices, and practical implementation details expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
