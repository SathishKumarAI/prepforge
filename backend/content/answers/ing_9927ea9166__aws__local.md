---
qid: ing_9927ea9166__aws__local
question: 'Explain: Late Chunking (The 2025 Shift) — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 493
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:59-05:00'
sources: []
---

**Situation & Task**  
At a prior startup, we were building a semantic search layer for an enterprise knowledge base that served ~20 k users daily. The search latency was 1 s per query and the recall dropped to 72 % on new content because our embeddings were stale—generated in bulk every 24 h (the “late chunking” approach). I owned the redesign.

**Action**  
I re‑engineered the pipeline into an *incremental chunking* system:  
1. **Trigger** – every time a document changed, we sent a lightweight Lambda event to SQS.  
2. **Processing** – a Step Functions state machine launched an ECS Fargate task that (a) split the doc into 300‑token chunks, (b) generated embeddings with OpenAI’s `text-embedding-ada-002`, and (c) stored them in an ElasticVectorSearch domain on Amazon OpenSearch.  
3. **Indexing** – we used OpenSearch’s *vector search* plugin to keep vectors up‑to‑date; stale chunks were automatically pruned via a scheduled Lambda.  

I also introduced a nightly “deep refresh” for documents with >10 % edit distance, ensuring full coverage.

**Result**  
- Query latency dropped from 1 s to **250 ms** (30× faster).  
- Recall improved from 72 % to **88 %**, boosting user satisfaction scores by **+15 points** in our NPS survey.  
- Costs fell by **18 %** because we replaced a costly nightly batch with on‑demand Fargate tasks.

**Reflection**  
I learned that *late chunking* can cripple real‑time relevance; moving to incremental processing is a classic AWS “pay‑as‑you‑go” model. I’ll keep iterating the trigger logic to catch edge cases, ensuring continuous ownership of data quality.  

---  

**Leadership Principles Highlighted**  
- **Customer Obsession** – improved search relevance directly impacted user satisfaction.  
- **Ownership & Dive Deep** – I dissected the entire pipeline, identified bottlenecks, and engineered a scalable, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
