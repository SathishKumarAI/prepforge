---
qid: ing_2a39283bfa__think__local
question: 'Q120: Request-level model routing just went mainstream: one production
  router reports frontier quality at roughly 60% lower cost. Design the router. Where
  do the labels come from, and how do you avoid feedback loops?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 695
total_tokens: 917
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:28:50-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- *What is “frontier quality”*? Assume it’s a metric combining latency, accuracy, and resource usage.  
- *Which router*? A traffic‑shaping component that decides which model version to serve for each request.  
- *Cost baseline*: 60 % lower cost implies we can afford more compute per request but must still keep budgets tight.  
- *Labels source*: We need predictions of frontier quality per model; assume a separate labeling service or historical logs.

**2️⃣ Mental model / framework**  
Use a **reinforcement‑learning (RL) + supervised‑labeling pipeline**:  
- The router is an RL agent that learns to pick the best model for each request.  
- Supervised labels come from an offline *quality oracle* (e.g., a high‑accuracy ensemble or human review).  
- To avoid feedback loops, keep a clear separation between training data and live predictions, use *delayed reward* signals, and enforce *exploration–exploitation* balance.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action |
|------|--------|
|1|Collect request features (user ID, content type, context).|
|2|Query the labeling service for frontier quality scores of candidate models on a held‑out set.|
|3|Train a **quality predictor** (e.g., gradient boosted trees) that maps features → predicted frontier score per model.|
|4|Define the router policy: choose the model with highest predicted score *unless* it exceeds a cost budget; otherwise fall back to a cheaper baseline.|
|5|Periodically retrain the predictor on new labeled data, but **freeze** the routing logic during the update window to avoid oscillations.|
|6|Implement an *A/B test* buffer: for a small fraction of traffic, randomize model choice and collect real‑world quality metrics; feed these back into the labeling service.|
|7|Use **capped exploration rates** (e.g., epsilon‑greedy with epsilon=0.05) to prevent runaway loops where the router keeps favoring one high‑cost model because it just happened to perform well recently.|

**4️⃣ Common traps & how to avoid them**  
- *Cold start*: Start with a conservative baseline policy and gradually introduce learned decisions.  
- *Biased labels*: Ensure labeling service uses diverse data; cross‑validate with multiple oracles.  
- *Feedback loop*: If the router’s own predictions are used as labels, you’ll reinforce mistakes—keep training data independent.  
- *Cost drift*: Monitor cumulative cost per user segment; reset thresholds if budgets exceed limits.

**5️⃣ Sanity‑check & communicate**  
- Verify that the predictor’s RMSE on a held‑out set is below a threshold (e.g., 0.1).  
- Run an offline simulation: replay recent traffic through the router and compare total cost vs. baseline.  
- Present to stakeholders with a **dashboard** showing per‑segment cost savings, latency improvements, and label accuracy trends.

By keeping labeling independent, capping exploration, and periodically validating against real outcomes, the router can deliver frontier quality at ~60 % lower cost without falling into feedback loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
