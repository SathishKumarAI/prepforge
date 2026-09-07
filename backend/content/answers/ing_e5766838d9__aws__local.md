---
qid: ing_e5766838d9__aws__local
question: 'Explain: Reranker — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 412
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:45-05:00'
sources: []
---

**Situation – Task**  
In my last role I led a search‑team that had to improve relevance for an internal knowledge base with 12 M documents. The business asked us to add a semantic reranker so users could surface the most contextually relevant results within seconds.

**Action – Technical Design**  
I scoped the problem: we needed to embed both query and document, rank by cosine similarity, and re‑score top‑10 TF‑IDF hits. I chose **Amazon SageMaker Endpoint** for a lightweight transformer (DistilBERT) fine‑tuned on 200K labeled pairs; it delivers <50 ms latency per inference. The pipeline runs in **AWS Lambda** (parallelized over 4 mappers), feeding results back into the existing Elasticsearch cluster via **S3** staging and **AppFlow** for data sync.  

To scale, I deployed the model behind an **Application Load Balancer** with autoscaling policies tied to CloudWatch metrics; this keeps cost < $0.25 per query while maintaining 99.9 % availability. We added a cache layer in **Amazon ElastiCache‑Redis** to hold the top‑ranked embeddings for hot queries, cutting inference calls by ~70 %.  

**Result – Impact**  
After rollout, click‑through rate on search results rose from 12 % to 26 % (a 113 % lift) and query latency stayed below 120 ms. The team now uses the same architecture for other product lines, saving $50k/month in inference costs.

> **Leadership Principles**  
> *Customer Obsession* – focused on user‑centric relevance metrics.  
> *Ownership & Dive Deep* – drove end‑to‑end design, cost modeling, and iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
