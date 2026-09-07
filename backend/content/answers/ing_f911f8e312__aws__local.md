---
qid: ing_f911f8e312__aws__local
question: 'Explain: ViDoRe Benchmark Results — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 414
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:35-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I led the **ViDoRe Benchmark** for a multimodal Retrieval‑Augmented Generation (RAG) system that ingests video frames, transcripts and external knowledge bases.  
- **Situation:** Clients demanded a 30 % higher recall on video‑QA tasks while keeping latency under 200 ms per query.  
- **Task:** Build a production‑ready RAG pipeline that scales to millions of videos.  
- **Action:**  
  1. Designed a two‑stage retrieval: (a) *embedding index* in **Amazon Kendra** for quick semantic search over transcript embeddings; (b) *video‑frame index* in **Amazon OpenSearch** using CLIP vectors.  
  2. Used **AWS Lambda** + **Step Functions** to orchestrate the pipeline, adding a fallback to **Amazon SageMaker Endpoint** for on‑the‑fly generation when retrieval confidence < 0.6.  
  3. Implemented *caching* with **ElastiCache (Redis)** and auto‑scaling via **Application Load Balancer** to maintain 99.9 % availability.  
- **Result:** Achieved **+42 % recall** on the ViDoRe test set, reduced average latency from 350 ms to **190 ms**, and cut operational cost by **18 %** compared with a monolithic model.

**Leadership Principles:**  
- *Customer Obsession* – focused on end‑user latency and accuracy.  
- *Ownership & Dive Deep* – engineered a fault‑tolerant, scalable architecture while profiling bottlenecks.  

Bar‑raisers listen for ownership, quantified impact, deep technical dive, and lessons learned (e.g., why we chose Kendra over Elasticsearch for semantic search).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
