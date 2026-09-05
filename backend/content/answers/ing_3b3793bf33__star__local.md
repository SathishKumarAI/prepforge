---
qid: ing_3b3793bf33__star__local
question: 'Explain: correctOffset — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 331
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:01-05:00'
sources: []
---

**Situation** – At my previous company we built an internal search platform for legal documents. The index had thousands of PDFs, and our OCR pipeline produced noisy text with line breaks that mis‑aligned field positions in the final Lucene index. When users searched for a clause, results were off by several characters, causing poor relevance scores.

**Task** – I needed to ensure that token offsets reflected the true position of each word in the original document so that phrase queries and highlighting worked correctly, without re‑extracting text from scratch.

**Action** – Using Lucene 7.3.1’s `Tokenizer`, I overrode the `incrementToken()` method. Inside, after calling `super.incrementToken()`, I calculated the real start and end offsets by adding a precomputed *offset correction* (the number of newline characters removed during OCR). I then set these corrected values on the token’s `CharTermAttribute` via `setOffset(correctStart, correctEnd)`. This lightweight adjustment kept the tokenizer’s performance while guaranteeing accurate positional data. I also added unit tests that simulated various line‑break scenarios and verified offsets against ground truth.

**Result** – The search accuracy improved by 35 % in precision@10 for phrase queries, and the highlighting engine correctly highlighted entire clauses 98 % of the time. I learned how a small API tweak—correcting token offsets—can dramatically boost user experience without major architectural changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
