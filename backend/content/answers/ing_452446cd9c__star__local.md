---
qid: ing_452446cd9c__star__local
question: 'Explain: On-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 329
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:06-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were deploying a reinforcement‑learning model that advised real‑time credit limits for loan applications. The production system was running an on‑policy agent that updated its policy every minute based on new user interactions, but the inference latency of the full model (≈150 ms) exceeded our 80 ms target.

**Task:** I had to reduce inference time without sacrificing the agent’s ability to adapt to evolving market conditions—essentially distill the live on‑policy model into a lightweight student that could keep up with the same data stream.

**Action:** I implemented an on‑policy distillation pipeline: every minute, the current policy generated soft action probabilities for the batch of recent interactions; these served as targets for a compact neural network trained via Kullback–Leibler loss. To preserve exploration, I added an entropy regularizer and scheduled the student’s learning rate to decay gradually. We used TensorRT for deployment, which cut inference from 150 ms to 45 ms. The distillation process ran in parallel with policy updates so the teacher never stalled.

**Result:** After three weeks, we achieved a 70% reduction in latency while maintaining a 1.8% improvement in credit risk accuracy over the baseline. I learned that continuous, on‑policy distillation can bridge the gap between adaptive RL agents and real‑time constraints without a full retraining cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
