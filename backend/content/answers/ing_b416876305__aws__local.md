---
qid: ing_b416876305__aws__local
question: 'Explain: Why MaxSim Outperforms Single-Vector Similarity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 357
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:03-05:00'
sources: []
---

**Situation & Task**  
While revamping our recommendation engine for a global e‑commerce platform, I was tasked with boosting click‑through rates (CTR) by improving product similarity scoring.

**Action**  
I replaced the single‑vector cosine similarity (which merged all product attributes into one embedding) with **MaxSim**: compute similarity per attribute group (price, category, brand, textual description), then take the maximum score.  
*Implementation*:  
- Trained separate dense embeddings for each attribute set in SageMaker.  
- Stored embeddings in DynamoDB; Lambda functions fetched relevant vectors and computed MaxSim on‑the‑fly.  
- Deployed as a serverless API behind API Gateway, auto‑scaling with request volume.

**Result**  
CTR rose **12 %** (from 3.4 % to 3.8 %) and conversion lift grew **18 %** in the first month, while latency stayed below 120 ms for 99.9 % of requests. Cost per inference dropped by **15 %** due to reduced vector dimensionality.

**Reflection**  
I *owned* the end‑to‑end pipeline, *dived deep* into attribute importance through feature attribution analysis, and learned that aggregating heterogeneous signals via MaxSim preserves discriminative power better than a monolithic embedding. This aligns with **Customer Obsession** (better recommendations) and **Ownership** (full responsibility for performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
