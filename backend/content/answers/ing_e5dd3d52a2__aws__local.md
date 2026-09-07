---
qid: ing_e5dd3d52a2__aws__local
question: 'Explain: Challenges Encountered — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 401
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:41-05:00'
sources: []
---

**Situation & Task**  
When launching the enterprise RAG (Retrieval‑Augmented Generation) platform for our global client, I was tasked to build a system that could ingest millions of documents, answer real‑time queries, and stay compliant with GDPR.  

**Action**  
- **Ownership & Customer Obsession:** I scoped the solution as a *fully managed* stack: S3 + Glacier for immutable storage, Athena/Glue for cataloging, and an Amazon Kendra index for semantic search.  
- **Dive Deep & Invent & Simplify:** To keep latency < 200 ms under peak load, I built a hybrid retrieval pipeline—first a vector‑based ANN search in SageMaker Neo‑deployed embeddings (using Faiss on spot instances), then fall back to keyword lookup in Kendra.  
- **Bias for Action:** Implemented an auto‑scaling Lambda layer that triggers re‑indexing only when new data exceeds 5 % of the corpus, cutting re‑index costs by 30 %.  

**Result**  
The platform handled 10× the projected query volume (≈50k QPS) with 99.9 % availability, while reducing operational spend from $120k/month to $78k/month—a **35 % cost savings**—and achieved a 92 % precision@5 on user queries, up from 76 %.  

**Learning & Bar‑raiser Insight**  
I learned that *continuous monitoring of data drift* is crucial; we added an automated Drift Detector in SageMaker to alert when embeddings accuracy fell below 85 %, preventing stale answers. The bar‑raiser will note my ownership of the entire lifecycle, depth in designing a hybrid retrieval system, and quantifiable impact on cost & performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
