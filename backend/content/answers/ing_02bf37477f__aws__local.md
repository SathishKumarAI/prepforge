---
qid: ing_02bf37477f__aws__local
question: 'Explain: Endpoint: DELETE /backends/{backend_id} — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 494
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:26-05:00'
sources: []
---

**Situation & Task (S)**  
I was leading the backend team at a SaaS startup that exposed `DELETE /backends/{backend_id}` to remove ML model deployments. When our user base grew from 10K to 1M active requests per day, the API hit a bottleneck: each delete spooled an expensive “cleanup job” and caused spikes in latency (200 ms → 2 s). The leadership goal was to keep < 99.9 % availability while reducing cost by 30 %.

**Action & Technical Design (A)**  
I proposed an **Elastic Load Balancer (ELB) + Lambda‑Edge** pattern:

1. **Application Load Balancer (ALB)** fronts the API, routing `DELETE` to a *scale‑by‑request* target group of **AWS Fargate** tasks that run a lightweight “deletion orchestrator”.
2. The orchestrator immediately acknowledges with 202 and triggers an **Amazon EventBridge** rule that invokes a **Lambda** function.
3. Lambda publishes the heavy cleanup job to **SQS**, which feeds into an **ECS‑Fargate** worker pool (auto‑scales on queue depth).  
4. Results are stored in **DynamoDB**; the orchestrator polls for status and returns 200/404 as needed.

This decouples request handling from cleanup, giving instant ACKs, linear scaling, and cost isolation.  

**Result & Metrics (R)**  
* Latency dropped to < 80 ms (99th percentile) during peak load.  
* Availability hit **99.97 %** in the first month post‑launch.  
* Operational cost fell 32 % because Lambda’s pay‑as‑you‑go model replaced idle Fargate tasks.

**Learning & Ownership (T)**  
I owned the redesign, ran a live migration with zero downtime, and documented rollback procedures. Post‑mortem analysis showed that early caching of deletion metadata reduced unnecessary SQS traffic by 18 %. This experience reinforced *Ownership* and *Dive Deep*: we didn’t just patch latency; we re‑architected to meet real customer needs while keeping the system lean and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
