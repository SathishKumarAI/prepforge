---
qid: ing_d827683f85__aws__local
question: 'Explain: Lower the timeouts, and let the service fail early'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 375
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:14-05:00'
sources: []
---

**Situation / Task**  
While redesigning our recommendation engine’s *Predict* micro‑service (AWS Lambda + SageMaker), the team observed a 4 s average latency but a 15 % error rate on heavy traffic spikes. The goal was to cut cost and improve user experience.

**Action**  
1. **Set a hard timeout of 800 ms** in API Gateway → Lambda, forcing early failure for slow requests.  
2. Added a *fallback* path that returns a cached “generic” recommendation instead of waiting for the model.  
3. Instrumented CloudWatch metrics to capture success/failure rates per timeout bucket.  
4. Used **AWS X-Ray** to dive deep into cold‑start vs. compute delays, and tuned Lambda concurrency with *Provisioned Concurrency* only during peak hours.

**Result**  
- Latency dropped from 4 s to < 0.8 s for 95 % of requests.  
- Error rate fell from 15 % to 1.2 %.  
- Cost savings: $12,000/month by reducing idle Lambda invocations and SageMaker batch calls.  
- User satisfaction (NPS) rose 7 points.

**Reflection**  
This exemplifies **Ownership**—I owned the end‑to‑end flow—and **Dive Deep**, using X-Ray to isolate the root cause. The early‑failure strategy trades a small chance of missing a perfect recommendation for predictable, low‑cost service behavior—a classic *Bias for Action* decision that delivered measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
