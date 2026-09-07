---
qid: ing_dee3dd4253__aws__local
question: 'Explain: Stateless Architecture — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 462
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:36-05:00'
sources: []
---

**Scenario:**  
While leading the ML‑ops team at a fintech startup, we had to decide whether our inference service should be stateful (caching embeddings per user) or stateless (fresh compute each request).  

**Task:**  
Reduce latency by 30 % and cost by 20 % for the high‑traffic “fraud‑detector” endpoint without compromising data privacy.

**Action:**  
1. **Dive Deep into Metrics** – Collected request logs, cache hit ratios, and CPU usage from CloudWatch over a month.  
2. **Design Choice** – Opted for a *stateless* Lambda + SageMaker Endpoint architecture:  
   - **Lambda (Python)** receives the event → pulls only necessary user metadata from DynamoDB (partition key = user_id).  
   - **SageMaker Real‑time Inference** hosts the model; no session state is stored.  
3. **AWS Services & Trade‑offs** –  
   - *Amazon API Gateway* + *Lambda*: auto‑scales, pay per invocation → lower cost vs. EC2.  
   - *DynamoDB*: low‑latency reads for user context, avoiding in‑memory cache drift.  
   - *SageMaker Endpoint*: provisioned concurrency ensures 99.9 % availability; we selected a **ml.m5.xlarge** instance to balance price and throughput.  
4. **Testing & Rollout** – A/B test showed 32 % latency reduction, 18 % cost savings, and no loss in accuracy (AUC unchanged).

**Result:**  
Delivered the stateless inference pipeline that met SLA targets while freeing up 1.2 TB of EBS cache space for other services.  

**Bar‑raiser notes:**  
- Demonstrated *Ownership* by taking end‑to‑end responsibility.  
- Used *Dive Deep* to quantify trade‑offs and choose the right AWS mix.  
- Learned from initial stateful prototype that added latency and complexity, reinforcing the value of stateless design for high‑scale ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
