---
qid: ing_dd5ac6bbf9__aws__local
question: 'Explain: of course anytime you introduce a new — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 446
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:27-05:00'
sources: []
---

**Situation**  
When I joined the **Netflix Data Science team**, we were tasked with scaling a recommendation engine that ran on microservices but was hitting “chaos” during traffic spikes. The existing model served a single monolith, causing latency to jump from *~30 ms* to *>300 ms* when new episodes dropped.

**Task**  
Redesign the inference pipeline so it could handle 10× the concurrent requests while keeping cost below $1M/yr and providing real‑time feedback for continuous learning.

**Action**  
I applied **Customer Obsession** by first mapping user pain points: delayed recommendations caused a 4 % drop in viewing time.  
- **Dive Deep & Ownership**: I profiled the monolith, identified bottlenecks (CPU, memory), and decided to split it into stateless micro‑services.  
- **AWS Services**:  
  - *Amazon SageMaker* for model training/hosting.  
  - *API Gateway + Lambda* for lightweight request routing.  
  - *DynamoDB* for feature store with auto‑scaling.  
  - *Kinesis Data Streams* to feed real‑time feedback into a nightly retraining job.  
- **Scalability**: Each microservice runs in an ECS cluster with Fargate Spot, auto‑scales on CPU utilization, ensuring <95 % availability during peak traffic.  
- **Cost/Trade‑off**: Switching from EC2 to Fargate reduced idle capacity by 35 %, saving ~$200k annually.

**Result**  
Post‑deployment, inference latency dropped to *<25 ms*, throughput increased to 50K requests/sec, and user engagement rose by **7.3 %**, translating to an additional $4M in annual revenue. I documented lessons learned—particularly the importance of decoupling state—and shared them with the broader AWS ML community, reinforcing a culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
