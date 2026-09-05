---
qid: ing_d33f5389b6__star__local
question: 'Explain: Distill on real production traces, not synthetic data'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:56-05:00'
sources: []
---

**Situation** – At my last company we built a recommendation engine that ran in real‑time on our e‑commerce platform. The model was trained on a large synthetic dataset because we didn’t have enough labeled customer interactions, but once it hit production the accuracy dropped 15 % compared to our internal benchmarks.

**Task** – I needed to improve the model’s performance without retraining from scratch and ensure it could handle live traffic with minimal latency. The goal was to use real user traces for distillation so the student network would learn the exact distribution of noisy, sparse clicks we see in production.

**Action** – First, I set up a lightweight telemetry pipeline that streamed anonymized session logs (clicks, dwell time, cart additions) into a Kafka topic. Using Spark Structured Streaming, I extracted 24 h windows of user behavior and fed them into the teacher model to generate soft labels. Then I trained a smaller student network on these real‑world examples, applying temperature scaling to soften the logits and using knowledge‑distillation loss alongside cross‑entropy. I also added a regularization term that penalized deviations from the teacher’s feature representations to preserve hierarchy.

**Result** – After deploying the distilled model, we saw a 9 % lift in click‑through rate and a 12 % reduction in prediction latency. The key takeaway was that distilling on authentic production traces captures noise patterns and edge cases synthetic data misses, leading to more robust models at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
