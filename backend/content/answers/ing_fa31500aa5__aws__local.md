---
qid: ing_fa31500aa5__aws__local
question: 'Explain: Launch — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:02-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: At my previous company we needed to launch a production‑grade ML inference service that could scale from a few hundred requests/day to millions within weeks.  
*Task*: Own the end‑to‑end pipeline—data ingestion, model training, deployment, and monitoring—while keeping latency < 50 ms for 95% of traffic.  
*Action*: I wrote a Terraform repo that spun up an **Amazon SageMaker Endpoint** behind an **Application Load Balancer** with target groups per region. To guarantee high availability I enabled **Multi‑AZ deployments** and used **SageMaker Multi‑Model Endpoints** to host 20 models in a single container, cutting GPU cost by ~60%. For cold‑start mitigation I pre-warmed endpoints via **Scheduled Lambda** that pinged the endpoint every 5 min.  
*Result*: The system handled 3 M RPS with 99.9% uptime; inference latency dropped from 200 ms to 45 ms. Cost per prediction fell from $0.10 to $0.04, saving ~$1.2 M annually.  

**Technical Design Highlights**  
| Requirement | AWS Service | Why |
|-------------|------------|-----|
| Low‑latency inference | SageMaker Real‑Time Endpoint (Multi‑Model) | Auto‑scales GPU instances; 99% concurrency |
| High availability | ALB + Multi‑AZ | Seamless failover, health checks |
| Cost control | Spot Instances + Model caching | 70% cheaper than on‑demand |
| Observability | CloudWatch Metrics + X-Ray | Root cause analysis in < 2 min |

**Bar‑raiser cues**  
- **Ownership**: Terraform repo with CI/CD pipeline shows full responsibility.  
- **Dive Deep**: Quantified latency, cost metrics, and architectural trade‑offs (Spot vs On‑Demand).  
- **Learned from failure**: Early prototype hit 200 ms; I debugged with X-Ray to discover container spin‑up overhead, leading to pre‑warming strategy.  

*Leadership Principles*: **Ownership**, **Customer Obsession**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
