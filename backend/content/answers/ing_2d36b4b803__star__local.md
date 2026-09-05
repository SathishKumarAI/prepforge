---
qid: ing_2d36b4b803__star__local
question: 'Explain: Related designs problems — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 353
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:29-05:00'
sources: []
---

**Situation:**  
I was working on a recommendation engine for a startup that wanted to compete with big players like Zomato and Swiggy. Our user base had grown to 120 k active users, but the click‑through rate (CTR) on suggested restaurants dropped from 12% to 7% after we rolled out a new menu‑item taxonomy.

**Task:**  
Restore the CTR to at least 11% while keeping recommendation latency under 200 ms and ensuring the model could adapt to weekly menu changes without retraining from scratch.

**Action:**  
I redesigned the pipeline around an incremental learning framework using LightGBM with online gradient updates. First, I engineered a feature set that combined user historical click patterns, restaurant popularity scores, and contextual signals (time of day, weather). To handle the dynamic taxonomy, I introduced a hierarchical embedding layer that mapped new menu items to existing clusters in real time. For latency, I deployed the model on an optimized ONNX runtime and used batched inference across user sessions. Finally, I set up a continuous evaluation loop with A/B testing, feeding performance metrics back into the online learning scheduler.

**Result:**  
Within three weeks, CTR rose to 11.8%, a 68% lift over the drop. Latency stayed below 180 ms, and the system handled a 30% increase in new menu items without retraining. I learned that combining hierarchical embeddings with online boosting can deliver fast, adaptable recommendations at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
