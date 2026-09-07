---
qid: ing_2c6c9c3b9c__aws__local
question: What are some of the common load balancing solutions?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 442
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:29-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role as a ML Ops Engineer at a SaaS startup, I was asked to scale our inference service that served ~200k requests/day with <10 ms latency.  
**Situation:** The existing single‑node Flask app crashed under peak traffic, violating *Customer Obsession* and *Deliver Results*.  
**Task:** Implement a production‑ready load‑balancing layer for the model endpoint while keeping cost below $2k/month.  
**Action:**  
1. **AWS ELB (Application Load Balancer)** – distributes HTTP(S) requests to multiple EC2 instances running Docker containers with the inference code. I configured *cross‑zone* and *sticky sessions* off to ensure true statelessness.  
2. **Auto Scaling Group (ASG)** – scales 2–10 instances based on CPU/latency CloudWatch alarms, guaranteeing high availability (99.95%).  
3. **AWS Lambda + API Gateway** – as an alternative for burst traffic, I added a serverless fallback that routes to the same ELB when queue depth exceeds 200 requests, reducing cost during low load.  
4. **Amazon SageMaker Endpoints** – for heavy models, I spun up a real‑time endpoint with GPU instances; ELB forwards a subset of traffic after performing model version checks (blue/green).  

**Result:** Traffic spikes were handled gracefully; latency dropped from 150 ms to 8 ms, and the system sustained 400k req/day without outages. Costs stayed at $1.7k/month, 15% below budget.  
*Bar‑raiser notes:* I demonstrated *Ownership* by designing end‑to‑end resilience, *Dive Deep* through fine‑grained CloudWatch metrics, quantified impact (latency + cost), and learned from a failed initial trial where we overprovisioned GPU instances—leading to the hybrid ELB/Serverless strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
