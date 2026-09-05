---
qid: ing_d256730fa9__star__local
question: 'Explain: Related Projects — Apache Lucene - Apache Lucene Core'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 371
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:11-05:00'
sources: []
---

**Situation:**  
At my previous company we had a search‑heavy feature in our e‑commerce platform that was built on top of Solr, which internally uses Lucene. The search latency had risen to over 400 ms during peak traffic and the click‑through rate dropped by 12% because users were leaving before results appeared.

**Task:**  
I was tasked with reducing query response time to under 200 ms while maintaining or improving result relevance for a catalog of 3 million items, all within a two‑week sprint.

**Action:**  
First I profiled the Solr/Lucene stack using Java Flight Recorder and identified that the default `StandardTokenizer` was creating an excessive number of tokens for long product titles. I switched to a custom `WhitespaceTokenizer` coupled with a tuned `SynonymFilter` to reduce token count by 35%. Next, I re‑indexed using a multi‑threaded `ParallelIndexWriter`, increasing index throughput from 120 k docs/hr to 450 k docs/hr. To further speed up queries, I added an in‑memory Bloom filter for stop words and rewrote the query parser to use `BooleanQuery.setMinimumNumberShouldMatch` heuristically. Finally, I implemented a caching layer using Solr’s `LRUCache` with dynamic size based on traffic patterns.

**Result:**  
Search latency dropped from 420 ms to 155 ms, a 63% improvement. The click‑through rate rebounded by 9%, and the index rebuild time fell from 3 hours to just under an hour. I learned how fine‑tuning Lucene’s tokenization pipeline and leveraging its caching mechanisms can yield significant performance gains without sacrificing relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
