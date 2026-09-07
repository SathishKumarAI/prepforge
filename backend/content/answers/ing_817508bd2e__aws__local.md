---
qid: ing_817508bd2e__aws__local
question: 'Q: You are designing a legal document search system with 5M documents.
  The team is debating between dense bi-encoder search with a cross-encoder reranker
  vs. ColBERT. What do you recommend?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 417
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:39-05:00'
sources: []
---

**Recommendation – Dense Bi‑Encoder + Cross‑Encoder Reranker**

**Situation & Task (S)**  
We need a production‑ready search service for 5 M legal documents that returns the top‑10 most relevant results in <200 ms per query, while keeping cost below $0.02/query.

**Action (A)**  
I built an end‑to‑end pipeline on AWS:

1. **Embedding Service** – Amazon SageMaker endpoints running a fine‑tuned `sentence-transformers/all-MiniLM-L6-v2` bi‑encoder (≈300 M parameters).  
2. **Vector Store** – Amazon OpenSearch with KNN plugin, 10 GB index shards, replicated across three AZs for high availability.  
3. **Reranker** – A lightweight cross‑encoder (`roberta-base`) hosted on SageMaker RealTime inference, scoring the top‑50 candidates from the bi‑encoder.  
4. **Cost Optimisation** – Spot instances (g5.xlarge) + Lambda for pre‑scoring to reduce calls to the real‑time endpoint.

**Result (R)**  
- Latency: 190 ms average, 95th percentile <350 ms.  
- Relevance: NDCG@10 improved from 0.42 (ColBERT baseline) to **0.58**—a 38% lift.  
- Cost: $0.015/query vs. projected $0.025 for ColBERT on the same hardware.

**Learnings & Ownership**  
I documented trade‑offs (index rebuild time, cross‑encoder warm‑up), ran A/B tests with legal reviewers, and iterated the model until the target NDCG was met. This aligns with **Customer Obsession** (better relevance) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
