---
qid: ing_3602527e78__aws__local
question: 'Explain: Best Practices for Implementing Service Discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 495
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:51-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑function team that built an end‑to‑end ML inference platform on AWS for a retail client. The service needed to route traffic from the front‑end API gateway to multiple model endpoints (TensorFlow Serving, SageMaker). We had to guarantee low latency (< 100 ms), high availability, and rapid A/B testing of new models.

**Action**  
1. **Adopted AWS Cloud Map + App Mesh** for dynamic service discovery. Each inference container registered its endpoint with Cloud Map; App Mesh automatically refreshed routing tables on deregistration/health‑check failures.  
2. **Implemented weighted target groups** in the Envoy sidecar to support traffic splitting (e.g., 70 % baseline model, 30 % new model) without code changes.  
3. **Used SageMaker Model Registry + Lambda triggers** to auto‑register new models in Cloud Map upon version promotion.  
4. **Enabled Circuit Breaker & Retries** at the mesh level to isolate failing pods and keep SLA > 99.9%.  
5. **Monitored via X-Ray & Prometheus**; set up alerts for latency spikes or registration failures.

**Result**  
- Reduced model rollout time from 3 days to < 1 hour.  
- Latency dropped by 27 % (average 78 ms vs 104 ms).  
- Achieved 99.97 % uptime during a simultaneous model upgrade, meeting the client’s SLA.  

**Leadership Principles Reflected**  
*Customer Obsession*: Delivered faster, more reliable predictions for end‑users.  
*Ownership*: Took full responsibility from design through deployment and monitoring.  

**Bar‑raiser Takeaway**  
- Demonstrated **ownership** by automating discovery and rollback.  
- Showed **deep technical dive** into App Mesh, Cloud Map, and health checks.  
- Quantified impact with real latency & SLA numbers.  
- Learned from a failed rollout that caused a 15 % latency spike; fixed it by adding circuit breakers and retraining the mesh configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
