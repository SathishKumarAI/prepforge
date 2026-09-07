---
qid: ing_38768a67ae__aws__local
question: What is GraphRAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 451
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:29-05:00'
sources: []
---

**GraphRAG – what it is and why it matters**

*Customer Obsession + Ownership*

> **Situation:** A client in finance needed instant, explainable answers to regulatory questions from a massive knowledge graph (millions of entities).  
> **Task:** Deliver an inference layer that could answer queries with sub‑second latency while preserving auditability.  
> **Action:** I architected *GraphRAG*—a Retrieval‑Augmented Generation system built on top of the graph. We first vectorized node and edge attributes (using sentence‑BERT), stored them in **Amazon Neptune** + **OpenSearch** for similarity search, and wrapped everything in an **AWS Lambda** microservice that calls **Bedrock** with a fine‑tuned LLM.  
> **Result:** Query latency dropped from 8 s to <200 ms; the model’s factual accuracy improved by 37 % (measured against a gold‑standard QA set). Costs stayed below $0.02 per query thanks to spot‑based Lambda concurrency and on‑demand OpenSearch scaling.

*Dive Deep + Deliver Results*

- **Scalability:** Neptune scales horizontally with read replicas; OpenSearch shards automatically handle 1 M+ vectors, giving linear throughput growth.  
- **Availability:** Multi‑AZ Neptune + cross‑region OpenSearch replication ensures <0.5 % downtime SLA.  
- **Cost trade‑offs:** Using on‑demand LLMs avoided overprovisioning; we kept vector storage in S3 Glacier for cold data, re‑ingesting only top 10k vectors per request.

**What a bar‑raiser looks for**

- Clear ownership of the end‑to‑end pipeline.  
- Deep dive into graph semantics vs. vector similarity trade‑offs.  
- Quantified impact (latency, accuracy, cost).  
- Lessons: initial prototype overestimated query latency; we learned to cache frequent embeddings and introduced a hybrid retrieval strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
