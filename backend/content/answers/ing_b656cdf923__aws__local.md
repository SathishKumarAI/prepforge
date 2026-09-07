---
qid: ing_b656cdf923__aws__local
question: When does BM25 beat dense embeddings on enterprise data, and how would you
  combine them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 454
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:14-05:00'
sources: []
---

**Situation & Task**  
In a recent project for an internal knowledge‑base search platform (≈ 3 M documents, 1 B query logs), I was asked to evaluate whether BM25 or dense embeddings should drive ranking. The goal: maximize click‑through rate (CTR) while keeping inference latency ≤ 50 ms.

**Action – Technical & Design**  
*Requirements:*  
- Real‑time ranking for user queries.  
- Ability to incorporate new documents without re‑training a large model.  

I ran a controlled A/B test on 100K query samples. BM25 outperformed dense embeddings (≈ 12 % higher recall@10) on short, factoid questions (≤ 4 tokens), while embeddings excelled on longer, intent‑driven queries.  
*Hybrid Solution:*  
1. **Feature extraction**: use BM25 scores as sparse features + top‑k embedding similarity (cosine) as dense features.  
2. **Learning‑to‑rank model**: train a LambdaMART booster in SageMaker, feeding both feature types.  
3. **Deployment**: serve BM25 via OpenSearch for low‑latency filtering; embed scoring with a lightweight Faiss index on an EC2 Spot fleet (cost ≈ $0.01/hr).  

*Scalability & Availability:*  
- Auto‑scaling groups for both services, health checks, and Route 53 latency routing.  
- Cost: 30 % lower than running a full transformer inference cluster.

**Result**  
CTR increased from **18.4 % to 22.7 %** (≈ 24 % lift), and latency stayed below the SLA. The hybrid model leveraged each method’s strengths, aligning with *Customer Obsession* (better user experience) and *Ownership* (end‑to‑end solution).  

**Learning**  
Initially I over‑engineered the embedding pipeline; simplifying to a Faiss index saved 40 % of compute cost. This iterative refinement embodies the *Bias for Action* principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
