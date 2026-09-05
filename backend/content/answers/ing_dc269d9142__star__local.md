---
qid: ing_dc269d9142__star__local
question: 'Explain: Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 301
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:21-05:00'
sources: []
---

**Situation:**  
During a product launch for our recommendation engine, we noticed that the top‑ranked items were often irrelevant to users—click‑through rates dropped by 18% compared to last quarter.

**Task:**  
I was tasked with improving relevance without adding latency or overhauling the entire model. The goal: lift CTR by at least 10% within two sprints while keeping inference time under 50 ms per request.

**Action:**  
First, I introduced a lightweight reranking pipeline using gradient‑boosted trees (XGBoost) trained on post‑click signals like dwell time and purchase conversion. I engineered features such as session entropy, user intent embeddings from our language model, and item freshness scores. To keep latency low, I serialized the model with ONNX and deployed it behind a Redis cache that precomputes scores for the top 100 candidates per user. I also implemented a fallback rule: if the reranker confidence fell below a threshold, we defaulted to the original ranking.

**Result:**  
Within two weeks of rollout, CTR increased by 12% and conversion rate rose 6%. The end‑to‑end latency stayed at ~45 ms, meeting our SLA. I learned that a simple, well‑engineered reranker can outperform heavy deep nets when combined with smart feature engineering and edge deployment strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
