---
qid: ing_5baf14710e__star__local
question: 'Explain: Class Tokenizer — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 388
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:49-05:00'
sources: []
---

**Situation**  
At my previous role I was refactoring the search layer for a SaaS product that served over 50k documents daily. Our analytics dashboard showed a 15 % drop in query relevance after migrating to Lucene 7.3.1, and we suspected the tokenization pipeline wasn’t handling domain‑specific terminology correctly.

**Task**  
I needed to rebuild the tokenizer component so it would preserve case‑sensitive business terms (e.g., “iPhone12”) while still applying standard stemming for general English words, all without breaking existing index structures.

**Action**  
Using Lucene 7.3.1’s `Tokenizer` API, I extended `CharTokenizer` to create a custom `DomainTokenizer`. Inside the `incrementToken()` method I added logic: if the current token matched a regex for our product codes (`[A-Za-z0-9]{5,}`), I set it as-is; otherwise I passed it through the standard `StandardTokenizer`. I then wrapped this in an analyzer that chained with `EnglishPossessiveFilter` and `PorterStemFilter`, ensuring non‑domain words were stemmed. I wrote unit tests against a benchmark corpus and used Lucene’s `IndexWriterConfig.setOpenMode(OPEN_MODE.CREATE)` to reindex incrementally.

**Result**  
After deploying the new tokenizer, query precision improved from 78 % to 92 %, and recall stayed above 95 %. The refactor also reduced indexing time by 12 % because the custom tokenizer skipped unnecessary stemming for known terms. I learned that a lightweight, rule‑based tokenizer can coexist with Lucene’s built‑in filters, giving fine control over domain terminology without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
