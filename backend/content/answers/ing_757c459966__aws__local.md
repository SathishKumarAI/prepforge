---
qid: ing_757c459966__aws__local
question: 'Explain: Summary — Single Point of Failure (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 422
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:35-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑inference platform for a video‑analytics startup, we discovered that our inference endpoint was a **single point of failure (SPOF)**: a single EC2 instance hosted all model deployments. A power outage killed 30 % of nightly batch jobs and delayed real‑time alerts by 12 min.

**Action**  
I owned the problem and assembled a cross‑team squad. We re‑architected the system to **eliminate SPOF**:

1. **Stateless micro‑services** – moved inference code into Docker containers on ECS Fargate, enabling horizontal scaling.
2. **Elastic Load Balancer (ALB)** – front‑end traffic is distributed across multiple task groups.
3. **Auto Scaling & Spot Instances** – set minimum of 3 tasks; scale up to 15 during peak hours, keeping cost < $1k/month vs $4k previously.
4. **Amazon SageMaker Endpoint** – used Multi‑Model endpoints with model registry for rapid rollouts.
5. **Health Checks + Circuit Breaker** – ALB health probes and a custom Lambda monitor that triggers failover to a standby region if latency > 200 ms.

**Result**  
After deployment, system uptime rose from 93 % to 99.9 %. Batch job completion time dropped by 25 %, and real‑time alert latency became < 5 s (vs. 12 min). Operational cost fell 75 %.  

**Learning & Bar‑Raiser Insight**  
I practiced *Ownership* by taking end‑to‑end responsibility, *Dive Deep* to identify the root cause, quantified impact with clear metrics, and documented a post‑mortem that highlighted trade‑offs between latency, cost, and resilience—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
