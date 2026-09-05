---
qid: ing_a4d37e0a71__star__local
question: 'Explain: Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 347
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:03-05:00'
sources: []
---

**Situation:**  
At a mid‑size e‑commerce firm, we were building an in‑house search engine for our product catalog. The existing keyword‑based index was returning noisy results and the click‑through rate dropped by 18% after a recent UI redesign.

**Task:**  
I had to design a tokenizer that would clean up user queries, handle multi‑word phrases, and support stemming so the relevance of returned items improved without bloating the index size.

**Action:**  
Using Lucene 7.3.1 I built a custom `StandardTokenizer` pipeline: first applied a `LowerCaseFilter` to normalize case; then added a `StopFilter` with an extended stop‑word list (including “free”, “sale”, etc.) to remove filler words; followed by a `PorterStemFilter` for lightweight stemming. For brand names I injected a `KeywordMarkerFilter` so they stayed intact. I also leveraged the `EdgeNGramTokenFilter` on product titles to support autocomplete, tuning the min/max gram lengths to 2–15. Finally, I benchmarked token counts against the old index and used JMeter to confirm query latency stayed under 120 ms.

**Result:**  
The new tokenizer cut the average number of tokens per document by 32%, reduced disk usage by ~25%, and boosted search relevance scores by 22% as measured by A/B testing. User click‑through rose from 18% to 27%. I learned how careful filter ordering in Lucene can dramatically improve both performance and accuracy without needing heavyweight NLP models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
