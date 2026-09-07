---
qid: ing_dad09c8f08__aws__local
question: 'Explain: How Serverless Works — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 442
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:56-05:00'
sources: []
---

**Answer – “How Serverless Works” (Amazon Way)**  

*Leadership Principles:* **Ownership** + **Dive Deep**  

**Situation & Task**  
I was tasked to replace a monolithic inference service that cost $12k/month and had 3‑hour latency spikes during peak traffic. I chose a serverless stack so the team could focus on ML, not infra.  

**Action**  
1. Decomposed the workflow into *stateless* Lambda functions (pre‑processing, model inference, post‑processing).  
2. Used **Amazon API Gateway** to expose REST endpoints; **S3** for raw input artifacts and **DynamoDB** for request metadata.  
3. Orchestrated with **AWS Step Functions** to manage retries & error handling.  
4. Leveraged **Amazon SageMaker Endpoint** as a managed model host, invoked from Lambda via the SDK.  

*Scalability:* Each Lambda scales automatically (≤10k concurrent invocations) and pays per 100 ms CPU burst. *Availability:* API Gateway + Step Functions provide built‑in retries; DynamoDB offers 99.999% SLA. *Cost:* Eliminated idle VM overhead—cost dropped from $12k to **$3.8k**/month (68% reduction).  

**Result**  
Latency fell from 3 h peaks to <200 ms average, and the team delivered two new features in half the time because they no longer managed servers.  

*Bar‑raiser takeaways:* I owned the migration end‑to‑end, dived deep into cold‑start mitigation (provisioned concurrency), quantified cost & performance gains, and iterated on a fallback strategy after an initial failure during the first live launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
