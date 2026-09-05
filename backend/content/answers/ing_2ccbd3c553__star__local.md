---
qid: ing_2ccbd3c553__star__local
question: 'Explain: Problem statement — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 330
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:35-05:00'
sources: []
---

**Situation:**  
At my previous company we had a knowledge‑base of over 250,000 technical documents and FAQs that our support team struggled to navigate. The keyword‑based search returned too many irrelevant hits, causing agents to spend an average of 15 minutes per ticket looking for the right information.

**Task:**  
I was tasked with redesigning the search experience so that it could understand user intent, reduce search time by at least 50%, and improve first‑contact resolution rates.

**Action:**  
First I mapped out the data pipeline: we ingested PDFs, blog posts, and internal wikis into a vector store using OpenAI’s CLIP embeddings. Then I built an Elasticsearch index that stored both raw text and embedding vectors. On the front end, I added a lightweight React component that sent user queries to our FastAPI microservice, which returned top‑k semantic matches via cosine similarity. To keep latency low, we cached popular queries in Redis and pruned stale vectors nightly. Finally, I created an A/B test harness in Optimizely to compare the new semantic search against the legacy system.

**Result:**  
After rollout, agents cut lookup time from 15 minutes to 4 minutes on average—a 73% reduction—and first‑contact resolution rose from 58% to 71%. The team also reported higher satisfaction with the relevance of results. I learned that blending modern embeddings with a proven search engine like Elasticsearch can deliver tangible business value while keeping engineering effort manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
