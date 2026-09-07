---
qid: ing_8e957634be__aws__local
question: 'Explain: 4.1 Redundancy — Single Point of Failure (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 476
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:25-05:00'
sources: []
---

**Situation & Task**  
While leading a fintech start‑up, we built a real‑time fraud‑detection pipeline that processed 200 k events/sec. The initial monolith ran on a single EC2 instance; a failure would halt all downstream services and cost us ~\$15k/day in revenue loss.

**Action (Design)**  
1. **Micro‑service decomposition** – split the pipeline into *ingest*, *analysis*, and *alert* services, each deployed as an **AWS Fargate** task behind a **ALB** with health checks.  
2. **Multi‑AZ architecture** – launch tasks in two AZs; ALB automatically routes traffic away from a failed AZ (eliminating SPOF).  
3. **Event replay via Kinesis Data Streams** – store events for 7 days, enabling recovery without data loss.  
4. **Auto Scaling & Spot Fleet** – set target CPU 50%; use Spot instances to cut costs by 30% while maintaining capacity.  
5. **Canary releases with AWS CodeDeploy** – deploy new versions to a small subset of tasks first, rollback if latency >10 ms.

**Result**  
- Zero downtime in the subsequent 12‑month period (SLO: 99.999%).  
- Cost savings of 30% on compute while maintaining 200 k events/sec throughput.  
- Customer churn dropped from 4.2 % to 0.8 % due to uninterrupted fraud protection.

**Reflection**  
*Ownership*: I owned the end‑to‑end reliability and drove cross‑team adoption.  
*Dive Deep*: We logged every task’s health metrics, analyzed failure patterns, and tuned scaling policies accordingly.  
*Learning*: Early trials showed that a single ALB listener caused bottlenecks; we switched to **Application Load Balancer with target groups**, a lesson that informed later multi‑service deployments.

> *Key Leadership Principles:* **Ownership** (owning reliability), **Dive Deep** (analyzing failure data), and **Deliver Results** (meeting SLOs while cutting costs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
