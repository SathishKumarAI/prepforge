---
qid: ing_2593fd5033__star__local
question: 'Your corpus is full of near-duplicates: doc versions, boilerplate, quoted
  email threads. How do you handle deduplication?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 370
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:57-05:00'
sources: []
---

**Situation** – In a recent project building a legal research engine, my ingestion pipeline was choking on millions of documents that were essentially the same: different versions of the same contract, boilerplate clauses copied across filings, and long email threads where each reply duplicated previous content. The deduplication problem made our index 3× larger than necessary and slowed down retrieval times.

**Task** – I needed to design a lightweight, scalable dedup pipeline that could run in near‑real time on a distributed cluster, reduce storage by at least 70%, and preserve unique documents for downstream NLP tasks.

**Action** – First, I implemented a two‑stage approach. Stage one used MinHash LSH (via the `datasketch` library) to generate compact signatures of each document’s body, grouping near‑duplicates into buckets in an S3‑backed key/value store. Stage two applied a content‑aware hashing: for each bucket I tokenized with spaCy, removed stopwords and boilerplate markers, then computed a SHA‑256 hash of the cleaned text. The first occurrence per hash was kept; subsequent ones were flagged as duplicates and discarded from indexing. To handle versioned documents, I added a metadata field (last modified timestamp) to pick the latest version when multiple unique hashes existed.

**Result** – After deployment, deduplication cut our storage footprint by 78 % and reduced query latency from 1.2 s to 0.4 s on average. The pipeline also surfaced previously hidden variations of clauses, improving downstream classification accuracy by 5 %. I learned that combining probabilistic similarity with deterministic hashing gives a robust trade‑off between speed and precision in large corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
