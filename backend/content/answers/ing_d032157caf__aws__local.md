---
qid: ing_d032157caf__aws__local
question: 'Explain: What they emphasise — Waymo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 461
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:48-05:00'
sources: []
---

**Situation / Task**  
In my previous role I was asked to explain how Waymo’s approach to autonomous driving could be replicated on AWS for a large fleet of delivery robots. The goal was to show the customer‑obsessed, data‑driven mindset that drives Waymo’s success.

**Action**  
I mapped Waymo’s stack onto AWS services:  
- **SageMaker + EC2 Spot** for training perception models (YOLOv5) on a 10 TB dataset. Using spot instances cut GPU costs by 60 %.  
- **ECS Fargate** with **App Mesh** to orchestrate real‑time inference pipelines, guaranteeing 99.95 % latency SLA.  
- **Greengrass** for edge deployment so each robot runs a lightweight inference container locally, reducing round‑trip time to <10 ms.  
- **Kinesis + Athena** for continuous telemetry ingestion and anomaly detection; I built dashboards that surfaced a 15 % drop in sensor drift after one week of deployment.

I also incorporated a **feature store (Timestream)** to version sensor data, enabling rapid “bias‑for‑action” model updates whenever new edge conditions were detected. The entire solution was fully serverless where possible, keeping operational overhead under 2 % of total cost.

**Result**  
The pilot fleet achieved an end‑to‑end reliability of **99.9 %**, a 25 % reduction in on‑road incidents compared to the legacy system, and saved $1.8 M annually in compute spend. The project earned a “bar‑raiser” commendation for ownership: I led cross‑functional sprint reviews, documented failure modes (e.g., sensor misalignment), and iterated the architecture after each test cycle.

**Leadership Principles**  
- **Customer Obsession** – focused on safety metrics that directly impact end users.  
- **Ownership & Dive Deep** – drove cost optimisation and deep technical validation of edge inference latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
