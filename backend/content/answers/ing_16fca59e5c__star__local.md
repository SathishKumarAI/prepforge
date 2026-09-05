---
qid: ing_16fca59e5c__star__local
question: 'Explain: Scaling Considerations — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 374
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:43-05:00'
sources: []
---

**Situation** – In my last role I led a product team building a customer‑support chatbot that had to pull from both text logs and image screenshots to answer user queries in real time. Our initial prototype used a single‑modal RAG pipeline, but the latency hit 3 s per request and the accuracy dropped when users included photos of error screens.

**Task** – I needed to scale the system so it could handle 10k concurrent requests, keep end‑to‑end latency under 1.2 s, and maintain a retrieval precision above 85 % across both modalities.

**Action** – I redesigned the architecture into a two‑stage multimodal RAG: first, a lightweight embedding model (CLIP for images + DistilBERT for text) generated modality‑agnostic vectors that were indexed in an approximate nearest neighbor store (FAISS with HNSW). Second, a retrieval‑augmented decoder (T5‑small fine‑tuned on support data) fetched top‑k candidates and fused them via cross‑modal attention. I containerized each component with Docker, deployed to Kubernetes, and used autoscaling based on request queue depth. For latency, I introduced a fallback cache that served recent answers instantly.

**Result** – After rollout we saw query latency drop from 3 s to 0.9 s on average, while precision rose to 88 %. Traffic grew 150 % without additional hardware costs. I learned that separating embedding and decoding stages lets you fine‑tune each for speed and accuracy, and that a shared vector space is key for true multimodal retrieval at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
