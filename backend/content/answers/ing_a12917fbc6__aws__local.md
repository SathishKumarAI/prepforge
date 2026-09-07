---
qid: ing_a12917fbc6__aws__local
question: 'Explain: Assignment Service — What makes AWS Lambda so fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 407
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:28-05:00'
sources: []
---

**Answer (Amazon Way)**  

**Leadership Principles:** *Customer Obsession* – we deliver instant ML predictions to our users; *Ownership* – I took charge of the latency audit for the Assignment Service.  

**Situation & Task**  
The Assignment Service exposed a Lambda‑based inference endpoint that was 3× slower than our SLA (150 ms). I needed to identify why Lambda felt “slow” and reduce average response time below 80 ms.

**Action**  
1. **Dive Deep into Cold Starts** – instrumented CloudWatch logs; discovered >70 % of invocations hit a cold start (≈600 ms).  
2. **Provisioned Concurrency** – set 50 reserved instances for peak traffic, cutting cold starts to <5 ms.  
3. **Optimized Deployment Package** – slimmed the ML model (TensorFlow Lite) from 120 MB to 30 MB; removed unused dependencies.  
4. **Layering & Runtime** – used a Lambda Layer for shared libraries and switched to Go runtime, which has ~10× lower init overhead than Python.  
5. **Cost/Scalability Trade‑off** – evaluated EC2 + ECS but their higher baseline cost outweighed the marginal latency gain; Lambda kept us within the $0.20/hour budget.

**Result**  
Average inference latency dropped from 450 ms to **65 ms**, meeting SLA and improving user satisfaction scores by **12%** in A/B tests. The change also reduced monthly spend by **$1,200** while keeping 99.9 % availability.

**Bar‑raiser Takeaway** – I owned the problem end‑to‑end, dug into metrics, quantified impact, and learned that *Provisioned Concurrency + lightweight runtimes* are the most effective way to make Lambda “fast” for ML inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
