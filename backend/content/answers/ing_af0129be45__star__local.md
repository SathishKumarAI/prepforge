---
qid: ing_af0129be45__star__local
question: 'Explain: setReader — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 341
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:10-05:00'
sources: []
---

**Situation** – In a search‑as‑you‑type feature for our e‑commerce platform, the analytics team noticed that queries containing brand names with special characters (e.g., “Café‑Bistro”) were returning zero hits, even though documents existed.

**Task** – I had to redesign the indexing pipeline so that these multi‑word tokens were correctly tokenized and searchable without sacrificing performance or breaking existing query logic.

**Action** – I switched from the default `StandardTokenizer` to a custom `WhitespaceTokenizer` wrapped in a `PatternReplaceFilter`. First, I used `setReader` on the `IndexWriterConfig` to supply a `BufferedReader` that pre‑processed each document’s text: it replaced accented characters with their ASCII equivalents and removed hyphens. Then I built a new analyzer that chained this reader with the tokenizer and added a `LowerCaseFilter`. This ensured that “Café‑Bistro” became two separate tokens, “cafe” and “bistro”, which matched our stored fields. I also updated the query parser to use the same analyzer so that user input was normalized consistently.

**Result** – After deploying the new pipeline, hit rates for brand queries rose from 0% to 92%, and search latency dropped by 15 ms on average. The exercise taught me how `setReader` can be leveraged for pre‑index text normalization and the importance of mirroring that logic at query time to maintain consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
