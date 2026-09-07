---
qid: ing_b3c83b54db__aws__local
question: 'Explain: Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 444
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:22-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with redesigning the recommendation engine that served ~2 M users daily. The existing monolithic model could not keep up during peak traffic, so I had to decide between vertical (more powerful instances) and horizontal (adding replicas) scaling while keeping cost under $200k/yr.

**Action – Technical Design**  
I chose **horizontal scaling** because the inference workload is stateless and embarrassingly parallel.  
* **Model Serving:** Amazon SageMaker Endpoint with an autoscaling policy (min 2, max 20 instances).  
* **Request Routing:** API Gateway + Lambda for request validation; Lambda forwards to SageMaker via the endpoint’s traffic weight.  
* **Cache Layer:** Amazon ElastiCache Redis to store top‑10 recommendations per user, reducing inference calls by ~70%.  
* **Monitoring & Autoscaling:** CloudWatch metrics (latency, error rate) trigger target tracking scaling.  

I also implemented a “cold start” warm‑up routine that preloads the model into memory on new instances, cutting latency from 250 ms to <80 ms.

**Result**  
- *Availability* rose from 97% to >99.9% during flash sales.  
- *Cost* dropped by 35 % (from $260k to $170k) because we avoided over‑provisioning expensive instances.  
- *User satisfaction* (NPS) improved from 45 to 62 in the first month.

**Reflection – Leadership Principles**  
I owned the problem end‑to‑end, **dove deep** into latency traces, and took a **bias for action** by prototyping within a week. The bar‑raiser would note my quantitative impact, clear trade‑off analysis (cost vs. availability), and learning loop: after the first month I automated failure alerts to reduce mean time to recovery from 12 h to <30 min.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
