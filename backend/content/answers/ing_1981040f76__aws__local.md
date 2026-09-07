---
qid: ing_1981040f76__aws__local
question: How to identify the surrounding ranked players?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 425
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:56-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional ML team at my previous company, we were asked to build a “ranked player” recommendation engine for an online multiplayer game. The challenge was to identify *surrounding* players—those whose skill levels are close enough to keep matches competitive—while handling millions of concurrent users.

**Action (Technical)**  
1. **Data ingestion:** Used Kinesis Data Streams to capture real‑time match logs, then Lambda functions for lightweight preprocessing and enrichment.  
2. **Feature store:** Persisted engineered features (ELO, win‑rate streaks, latency) in Amazon SageMaker Feature Store for low‑latency access.  
3. **Modeling:** Trained a Gradient Boosting model on SageMaker, tuning with Hyperparameter Tuning jobs; achieved 82 % precision at rank‑±2 threshold.  
4. **Serving:** Deployed the model as an endpoint behind API Gateway + Lambda@Edge for sub‑200 ms latency globally.  
5. **Scalability & cost:** Leveraged spot instances for training, reserved capacity for inference, and autoscaling on CloudWatch metrics—keeping monthly spend <$12k while supporting 3M concurrent players.

**Result (Metrics)**  
- Reduced matchmaking churn by **27%**, improving average session length from 45 min to 62 min.  
- Cut latency from 350 ms to <200 ms, earning a **customer satisfaction score of 4.8/5** for gameplay fairness.  

**Learning & Ownership**  
I owned the end‑to‑end pipeline and conducted post‑mortems after two outage incidents, adjusting health checks and adding circuit breakers—demonstrating *Ownership* and *Dive Deep*. This solution exemplifies Amazon’s principles of **Customer Obsession**, **Deliver Results**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
