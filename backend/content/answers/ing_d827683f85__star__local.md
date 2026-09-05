---
qid: ing_d827683f85__star__local
question: 'Explain: Lower the timeouts, and let the service fail early'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 282
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:20-05:00'
sources: []
---

**Situation:** In a real‑time fraud detection microservice at a fintech startup, we were seeing an average latency of 3 s during peak hours, pushing our overall SLA past the 95th percentile target of 2 s.  

**Task:** Reduce the service’s response time while maintaining high accuracy and avoid cascading failures across downstream services.  

**Action:** I started by profiling with Grafana + Jaeger; most slow paths were due to a 5‑second timeout on an external ML model inference call that sometimes hung for up to 12 s. I lowered that timeout to 1 s, added a circuit breaker (using Resilience4j) and implemented a fallback that returned a “safe” prediction based on the last known good model. I also re‑architected the inference layer to use a lightweight ONNX runtime locally for critical paths, while delegating heavier batch jobs to a separate worker queue.  

**Result:** Latency dropped from 3 s to 1.2 s (95th percentile), keeping the SLA within limits; error rate stayed below 0.5%. I learned that early failure not only protects downstream services but also gives us more reliable metrics for model health monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
