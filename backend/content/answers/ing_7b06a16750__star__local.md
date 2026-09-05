---
qid: ing_7b06a16750__star__local
question: 'Explain: Embedding refresh & index lifecycle — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 386
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:02-05:00'
sources: []
---

**Situation**  
At my last role at a fintech firm, we launched a product‑recommendation engine that used semantic search over our knowledge base. Two months after launch the click‑through rate on recommended articles dropped from 18 % to 12 %, and user feedback indicated the answers were “stale” or irrelevant.

**Task**  
I was tasked with revamping the embedding refresh strategy and setting up an automated index lifecycle that would keep our semantic search up‑to‑date without manual intervention, while maintaining query latency under 120 ms.

**Action**  
1. Built a data pipeline in Airflow that ran nightly: it pulled new content from the CMS, vectorised it with Sentence‑Transformers (model `all-MiniLM-L6-v2`), and generated embeddings in batches of 5k.  
2. Implemented an “incremental” update to the ElasticSearch index using the Bulk API; only changed documents were re‑indexed, keeping shard warm.  
3. Added a scheduled job that deleted indices older than 30 days and archived them to S3 for compliance.  
4. Introduced a “refresh window” (2 AM–4 AM) to avoid peak traffic impact and monitored latency with Prometheus.

**Result**  
Within three weeks the click‑through rate rebounded to 17 %, and query latency remained below 110 ms on average. The automated lifecycle cut manual indexing effort from 8 hrs/month to 30 min, freeing the team for feature work. I learned that fine‑grained refresh windows combined with incremental updates are key to keeping semantic search both fresh and performant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
