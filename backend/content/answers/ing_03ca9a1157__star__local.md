---
qid: ing_03ca9a1157__star__local
question: 'Explain: You''re ingesting millions of web pages a day. Detect near-duplicates
  - same article, different boilerplate - efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 341
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:06-05:00'
sources: []
---

**Situation** – In my last role at a news aggregation startup we were pulling about 3 million articles per day from 1,500 partner sites. Our storage budget was tight and search latency had to stay under 300 ms, so any duplicate content meant wasted bandwidth and poor user experience.

**Task** – I needed to build an ingestion pipeline that could flag near‑duplicate stories—identical text with varying headers, footers or tracking URLs—in real time, without loading each page into memory for a full NLP pass.

**Action** – I adopted a two‑stage hashing strategy. First, every fetched HTML was run through a lightweight “boilerplate remover” that stripped common tags and replaced dynamic elements (ads, timestamps) with placeholders. Then we generated a SimHash fingerprint of the cleaned body using a 64‑bit hash; collisions within Hamming distance ≤3 were treated as near‑duplicates. We stored fingerprints in a Redis sorted set keyed by source domain, enabling O(log n) lookups per article. For any collision, we ran a quick Levenshtein check on the first 200 words to confirm duplication before discarding or flagging.

**Result** – Duplicate detection accuracy hit 94% (vs 70% with our previous keyword‑based method), reducing storage by 35 GB/day and cutting ingestion latency from 1.2 s to 0.8 s per article. I learned that combining lightweight preprocessing with locality‑sensitive hashing can turn a seemingly intractable similarity problem into an efficient, production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
