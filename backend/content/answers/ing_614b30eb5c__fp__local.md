---
qid: ing_614b30eb5c__fp__local
question: 'Explain: Design a deduplication pipeline for a web-scale pretraining corpus.
  It has to run as a streaming process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 492
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:32:15-05:00'
sources: []
---

### From the Problem to the Pipeline  

The goal is **to guarantee that every token‑sequence appearing in the pretraining corpus contributes at most once** while ingesting a *stream* of billions of web pages.  
At its core we are solving an *online set‑cover* problem: each incoming document must be checked against all previously seen documents, but storing the entire history is infeasible. We therefore trade space for probabilistic guarantees using **hash‑based fingerprints** and **Bloom‑filter style membership tests**.

#### 1. Fingerprinting  
Compute a *per‑document* fingerprint that is invariant to trivial edits (whitespace, case). A robust choice is a 64‑bit **SimHash** of the token n‑gram bag; it preserves cosine similarity while collapsing near‑duplicates into identical hashes with high probability.

#### 2. Multi‑Layer Bloom Filters  
Maintain a *hierarchy* of Bloom filters, each representing documents seen in a sliding time window (e.g., last 1 M, 10 M, 100 M). When a new fingerprint arrives, query the filters from newest to oldest:
- **Hit in latest filter** → drop immediately.
- **Miss in all** → accept and insert into the newest filter.

Because Bloom filters are probabilistic, we allow a small false‑positive rate (≤ 0.1 %). The layered design keeps the false‑positive cascade bounded; older documents are less likely to be needed again, so a coarser filter suffices.

#### 3. Streaming Merge  
To keep memory linear in the window size, periodically *compact* each Bloom filter: discard the oldest layer and promote the next one, rehashing only if necessary. This guarantees that the pipeline never exceeds its allocated RAM while preserving the deduplication guarantee for the sliding window.

#### Non‑obvious Insight  
**The choice of SimHash over exact hashing is crucial because it collapses near‑duplicates into the same bucket, allowing the Bloom filter to reject not just identical but also semantically similar documents.** This subtle shift turns a pure “exact” deduplication problem into an *approximate* one that matches the variability of web text, dramatically reducing storage without compromising downstream model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
