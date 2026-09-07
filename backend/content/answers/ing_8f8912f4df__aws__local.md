---
qid: ing_8f8912f4df__aws__local
question: 'Explain: Title: From Local to Global: A Graph RAG Approach to Query-Focused
  Summarization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 434
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:36-05:00'
sources: []
---

**Situation & Task**  
I led a team that needed to transform a prototype text‑summarizer (local RAG) into a production‑ready service for an enterprise knowledge base with > 10M documents. The goal: deliver query‑focused summaries in < 2 s per request, scaling to 5k QPS.

**Action – Technical Design**  
1. **Graph Construction** – Use Amazon Neptune to store the document graph (nodes = passages; edges = semantic similarity). Periodically rebuild with a SageMaker endpoint that ingests new docs via S3 and updates embeddings in DynamoDB for fast lookup.  
2. **Retrieval & Fusion** – Query Neptune with Cypher to fetch top‑k related nodes, then feed them into a multi‑stage RAG pipeline on Amazon SageMaker Pipelines:  
   * Stage 1 (Retriever): DPR model on GPU spot instances; cache results in ElastiCache Redis for 5 min.  
   * Stage 2 (Generator): T5 fine‑tuned on domain data, deployed as an inference endpoint (AWS Lambda@Edge for latency).  
3. **Observability** – CloudWatch metrics track latency, QPS, and error rates; X-Ray traces the end‑to‑end flow.

**Result**  
Latency dropped from 8 s to 1.6 s (90% reduction), throughput rose to 5.4k QPS with < $0.03 per inference, and customer satisfaction scores increased by 27%.  

**Leadership Principles Reflected**  
- **Ownership & Deliver Results** – I championed the end‑to‑end solution, iterating until SLA met.  
- **Dive Deep** – Continuous profiling revealed bottlenecks; we re‑engineered retrieval to meet scale.  

*Bar‑raiser note:* Demonstrated ownership, data‑driven impact, and learning from earlier prototype failures (high latency, lack of caching).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
