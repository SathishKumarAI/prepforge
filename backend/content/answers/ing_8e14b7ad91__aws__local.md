---
qid: ing_8e14b7ad91__aws__local
question: 'Explain: Hypothetical Document Embeddings (HyDE) — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 457
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:16-05:00'
sources: []
---

**Hypothetical Document Embeddings (HyDe)** – a next‑gen retrieval pattern I built for a search‑as‑a‑service product that handled 2 M queries/day.

---

### **Situation & Task**  
Our customers complained that keyword‑only Lucene returned noisy results; they needed *semantic* relevance. The goal: reduce query latency <200 ms while improving NDCG by ≥10%.

### **Action**  
1. **Ownership & Dive Deep** – I led a cross‑team sprint, mapping the full data flow (ingest → embed → index).  
2. Built an **embedding pipeline** on **Amazon SageMaker**, training a transformer model (DistilBERT) to produce 768‑dim vectors for every document.  
3. Stored embeddings in **Amazon DynamoDB** with a *global secondary index* on the vector hash; used **Amazon KMS** for encryption at rest.  
4. At query time, I invoked an **AWS Lambda** (Python/FAISS) that computes the query embedding, performs cosine‑similarity search over the nearest 100 vectors in DynamoDB, and returns ranked results.  
5. Deployed the Lambda behind **API Gateway** + **CloudFront**, auto‑scaling via **Application Load Balancer**.  

### **Result**  
- NDCG improved from 0.62 to **0.75** (≈ 20% lift).  
- Latency dropped to **180 ms avg** under peak load.  
- Cost per query fell by **12%** thanks to serverless scaling.

---

**Key Learnings** – I iterated on the embedding dimensionality, discovered that 512‑dim vectors hit the sweet spot for accuracy vs. storage. I also documented a fallback path (keyword search) so the system never returned empty results.

> *Bar‑raiser note:* Demonstrates true ownership, dives deep into ML & infra trade‑offs, quantifies impact, and shows resilience by building a graceful degradation strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
