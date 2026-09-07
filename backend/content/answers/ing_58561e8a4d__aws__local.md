---
qid: ing_58561e8a4d__aws__local
question: 'Explain: The Two Phases of Inference — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 509
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:12-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team that had to migrate an on‑prem inference pipeline for a recommendation engine into the cloud while meeting a 10 % latency reduction target and cutting operational cost by 30 %. The core challenge was understanding and optimising **the two phases of inference**—*pre‑processing* (model loading & feature extraction) and *prediction execution* (forward pass & post‑processing)—so we could architect an end‑to‑end solution.

**Action**  
1. **Dive Deep into Metrics** – Collected per‑phase latency, CPU/GPU utilisation, and cache hit ratios across 50+ inference requests per minute.  
2. **Design & AWS Services**  
   * **Pre‑processing**: Deployed an **Amazon SageMaker Edge Device** with a lightweight TensorRT container to load the model once, keeping it resident in memory; used **AWS Lambda@Edge** for feature extraction and caching via **Amazon CloudFront**.  
   * **Prediction Execution**: Ran inference on **Amazon SageMaker Runtime** using GPU‑enabled endpoints (p3.2xlarge) behind an **Application Load Balancer** with target group health checks, auto‑scaling based on CPU > 70 %.  
3. **Bias for Action & Cost Optimisation** – Implemented a *warm‑start* strategy: pre‑warmed endpoints during off‑peak hours and leveraged spot instances for 60 % of the load.  

**Result**  
- Latency dropped from 120 ms to **87 ms** (27 % improvement).  
- Operational cost fell by **32 %**, saving $45k annually.  
- Model warm‑start reduced cold‑start occurrences by **92 %**.

**Learning & Ownership**  
I documented a *best‑practice playbook* that now serves as the company’s inference baseline, and I presented a post‑mortem on one failed scaling event where mis‑configured target group health checks caused a 5 min outage—prompting stricter guardrails.  

> **Leadership Principles Anchored**: Customer Obsession (latency), Ownership (post‑mortem & playbook), Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
