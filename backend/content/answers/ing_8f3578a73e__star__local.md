---
qid: ing_8f3578a73e__star__local
question: 'Explain: We''re switching embedding models. There are 200M vectors in the
  index. Walk me through the migration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 375
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:32-05:00'
sources: []
---

**Situation:**  
At my previous company we had a search engine with 200 million user‑generated embeddings stored in Faiss. We decided to switch from an older BERT‑based model to a newer, higher‑accuracy Sentence‑Transformers model because our click‑through rate on semantic search was only 12%.

**Task:**  
Re‑embed the entire index without downtime, ensure query latency stays under 50 ms, and improve relevance by at least 5% in A/B tests.

**Action:**  
1. Built a lightweight microservice that streamed documents from the DB and produced new vectors using the Sentence‑Transformers model in parallel on 8 GPUs.  
2. Created a staging Faiss index (IVF32 + PQ) to ingest batches of 500k embeddings, verifying checksum integrity after each chunk.  
3. Ran a dual‑index query test: served user queries simultaneously against old and new indices for two weeks, collecting precision@10 and latency metrics.  
4. Once the new index met the target precision (↑ 5.2%) and latency (< 48 ms), I cut over by updating the routing config in Kubernetes and decommissioned the old Faiss instance.

**Result:**  
The migration completed in 14 days with zero service interruption, improved CTR from 12% to 17%, and maintained sub‑50 ms latency. I learned that incremental staging plus live A/B validation is critical when scaling embeddings at this magnitude.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
