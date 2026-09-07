---
qid: ing_c1da5708d6__aws__local
question: 'Explain: Illustration — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 406
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:22-05:00'
sources: []
---

**Situation / Task**  
While leading the “Thinking Machines” ML lab at Amazon, we were asked to reduce inference latency for a real‑time recommendation model that ran on an on‑policy distillation pipeline. The production model was a 3‑layer Transformer running on 8 gpus; end‑to‑end latency hit 200 ms, exceeding the 120 ms SLA for user interactions.

**Action**  
1. **Own & Dive Deep** – I scoped the problem by profiling CPU/GPU usage and measuring the time spent in each component (tokenization, attention, softmax).  
2. **Design a distilled surrogate** – Trained a lightweight teacher‑student network: the student was a 1‑layer LSTM that learned to mimic the Transformer’s logits on the same on‑policy data stream. I used AWS SageMaker Pipelines to orchestrate nightly training jobs and SageMaker Neo for model compilation.  
3. **Deploy with high availability** – Packaged the distilled model as a Lambda layer behind an Application Load Balancer, using Amazon ECS Fargate for burst capacity during peak hours.  
4. **Bias for Action & Invent & Simplify** – Implemented an A/B test harness in CloudWatch to automatically roll back if latency exceeded 110 ms or accuracy dropped >0.5%.

**Result**  
- Latency dropped from **200 ms → 65 ms** (68% reduction).  
- CPU cost fell by **55 %**, GPU usage dropped to zero, and we saved ~$12k/month on compute.  
- Model accuracy loss was <0.3%, well within the SLA tolerance.

**Bar‑raiser notes** – I demonstrated ownership by taking end‑to‑end responsibility, deep technical dive into profiling data, quantified impact (latency & cost), and a safety net that learned from potential failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
