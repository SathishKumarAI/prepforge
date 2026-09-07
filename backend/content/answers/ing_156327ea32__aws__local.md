---
qid: ing_156327ea32__aws__local
question: 'Explain: Scaling Strategy — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 450
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:32-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the rollout of a Retrieval‑Augmented Generation (RAG) system for an enterprise knowledge‑base product. The goal was to reduce answer latency from 4 s to <1 s while keeping accuracy above 90 % across 200k documents.

**Action**  
*Ownership & Bias for Action*: I scoped the architecture, broke it into **indexing**, **retrieval**, and **generation** layers.  
- **Indexing**: used Amazon OpenSearch Service with a daily incremental pipeline (AWS Glue + Lambda).  
- **Retrieval**: deployed an Elastic‑search query cluster on *c5.large* instances, sharded 4x, auto‑scaling based on QPS.  
- **Generation**: wrapped the LLM in a SageMaker endpoint using *ml.g5dn.2xlarge* GPUs; I added a caching layer (DynamoDB + Redis) to memoize top‑k retrieval results for repeated queries.

*Dive Deep*: I instrumented each stage with CloudWatch metrics, discovered that 60 % of latency came from the query planner. I re‑engineered the query using *OpenSearch’s Phrase Suggestion API*, cutting query time by 35 %.  

**Result**  
- Latency dropped to **0.8 s** (↓80 %) and accuracy improved to **92 %** (+2 pp).  
- Cost per inference fell from $0.12 to $0.06, saving ~30 k/month.  
- The system now auto‑scales to 10 k QPS with 99.9 % availability.

**Reflection**  
I learned that *caching* and *query optimization* often outweigh heavy compute scaling. The bar‑raiser would note my clear ownership, data‑driven impact, deep dive into performance bottlenecks, and iterative learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
