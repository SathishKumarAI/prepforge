---
qid: ing_4d948677ef__faang__local
question: 'Explain: URL Deduplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 472
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:45:07-05:00'
sources: []
---

**URL Deduplication – Web‑Crawler Design**

| Stage | What to do |
|-------|------------|
| **Clarify** | We need to avoid crawling the same URL twice (or semantically identical URLs). Assume a distributed crawler with millions of URLs per day, eventual consistency is acceptable, and we care about memory/latency trade‑offs. |
| **Approach** | 1️⃣ Normalize URLs (scheme, host, path, query order, trailing slash, percent‑encoding). <br>2️⃣ Generate a compact fingerprint (e.g., SHA‑256 truncated to 64 bits). <br>3️⃣ Store fingerprints in a distributed probabilistic set (Bloom filter) for *fast* “seen?” checks and a persistent store (e.g., HBase/Bigtable) for guarantees. <br>4️⃣ When a new URL arrives: <br>&nbsp;&nbsp;• Check Bloom filter → if false, enqueue and add to both filter & DB. <br>&nbsp;&nbsp;• If true, run a quick equality check against the DB entry (to avoid false positives). |
| **Depth** | *Bloom filter* gives O(1) checks with ~1% FPR; memory ≈ bits per element (e.g., 10 bits → 12.5 GB for 1B URLs). Persistence guarantees no duplicates even after restarts. Complexity: enqueue O(log N) in DB, Bloom check O(k). |
| **Edge Cases** | • URL redirects or canonicalization differences → store canonical form.<br>• Query‑string order changes → sort parameters.<br>• Large query strings → hash to avoid huge keys.<br>• Distributed consistency: use eventual replication; tolerate rare re‑crawl. |
| **Optimize & Communicate** | • Batch Bloom filter updates to reduce network overhead.<br>• Use HyperLogLog for cardinality estimates and adaptive sizing.<br>Explain trade‑offs: lower FPR → more memory, but fewer false negatives; persistence costs latency but guarantees correctness. This design scales horizontally while keeping deduplication fast and reliable. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
