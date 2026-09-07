---
qid: ing_d891a48398__aws__local
question: 'Explain: Physical Layer — Top Network Security Cheatsheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 559
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:05-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a project to build an automated threat‑detection system for the *Physical Layer* of our corporate network—capturing anomalies in packet headers, frame rates and link‑level metrics. The goal was to reduce manual incident‑response time by 70 % while keeping false positives below 3 %.

**Action & Design**  
I first scoped the data sources: **VPC Traffic Mirroring** streams, **AWS IoT Greengrass** edge devices on switches, and legacy syslog feeds. I built a real‑time ingestion pipeline with **Amazon Kinesis Data Streams**, processed events in **Kinesis Data Analytics** (SQL + ML), and trained a binary classifier in **SageMaker** using a labeled dataset of 2 M packets. The model was deployed as an endpoint behind **AWS Lambda** and **API Gateway**, scoring each packet within 50 ms. For long‑term trends I stored feature vectors in **Amazon Timestream** and visualized alerts via **CloudWatch Dashboards**.

I leveraged **AWS GuardDuty** for baseline threat intelligence, feeding its findings into our ML model as a contextual feature—this lowered false positives by 1.5 % over the baseline. The system achieved an **87 % detection rate** with a **0.8 % false‑positive rate**, outperforming the legacy rule‑based system (68 % detection, 4.2 % FP).

**Result & Learnings**  
The new pipeline cut incident triage time from 3 h to 40 min, saving ~$120k annually in operational costs. I practiced **Ownership** by iterating on model feedback loops and *Dive Deep* into packet‑level metrics that initially seemed noisy but proved critical for detection accuracy.

---

> **Bar‑raiser notes:**  
> • Demonstrated ownership: end‑to‑end pipeline from data capture to alerting.  
> • Dive deep: leveraged raw link‑layer metrics, not just high‑level logs.  
> • Quantified impact: 87 % detection, 0.8 % FP, $120k cost savings.  
> • Learned from failure: initial model overfit; resolved by adding GuardDuty context and Timestream trend analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
