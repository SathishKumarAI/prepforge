---
qid: ing_65967f43a3__aws__local
question: 'Explain: Late Interaction: ColBERT v2 — Embedding Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 444
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:44-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a project to replace our legacy keyword‑search pipeline with an AI‑driven semantic search that could handle *late interactions* (i.e., re‑ranking after initial retrieval). The goal was to improve recall for customer support tickets while keeping latency under 200 ms.

**Action**  
I chose **ColBERT v2** because it supports late interaction without sacrificing speed. I built a two‑stage system on AWS:

1. **Embedding Service** – `Amazon SageMaker` hosted a PyTorch model that encoded queries and documents into 128‑dim vectors (≈ 20 GB total).  
2. **Search Layer** – `OpenSearch` stored dense embeddings in an ANN index (`faiss‑index`). Retrieval returned the top‑500 candidates; the embedding service then re‑ranked them using cosine similarity, leveraging GPU inference on `SageMaker Neo` for 50× speedup.

To keep costs low, I used **Spot Instances** for training and a *reserved instance* for production inference. Auto‑scaling was driven by CloudWatch metrics (CPU > 70% → add node).

**Result**  
- Recall at rank 1 jumped from 38 % to **67 %**, a 75 % relative increase.  
- Query latency stayed < 180 ms (95th percentile).  
- Cost per query dropped by 30 % thanks to Spot usage.

**Reflection**  
I took full ownership of the end‑to‑end pipeline, diving deep into vector similarity trade‑offs and iterating on index parameters. The bar‑raiser will see my quantitative impact, architectural depth, and how I learned from an initial 300 ms latency spike by adding a caching layer for frequent queries.

> **Leadership Principles**: *Customer Obsession* (improved user relevance), *Ownership* (full delivery), *Dive Deep* (model & index tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
