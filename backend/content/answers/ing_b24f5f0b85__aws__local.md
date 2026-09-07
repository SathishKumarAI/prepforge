---
qid: ing_b24f5f0b85__aws__local
question: 'Explain: Navigation Service — Design Google Maps'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 452
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:59-05:00'
sources: []
---

**Situation & Task** – I led a team that built a real‑time navigation service for a ride‑hailing app. The goal was to reduce passenger wait times by 20 % and improve route accuracy over the existing legacy system.

**Action (Design)**  
* **Data ingestion** – Use Kinesis Data Streams to stream GPS telemetry from drivers; Lambda functions clean and enrich data with real‑time traffic feeds from a third‑party API.  
* **Storage & processing** – Store raw traces in S3 for audit, and use DynamoDB Global Tables for low‑latency lookup of the current vehicle position.  
* **Routing engine** – Deploy a stateless microservice on ECS Fargate that queries a pre‑computed road graph stored in Neptune (graph DB) and runs A* with dynamic edge weights derived from traffic velocity.  
* **Scalability & cost** – Autoscaling on CPU/latency, spot instances for batch map updates; overall 40 % lower compute spend vs. EC2‑based monolith.  
* **Reliability** – Multi‑AZ deployments, Route53 health checks, and a fallback to the legacy route engine if latency >200 ms.

**Result** – Within six months we cut average pickup time from 6.8 min to 5.4 min (≈20 % reduction) and increased driver utilization by 12 %. The service handled 1M concurrent requests during peak hours with <99.9 % availability, keeping the cost below budget.

**Leadership Principles Highlighted**  
* **Customer Obsession & Deliver Results** – Measured impact on passenger wait times.  
* **Dive Deep & Ownership** – Built end‑to‑end pipeline, tuned latency, and owned post‑launch incidents.  

Bar‑raisers look for quantified outcomes, depth of design choices, and ownership of both success and failure (we iterated 3 times on traffic weighting after a spike in false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
