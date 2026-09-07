---
qid: ing_922c3a303c__aws__local
question: 'Explain: HNSW (Hierarchical Navigable Small World)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:46-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a project to power a real‑time recommendation engine for a streaming platform that served 3 M active users daily. The existing brute‑force nearest‑neighbour (NN) search on embeddings was O(n²) and couldn’t keep up with the 10 k queries/sec spike during releases.  

**Action – Technical Design**  
I chose **Hierarchical Navigable Small World (HNSW)** graphs because they provide sub‑linear search with high recall, are easy to update incrementally, and fit well into a distributed environment.  
1. Build an HNSW index per embedding dimension on EC2 Spot instances; use **Amazon SageMaker** for training the embedding model.  
2. Persist each layer’s adjacency lists in **Amazon DynamoDB (global tables)** for low‑latency reads across regions.  
3. Expose a Lambda function behind **API Gateway** that performs an *in‑memory* HNSW search, returning top‑k results within 5 ms.  

**Result**  
After deployment we achieved **95 % recall at 20 ms latency**, cutting the recommendation response time from 300 ms to 20 ms and reducing compute costs by **35 %** (Spot vs On‑Demand). The system scaled to 50 k concurrent users without any performance degradation.  

**Reflection – Leadership Principles**  
- **Customer Obsession / Deliver Results**: Delivered a faster, cheaper recommendation service that directly increased user engagement by 12%.  
- **Dive Deep & Ownership**: I dissected the NN algorithm, benchmarked alternatives, and owned the entire stack from model training to production.  

Bar‑raisers look for ownership of impact metrics, depth in understanding HNSW’s graph theory, and a clear learning loop—here we iterated on layer size after observing recall drift, showing continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
