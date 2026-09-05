---
qid: ing_03ca9a1157__fp__local
question: 'Explain: You''re ingesting millions of web pages a day. Detect near-duplicates
  - same article, different boilerplate - efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 442
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:13:26-05:00'
sources: []
---

**Why we need it**

Every day the web churns out millions of pages that are *almost* identical—think syndicated news stories, product listings, or forum reposts. Storing each copy wastes disk and bandwidth, and downstream analytics (search ranking, ad targeting) become noisy if duplicates flood the corpus. The problem is to flag two documents as “near‑duplicate” even when they differ in boilerplate (ads, navigation bars, copyright notices) but share the core content.

**Fundamental idea**

Treat a page as a set of *shingles* (consecutive n‑grams). Two pages are near duplicates if their Jaccard similarity exceeds a threshold \(t\). Computing exact similarities over millions of documents is infeasible; we need an *approximate* yet scalable method.

**Optimization principle**

Use **MinHash** to compress each shingle set into a compact signature that preserves the probability of collision proportional to Jaccard similarity. Then apply **Locality‑Sensitive Hashing (LSH)**: split signatures into bands and hash each band; only pages that collide in at least one band are compared exactly. This reduces the candidate pairs from \(O(N^2)\) to a manageable subset while guaranteeing that highly similar pages will almost surely collide.

**Non‑obvious insight**

Instead of plain set Jaccard, weigh shingles by inverse document frequency (IDF). Boilerplate words (“home”, “contact”) get low IDF and contribute little to similarity; rare content words dominate. This *weighted* Jaccard reduces false positives from generic headers while still being amenable to MinHash‑based LSH.

**Result**

We can ingest millions of pages per day, generate lightweight signatures on the fly, and detect near duplicates with sub‑linear time complexity and provable error bounds—all without storing every page twice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
