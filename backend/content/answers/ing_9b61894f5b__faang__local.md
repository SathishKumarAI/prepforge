---
qid: ing_9b61894f5b__faang__local
question: 'Explain: Case Study 05 - Content Moderation Pipeline at 10M+ Items/Day'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 540
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:28-05:00'
sources: []
---

**Clarify**  
We’re asked to design a content‑moderation pipeline that handles **>10 M items per day** (posts, comments, images). Key assumptions:  
1. Items arrive as a stream with roughly uniform load.  
2. Moderation must be *near real‑time* (≤ 5 s per item) and support policy updates in minutes.  
3. Accuracy > 95 % precision/recall is required; false positives trigger manual review.

**Approach**  
1. **Ingestion layer** – Kafka topics partitioned by hash of user ID to ensure ordering per user.  
2. **Feature extraction service** – stateless micro‑service that pulls from Kafka, runs NLP & image‑analysis models, emits a feature vector.  
3. **Scoring engine** – distributed, model‑agnostic layer (e.g., TensorFlow Serving) that scores items; uses a cache for hot policies.  
4. **Decision layer** – threshold‑based policy manager; if score > T₁ → auto‑delete; T₂ < score ≤ T₁ → flag; otherwise pass.  
5. **Audit & feedback loop** – flagged items go to a human queue (SQS) and results feed back into an online learning pipeline.

**Depth**  
- **Throughput**: Kafka can sustain > 50k msgs/s per broker; with 4 brokers we get ~200k msg/s, enough for 10 M/day.  
- **Latency**: Feature extraction (~1 ms/item) + scoring (~2 ms/item) → < 5 s total.  
- **Scalability**: Autoscale micro‑services based on queue depth; use Kubernetes HPA.  
- **Model updates**: CI/CD pipeline that deploys new models to a *canary* group, monitors metrics, then rolls out.

**Edge Cases**  
- Sudden traffic spikes → backpressure via Kafka’s `max.poll.records`.  
- Model drift → monitor precision/recall; trigger retraining.  
- Highly sensitive content → bypass auto‑delete and force human review.

**Optimize & Communicate**  
Improvements: use GPU‑accelerated inference for image moderation, apply model distillation to reduce latency. Explain trade‑offs: more GPUs = higher cost vs lower latency. Highlight that this architecture meets FAANG’s scalability, reliability, and data‑driven decision criteria while keeping the system maintainable and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
