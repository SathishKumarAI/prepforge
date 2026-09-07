---
qid: ing_108030d0c1__aws__local
question: 'Explain: Figma Coding Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 434
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:37-05:00'
sources: []
---

**Situation & Task (S)**  
During a recent FAANG‑style coding challenge I was asked to build a **real‑time similarity search for Figma design components**—essentially an ML model that takes a user’s sketch and returns the top‑k matching UI elements from millions of assets in seconds.

**Action (A)**  
1. **Own the end‑to‑end pipeline** – I scoped data ingestion, feature extraction, vector indexing, and API serving.  
2. **Dive Deep into requirements** – latency < 200 ms, recall > 90 % for top‑10, cost ≤ $0.01 per query.  
3. **Design**  
   * Feature extraction: pre‑trained ResNet‑50 + fine‑tuned transformer on design metadata → 512‑dim vectors.  
   * Indexing: Approximate Nearest Neighbor (ANN) with Facebook’s FAISS, sharded across EC2 g4dn.xlarge instances for scalability.  
   * Serving: API Gateway + Lambda@Edge to route queries to the nearest region; cache frequent results in ElasticCache Redis.  
   * Monitoring: CloudWatch metrics + SageMaker Model Monitor for drift.  

**Result (R)**  
- Achieved **latency 180 ms**, **recall 92 %**, and reduced per‑query cost from $0.03 to **$0.008** by autoscaling Lambda concurrency.  
- Deployed within 48 hrs of the brief, receiving a *“Great ownership”* score from reviewers.

**Reflection (L)**  
I learned that early trade‑off analysis between ANN precision and cost is critical; a later tweak to FAISS index parameters saved 30 % more compute without hurting accuracy.  

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
