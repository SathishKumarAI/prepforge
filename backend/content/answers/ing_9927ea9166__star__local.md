---
qid: ing_9927ea9166__star__local
question: 'Explain: Late Chunking (The 2025 Shift) — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 361
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:50-05:00'
sources: []
---

**Situation**  
In early 2024 I was leading a data‑science team for a fintech startup that needed to surface loan‑application insights from unstructured documents in real time. Our legacy pipeline split PDFs into fixed‑size chunks and fed them straight into an LLM, but the model struggled with context drift and latency spikes during peak hours.

**Task**  
I had to redesign the ingestion process so we could embed entire documents as high‑dimensional vectors, enabling quick similarity search across millions of records while keeping inference latency below 200 ms per request.

**Action**  
We adopted a “late chunking” strategy: first, we used a transformer‑based sentence encoder (Sentence‑BERT) to generate dense embeddings for each paragraph. Then we aggregated these with an attention‑weighted mean to produce a single document vector stored in Pinecone’s vector index. For retrieval, the query vector was compared against the index using cosine similarity; the top 5 matches were passed to the LLM only when the relevance score exceeded 0.85. We also introduced a caching layer for popular queries and leveraged GPU inference on AWS T4s to reduce per‑call cost.

**Result**  
Latency dropped from an average of 1.2 seconds to 140 ms, while recall of relevant documents improved by 18 % (from 72 % to 90 %). The new pipeline handled a 3× increase in daily document volume without additional infrastructure. I learned that deferring chunking until after vectorization not only boosts speed but also preserves semantic nuance for downstream reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
