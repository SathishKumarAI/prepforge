---
qid: ing_92766c3090__star__local
question: 'Explain: Tokenizer — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 379
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:53-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating our search platform from Solr 4.x to Solr 7.3.1 for a large e‑commerce catalog of over 5 million SKUs. The legacy index was built with a custom whitespace tokenizer, but user queries on product titles and descriptions had low recall because multi‑word brand names were split incorrectly.

**Task:**  
I needed to redesign the tokenization strategy so that our search engine could correctly handle compound words (e.g., “Apple iPhone”) and still support efficient indexing and real‑time updates for new inventory data.

**Action:**  
Using Lucene 7.3.1’s API, I replaced the default tokenizer with a `StandardTokenizer` followed by a custom `SynonymFilter` that merged known brand pairs into single tokens. I also added a `KeywordMarkerFilter` to preserve exact phrases from our curated brand list. For performance, I configured the index writer to use a `ParallelTokenStream` and tuned the buffer size to 1 GB to reduce disk seeks during bulk imports. I wrote unit tests with JUnit and benchmarked token counts against the old tokenizer, ensuring less than a 5% increase in RAM usage.

**Result:**  
The new tokenization pipeline increased search recall by 18% for brand‑related queries, improved click‑through rates from 3.2 % to 4.1 %, and cut query latency from 120 ms to 85 ms on average. I learned how Lucene’s tokenizer chain can be tailored with minimal overhead to meet business KPIs while keeping the index scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
