---
qid: ing_0835dd489e__star__local
question: 'Explain: Compensation Signals — Cursor Software Engineer Interview: Process,
  Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 372
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:16-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the recommendation engine for an e‑commerce platform that had just rolled out a new dynamic pricing feature. After the rollout, click‑through rates dropped by 12 % and we saw a spike in negative feedback about “irrelevant suggestions.”  

**Task:**  
I needed to identify why the model’s predictions were misaligned with user intent and restore CTR within two weeks while keeping latency under 100 ms.

**Action:**  
First, I logged the raw feature vectors and prediction scores for each request. Using a small Spark job, I plotted the distribution of prediction confidence against actual purchase outcomes and noticed a systematic bias: higher‑priced items were over‑predicted regardless of user context. I introduced a *compensation signal*—a learnable weight that adjusted the logits based on price elasticity derived from historical conversion data.  
I then trained a lightweight XGBoost model to predict this compensation term per item, feeding it into the inference pipeline as an additive bias. To keep latency low, I serialized the model with ONNX and served it via gRPC. Finally, I added A/B tests to monitor CTR, revenue lift, and session duration.

**Result:**  
Within ten days the CTR rebounded by 9 % and overall conversion increased by 4 %. The compensation signal reduced prediction bias by 35 %, and we maintained sub‑100 ms latency. This exercise taught me how to quantify model drift, craft targeted signals, and deploy them with minimal overhead in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
