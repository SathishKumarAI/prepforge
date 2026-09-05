---
qid: ing_64b2698d8d__star__local
question: 'Explain: Every prompt I ship keeps getting heavier'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:58-05:00'
sources: []
---

**Situation:**  
When I started shipping the recommendation model for our e‑commerce platform, each user request was wrapped in a prompt that included product attributes, customer profile data, and contextual tags. Within weeks, the average payload grew from ~2 KB to over 15 KB because we kept appending new features—like clickstream embeddings, sentiment scores, and seasonal trend flags—to improve accuracy.

**Task:**  
I needed to reduce the prompt size without sacrificing model performance so that inference latency stayed below 50 ms per request on our edge servers.

**Action:**  
1. I profiled each feature’s contribution using SHAP values; most of the clickstream embeddings were redundant after the first few tokens.  
2. I applied dimensionality reduction (PCA) to compress high‑dimensional vectors from 128 to 32 dimensions, preserving 95 % variance.  
3. I switched from raw JSON to a binary protocol buffer schema and removed unnecessary metadata fields.  
4. Finally, I introduced a two‑stage prompt: a lightweight “context” layer for common features and a conditional “detail” layer that only loads when the model flags high uncertainty.

**Result:**  
Prompt size dropped to ~3 KB (a 80 % reduction), inference latency fell to 30 ms on average, and AUC stayed at 0.87—identical to the previous model. I learned that rigorous feature attribution combined with serialization optimization can dramatically trim payloads while keeping accuracy intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
