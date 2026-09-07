---
qid: ing_1d91ee5370__faang__local
question: 'Explain: Graceful Degradation — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 444
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:46-05:00'
sources: []
---

**Graceful Degradation in ML‑Driven Systems**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking how an ML service can keep working even when some components fail—e.g., a model, GPU cluster, or data store.  We’ll assume the system has multiple models (primary + fallback), a feature‑store backend, and a stateless inference API.” |
| **Approach** | 1️⃣ Detect failure early via health checks. <br>2️⃣ Route traffic to an alternate model or cached predictions. <br>3️⃣ Fall back to rule‑based logic if all models are down. <br>4️⃣ Log the degradation for post‑mortem and auto‑retraining.” |
| **Depth** | • **Health monitoring:** use Prometheus alerts on latency, error rates, and resource usage.<br>• **Model routing:** a lightweight controller (e.g., Envoy) can switch to a “fallback” model stored in S3 or a lighter GPU cluster. <br>• **Graceful degradation policy:** define thresholds for acceptable latency; if exceeded, return cached or rule‑based output with a `X-ML-Degraded: true` header.<br>• **Complexity:** O(1) routing overhead; training of fallback model may be O(n log n) but is offline. |
| **Edge cases** | • Data drift causing the fallback to be wrong – test on synthetic drift scenarios.<br>• Cold start for a new model cluster – pre‑warm with dummy requests.<br>• Simultaneous failure of all models – verify rule‑based fallback accuracy. |
| **Optimize & communicate** | “We can cache predictions per user/session, reducing GPU load during degradation. I’d explain the trade‑off: higher latency vs. higher availability. In a presentation, I’d use a diagram showing traffic flow and fallback paths, then walk through an example failure scenario to show how the system stays online.” |

*Word count: ~180 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
