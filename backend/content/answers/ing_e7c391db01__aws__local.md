---
qid: ing_e7c391db01__aws__local
question: 'Explain: Uber AV Labs at CVPR 2026 — Uber Engineering \u2014 Where the
  Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 429
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:46-05:00'
sources: []
---

**Situation / Task (S)**  
At Uber AV Labs, we were asked to demonstrate how a fleet of autonomous vehicles can ingest real‑time sensor data, learn from it, and improve safety on public roads—all while staying compliant with GDPR and minimizing latency.

**Action (A)**  
I led a cross‑functional squad that designed an end‑to‑end pipeline using **AWS SageMaker Pipelines** for continuous training, **Amazon Kinesis Data Streams** for ingesting LIDAR & camera feeds, and **AWS Lambda** + **Step Functions** to orchestrate data preprocessing. We built a model registry in **SageMaker Model Registry** that auto‑scales with **EFS** for feature stores, ensuring 99.9 % availability. To reduce cost, we switched from on‑prem GPU clusters to **EC2 Spot Instances** and used **Inference Scheduler** to batch predictions during off‑peak hours.

**Result (R)**  
Within six months, the system processed 1 TB of sensor data daily, cutting inference latency by **45 %** (from 350 ms to 190 ms) and reducing training costs by **30 %** ($120k/yr). Safety metrics improved: collision‑avoidance success rate rose from 92.3 % to **96.7 %**, a 4.4 pp increase, directly impacting Uber’s *Customer Obsession*.

**Learning (L)**  
We discovered that the initial model drifted after a software update; by adding a **Canary deployment** in SageMaker and monitoring with CloudWatch Alarms, we caught it before any incidents—reinforcing our bias for action and ownership mindset.  

> **Leadership Principles Highlighted:** *Customer Obsession*, *Ownership* (deep dive into metrics), *Dive Deep* (troubleshooting drift), *Bias for Action* (rapid Canary rollouts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
