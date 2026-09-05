---
qid: ing_e5766838d9__star__local
question: 'Explain: Reranker — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 363
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:45-05:00'
sources: []
---

**Situation**  
When my team launched a product‑search feature for our e‑commerce platform, the click‑through rate on the first page of results fell from 12 % to 8 % after we migrated from keyword matching to embeddings. Customers were finding relevant items buried under noise.

**Task**  
I was tasked with boosting relevance by reordering the top‑10 results using a reranker that leveraged semantic similarity and contextual signals, aiming for at least a 3 % lift in CTR within two weeks.

**Action**  
1. Built an end‑to‑end pipeline in Python: fetched the initial list from Elasticsearch, then passed each candidate’s title, description, and user query to a fine‑tuned Sentence‑Transformers model (RoBERTa-base).  
2. Added a lightweight neural ranker (LightGBM) trained on click logs, using features like cosine similarity, price match, and category overlap.  
3. Deployed the reranker as an async microservice behind our API gateway; cached embeddings for popular queries to keep latency under 150 ms.  
4. Conducted A/B testing with a 10‑day split, monitoring CTR, dwell time, and latency.

**Result**  
CTR on the first page rose from 8 % to 11.5 %, a 3.5 % absolute increase, while average session duration grew by 12 %. The reranker also cut irrelevant clicks by 18 %, freeing up ad inventory. I learned that combining transformer embeddings with lightweight ranking models can deliver high relevance without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
