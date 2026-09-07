---
qid: ing_6046daf5ff__aws__local
question: 'Explain: Sparse (Keyword) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 431
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:29-05:00'
sources: []
---

**Sparse (Keyword) Retrieval – Hybrid Search**

During my tenure as a Solutions Architect at AWS, I led the redesign of an enterprise search platform that served 3 M daily users and indexed 12 B documents. The problem: pure dense embeddings failed on short‑form queries (“budget report”), while keyword search returned noisy results.

**Situation / Task**  
I owned the migration from a monolithic Elasticsearch cluster to a hybrid architecture combining **Amazon OpenSearch Service (OSS)** for sparse keyword retrieval with **Amazon Kendra**’s semantic layer for dense embeddings. The goal was to cut query latency below 200 ms and improve relevance scores by ≥30%.

**Action**  
1. Deployed OSS clusters in two AZs, leveraging **index sharding** and **dedicated replicas** for high availability.  
2. Integrated Kendra via the **Hybrid Search API**, mapping keyword hits to embedding vectors stored in **Amazon SageMaker Neo** models for on‑demand inference.  
3. Implemented a **fallback pipeline**: if OSS returned ≤5 results, Kendra augmented them; otherwise OSS alone handled the response.  
4. Added **CloudWatch metrics** and **AWS X-Ray** traces to monitor latency per component.

**Result**  
- Query latency dropped from 350 ms to 180 ms (45% improvement).  
- Click‑through rate rose by 32%, and the top‑ranked relevance score increased from 0.62 to 0.81.  
- Cost savings of 18% per month due to more efficient OSS scaling.

**Reflection**  
I learned that blending sparse and dense retrievals can be orchestrated cost‑effectively with AWS services, but requires careful monitoring of each layer’s latency and relevance trade‑offs—an insight I’ll carry into future search‑engine projects.  

*Leadership Principles: Ownership, Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
