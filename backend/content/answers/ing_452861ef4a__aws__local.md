---
qid: ing_452861ef4a__aws__local
question: 'Explain: High Availability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 442
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:18-05:00'
sources: []
---

**High‑Availability ML Pipeline – Quick‑Start Cheat Sheet**

*Leadership Principles:* **Ownership**, **Dive Deep**  
*Scenario (STAR):* While launching a fraud‑detection model for a payment gateway, I owned the entire deployment pipeline. The system had to stay online 99.999% during peak holiday traffic (≈ 10M transactions/day). I scoped requirements: low latency (< 50 ms inference), zero single points of failure, and automated rollback.

*Design:*  
1. **Data ingestion** – Kinesis Data Streams → Lambda → S3 “raw” bucket (durable).  
2. **Feature store** – DynamoDB Global Tables (multi‑AZ) + EventBridge for change data capture; guarantees 99.99% availability.  
3. **Training & hyper‑parameter tuning** – SageMaker Pipelines on Spot instances with an on‑prem GPU fallback, reducing cost by 35%.  
4. **Model hosting** – SageMaker Endpoint using Multi‑Model Endpoints behind an Application Load Balancer (ALB) with health checks; autoscaling across AZs ensures zero latency spikes.  
5. **Observability** – CloudWatch metrics + X-Ray traces; alerting on > 1% error rate triggers automatic failover to a pre‑trained “fallback” model.

*Result:* After deployment, we hit 99.9997% uptime during the holiday surge and reduced inference cost by 28%. The system also cut mean time to recovery (MTTR) from 4 h to 15 min through automated health checks.

**Bar‑raiser cues:**  
- Demonstrated full ownership of requirements → **Ownership**.  
- Deep dive into AWS services & trade‑offs → **Dive Deep**.  
- Quantified impact on uptime and cost → **Data‑driven Result**.  
- Learned from a prior outage (single‑AZ Lambda) and built multi‑AZ resilience → continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
