---
qid: ing_22bd7d7d3a__aws__local
question: 'Explain: High-Level Design — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:17-05:00'
sources: []
---

**Situation / Task** – At my previous company we had to expose a new ML inference API (≈ 10 k RPS) while guaranteeing < 200 ms latency and 99.9 % availability.  
**Action** – I architected an **Elastic Load Balancer (ELB)**‑backed solution with the following components:

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingress | *Application Load Balancer* (ALB) | Path‑based routing to versioned endpoints; TLS termination. |
| Compute | *Amazon ECS Fargate* + *ECR* | Serverless containers, auto‑scaling on CPU/Memory metrics. |
| Cache | *ElastiCache for Redis* | Short‑lived inference results (≤ 5 s) to cut GPU load by 60%. |
| Monitoring | *CloudWatch Alarms*, *X-Ray* | Latency + error thresholds trigger auto‑scale and circuit‑breaker logic. |

**Dive Deep & Ownership** – I wrote a custom Lambda that, on each scaling event, pulls the latest model artifact from S3 (using **S3 Event Notifications**) and redeploys containers without downtime. The Lambda logs are sent to CloudWatch Logs for audit.

**Result** – After launch, we saw a 45 % reduction in GPU usage, cost savings of $12k/month, and latency dropped from 350 ms to 190 ms (95th percentile). Availability hit 99.97 %.

**Bar‑raiser cues** – I emphasized ownership (automatic redeploy), depth (caching trade‑offs, circuit breaking), quantified impact (cost & latency numbers), and a post‑mortem that led us to shift from ALB to NLB for TCP‑only workloads when we added streaming inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
