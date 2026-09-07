---
qid: ing_4762a319d7__aws__local
question: 'Explain: Scaling Mobile Chaos Testing with AI-Driven Test Execution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 419
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:13-05:00'
sources: []
---

**Situation** – At my previous role we shipped a mobile app that hit 5 M MAUs. Chaos testing was manual and ran only on CI, so we missed production‑scale failures (≈ 12 % of crash reports were reproducible only under load).  
**Task** – Build an AI‑driven chaos framework that scales to thousands of devices in parallel while keeping cost < $2k/month.  

**Action** –  
1️⃣ **Data‑driven test selection**: Trained a reinforcement‑learning agent on historical crash logs (≈ 200 k events) using Amazon SageMaker, so it prioritises high‑impact feature paths.  
2️⃣ **Infrastructure**: Deployed an autoscaling fleet of EC2 t3.medium instances behind Application Load Balancer; each instance runs Appium + Detox in Docker containers.  
3️⃣ **Chaos injection** – Leveraged AWS Fault Injection Simulator to spike network latency, CPU throttling, and background‑process termination on random nodes per run.  
4️⃣ **Observability** – Integrated CloudWatch Logs, X-Ray traces, and SageMaker Experiments for real‑time anomaly detection; failures are auto‑tagged with root cause via Amazon Comprehend.  

**Result** – In production we cut crash reproduction time from 2 days to < 3 hrs, detected 27 % more critical bugs pre‑release, and reduced test infra spend by 35 % through spot‑instance usage.  
*Leadership Principles*: **Customer Obsession** (faster, safer app for users) & **Ownership** (end‑to‑end pipeline). *Bar‑raiser notes*: depth of AI integration, quantified impact on crash detection, learning loop from false positives, and cost trade‑offs with spot vs. On‑Demand instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
