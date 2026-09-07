---
qid: ing_18027b5fb6__faang__local
question: 'Explain: What’s expected at different levels — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 435
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:40:17-05:00'
sources: []
---

**Clarify**  
We’re asked what interviewers expect from a candidate when designing a mobile‑system ML feature (e.g., on‑device recommendation or image classification). Assume the system must run on iOS/Android, respect battery and latency constraints, and scale to millions of users. I’d confirm: is this an offline batch model or real‑time inference? Are we allowed cloud calls? What privacy rules apply?

**Approach**  
1. **Problem framing** – define inputs, outputs, accuracy goals, latency budget, power budget.  
2. **Data pipeline** – collection → preprocessing → training (cloud) → model compression.  
3. **Model selection & quantization** – lightweight architectures (MobileNetV2, TinyML).  
4. **Deployment** – Core ML/TF Lite, caching, on‑device inference.  
5. **Monitoring & updates** – telemetry, A/B testing, OTA re‑training.

**Depth**  
- *Latency*: target <50 ms; use GPU/NNAPI acceleration.  
- *Memory*: ≤30 MB model size, 64‑bit float32 → int8 quantization.  
- *Power*: batch inference during idle, wake‑up only on user interaction.  
- *Privacy*: data never leaves device; differential privacy for telemetry.  
Complexity: training O(N·E), inference O(1) per request; trade‑off between accuracy and size.

**Edge Cases**  
- Network loss → fallback to cached model.  
- Device heterogeneity → use adaptive batching.  
- Model drift → schedule periodic retraining; monitor performance drops.

**Optimize & Communicate**  
Explain how quantization reduces memory but may hurt edge cases; justify using 8‑bit per channel scaling. Show a diagram of data flow, highlight where you’d log metrics. Conclude with how this design balances user experience, resource constraints, and maintainability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
