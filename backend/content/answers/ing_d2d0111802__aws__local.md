---
qid: ing_d2d0111802__aws__local
question: 'Explain: Amazon API Gateway — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 516
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:18-05:00'
sources: []
---

**Amazon API Gateway – Server‑less ML Inference**

**Situation & Task (S)**  
I led a cross‑functional team that had to expose an on‑premises TensorFlow model as a REST endpoint for mobile apps, with < 200 ms latency and 10k QPS during peak hours. The goal was to replace the monolithic Java servlet that cost $120K/month in EC2.

**Action (A)**  
1. **Design:**  
   * API Gateway → Lambda proxy integration → SageMaker Endpoint.  
   * Used **AWS WAF** + **Shield Advanced** for DDoS protection, and **Amazon CloudWatch Logs** for observability.  
   * Enabled **Lambda concurrency limits** and **reserved capacity** on the SageMaker endpoint to guarantee throughput.  
2. **Implementation:**  
   * Deployed Lambda in **us‑east‑1** with a 512 MB runtime; added an IAM role that only allows `sagemaker:InvokeEndpoint`.  
   * Configured API Gateway throttling (1000 RPS burst, 800 steady) and caching (`TTL=60s`) to reduce SageMaker calls.  
3. **Optimization:**  
   * Measured latency via CloudWatch; after enabling caching the average request time dropped from 350 ms to 180 ms (≈ 50% improvement).  
   * Cost analysis: EC2+load balancer → $120K/month; new serverless stack → $12K/month (~90% savings).

**Result (R)**  
The solution handled 15k QPS during a marketing campaign, maintained < 200 ms latency, and reduced operational overhead by 70%. The team adopted this pattern for 4 more services, saving an additional $60K annually.

---

### Leadership Principles

* **Ownership:** Took full responsibility for architecture, cost, and performance.  
* **Dive Deep & Bias for Action:** Quickly profiled bottlenecks, tuned caching, and iterated on concurrency settings.  

**Bar‑raiser takeaways:**  
- Demonstrated end‑to‑end ownership and measurable impact.  
- Showed deep technical knowledge (Lambda, API Gateway, SageMaker) while balancing cost and scalability.  
- Learned from initial latency spikes by adding cache and reserved capacity—clear evidence of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
