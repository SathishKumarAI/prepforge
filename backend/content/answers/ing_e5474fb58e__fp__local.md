---
qid: ing_e5474fb58e__fp__local
question: 'Explain: Step 2 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 661
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:11-05:00'
sources: []
---

**Step 2 – Detecting and Skipping Duplicates in a Multi‑Billion Page Crawl**

At the heart of large‑scale crawling is *information gain*: each fetch should reveal new content or metadata. If we re‑download the same URL over and over, we waste bandwidth, storage, and compute—an inefficiency that scales quadratically with the number of duplicates.

1. **Canonicalization as a Normalizing Transformation**  
   Every URL is mapped to a canonical form via a deterministic function \(C(u)\). This function removes query‑string noise (e.g., session IDs), sorts parameters, normalizes case, and collapses “www” vs non‑“www”. Formally, \(C: \mathcal{U}\rightarrow\mathcal{U}_{canonical}\) is idempotent and surjective onto the set of unique resources. Because crawling decisions are made on canonical URLs, duplicates collapse to a single key.

2. **Bloom‑Filter Sketches for Space‑Efficient Membership**  
   The crawler maintains a probabilistic bloom filter \(B\) over \(\mathcal{U}_{canonical}\). When a new URL arrives, we test \(C(u)\in B\). False positives are tolerable: the cost of an extra fetch is outweighed by the negligible chance of re‑fetching *new* content. The false‑positive rate \(\epsilon\) can be tuned via filter size \(m\) and hash count \(k\): \(\epsilon \approx (1-e^{-kn/m})^k\). In practice, a 1 Gb bloom filter with \(k=7\) yields \(\epsilon<10^{-6}\), comfortably below the duplicate rate (~30 %).

3. **Distributed Sharding and Consistent Hashing**  
   The canonical URLs are partitioned across shards using consistent hashing on \(C(u)\). Each shard owns a disjoint subset of the bloom filter, guaranteeing that duplicates never cross shard boundaries. This eliminates race conditions where two workers might simultaneously decide to fetch the same URL.

4. **Periodic Re‑canonicalization and Cache Refresh**  
   Web content evolves; stale canonical forms can mislabel distinct resources as identical. Every \(T\) days, a background job recomputes \(C(u)\) for all URLs in the index, updates the bloom filter, and purges entries older than a retention window. This keeps false positives low while preserving scalability.

**Non‑obvious insight:**  
A bloom filter’s *false positive* rate can be deliberately tuned to match the *duplicate density* of the crawl domain. When duplicate density is high (e.g., e‑commerce sites), we accept a higher \(\epsilon\) to keep memory low, because the probability that a false positive skips genuinely new content is negligible compared to the savings in bandwidth. Conversely, for low‑duplicate domains (news portals), we tighten \(\epsilon\). Thus, the bloom filter becomes an *adaptive* gatekeeper whose precision scales with the underlying data’s entropy—a subtle but powerful lever often overlooked in textbook designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
