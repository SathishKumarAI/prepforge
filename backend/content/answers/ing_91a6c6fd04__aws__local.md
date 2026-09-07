---
qid: ing_91a6c6fd04__aws__local
question: 'Explain: Troubleshooting by Layer — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 454
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:03-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a ML inference service that went down during peak traffic. The SLA was 99.9 % latency <200 ms for 10 k concurrent users.  

**Action (Dive Deep + Ownership)**  
I applied *Troubleshooting by Layer* using the OSI model:  

| Layer | Tool / Metric | Fix |
|-------|---------------|-----|
| **Application** | CloudWatch Logs & OpenTelemetry traces | Removed a blocking `ThreadPoolExecutor` that had 8 workers; increased to 32 and added async inference. Resulted in 35 % throughput lift. |
| **Transport** | VPC Flow Logs, ENI MTU | Increased MTU from 1500 to 9000 (Jumbo Frames) on the EFS mount; reduced packet loss by 4×. |
| **Network** | Route53 latency metrics, NLB health checks | Switched from single AZ to dual‑AZ Network Load Balancer with cross‑zone load balancing – 99.999 % availability. |
| **Physical** | EC2 instance type & placement groups | Migrated `ml.m5.large` to `ml.g4dn.xlarge` with GPU, plus a dedicated host for deterministic scheduling. |

I orchestrated the changes via Terraform and Blue/Green deployment on ECS Fargate.  

**Result (Deliver Results)**  
Latency dropped from 380 ms to 140 ms, error rate fell below 0.01 %, and cost‑per‑inference decreased by **18 %** due to better instance utilization. The incident was closed within 3 hrs, and the post‑mortem included a “lessons learned” section that informed our next ML model rollout.  

> *Leadership Principles:* Customer Obsession (fast, reliable inference), Ownership (end‑to‑end fix), Dive Deep (layer‑by‑layer analysis), Deliver Results (quantified latency & cost gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
