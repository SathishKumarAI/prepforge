---
qid: ing_14f40a91bf__aws__local
question: 'Explain: Normalization — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 489
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:12:23-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role building a recommendation engine for an e‑commerce platform, I led the migration of our legacy keyword‑based search to an embedding‑driven vector space model.

| **Situation** | Our search latency was 2 s per query and recall dropped below 60% for long‑tail products. |
|---------------|------------------------------------------------------------------------------------------|
| **Task** | Replace bag‑of‑words indexing with dense embeddings, normalize them, and deploy at scale on AWS. |
| **Action** | • Trained a SentenceBERT model (≈ 1M parameters) on product titles/descriptions; generated 768‑dim vectors. <br>• Applied L2‑normalization to ensure Euclidean distance ≈ cosine similarity, simplifying nearest‑neighbor search. <br>• Stored embeddings in Amazon DynamoDB with GSI on hash of first two characters for sharding. <br>• Deployed a Lambda‑based microservice that queries an Amazon OpenSearch cluster (10 GB RAM) using k‑NN plugin; tuned `search_type:dfs_query_then_fetch` for freshness. <br>• Monitored latency via CloudWatch, auto‑scaling the OpenSearch domain to 4 nodes (cost ≈ $0.12/hr). |
| **Result** | Search latency dropped from 2 s to 350 ms (70% reduction), recall rose to 82%, and click‑through rate increased by 15%. Cost per query fell by 30% due to efficient sharding. |

**Leadership Principles Highlighted**

- **Ownership**: Took full responsibility for end‑to‑end migration, from model training to production monitoring.  
- **Dive Deep**: Analysed embedding quality, chose L2‑normalization after benchmarking cosine vs Euclidean on 10k queries.  

**Bar‑raiser cues**

- Quantified impact (latency, recall, CTR).  
- Demonstrated depth in design choices (model selection, sharding strategy, AWS services).  
- Reflected learning: initial prototype mis‑estimated OpenSearch node capacity; corrected by adding auto‑scaling and cost monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
