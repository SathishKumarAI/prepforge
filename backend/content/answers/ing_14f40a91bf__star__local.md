---
qid: ing_14f40a91bf__star__local
question: 'Explain: Normalization — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 317
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:08-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a recommendation engine for a niche e‑commerce platform. Our product catalog had over 12,000 items, but the search and filtering feature was lagging—average query latency hovered around 650 ms, and click‑through rates dipped below 3 %.

**Task:**  
I needed to redesign the item representation so that we could perform real‑time nearest‑neighbor lookups in sub‑millisecond time while keeping memory usage under 4 GB.

**Action:**  
First, I gathered metadata (title, description, tags) and applied TF‑IDF weighting. Next, I trained a Word2Vec model on the combined text corpus to generate dense embeddings for each item. To reduce dimensionality, I ran PCA until variance dropped below 95 %, ending up with 128‑dimensional vectors. Finally, I indexed them using HNSW (Hierarchical Navigable Small World) graphs in Faiss, which normalizes vectors internally and supports cosine similarity out of the box.

**Result:**  
Query latency fell to 120 ms on average, a 80 % improvement, while click‑through rates rose from 2.9 % to 4.6 %. The model also cut memory usage by 35 %, freeing resources for other services. I learned that careful normalization and dimensionality reduction are critical when scaling embeddings for production search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
