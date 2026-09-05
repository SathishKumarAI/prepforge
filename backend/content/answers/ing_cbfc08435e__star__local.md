---
qid: ing_cbfc08435e__star__local
question: 'Explain: Implementation — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:54-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had built an on‑policy reinforcement learning model that optimized credit‑risk scoring in real time. The production latency was 250 ms per inference, which exceeded our SLA of 150 ms and caused queue backlogs during peak hours.

**Task:**  
I needed to reduce inference latency by at least 40% while preserving the policy’s accuracy (within 1 % RMSE) so we could scale to a million users without compromising risk predictions.

**Action:**  
I implemented on‑policy distillation: first, I logged state‑action pairs from the live agent for 48 h. Then I trained a lightweight neural network (3‑layer MLP with 128 units each) to mimic the Q‑values of the original model using mean‑squared error loss plus a Kullback‑Leibler regularizer on action probabilities. I used TensorFlow 2.x, mixed precision, and a custom data pipeline that cached batches in GPU memory. After iterative hyper‑parameter sweeps (learning rate 1e-4, temperature 0.5), I deployed the distilled model behind an A/B testing layer.

**Result:**  
Inference latency dropped to 90 ms—an 64% reduction—and accuracy stayed within 0.8 % RMSE of the original. The system handled a 3× increase in concurrent users with no SLA violations. I learned that distillation can be a practical bridge between complex RL policies and production constraints, especially when paired with careful data collection and regularization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
