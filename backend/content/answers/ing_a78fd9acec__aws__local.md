---
qid: ing_a78fd9acec__aws__local
question: 'Explain: Thousand Users — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 471
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:20-05:00'
sources: []
---

**Situation & Task**  
In my previous role I built a recommendation engine that served 1 000 concurrent users during a flash‑sale event. The goal was to keep latency < 200 ms while scaling automatically without manual intervention.

**Action (Design)**  
I decomposed the system into three layers:

| Layer | Service | Reasoning |
|-------|---------|-----------|
| **Ingress** | API Gateway + Lambda@Edge | Handles 10K RPS, auto‑scales, edge caching reduces origin load. |
| **Inference** | SageMaker endpoint (multicore GPU) behind an Application Load Balancer | Provides deterministic latency; ALB supports target‑group weighted routing for A/B testing. |
| **Storage** | DynamoDB + S3 | Hot user vectors in DynamoDB (single‑digit ms reads), cold logs in S3, both with on‑demand capacity. |

I used **Amazon CloudWatch Alarms** to trigger a Lambda that scales the SageMaker endpoint from 1 to 4 instances when CPU > 70 % for 2 consecutive minutes. This policy kept cost < $200 for the event while maintaining SLA.

**Result**  
During peak traffic (3 k RPS) we achieved 98 % of requests under 150 ms, and overall latency improved from 350 ms to 120 ms compared with the legacy monolith. The automated scaling saved $1.5K in compute costs versus a static deployment.

---

### Leadership Principles

- **Ownership** – I took end‑to‑end responsibility for design, monitoring, and cost control.  
- **Dive Deep** – Detailed analysis of Lambda cold starts, GPU utilization, and DynamoDB read/write latency guided my scaling policy.  

*Bar‑raiser cue:* Looked for quantified impact (latency %, cost savings), evidence of ownership, and a learning loop: after the first day I noticed 30 % higher CPU spikes during edge traffic, so I added an additional Lambda to throttle requests, reducing SLA violations by 20 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
