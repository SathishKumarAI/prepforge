---
qid: ing_614b30eb5c__faang__local
question: 'Explain: Design a deduplication pipeline for a web-scale pretraining corpus.
  It has to run as a streaming process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 555
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:06-05:00'
sources: []
---

**Clarify**

You need a *streaming* deduplication system that ingests billions of documents from the internet and guarantees no duplicate content in the final pre‑training corpus.  
Assumptions to confirm:  
- Input is an unbounded stream of text chunks (URLs, raw HTML).  
- “Duplicate” means identical or near‑identical *semantic* content (not just byte equality).  
- The system must operate at web scale (≥ 10⁹ docs/day) with low latency (< 1 s per doc).  
- Storage is distributed; you can use a key–value store and an approximate set.

**Approach**

1. **Canonicalization** – strip boilerplate, normalize whitespace & case, remove ads/menus.  
2. **Fingerprinting** – compute a robust hash (e.g., SimHash or MinHash) that preserves near‑duplicates.  
3. **Distributed Bloom filter / HyperLogLog** – maintain an approximate set of seen fingerprints in memory for O(1) lookups.  
4. **Persisted deduplication store** – on false positives, fall back to a compact key–value DB (e.g., RocksDB) that stores full hashes and original text.  
5. **Pipeline orchestration** – use a stream engine (Kafka Streams/Flink) to chain the steps with back‑pressure handling.

**Depth**

- SimHash: 64‑bit fingerprint; Hamming distance ≤ 3 flags near duplicates.  
- Bloom filter size ≈ 10⁹ bits (~120 MB) gives <1% false positives.  
- On a false positive, query RocksDB (O(log n)) to confirm.  
- Complexity per doc: O(1) hashing + O(1) Bloom lookup; overall throughput > 10k docs/s on commodity hardware.

**Edge Cases**

- Very large documents → split into blocks and dedupe at block level before recombining.  
- Content that changes slightly (ads, timestamps) may slip through; apply content‑hashing after removing dynamic elements.  
- Distributed drift: ensure Bloom filter state is checkpointed and replicated to avoid stale entries.

**Optimize & Communicate**

- Periodically rebuild the Bloom filter from RocksDB to reduce false positives.  
- Use a hybrid strategy: aggressive in-memory dedupe for fresh streams, deeper checks for older shards.  
- Explain trade‑offs: higher memory → lower false positives vs. disk lookups → latency.  

This design balances scalability, low latency, and high recall, fitting the requirements of a web‑scale pretraining corpus.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
