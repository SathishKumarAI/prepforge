---
qid: ing_42fc2b3dc6__star__local
question: How do you keep a RAG index fresh as documents change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 295
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:40-05:00'
sources: []
---

**Situation:** In my last role I managed an internal knowledge‑base for a customer support chatbot that used Retrieval‑Augmented Generation (RAG). Every week new product specs and policy updates were added, so the vector index started drifting from the latest documents.

**Task:** My goal was to automate refreshing the RAG index every 24 hours while keeping latency under 200 ms and ensuring no stale answers slipped through during the rebuild.

**Action:** I built a lightweight CI pipeline that watched the document repository for changes. When a change trigger fired, a containerized microservice pulled the updated PDFs, ran spaCy to extract entities, then encoded them with a fine‑tuned Sentence‑BERT model. The embeddings were batched into Faiss HNSW index shards; we used an incremental merge strategy so the old shard remained online until the new one was fully built and validated against a checksum test set. During rebuilds the chatbot served from the old index, switching over atomically once the new shard passed the health check.

**Result:** Index refresh time dropped to 12 minutes per cycle, latency stayed below 180 ms, and user‑reported “outdated” answers fell by 78 %. I learned that incremental merging and health‑checked switchover are key to keeping RAG systems both fresh and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
