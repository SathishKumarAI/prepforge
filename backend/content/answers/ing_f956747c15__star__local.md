---
qid: ing_f956747c15__star__local
question: 'Q55: Your RAG system works great on test data but fails in production.
  What do you check?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 363
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:07-05:00'
sources: []
---

**Situation** – In early Q3 I deployed a Retrieval-Augmented Generation (RAG) model to our customer support chatbot. On internal test harness the end‑to‑end F1 score hit 0.82 and latency stayed under 300 ms, but once live on production traffic the answer quality dropped to 0.55 and response time ballooned to 2.3 s.

**Task** – I had to pinpoint why the model was underperforming in production and restore both relevance and speed without breaking the user flow.

**Action** – First, I compared the test‑time retrieval index (FAISS with IVF32) against the live index built on a sharded Elasticsearch cluster; version mismatches were causing stale vectors. Next, I instrumented request logs to capture query distribution—production traffic skewed heavily toward new product categories absent from the training set. I rebuilt the vector store with updated embeddings from the latest transformer checkpoint and re‑indexed using HNSW for higher recall. Finally, I added a cache layer (Redis) for the top 5k frequent queries and tuned batch size to 64 for GPU inference.

**Result** – The F1 score rose back to 0.80, latency dropped below 350 ms, and we saw a 35% reduction in support tickets that previously required human escalation. I learned that production drift can stem from index versioning and data distribution shifts; continuous monitoring and incremental re‑indexing are essential for robust RAG deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
