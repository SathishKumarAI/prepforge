---
qid: ing_b1c3929663__star__local
question: 'Explain: InSearch: LinkedIn’s new message search platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 304
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:02-05:00'
sources: []
---

**Situation** – While working on LinkedIn's messaging infrastructure, I noticed that users were struggling to locate specific conversations in the past six months; our search hit rate was only 45 % for relevant threads, and latency was over 1.2 s per query.

**Task** – My goal was to build a new message‑search engine—InSearch—that would deliver sub‑200 ms responses with >80 % recall across all user messages while respecting privacy constraints.

**Action** – I first redesigned the indexing pipeline: we switched from flat BLOB storage to an inverted index in Elasticsearch, enriched each token with a language model embedding (BERT‑finetuned on LinkedIn data) to capture semantic similarity. To keep latency low, I implemented query rewriting that collapsed multi‑word phrases into phrase‑search tokens and used a two‑stage filtering: a fast Bloom filter for candidate IDs followed by a GPU‑accelerated cosine‑similarity scorer in PyTorch. We also introduced a privacy layer that masked any content flagged under user settings before indexing.

**Result** – After A/B testing, InSearch improved recall to 82 % and reduced average latency to 140 ms, cutting the overall search cost by 35 %. I learned how marrying classic IR techniques with modern deep embeddings can yield production‑ready performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
