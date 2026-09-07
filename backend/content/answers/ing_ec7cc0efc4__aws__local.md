---
qid: ing_ec7cc0efc4__aws__local
question: 'Explain: Pattern 2: ColBERT as Reranker (Most Common)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:13:20-05:00'
sources: []
---

**Situation & Task**  
At my previous role we built a semantic search engine for an e‑commerce catalog. Initial BM25 retrieval returned ~10 k candidates per query, but relevance lagged behind competitor sites. I owned the end‑to‑end ranking pipeline and chose to add ColBERT as a reranker—our most common pattern.

**Action**  
1. **Requirement Clarification** – We needed 90 % precision@5 while keeping latency <200 ms per query for 10 k concurrent users.  
2. **Design & AWS Services**  
   * Index candidates with Amazon OpenSearch (SSD‑based) for fast BM25 hits.  
   * Deploy ColBERT inference on **Amazon SageMaker endpoints** using a multi‑GPU instance (p3.8xlarge).  
   * Use **SageMaker Model Registry** to version the embeddings and enable A/B testing.  
   * Cache top‑100 reranked vectors in **ElastiCache Redis** to reduce repeat inference cost.  
3. **Scalability & Availability** – Autoscaling SageMaker endpoints with a target CPU % of 70 %. Multi‑AZ deployments ensure 99.9 % uptime.  
4. **Cost Trade‑offs** – Inference cost ≈$0.12/query; caching cut this by 65 %, saving ~$1M annually.

**Result**  
Precision@5 rose from 68 % to 91 % (a 23 pp lift), and click‑through rate increased 18 %. Query latency stayed at 180 ms on average, meeting SLA. The model was adopted across all product lines, driving a $4M incremental revenue year‑over‑year.

**Reflection & Learning**  
I realized early that caching only the top candidates yielded the best ROI; later attempts to cache all embeddings wasted resources. This taught me to *dive deep* into usage patterns before scaling infrastructure—an essential bar‑raiser expectation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
