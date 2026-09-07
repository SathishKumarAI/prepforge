---
qid: ing_be074ebf76__aws__local
question: 'Explain: Q6: Describe hybrid search and when you would use it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 425
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:08-05:00'
sources: []
---

**Hybrid Search – When and Why to Use It**

**Situation:**  
At my previous role I led the redesign of a customer‑support portal that handled ~200k queries/day. Pure keyword search returned 38 % precision, while pure vector search gave 72 % recall but was noisy.

**Task:**  
Build a system that delivers both high relevance and fast response for an internal knowledge base, meeting SLAs (≤200 ms) and cost constraints (<$0.02/query).

**Action:**  
I architected a *hybrid* pipeline:

1. **Keyword index** – Amazon OpenSearch Service with field‑level boosting for titles and tags.  
2. **Vector index** – SageMaker Endpoint generating 384‑dim embeddings (using Sentence‑Transformers) stored in DynamoDB + Elastic Vector Search plugin.  
3. **Orchestrator** – Lambda layers the two results:  
   * Rank keyword hits by score;  
   * Fetch top‑k vectors, compute cosine similarity to query vector;  
   * Merge with a weighted scoring function (α=0.6 keyword, β=0.4 vector).  

**Result:**  
Precision rose from 38 % → **78 %**, recall from 52 % → **87 %**, while latency stayed at ~180 ms. Cost per query dropped by 15 % due to smarter caching of high‑frequency queries in ElastiCache.

**Learning & Ownership:**  
I ran A/B tests, logged failures (e.g., mis‑ranked results), and iteratively adjusted weights—demonstrating *Ownership* and *Dive Deep*. The solution now scales horizontally with auto‑scaling OpenSearch and SageMaker, ensuring high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
