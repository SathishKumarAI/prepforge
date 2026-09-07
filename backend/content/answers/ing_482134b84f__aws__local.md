---
qid: ing_482134b84f__aws__local
question: 'Explain: have thousands of them many thousands of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 454
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:35-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a data‑science team that had to deploy *over 3 000* predictive models for real‑time pricing across 12 regions. Each model needed to run at < 200 ms latency, scale to millions of requests per day, and be retrained every 24 h without downtime.

**Action**  
I chose **Amazon SageMaker Pipelines** for CI/CD, **SageMaker Model Registry** to version models, and **AWS Lambda + API Gateway** for inference. To meet the latency target I containerised each model with **TensorFlow Serving** in an **ECS Fargate** cluster behind a **ALB** that auto‑scales based on CPU usage (95 % threshold).  

For training I used **SageMaker Neo** to compile models to native code for the Fargate CPUs, cutting inference cost by 35 %. We also implemented **Feature Store** so each model pulls its own feature vectors from a single source of truth, eliminating redundant ETL jobs.  

**Result**  
Latency dropped from 450 ms to 180 ms (40 % improvement). Daily cost fell from $12k to $7.2k (40 % savings) while throughput increased by 120 %. The deployment pipeline now supports “zero‑downtime” updates in under 10 s, allowing us to roll out new pricing rules within the same business day.

**Leadership Principles Highlighted**  
- **Ownership** – I took end‑to‑end responsibility for the entire ML lifecycle.  
- **Dive Deep & Deliver Results** – I dissected performance bottlenecks, chose right services, and quantified gains in latency and cost.  

**Bar‑raiser Takeaway**  
They’ll look for concrete ownership (I built the pipeline), depth of technical design (service choices, scaling logic), measurable impact (latency/cost metrics), and evidence that failures were learned from (e.g., initial 450 ms latency was traced to unoptimised inference containers).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
