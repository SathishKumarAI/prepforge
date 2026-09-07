---
qid: ing_83a176a5dd__aws__local
question: 'Explain: Selection Criteria — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 448
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:37-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that built an AI‑powered recommendation engine for a global e‑commerce platform. We needed to pick the right embedding technique and vector space representation so our system could scale to millions of users while delivering relevant recommendations in real time.

**Action (Technical)**  
1. **Requirements** – Latency < 50 ms per request, accuracy > 0.78 NDCG, cost ≤ $0.02/user/month.  
2. **Design** –  
   * Train contextual embeddings with **Sentence‑Transformers** on user‑item interaction logs (≈ 200 M pairs).  
   * Store vectors in an **Amazon DynamoDB Global Table** for 99.999% availability and use **Elasticache Redis** as a hot cache for the top 1 M vectors.  
   * Use **FAISS** on an **EC2 Spot Fleet** cluster (p3.8xlarge) for nearest‑neighbor search, auto‑scaling via CloudWatch alarms.  
3. **Trade‑offs** – Chose L2‑normed cosine similarity to keep the distance metric simple and cacheable; avoided heavier graph embeddings that would have added 40 % latency.

**Result (Quantified)**  
- NDCG improved from **0.62 → 0.79** (27 % lift).  
- Latency dropped to **35 ms avg** (30 % reduction).  
- Monthly cost cut by **$120K** through Spot usage and caching.  

**Reflection (Leadership Principles)**  
*Customer Obsession*: Delivered a recommendation experience that increased click‑through rate by 15 %.  
*Ownership & Dive Deep*: I personally benchmarked 4 embedding models, wrote the autoscaling logic, and iterated until metrics hit targets.  

Bar‑raisers look for ownership, depth of analysis, data‑driven impact, and lessons learned—each demonstrated in this project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
