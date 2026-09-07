---
qid: ing_5aff81a499__aws__local
question: 'Explain: Retrieval Depth — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 441
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:17-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to improve the relevance of our AI‑powered knowledge base for a global customer support portal. Users were searching millions of documents but only ~12 % returned results that matched their intent, hurting satisfaction scores.

**Action**  
I designed a *Hybrid Retrieval Depth* pipeline:  

1. **Vector Layer (SageMaker & Bedrock)** – encode every document into 768‑dim embeddings; store in an Elastic‑Search cluster with GPU‑accelerated indexing for sub‑second similarity queries.  
2. **Keyword Layer (Amazon OpenSearch)** – run a lightweight TF‑IDF query to surface the top 20 candidates.  
3. **Depth Fusion** – feed both sets into a custom Ranker (XGBoost) that scores documents on *semantic similarity*, *recency* and *user click‑through*. The ranker runs in Lambda@Edge for sub‑100 ms latency across all regions.

I added a *fallback rule* to re‑run the vector search if the top‑5 keyword hits score < 0.3, ensuring depth without sacrificing speed.

**Result**  
After deployment:  
- **Recall@10 increased from 12 % → 47 %** (30 % absolute lift).  
- **Click‑through rate rose 18 %**, translating to a $1.2 M uplift in annual support cost savings.  
- **Cost per query dropped 15 %** by leveraging Spot instances for vector inference.

**Reflection**  
I owned the end‑to‑end solution, diving deep into embedding quality and latency trade‑offs. The biggest failure was an initial over‑aggressive pruning rule that hurt recall; I quickly rolled back and added a safety net in the fusion layer. This experience reinforced the *Customer Obsession* principle—delivering precise answers—and the *Bias for Action* mindset, iterating fast based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
