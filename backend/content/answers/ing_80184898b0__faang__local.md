---
qid: ing_80184898b0__faang__local
question: 'Explain: Option 3: Bloom Filter — How to Avoid Crawling Duplicate URLs
  at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 435
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:42:59-05:00'
sources: []
---

**Clarify**  
The interviewer wants a scalable way to reject duplicate URLs before they hit the crawl engine, using a Bloom filter. Assume we have billions of URLs per day and limited memory; we can’t keep a full list in RAM.

**Approach**  
1. **Hash each URL** into a fixed‑size bit array (Bloom filter).  
2. **Insert**: For every new URL compute *k* independent hash values and set the corresponding bits.  
3. **Query**: Before crawling, check those *k* bits; if all are 1, treat it as “probably seen.” If any is 0, treat it as “new” and insert.

**Depth**  
- Choose array size `m` and number of hashes `k` to target a false‑positive rate (FPR) ~1%.  
- For 10⁹ URLs/day with FPR=1%: `m ≈ -(n ln f)/(ln²2)` ≈ 10⁸ bits (~12.5 MB).  
- Each hash can be derived from a fast non‑cryptographic function (e.g., MurmurHash + splitmix).  
- Use **counting Bloom filters** if deletions are needed (rare for URLs).  
- Complexity: O(k) per URL, constant memory, negligible CPU overhead.

**Edge Cases**  
- *False positives* will miss some pages; acceptable if rate is low.  
- Very short or highly variable URLs may collide more often; canonicalize first.  
- Distributed environment: shard the filter by domain prefix to avoid contention.

**Optimize & Communicate**  
Explain that Bloom filters trade a tiny FPR for massive memory savings, enabling Google‑scale deduplication with O(1) lookups. Mention that we can monitor hit rates and adjust `m` or `k` dynamically. This showcases clear problem framing, technical depth, and awareness of production trade‑offs—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
