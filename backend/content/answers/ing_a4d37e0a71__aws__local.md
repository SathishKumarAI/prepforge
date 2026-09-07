---
qid: ing_a4d37e0a71__aws__local
question: 'Explain: Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 464
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:01-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a search‑as‑you‑type feature for our e‑commerce catalog that needed to handle 1 M queries/day while keeping latency under 200 ms. The key challenge was tokenizing product titles and descriptions in multiple languages using Lucene 7.3.1.

**Action**  
I chose Lucene’s `StandardTokenizer` because it supports Unicode, handles stop‑words, and is highly configurable. I wrapped it in a stateless Lambda function behind API Gateway so each request could be processed in parallel. To scale, I deployed the tokenizer as an AWS Elastic Search domain (OpenSearch) cluster with 3 warm nodes; this gave us built‑in sharding and automatic failover. I added a custom `EdgeNGramTokenFilter` to enable partial matches for autocomplete.  

I benchmarked tokenization speed on a sample dataset: 10 k documents → 1.2 s per batch, which translates to < 200 ms per request at peak load after caching the filter chain in memory. I also enabled `index.max_result_window=10000` and set `refresh_interval=-1` for bulk indexing, cutting index latency by 35 %.  

**Result**  
The new search delivered 98 % recall on a held‑out test set and reduced query latency from 350 ms to 180 ms. Customer satisfaction scores rose 12 points in the post‑launch survey.

**Leadership Principles**  
- **Customer Obsession:** Built a faster, more accurate search that directly improved conversion rates.  
- **Ownership & Dive Deep:** Took full responsibility for tokenization logic, performance tuning, and cost optimization, diving into Lucene internals to justify trade‑offs.  

*Bar‑raiser check*: Demonstrated ownership by owning the end‑to‑end pipeline, deep dive through custom token filters, quantified impact with latency and recall metrics, and learned from an initial failure where I underestimated memory usage—resolved it by adjusting node size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
