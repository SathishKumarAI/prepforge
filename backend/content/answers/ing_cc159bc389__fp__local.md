---
qid: ing_cc159bc389__fp__local
question: 'Explain: Requirements — Flightbookingsearchmakemytrip'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 540
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:15-05:00'
sources: []
---

**Why the system must satisfy these requirements**

The core problem is to **predict the best flight offers for a user’s query in real‑time** while keeping latency low and serving millions of concurrent users. This boils down to an *optimization* over three axes:

1. **Relevance** – The algorithm must rank flights that match the user’s constraints (dates, origin/destination, price range) plus latent preferences inferred from browsing history.  
2. **Performance** – A search response must be returned in < 200 ms; otherwise users abandon the page. This imposes strict bounds on feature extraction, model inference, and database access.  
3. **Scalability & Fault‑Tolerance** – The system must handle peak traffic (e.g., during festivals) without a single point of failure.

From these axes we derive concrete requirements:

| Category | Requirement | Rationale |
|----------|-------------|-----------|
| Data | *Up‑to‑date flight catalog* with real‑time seat inventory and dynamic pricing. | Models must see the true ground truth; stale data leads to incorrect ranking. |
| Features | *User context vectors* (device, time of day, past bookings) + *flight attributes* (airline, layover duration). | Captures both observable constraints and latent preferences, enabling personalized ranking. |
| Model | *Low‑latency inference* (≤ 50 µs per query) using tree‑based ensembles or distilled neural nets. | Meets the 200 ms response window when combined with caching and sharding. |
| Architecture | *Event‑driven microservices* for feature extraction, model scoring, and result aggregation; *distributed cache* (Redis) for hot flight data. | Avoids bottlenecks and allows horizontal scaling. |
| Evaluation | *Online A/B testing* with click‑through & booking conversion as metrics; continuous retraining every 12 h. | Ensures the model remains optimal under changing demand patterns. |

**Non‑obvious insight:**  
Because flight availability changes every few minutes, the *ranking objective* must be formulated as a **dynamic multi‑armed bandit** rather than a static supervised problem. Treat each flight option as an arm; the reward is whether the user books it. This perspective naturally integrates real‑time exploration (trying new combinations) with exploitation (promoting known high‑converting flights), and aligns the ML pipeline with the stochastic, time‑varying nature of airline inventory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
