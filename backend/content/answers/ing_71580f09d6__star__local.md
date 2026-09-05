---
qid: ing_71580f09d6__star__local
question: 'Explain: can get to decide which implementation or'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 335
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:05-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a fraud‑detection model for credit card transactions. The existing rule‑based system had an accuracy of 92 % but flagged 15 % false positives, hurting customer satisfaction.

**Task:**  
I was tasked with choosing between two new implementations: a gradient‑boosted tree (XGBoost) and a deep neural network (TensorFlow). I needed to pick the one that would improve detection rates while keeping latency under 50 ms for real‑time decisions.

**Action:**  
First, I benchmarked both models on a held‑out dataset, measuring AUC, precision‑recall curves, and inference time. XGBoost achieved an AUC of 0.96 with a 30 ms inference time, while the neural net hit 0.97 but required 80 ms. I then profiled memory usage and conducted a cost‑benefit analysis for scaling on our GPU cluster versus CPU pool. Considering latency constraints and operational costs, I proposed XGBoost as the production model, added an online feature‑store for rapid data ingestion, and set up A/B testing to monitor drift.

**Result:**  
The deployed XGBoost model increased fraud detection accuracy by 4 % and reduced false positives from 15 % to 9 %, cutting customer complaints by 60 %. I learned that rigorous benchmarking and aligning technical metrics with business constraints are key to making the right ML implementation decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
