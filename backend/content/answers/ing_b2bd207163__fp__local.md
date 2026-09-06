---
qid: ing_b2bd207163__fp__local
question: 'Explain: Week 3: Data Definition and Baseline — Machine Learning in Production
  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 365
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:23:57-05:00'
sources: []
---

### Why “Data Definition & Baseline” matters in ML production

In a production system the **data** is the sole resource that turns an algorithm into a useful service.  
If we mis‑specify what constitutes a valid data point, the model will learn spurious patterns and fail at run time—this is the *distribution shift* problem.  Therefore week 3 begins by **formally defining the data space**: the set of admissible feature vectors, their types (categorical, continuous), the temporal or spatial context, and any domain constraints that must hold.  

Once the space is fixed, we need a **baseline**—a simple, interpretable predictor that captures the strongest signal without overfitting.  Baselines are derived from the *bias–variance trade‑off*: a high‑bias but low‑variance model (e.g., mean prediction or logistic regression with limited features) guarantees a lower bound on performance.  If a complex neural network cannot beat this baseline, the whole pipeline is suspect.

The deeper principle here is **information bottleneck**: we want to compress the data into a representation that preserves only predictive information.  By explicitly constructing a baseline we quantify how much *new* information a sophisticated model must provide beyond what simple statistics already give us.

#### Non‑obvious insight  
A baseline built on *time‑aware* aggregation (e.g., using a moving average over the last k observations) often outperforms naive static baselines.  This shows that, in production, **temporal context is usually more informative than raw feature engineering**, and should be encoded early in the data definition phase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
