---
qid: ing_b7bc2a12d5__aws__local
question: 'Explain: Glean — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 430
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:38-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*  
> **Situation:** I was interviewing for a senior ML engineer at Glean, where the hiring team asked me to design a “knowledge‑graph search engine” that ingests corporate documents in real time.  
> **Task:** Build an end‑to‑end pipeline that can ingest 10 M documents per day, index them with semantic embeddings, and return top‑k results within 200 ms for any user query.  
> **Action (Technical Design):**  
> * **Ingestion & Pre‑processing:** Kinesis Data Streams → Lambda (PDF/Word parsing) → DynamoDB (document metadata).  
> * **Embedding Generation:** SageMaker endpoint with a fine‑tuned Sentence‑Transformer; batch jobs on Spot instances for cost control.  
> * **Graph Storage:** Neptune (property graph) for entity relationships + OpenSearch for full‑text search.  
> * **Serving Layer:** API Gateway + Lambda@Edge to route queries to Neptune/OpenSearch; results cached in ElastiCache Redis for 1 s freshness.  
> * **Scalability & Availability:** Auto‑scaling groups, multi‑AZ deployment, and DynamoDB Global Tables for regional latency.  
> * **Cost Trade‑offs:** Spot instances reduce embedding cost by 70%; using Neptune’s pay‑per‑second pricing keeps idle capacity minimal.  
> **Result:** In a mock pilot, we achieved 95 % recall at 200 ms latency while processing 12 M docs/day, cutting operational spend by 45 %.  
> **Bar‑raiser Note:** The interviewer looked for clear ownership (designing each component), deep dive into AWS services, quantifiable impact, and reflection on a failed batch job that taught me to add idempotent checkpoints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
