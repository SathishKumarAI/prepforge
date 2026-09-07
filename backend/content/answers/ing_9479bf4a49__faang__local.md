---
qid: ing_9479bf4a49__faang__local
question: 'Explain: Content Deduplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 594
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:29:30-05:00'
sources: []
---

**Clarify**

We need a system that, as it crawls the web, identifies and eliminates duplicate or near‑duplicate content so that storage and downstream processing aren’t wasted on redundant pages.  
Assumptions:  
- Scale: millions of URLs per day, terabytes of raw HTML.  
- Duplication can be exact (identical bytes) or semantic (same article in different sites).  
- Latency: the crawler should not stall waiting for dedup checks; we need a lightweight “quick‑reject” and a more expensive “deep‑compare”.  

**Approach**

1. **Front‑end ingestion** – each fetched page is hashed with a fast, low‑collision fingerprint (e.g., SHA‑256 of cleaned text).  
2. **Quick dedup filter** – store fingerprints in an in‑memory Bloom filter to reject obvious duplicates instantly.  
3. **Near‑duplicate detection** – for pages that pass the Bloom filter, compute a MinHash / SimHash signature and query a distributed similarity index (e.g., locality‑sensitive hashing).  
4. **Storage layer** – only unique fingerprints are persisted; duplicate references point to the canonical copy.  
5. **Monitoring & re‑ranking** – maintain statistics on hit rates and adjust hash sizes or LSH parameters.

**Depth**

- *Bloom filter*: 1 M entries, false positive rate ~0.01 → negligible extra storage (~100 KB).  
- *MinHash*: 128 signatures per page; similarity threshold 0.8 yields high recall for near‑duplicates.  
- *Distributed index*: shards by signature prefix; query time O(log N) with sub‑millisecond latency.  
- Complexity: O(1) for Bloom check, O(k log N) for LSH lookup (k = number of signatures).  
- Trade‑offs: tighter Bloom filter → more false positives (extra LSH lookups); looser → risk of storing duplicates.

**Edge Cases**

- **Content variation**: ads or timestamps change; we strip boilerplate before hashing.  
- **Politeness violations**: rapid duplicate detection prevents over‑crawling the same site.  
- **Scale spikes**: Bloom filter can be partitioned per crawler instance to avoid contention.  
- **Storage failure**: dedup metadata must survive; replicate in a separate key‑value store.

**Optimize & Communicate**

- *Batch processing*: accumulate signatures and bulk upsert into the LSH index to amortize network costs.  
- *Adaptive thresholds*: monitor false‑negative rates and adjust similarity cutoffs dynamically.  
- Explain to interviewers: “We first use a probabilistic filter for speed, then a locality‑sensitive hashing layer for semantic deduplication—balancing latency, storage, and recall.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
