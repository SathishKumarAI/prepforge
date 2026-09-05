---
qid: ing_320977d171__fp__local
question: 'Explain: Uh the index grew by a factor — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 434
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:51:14-05:00'
sources: []
---

**Why an “index‑growth factor” is the core design knob in Google’s software systems**

At its heart, an index is a *data structure that maps keys to locations*. In a search engine, the key is a term and the value is the set of documents containing it. The fundamental problem is **query latency versus storage cost**: a larger index yields faster lookups but consumes more memory and disk bandwidth.

When Google began indexing billions of web pages, the *index size* grew roughly linearly with the number of terms plus the average postings list length. Empirically this growth factor was ≈ 3–4× per year because new content appeared while existing terms accumulated more occurrences. To keep query latency bounded, Google had to **optimize the “growth factor”**:

1. **Compression** – run‑length and delta encoding shrink postings lists, effectively reducing the factor.
2. **Partitioning** – sharding by term hash distributes load; each shard sees a smaller growth rate.
3. **Caching & Bloom filters** – probabilistic structures pre‑filter out non‑existent terms, cutting disk seeks.

The deeper principle is *information‑theoretic*: the entropy of the document collection dictates how many bits are needed per posting. When that entropy rises (new vocabularies), the growth factor inflates unless compression exploits redundancy.

**Non‑obvious insight:**  
Many systems treat the index as a monolithic “big table”. In practice, **the bottleneck is not storage size but *write amplification***—each new document forces updates to many postings lists. By redesigning writes as *incremental delta logs* that are merged offline, Google decoupled write cost from query latency, turning an unavoidable growth factor into a manageable, periodic maintenance operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
