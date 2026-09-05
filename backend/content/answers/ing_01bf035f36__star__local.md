---
qid: ing_01bf035f36__star__local
question: 'Explain: The service sends a query to the — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 331
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:48-05:00'
sources: []
---

**Situation:**  
I was tasked with revamping the recommendation engine for a startup’s local‑business discovery app that already had 2 million active users but a churn rate of 12 % because search results were too generic.

**Task:**  
Build an ML‑driven service that personalizes place suggestions based on user context (location, past interactions, time of day) and scales to millions of concurrent queries with <200 ms latency.

**Action:**  
I designed a two‑stage pipeline: first, a real‑time feature store in Redis aggregating user profile vectors (embedding of visited categories, rating history). Second, an inference layer using TensorFlow Serving that runs a lightweight XGBoost model trained on click‑through data. To keep latency low, I pre‑computed top 50 candidates per region via locality‑sensitive hashing and only ran the full model on those. For cold starts, we fall back to a popularity score. Continuous A/B testing was set up with Prometheus metrics for precision@k and latency.

**Result:**  
Within three months of rollout, click‑through rate rose from 4.2 % to 7.8 % (≈86 % lift), churn dropped to 6 %, and average query latency stayed below 180 ms under peak load. I learned how careful feature engineering and model compression can balance personalization with real‑time constraints in a location‑based service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
