---
qid: ing_997ae208fa__star__local
question: 'Explain: Method Summary — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 369
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:28-05:00'
sources: []
---

**Situation**  
In a search‑engine revamp for an e‑commerce site, the existing query parser was choking on multilingual product titles—especially when users typed mixed English–Chinese phrases. Our analytics showed a 35 % drop in click‑through rate for those queries.

**Task**  
I had to design a tokenizer that could split user input into meaningful tokens while preserving language boundaries, so the Lucene index could match products correctly and improve relevance scores.

**Action**  
Using Lucene 7.3.1’s `Tokenizer` API, I built a custom `MultiLangTokenizer`. I extended `Tokenizer` and overrode `incrementToken()`, leveraging `Character.isWhitespace()` to detect token boundaries, then used `ICU4J` for language detection on each segment. For Chinese tokens, I applied the `ChineseWordSegmenter`; for English, the standard `KeywordTokenizer`. I registered this tokenizer in the analyzer chain via `MultiLangAnalyzer`, and tuned the `QueryParser` to use it. I wrote unit tests with JUnit and performance benchmarks with JMH to ensure tokenization stayed under 5 ms per query.

**Result**  
After deploying the new tokenizer, search relevance for mixed‑language queries improved by 28 % (measured via A/B testing). The click‑through rate rose from 12.4 % to 15.9 %, and we reduced server load by 10 % thanks to more efficient tokenization. I learned how Lucene’s low‑level API allows fine‑grained control over token streams, and that integrating language detection libraries can dramatically improve multilingual search quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
